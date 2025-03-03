// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Modal from './components/Modal';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <Hero setActiveSection={setActiveSection} />;
      case 'projects':
        return <Projects theme={theme} />;
      case 'skills':
        return <Skills theme={theme} />;
      case 'contact':
        return <Contact theme={theme} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div
      className={`min-h-screen ${theme === 'light' ? 'bg-gray-50/95' : 'bg-gray-900/95'} transition-colors duration-300 relative`}
      style={{
        backgroundImage: "url('https://public.readdy.ai/ai/img_res/d1b3e704943eaf1b03fb7fe719d87d7b.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50"></div>
      <Navigation
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setActiveSection={setActiveSection}
      />
      {renderSection()}
      <Modal showModal={showModal} />
    </div>
  );
};

export default App;