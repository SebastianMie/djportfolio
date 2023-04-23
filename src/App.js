import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Genres from './components/Genres';
import Informations from './components/Informations';
import Music from './components/Music';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/genres" component={Genres} />
          <Route path="/information" component={Informations} />
          <Route path="/music" component={Music} />
        </Routes>
    </Router>
  );
}

export default App;
