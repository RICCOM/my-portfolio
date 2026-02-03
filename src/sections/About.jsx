// src/sections/About.jsx
import React from 'react';
import profileImg from '../assets/munjuriEric-Profile.jpg'; // ← use your best headshot

const About = ({ theme = 'light' }) => {
  return (
    <section
      id="about"
      className={`py-20 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Photo + Quick Info */}
          <div className="flex flex-col items-center md:items-start order-2 md:order-1">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 mb-6 md:mb-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-xl animate-pulse-slow" />
              <img
                src={profileImg}
                alt="Munjuri Eric - Full Stack Developer"
                className="
                  w-full h-full object-cover rounded-full 
                  border-4 border-blue-500/70 dark:border-blue-400/70 
                  shadow-2xl shadow-blue-500/20 dark:shadow-blue-600/20 
                  transition-all duration-500 
                  hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 
                  hover:border-blue-600 dark:hover:border-blue-300
                "
              />
            </div>

            <div className="text-center md:text-left space-y-2">
              <p
                className={`text-xl font-semibold ${
                  theme === 'light' ? 'text-gray-800' : 'text-gray-200'
                }`}
              >
                Nairobi, Kenya
              </p>
              <p
                className={`text-base ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                Open to remote & local opportunities
              </p>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-8 order-1 md:order-2">
            <h3
              className={`text-3xl sm:text-4xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Hi, I'm Munjuri Eric
              <span className="text-blue-600 dark:text-blue-400"> — Full Stack Developer</span>
            </h3>

            <p
              className={`text-lg sm:text-xl leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
            >
              I craft modern, scalable web applications that solve real problems and deliver real value. 
              From Nairobi startups to global clients, I turn ideas into fast, reliable, user-friendly products.
            </p>

            <p
              className={`text-lg sm:text-xl leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
            >
              I enjoy the full stack journey — clean architecture, performant code, intuitive UX, 
              and staying current with tools that make building faster and more enjoyable.
            </p>

            {/* Highlights */}
            <ul
              className={`space-y-4 text-lg ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
            >
              <li className="flex items-center gap-4">
                <span className="text-2xl text-blue-500">⚡</span>
                <span>MERN / Next.js specialist</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-2xl text-blue-500">🌍</span>
                <span>Building for local impact & global reach</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-2xl text-blue-500">🚀</span>
                <span>Focused on clean code, speed & great UX</span>
              </li>
            </ul>

            <div className="pt-6">
              <a
                href="#contact"
                className={`
                  inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg
                  transition-all duration-300 shadow-lg hover:shadow-xl
                  ${
                    theme === 'light'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }
                `}
              >
                Let's create something great together →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;