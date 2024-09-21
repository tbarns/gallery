import React from 'react';
import { Link } from 'react-router-dom';

const PricingGuide = () => {
  return (
    <div className="container">
      <nav className="navbar is-spaced">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Gallery</Link>
          <Link to="/pricing" className="navbar-item">Pricing Guide</Link>
        </div>
      </nav>

      <h1 className="title has-text-centered">Pricing Guide</h1>
      <p className="content has-text-centered">
        <strong>8x10 inches:</strong> $500 <br />
        <strong>11x14 inches:</strong> $850 <br />
        <p>Pricing includes frame of your choice -- black or white --</p>
        <p>Shipping is NOT included in pricing</p>
      </p>
    </div>
  );
};

export default PricingGuide;
