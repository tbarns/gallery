import axios from 'axios';
import React, { useState } from 'react';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file); // Append the file
    formData.append('title', title); // Append the title

    try {
      const res = await axios.post('/api/artworks', formData);
      console.log('File uploaded and saved successfully:', res.data);
    } catch (error) {
      console.error('Error uploading file:', error.response || error.message || error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input type="file" onChange={onFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadPage;
