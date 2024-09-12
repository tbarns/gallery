const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const path = require('path');  // For serving static files
require('dotenv').config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer configuration for file uploads
const storage = multer.memoryStorage(); // Store files in memory temporarily
const upload = multer({ storage });

// Express app setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Define Artwork Schema and Model
const ArtworkSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
});

const Artwork = mongoose.model('Artwork', ArtworkSchema);

// Get all artworks (Gallery)
app.get('/api/artworks', (req, res) => {
  Artwork.find()
    .then((artworks) => res.json(artworks))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Upload a new artwork (image and title)
app.post('/api/artworks', upload.single('file'), (req, res) => {
  const { title } = req.body;

  // Upload image to Cloudinary
  cloudinary.uploader.upload_stream({ resource_type: 'image', folder: 'art-gallery' }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
    }

    // Save new artwork to MongoDB
    const newArtwork = new Artwork({
      title,
      imageUrl: result.secure_url,  // Cloudinary returns the image URL in the result
    });

    newArtwork.save()
      .then(() => res.json('Artwork added!'))
      .catch((err) => res.status(400).json('Error: ' + err));
  }).end(req.file.buffer); // Pass the file buffer from Multer to Cloudinary
});

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes by serving the React app's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
