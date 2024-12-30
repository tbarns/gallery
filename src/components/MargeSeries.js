import React, { useState } from 'react';
import './MargeSeries.css'; // For custom styling
import { Link } from 'react-router-dom'; // For navigation

const MargeSeries = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const images = [
    { src: '/margeseries/tim_and_e33.jpg', title: 'Marge 1' },
    { src: '/margeseries/DBD1.jpg', title: 'Marge 2' },
    { src: '/margeseries/tim_and_e44.jpg', title: 'Marge 3' },
    { src: '/margeseries/tim_and_e117.jpg', title: 'Marge 4' },
    { src: '/margeseries/tim_and_e121.jpg', title: 'Marge 5' },
    { src: '/margeseries/tim_and_e123.jpg', title: 'Marge 6' },
    { src: '/margeseries/tim_and_e125.jpg', title: 'Marge 7' },
    { src: '/margeseries/tim_and_e133.jpg', title: 'Marge 8' },
    { src: '/margeseries/tim_and_e135.jpg', title: 'Marge 9' },
  ];

  // Open modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="marge-series-container">
      <nav className="navbar is-spaced">
        <div className="navbar-brand">
             <Link to="/" className="navbar-item">Home</Link>
          <Link to="/" className="navbar-item">Portrait Gallery</Link>
          <Link to="/pricing" className="navbar-item">Pricing Guide</Link>
          <Link to="/about" className="navbar-item">About Me</Link>
          <Link to="/marge" className="navbar-item">Marge Series</Link>
        </div>
      </nav>

      <h1 className="title has-text-centered">Marge Series</h1>
      <h2 className="subtitle has-text-centered">The Icon</h2>
      <div className="margeText has-text-left">
        <p>
          Marge is a character born from a love of contradiction. She is a queer, liberated figure who defies traditional beauty standards. Her unapologetic wrinkles, casual charm, and vibrant energy embrace naturalness in a world fixated on perfection.
          <br />
          Through digital artwork, Marge becomes a celebration of self-expression and freedom. Each piece highlights her joy, humor, and authenticity, challenging societal norms and celebrating individuality. Marge’s character reminds us of the power in embracing imperfection and the beauty found in the unexpected.
        </p>
      </div>

      <div className="marge-grid">
        {images.map((image, index) => (
          <div key={index} className="marge-item" onClick={() => openModal(image)}>
            <img src={image.src} alt={image.title} className="marge-image" />
            <p className="marge-title">{image.title}</p>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
            <p className="modal-title">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MargeSeries;
