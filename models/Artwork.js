const mongoose = require('mongoose');

// Define the Artwork schema
const ArtworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,  // The secure URL from Cloudinary
  },
  public_id: {
    type: String,
    required: true,  // Cloudinary's unique public ID
  },
  size: {
    type: String,
    required: true, // Allow custom sizes as strings
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Artwork = mongoose.model('Artwork', ArtworkSchema);
module.exports = Artwork;
