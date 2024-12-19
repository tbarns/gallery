import React from 'react';
import './MargeSeries.css'; // For custom styling

const MargeSeries = () => {
  const images = [
    { src: '/margeseries/IMG_20191201_151400_370.jpg', title: 'Marge 0' },
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

  return (
    <div className="marge-series-container">
      <h1 className="title has-text-centered">Marge Series</h1>
      <h2 className="subtitle has-text-centered">A digital exploration of Self Portraiture and Identity</h2>
      <div className="marge-grid">
        {images.map((image, index) => (
          <div key={index} className="marge-item">
            <img src={image.src} alt={image.title} className="marge-image" />
            <p className="marge-title">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MargeSeries;
