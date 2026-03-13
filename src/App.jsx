import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import FallingSkills from './components/FallingSkills';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <div className="App">
      <Analytics />
      <Navigation />
      <ScrollToTop />
      <FallingSkills />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default App;
