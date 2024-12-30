import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './PastelPortraits.css'; // Create this file for styling
import { Link } from 'react-router-dom';

const PastelPortraits = () => {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerPadding: '0',
  };

  return (
    <div className="container">
            <nav className="navbar is-spaced">
                <div className="navbar-brand">
                  <Link to="/" className="navbar-item">Home</Link>
                  <Link to="/pastel-portraits" className="navbar-item">Pastel Portraits</Link>
                  <Link to="/pricing" className="navbar-item">Pricing Guide</Link>
                  <Link to="/about" className="navbar-item">About Me</Link>
                  <Link to="/marge" className="navbar-item">Marge Series</Link>
                </div>
              </nav>
      <h1 className="title has-text-centered">Pastel Portraits</h1>
      <h2 className="subtitle has-text-centered">Exploring Humanity Through Pastel</h2>

      <div className='pastelGalleryText'>
        <p>
          This series of pastel portraits blends traditional techniques with a modern perspective, inspired by my time as a figure model for master artists. Each piece begins with a custom-prepared surface, using gesso infused with marble dust to create the perfect texture for layering vibrant pastels. The resulting surfaces grip the pigments, creating luminous layers and rich depth.
        </p>
        <p>
          The series draws from Vincent van Gogh’s portraits of the working class, reimagining their spirit in today’s context. Saturated colors and dynamic compositions honor the resilience and beauty of everyday lives, offering a commentary on the challenges faced by communities under capitalism. These works seek to connect past and present through the shared humanity of their subjects. Along with the occasional dog because, damn it, dogs are the best.
        </p>
      </div>

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

      {/* Static gallery */}
      <div className="columns is-multiline">
        {artworks.map((art) => (
          <div key={art._id} className="column is-one-quarter">
            <div className="box">
              <img src={art.imageUrl} alt={art.title} />
              <p>{art.title}</p>
              <p>{art.size.replace(/['"]+/g, '')} inches</p>
              <a
                href={`mailto:tbarnaby1@gmail.com?subject=Inquiring%20about%20${encodeURIComponent(art.title)}&body=Hi,%20I%27m%20interested%20in%20purchasing%20the%20artwork%20titled%20%22${encodeURIComponent(art.title)}%22.%20Please%20let%20me%20know%20the%20details.`}
                className="button is-primary"
                style={{ marginTop: '10px' }}
              >
                Inquire
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastelPortraits;
