const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const path = require('path');
const Artwork = require('./models/Artwork'); // Import the model
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
  .catch((err) => console.error('MongoDB connection error:', err));

// Get all artworks (Gallery)
app.get('/api/artworks', (req, res) => {
  Artwork.find()
    .then((artworks) => {
   
      res.json(artworks);
    })
    .catch((err) => {
      console.error('Error retrieving artworks:', err);
      res.status(400).json('Error: ' + err);
    });
});

// Upload a new artwork (image, title, and size)
app.post('/api/artworks', upload.single('file'), (req, res) => {
  const { title, size } = req.body;

 
  if (!req.file) {
    console.error('No file uploaded.');
    return res.status(400).json({ error: 'No file uploaded' });
  }

  console.log('Starting upload to Cloudinary...');

  // Upload image to Cloudinary
  cloudinary.uploader.upload_stream({ resource_type: 'image', folder: 'art-gallery' }, (err, result) => {
    if (err) {
      console.error('Error uploading to Cloudinary:', err);
      return res.status(500).json({ error: 'Failed to upload image to Cloudinary', details: err.message });
    }

    console.log('Cloudinary upload successful. Full response:', result);

    // Save new artwork to MongoDB with size
    const newArtwork = new Artwork({
      title,
      size, // Include size in the saved artwork
      imageUrl: result.secure_url,  // Save the secure URL returned by Cloudinary
      public_id: result.public_id,  // Save the public_id returned by Cloudinary
    });

    newArtwork.save()
      .then(() => {
        console.log('Artwork saved to MongoDB:', newArtwork);
        res.json({
          message: 'Artwork added!',
          artwork: newArtwork,  // Return the saved artwork object in the response
        });
      })
      .catch((err) => {
        console.error('Error saving artwork to MongoDB:', err);
        res.status(500).json({ error: 'Failed to save artwork to MongoDB', details: err.message });
      });
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
