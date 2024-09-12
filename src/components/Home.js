import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('/api/artworks')
      .then((response) => setArtworks(response.data))
      .catch((error) => console.error('Error fetching artworks:', error));
  }, []);

  return (
    <div>
      <h1>Art Gallery</h1>
      <div className="gallery">
        {artworks.map((art) => (
          <div key={art._id}>
            <img src={art.imageUrl} alt={art.title} />
            <p>{art.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
