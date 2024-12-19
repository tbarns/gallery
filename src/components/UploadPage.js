import React, { useState } from 'react';
import axios from 'axios';
import './UploadPage.css';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [size, setSize] = useState('8x10'); // Default to 8x10
  const [customSize, setCustomSize] = useState(''); // For custom size input
  const [uploadStatus, setUploadStatus] = useState(null); // New state for feedback

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSizeChange = (e) => {
    setSize(e.target.value);
    if (e.target.value !== 'custom') {
      setCustomSize(''); // Clear custom size if a predefined size is selected
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    if (size === 'custom') {
      formData.append('size', 'custom'); // Set size to 'custom' for custom artworks
      formData.append('customSize', customSize); // Use the custom size input
    } else {
      formData.append('size', size); // Use predefined size
    }

    try {
      const res = await axios.post('/api/artworks', formData);
      setUploadStatus('success');
      console.log('File uploaded and saved successfully:', res.data);
    } catch (error) {
      setUploadStatus('error');
      console.error('Error uploading file:', error.response || error.message || error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <label htmlFor="file">Choose a file:</label>
          <input type="file" id="file" onChange={onFileChange} />
        </div>

        <div className="size-options">
          <label>Select size:</label>
          <div>
            <input
              type="radio"
              id="size-medium"
              name="size"
              value="8x10"
              checked={size === '8x10'}
              onChange={onSizeChange}
            />
            <label htmlFor="size-medium">Medium (8x10 inches)</label>
          </div>
          <div>
            <input
              type="radio"
              id="size-large"
              name="size"
              value="11x14"
              checked={size === '11x14'}
              onChange={onSizeChange}
            />
            <label htmlFor="size-large">Large (11x14 inches)</label>
          </div>
          <div>
            <input
              type="radio"
              id="size-custom"
              name="size"
              value="custom"
              checked={size === 'custom'}
              onChange={onSizeChange}
            />
            <label htmlFor="size-custom">Custom</label>

            {/* Show custom size input when "Custom" is selected */}
            {size === 'custom' && (
              <div>
                <label htmlFor="customSize">Enter custom size:</label>
                <input
                  type="text"
                  id="customSize"
                  placeholder="e.g., 60x120 inches"
                  value={customSize}
                  onChange={(e) => setCustomSize(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>

        <button className="upload-button" type="submit">Upload</button>
      </form>

      {/* Upload feedback */}
      {uploadStatus === 'success' && <p className="success-message">Upload successful!</p>}
      {uploadStatus === 'error' && <p className="error-message">Upload failed. Please try again.</p>}
    </div>
  );
};

export default UploadPage;
