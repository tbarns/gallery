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
    enum: ['8x10', '11x14'], // Add size options for filtering
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Artwork model
const Artwork = mongoose.model('Artwork', ArtworkSchema);
module.exports = Artwork;
