import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick'; // Import react-slick for carousel
import './Home.css'; // Your custom styles

const HomePage = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('/api/artworks')
      .then((response) => setArtworks(response.data))
      .catch((error) => console.error('Error fetching artworks:', error));
  }, []);

  // Slick carousel settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerPadding: '0',
  };

  return (
    <div className="container">
      <h1 className="title has-text-centered">Art Gallery</h1>

      {/* Carousel for the gallery */}
      <div className="carousel-container">
        <Slider {...settings}>
          {artworks.map((art) => (
            <div key={art._id} className="carousel-item">
              <img className="carousel-image" src={art.imageUrl} alt={art.title} />
              <p className="carousel-title">{art.title}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Filter section */}
      <div className="filter-container">
        <input className="input" type="text" placeholder="Filter by title..." />
      </div>

      {/* Static gallery */}
      <div className="columns is-multiline">
        {artworks.map((art) => (
          <div key={art._id} className="column is-one-quarter">
            <div className="box">
              <img src={art.imageUrl} alt={art.title} />
              <p>{art.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
