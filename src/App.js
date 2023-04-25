import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Genres from './components/Genres';
import Informations from './components/Informations';
import Contact from './components/Contact';
import './styles.css';

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Navbar />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informations" element={<Informations />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;