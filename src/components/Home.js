import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick'; // Import react-slick for carousel
import { Link } from 'react-router-dom'; // For navigation
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
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerPadding: '0',
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar is-spaced">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Gallery</Link>
          <Link to="/pricing" className="navbar-item">Pricing Guide</Link>
        </div>
      </nav>

      <h1 className="title has-text-centered">Portraits by Timothy Barnaby</h1>
      <h2 className="subtitle has-text-centered">All works are pastel paintings on pumice board</h2>

      {/* Carousel for the gallery */}
      <div className="carousel-container">
        <Slider {...settings}>
          {artworks.map((art) => (
            <div key={art._id} className="carousel-item">
              <img className="carousel-image" src={art.imageUrl} alt={art.title} />
              <p className="carousel-title">{art.title}</p>
              <p className="carousel-size">{art.size} inches</p> {/* Display artwork size */}
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
              <p>{art.size} inches</p> {/* Display artwork size */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
