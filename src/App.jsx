// // src/App.jsx
// import { useState, useEffect } from 'react';
// import Navigation from './components/layout/Navigation';
// import MobileMenu from './components/layout/MobileMenu';
// import Hero from './sections/Hero';
// import Skills from './sections/Skills';
// import Projects from './sections/Projects';
// import Contact from './sections/Contact';
// import Modal from './components/Modal';


// const App = () => {
//   const [activeSection, setActiveSection] = useState('about');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [showModal, setShowModal] = useState(false);
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.classList.toggle('dark');
//   };

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, );

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowModal(true);
//     setTimeout(() => setShowModal(false), 3000);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'about':
//         return <Hero setActiveSection={setActiveSection} />;
//       case 'projects':
//         return <Projects theme={theme} />;
//       case 'skills':
//         return <Skills theme={theme} />;
//       case 'contact':
//         return <Contact theme={theme} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;
//       default:
//         return <Hero setActiveSection={setActiveSection} />;
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen ${theme === 'light' ? 'bg-gray-50/95' : 'bg-gray-900/95'} transition-colors duration-300 relative`}
//       style={{
//         backgroundImage: "url('https://public.readdy.ai/ai/img_res/d1b3e704943eaf1b03fb7fe719d87d7b.jpg')",
//         backgroundSize: 'cover',
//         backgroundAttachment: 'fixed',
//         backgroundPosition: 'center'
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50"></div>
//       <Navigation
//         theme={theme}
//         toggleTheme={toggleTheme}
//         activeSection={activeSection}
//         setActiveSection={setActiveSection}
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//       />
//       <MobileMenu
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//         setActiveSection={setActiveSection}
//       />
//       {renderSection()}
//       <Modal showModal={showModal} />
//     </div>
//   );
// };

// export default App;
// src/App.jsx
import { useState, useEffect, useRef } from 'react';
import Navigation from './components/layout/Navigation';
import MobileMenu from './components/layout/MobileMenu';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
// Optional: if you still need a global modal
// import Modal from './components/Modal';

const App = () => {
  const [theme, setTheme] = useState(() => {
    // Load from localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // for nav highlighting
  const sectionRefs = useRef({});

  // Theme toggle + persistence
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Active section highlighting with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -40% 0px', // adjust for navbar height + trigger earlier
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll helper (used in Navigation & MobileMenu)
  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 80; // adjust based on your navbar height
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false); // close mobile menu after click
  };

  return (
    <div
      className={`
        min-h-screen font-sans antialiased
        ${theme === 'light'
          ? 'bg-gray-50 text-gray-900'
          : 'bg-gray-950 text-gray-100'}
        transition-colors duration-300
      `}
    >
      {/* Optional subtle background pattern/gradient — customize or remove */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-950/20 pointer-events-none" />

      <Navigation
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      <main className="scroll-smooth">
        <div ref={(el) => (sectionRefs.current.hero = el)} id="hero">
          <Hero theme={theme} scrollToSection={scrollToSection} />
        </div>
        <div ref={(el) => (sectionRefs.current.about = el)} id="about">
          <About theme={theme} />
        </div>
        <div ref={(el) => (sectionRefs.current.skills = el)} id="skills">
          <Skills theme={theme} />
        </div>
        <div ref={(el) => (sectionRefs.current.projects = el)} id="projects">
          <Projects theme={theme} />
        </div>
        <div ref={(el) => (sectionRefs.current.contact = el)} id="contact">
          <Contact theme={theme} />
        </div>
      </main>

      <Footer theme={theme} scrollToSection={scrollToSection} />

      {/* {showModal && <Modal ... />}  ← re-add if needed globally */}
    </div>
  );
};

export default App;