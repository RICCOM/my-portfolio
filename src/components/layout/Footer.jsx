import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // install: npm install react-icons

const Footer = ({ theme = 'light' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${
        theme === 'light' 
          ? 'bg-gray-50 border-gray-200 text-gray-700' 
          : 'bg-gray-900 border-gray-700 text-gray-300'
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand / Quick intro */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Munjuri Eric
            </h3>
            <p className="text-sm max-w-xs">
              Full Stack Developer crafting impactful digital experiences from Nairobi, Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-base font-semibold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>
              Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className={`text-base font-semibold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>
              Connect
            </h4>
            <div className="flex gap-5 text-2xl">
              <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-blue-500 transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Legal / Extra (optional) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-auto text-sm">
            <p>© {currentYear} Munjuri Eric. All rights reserved.</p>
            <p className="mt-2">
              Built with React, Vite, Tailwind CSS & ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;