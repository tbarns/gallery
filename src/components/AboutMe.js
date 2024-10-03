import React from 'react';
import './AboutMe.css'; // Optional: For any custom styles
import { Link } from 'react-router-dom'; // For navigation

const AboutMe = () => {
  return (
    <div className="container">
   {/* Navbar */}
   <nav className="navbar is-spaced">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Gallery</Link>
          <Link to="/pricing" className="navbar-item">Pricing Guide</Link>
          <Link to="/about" className="navbar-item">About Me</Link>  
        </div>
      </nav>

      <h1 className="title has-text-centered has-text-warning">About Timothy Barnaby</h1>
      
      {/* Image section */}
      <div className="about-image-container">
        <img 
          src="Dorian&Timothy_Seattle_Rovecoast-282~2.jpg" 
          alt="Timothy Barnaby"
          className="about-image"
        />
      </div>

      {/* Bio Section */}
      <div className="content has-text-left">
        <p>
          Born in 1988 to American parents on a military base in Massachusetts, Timothy Barnaby, the youngest of four children, spent much of their childhood in solitude, creating and dreaming. These solitary moments of their childhood became the perfect training ground for reflection, allowing them to sit with their work, question it, and explore its deeper meaning.
        </p>
        <p>
          A self-trained artist, Timothy first fell in love with ceramics as a teenager. Later, they found a home as an art model for the Gage Academy of Art. This experience fueled their drive to explore the human figure more broadly. Timothy’s passion for self-portraiture and self-referential imagery emerged from a desire to evoke the raw and accessible human experience.
        </p>
        <p>
          During their time as a model at the Gage Academy, Timothy gained invaluable insights into the expression of light on the human form by sitting in on masterclasses. Techniques traditionally locked behind paywalls and taught only by masters became a part of their daily life, allowing them to internalize and apply these lessons in their work.
        </p>
        <p>
          A trip to France further deepened Timothy’s passion for portraiture, as they were profoundly moved by the works of Cézanne and Monet.
        </p>
        <p>
          While no medium is off-limits for Timothy, they are most inspired when working with clay and pastels. However, their curiosity and love for innovation drive them to experiment with unconventional materials and tools, pushing boundaries and allowing the creative process to guide them to unexpected places.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
