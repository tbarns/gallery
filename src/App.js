import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import UploadPage from './components/UploadPage';
import PricingGuide from './components/PricingGuide';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingGuide />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/about" element={<AboutMe />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
