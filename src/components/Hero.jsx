// src/components/Hero.jsx
import React from 'react';
import profileImage from '../assets/eric-profile.jpg'; // Adjust as needed

const Hero = ({ setActiveSection }) => {
  return (
    <section className="pt-16 relative min-h-[600px] sm:min-h-[800px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://public.readdy.ai/ai/img_res/2d217ca547b1b21b1c8dff5c3a654b76.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              I am Munjuri Eric
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
              A Full Stack Developer
            </h2>
            <p className="text-base sm:text-xl text-gray-700 mb-8 leading-relaxed">
              Crafting robust and scalable solutions with modern technologies. Passionate about creating impactful digital experiences that transform ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => setActiveSection('projects')}
                className="!rounded-button whitespace-nowrap bg-blue-600 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View Projects
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className="!rounded-button whitespace-nowrap border-2 border-blue-600 text-blue-600 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <i className="fas fa-code text-blue-600 text-lg sm:text-xl mr-2"></i>
                <span className="text-gray-700 text-sm sm:text-base">4+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-project-diagram text-blue-600 text-lg sm:text-xl mr-2"></i>
                <span className="text-gray-700 text-sm sm:text-base">10+ Projects Delivered</span>
              </div>
            </div>
          </div>
          <div className="relative hidden sm:block">
            <div className="absolute -right-10 sm:-right-20 top-1/2 transform -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-100/30 rounded-full blur-3xl"></div>
            <div className="relative">
              <img
                src={profileImage}
                alt="Munjuri Eric"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;