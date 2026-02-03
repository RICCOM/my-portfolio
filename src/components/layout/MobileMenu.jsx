import React from 'react';
import PropTypes from 'prop-types';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, scrollToSection, activeSection }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl p-6 animate-slide-in">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          aria-label="Close menu"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>

        <nav className="mt-12 flex flex-col space-y-4">
          {['hero', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-left px-4 py-3 rounded-lg capitalize text-lg transition-colors ${
                activeSection === item
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href="/Munjuri_Eric_Resume.pdf"
            download="Munjuri_Eric_Resume.pdf"
            className="text-left px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center"
          >
            <i className="fas fa-download mr-2"></i>
            Resume
          </a>
        </nav>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default MobileMenu;