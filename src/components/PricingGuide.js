import React from 'react';
import { Link } from 'react-router-dom';

const PricingGuide = () => {
  return (
    <div className="container">
          {/* Navbar */}
          <nav className="navbar is-spaced">
            <div className="navbar-brand">
                 <Link to="/" className="navbar-item has-text-black">Home</Link>
              <Link to="/" className="navbar-item has-text-black">Portrait Gallery</Link>
              <Link to="/pricing" className="navbar-item has-text-black">Pricing Guide</Link>
              <Link to="/about" className="navbar-item has-text-black">About Me</Link>
              {/* <Link to="/commissions" className="navbar-item has-text-black">Large-Scale Commissions</Link> */}
              <Link to="/marge" className="navbar-item has-text-black">Marge Series</Link>
            </div>
          </nav>

      <h1 className="title has-text-centered">Pricing Guide for Pastel Portraits</h1>
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
