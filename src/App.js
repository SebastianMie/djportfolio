import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Genres from './components/Genres';
import Informations from './components/Informations';
import Events from './components/Events';
import Contact from './components/Contact'; 
import './styles.css';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';


function App() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.scroll-links a');
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        setActiveLink(links[index].hash);
      }
    });
  };

  return (
    <div className="home-outer top-to-bottom-colorflow">
      <Router>
        <div className="grid-container" style={{ gridTemplateRows: 'auto' }}>
          <Navbar />
          <div className="container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/informations" element={<Informations />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div className="scroll-links">
          <Events />  
          <Informations />
          <Genres />
          <Contact />
          <Footer />
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
