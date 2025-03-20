import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education/>
      <Certifications /> 
      <Contact/>
    </div>
  );
};

export default App;
