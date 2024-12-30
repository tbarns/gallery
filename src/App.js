import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import UploadPage from './components/UploadPage';
import PricingGuide from './components/PricingGuide';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import LargeCommissions from './components/LargeCommissions';
import MargeSeries from './components/MargeSeries';
import PastelPortraits from './components/PastelPortraits';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingGuide />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/pastel-portraits" element={<PastelPortraits />} />
          <Route path="/about" element={<AboutMe />} /> 
          <Route path="/commissions" element={<LargeCommissions />} />
          <Route path="/marge" element={<MargeSeries />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
