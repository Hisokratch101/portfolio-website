import React from 'react'; // eslint-disable-line
import { useState, useEffect } from 'react';

// Import all section components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import ResumeDownload from './components/sections/ResumeDownload';
import Contact from './components/sections/Contact';

import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <a href="#hero" className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>AE</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500`}>About</a>
              <a href="#experience" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500`}>Experience</a>
              <a href="#education" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500`}>Education</a>
              <a href="#projects" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500`}>Projects</a>
              <a href="#skills" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500`}>Skills</a>
              <a href="#contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500`}>Contact</a>
            </div>
            
            {/* Mobile Navigation Toggle */}
            <button className="md:hidden">
              <svg className={`w-6 h-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <ResumeDownload />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Ayyoub El-Hyani. All rights reserved.</p>
          <p className="mt-2 text-blue-200">Data Scientist & Data Engineer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
