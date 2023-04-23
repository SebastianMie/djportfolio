import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Genres from './components/Genres';
import Informations from './components/Informations';
import Contact from './components/Contact';
import './styles.css';
import tatto_drip from './assets/pictures/tatto_drip.png';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informations" element={<Informations />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <img src={tatto_drip} alt="tatto_drip" />
    </Router>
  );
}

export default App;
