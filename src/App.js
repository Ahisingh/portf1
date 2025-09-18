// src/App.js

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NeuralBackground from './components/NeuralBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Research from './pages/Research';
import Contacts from './pages/Contacts';


function App() {
  return (
    <Router>
      <NeuralBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
