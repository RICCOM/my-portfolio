// // src/components/Hero.jsx
// // import { useState } from 'react';
// // src/components/Hero.jsx
// import React from 'react';
// import PropTypes from 'prop-types';
// import profileImage from '../assets/munjuriEric-Profile.jpg';

// const Hero = ({ scrollToSection }) => {
//   return (
//     <section className="pt-16 relative min-h-[600px] sm:min-h-[800px] overflow-hidden">
//       {/* Animated subtle gradient background */}
//       <div
//         className="
//           absolute inset-0 w-full h-full
//           bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900
//           animate-gradient-shift
//           opacity-70
//         "
//       />

//       {/* Optional: subtle overlay for readability */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Main content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div className="text-center md:text-left">
//             <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
//               Hi, I am Munjuri Eric
//             </h1>
//             <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-300 mb-6 leading-tight drop-shadow-md">
//               A Full Stack Developer
//             </h2>
//             <p className="text-base sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
//               Crafting robust and scalable solutions with modern technologies. Passionate about creating impactful digital experiences that transform ideas into reality.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
//               <button
//                 onClick={() => scrollToSection('projects')}
//                 className="whitespace-nowrap bg-blue-600 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl rounded-lg font-medium"
//               >
//                 View Projects
//               </button>
//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="whitespace-nowrap border-2 border-blue-400 text-blue-300 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg hover:bg-blue-900/30 transition-all rounded-lg font-medium"
//               >
//                 Contact Me
//               </button>
//             </div>
//           </div>

//           {/* Your profile photo – now floating over the animated bg */}
//           <div className="relative hidden md:block">
//             <div className="absolute -right-10 sm:-right-20 top-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
//             <img
//               src={profileImage}
//               alt="Munjuri Eric"
//               className="relative z-10 w-full max-w-md mx-auto rounded-full shadow-2xl border-4 border-blue-400/50 hover:scale-105 transition-transform duration-500"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Hero.propTypes = {
//   setActiveSection: PropTypes.func.isRequired,
// };

// export default Hero;

// src/sections/Hero.jsx
import React from 'react';
import PropTypes from 'prop-types';
import profileImage from '../assets/munjuriEric-Profile.jpg';

const Hero = ({ setActiveSection }) => {
  return (
    <section className="pt-16 relative min-h-[600px] sm:min-h-[800px] overflow-hidden">
      {/* Animated subtle gradient background */}
      <div
        className="
          absolute inset-0 w-full h-full
          bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900
          animate-gradient-shift
          opacity-70
        "
      />

      {/* Optional: subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Hi, I am Munjuri Eric
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-300 mb-6 leading-tight drop-shadow-md">
              A Full Stack Developer
            </h2>
            <p className="text-base sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Crafting robust and scalable solutions with modern technologies. Passionate about creating impactful digital experiences that transform ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => setActiveSection('projects')}
                className="whitespace-nowrap bg-blue-600 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl rounded-lg font-medium"
              >
                View Projects
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className="whitespace-nowrap border-2 border-blue-400 text-blue-300 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg hover:bg-blue-900/30 transition-all rounded-lg font-medium"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Your profile photo – now floating over the animated bg */}
          <div className="relative hidden md:block">
            <div className="absolute -right-10 sm:-right-20 top-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <img
              src={profileImage}
              alt="Munjuri Eric"
              className="relative z-10 w-full max-w-md mx-auto rounded-full shadow-2xl border-4 border-blue-400/50 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};

export default Hero;