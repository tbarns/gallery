import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Your custom styles

const HomePage = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar is-spaced">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/pastel-portraits" className="navbar-item">Pastel Portraits</Link>
          <Link to="/pricing" className="navbar-item">Pricing Guide</Link>
          <Link to="/about" className="navbar-item">About Me</Link>
          <Link to="/marge" className="navbar-item">Marge Series</Link>
        </div>
      </nav>

      {/* Landing Page Content */}
      <h1 className="title has-text-centered">Welcome to Timothy Barnaby's Art</h1>
      <h2 className="subtitle has-text-centered">Exploring Queer Intimacy, Vulnerability, and the Beauty of Daily Life</h2>

      <div className="landing-text has-text-left">
        <p>
          Art has always been my tool for navigating the world and connecting with humanity. My work dives into themes of queer intimacy, vulnerability, and the raw beauty of daily life. Using mediums like pastel, ceramics, and mixed media, I explore the intersections of surrealism, craft, and personal reflection.
        </p>
        <p>
          Shaped by my experiences as a figure model, mentor, and self-taught artist, my process often balances observation and participation—blurring the boundaries between subject and creator. From reimagined historical portraits to intimate moments of stillness and humor, my art invites connection, stirs emotion, and celebrates the messy, beautiful truth of being human.
        </p>
        <p>
          I’m excited to share this space with you. Take a look around, and discover the stories and energy behind the work.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
