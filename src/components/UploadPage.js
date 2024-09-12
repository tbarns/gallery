import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_cloudinary_preset');

    const cloudinaryResponse = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData);
    
    const newArtwork = {
      title,
      imageUrl: cloudinaryResponse.data.secure_url,
    };

    axios.post('/api/artworks', newArtwork)
      .then(() => alert('Artwork uploaded successfully'))
      .catch((error) => console.error('Error uploading artwork:', error));
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        accept="image/*"
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadPage;
