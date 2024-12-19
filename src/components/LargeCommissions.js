import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LargeCommissions.css'; // Create this CSS file to style the page

const LargeCommissions = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Fetch artworks from the /commissions API
    axios.get('/api/commissions')
      .then((response) => setArtworks(response.data))
      .catch((error) => console.error('Error fetching large commissions:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="title has-text-centered">Large-Scale Commissions</h1>
      <h2 className="subtitle has-text-centered">Featuring the Miramar Beach Triptych</h2>

      <div className="columns is-multiline">
        {artworks.length > 0 ? (
          artworks.map((art) => (
            <div key={art._id} className="column is-one-third">
              <div className="box">
                <img className="commission-image" src={art.imageUrl} alt={art.title} />
                <p>{art.title}</p>
                {art.size === 'custom' ? (
                  <p>{art.customSize} inches</p>  // Display custom size dimensions
                ) : (
                  <p>{art.size} inches</p>  // Display predefined size dimensions
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No large commissions available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default LargeCommissions;
