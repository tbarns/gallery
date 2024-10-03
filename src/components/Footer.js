import React from 'react';
import './Footer.css'; // Create this file for custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          &copy; {new Date().getFullYear()} Timothy Barnaby. All Rights Reserved.
        </p>
        <p>
          <a href="mailto:tbarnaby1@gmail.com">Contact Me</a> | 
          <a href="/about"> About Me</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
