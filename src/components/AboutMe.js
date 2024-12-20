import React from 'react';
import './AboutMe.css'; // Optional: For any custom styles
import { Link } from 'react-router-dom'; // For navigation

const AboutMe = () => {
  return (
   <div className="container">
         {/* Navbar */}
         <nav className="navbar is-spaced">
           <div className="navbar-brand">
             <Link to="/" className="navbar-item">Portrait Gallery</Link>
             <Link to="/pricing" className="navbar-item">Pricing Guide</Link>
             <Link to="/about" className="navbar-item">About Me</Link>
             {/* <Link to="/commissions" className="navbar-item">Large-Scale Commissions</Link> */}
             <Link to="/marge" className="navbar-item">Marge Series</Link>
           </div>
         </nav>

      <h1 className="title has-text-centered has-text-warning">Meet the Artist: Timothy Barnaby</h1>
      
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
          Born in 1988 on a military base in Massachusetts, Timothy Barnaby grew up as the youngest of four children in a transient military family. Much of their childhood was spent in solitude, crafting stories, creating art, and dreaming. These quiet, introspective moments became fertile ground for their artistic practice, fostering a deep sense of reflection and a habit of questioning and exploring the deeper meanings within their work.
        </p>
        <p>
          A self-taught artist, Timothy first fell in love with ceramics as a teenager. This passion for clay became their gateway into the art world, offering a tactile, grounding medium that shaped their creative foundation. Later, as a figure model at the Gage Academy of Art, Timothy discovered a profound connection to the human form, which fueled their exploration of self-portraiture and self-referential imagery. Their art seeks to evoke the raw, accessible human experience—both deeply personal and universally resonant.
        </p>
        <p>
          During their time at Gage Academy, Timothy absorbed invaluable lessons by sitting in on masterclasses with celebrated artists. These sessions, often exclusive and locked behind institutional barriers, became an everyday source of inspiration and technical growth. Observing how light interacts with the human form and internalizing classical techniques helped shape Timothy’s approach to portraiture and figure studies.
        </p>
        <p>
          A pivotal trip to France further deepened their passion for portraiture. Encounters with the works of Cézanne and Monet left a lasting impression, instilling a reverence for the interplay of light, color, and emotion in artistic storytelling.
        </p>
        <p>
          Timothy’s artistic practice thrives on curiosity and innovation. While ceramics and pastels remain central to their work, they are continually drawn to experiment with unconventional materials and tools, allowing the creative process to guide them into uncharted territories. For Timothy, art is a space of boundless exploration, where tradition meets intuition and the unexpected becomes inspiration.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
