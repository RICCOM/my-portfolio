// // // src/components/Navigation.jsx
// // import React from 'react';

// // const Navigation = ({ theme, toggleTheme, activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
// //   return (
// //     <nav className={`fixed w-full ${theme === 'light' ? 'bg-white/90' : 'bg-gray-800/90'} backdrop-blur-sm shadow-md z-50 transition-colors duration-300`}>
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
// //         <div className="flex items-center space-x-3 sm:space-x-4">
// //           <button
// //             onClick={() => setActiveSection('about')}
// //             className={`text-lg sm:text-xl md:text-2xl font-bold ${
// //               theme === 'light' ? 'text-blue-600' : 'text-blue-400'
// //             } transition-transform duration-300 hover:scale-105 focus:outline-none`}
// //           >
// //             M.E
// //           </button>
// //         </div>
// //         <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
// //           {['about', 'projects', 'skills', 'contact'].map((item) => (
// //             <button
// //               key={item}
// //               onClick={() => setActiveSection(item)}
// //               className={`!rounded-button whitespace-nowrap capitalize text-sm lg:text-base ${
// //                 activeSection === item
// //                   ? theme === 'light' ? 'text-blue-600' : 'text-blue-400'
// //                   : theme === 'light' ? 'text-gray-600' : 'text-gray-300'
// //               } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
// //             >
// //               {item}
// //             </button>
// //           ))}
// //           <button
// //             onClick={() => window.open('/resume.pdf')}
// //             className="!rounded-button whitespace-nowrap bg-blue-600 text-white px-3 py-1.5 text-sm lg:px-4 lg:py-2 hover:bg-blue-700 transition-colors flex items-center"
// //           >
// //             <i className="fas fa-download mr-2"></i>
// //             Resume
// //           </button>
// //           <button
// //             onClick={toggleTheme}
// //             className="!rounded-button whitespace-nowrap p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
// //             aria-label="Toggle theme"
// //           >
// //             <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}></i>
// //           </button>
// //         </div>
// //         <button
// //           className="md:hidden text-gray-600"
// //           onClick={() => setIsMenuOpen(!isMenuOpen)}
// //         >
// //           <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navigation;
import React from 'react';

const Navigation = ({ theme, toggleTheme, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={`fixed w-full ${theme === 'light' ? 'bg-white/90' : 'bg-gray-800/90'} backdrop-blur-sm shadow-md z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={() => scrollToSection('about')}
            className={`text-lg sm:text-xl md:text-2xl font-bold ${
              theme === 'light' ? 'text-blue-600' : 'text-blue-400'
            } transition-transform duration-300 hover:scale-105 focus:outline-none`}
          >
            M.E
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {['about', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`!rounded-button whitespace-nowrap capitalize text-sm lg:text-base ${
                activeSection === item
                  ? theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                  : theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              {item}
            </button>
          ))}
          <a
            href="/Munjuri_Eric_Resume.pdf"
            download="Munjuri_Eric_Resume.pdf"
            className="!rounded-button whitespace-nowrap bg-blue-600 text-white px-3 py-1.5 text-sm lg:px-4 lg:py-2 hover:bg-blue-700 transition-colors flex items-center"
          >
            <i className="fas fa-download mr-2"></i>
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className="!rounded-button whitespace-nowrap p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}></i>
          </button>
        </div>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
// In Navigation.jsx – simplify
// src/components/layout/Navigation.jsx
// import React from 'react';
// import PropTypes from 'prop-types';
// import profileImage from '../assets/munjuriEric-Profile.jpg'; // ← add this import here

// const Navigation = ({
//   theme,
//   toggleTheme,
//   activeSection,
//   scrollToSection,
//   isMenuOpen,
//   setIsMenuOpen,
// }) => {
//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
//         theme === 'light' ? 'bg-white/90' : 'bg-gray-900/90'
//       } backdrop-blur-md shadow-sm`}
//     >
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
//         {/* Logo + Avatar side by side */}
//         <div className="flex items-center gap-3 sm:gap-4">
//           <button
//             onClick={() => scrollToSection('hero')}
//             className={`text-2xl sm:text-3xl font-bold ${
//               theme === 'light' ? 'text-blue-600' : 'text-blue-400'
//             } hover:scale-105 transition-transform`}
//           >
//             M.E
//           </button>

//           {/* Small circular avatar right next to M.E */}
//           <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-blue-500/60 shadow-sm hover:shadow-md transition-all">
//             <img
//               src={profileImage}
//               alt="Munjuri Eric"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Desktop menu */}
//         <div className="hidden md:flex items-center gap-8 lg:gap-10">
//           {['about', 'projects', 'skills', 'contact'].map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className={`capitalize text-base font-medium transition-colors ${
//                 activeSection === item
//                   ? theme === 'light' ? 'text-blue-600' : 'text-blue-400'
//                   : theme === 'light' ? 'text-gray-700' : 'text-gray-300'
//               } hover:text-blue-500`}
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//             </button>
//           ))}

//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
//             aria-label="Toggle theme"
//           >
//             <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg`}></i>
//           </button>
//         </div>

//         {/* Hamburger */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

// // import React from 'react';                     // ← keep this one
// // import PropTypes from 'prop-types';            // only one
// // import profileImage from '../../assets/munjuriEric-Profile.jpg';// or the correct relative path

// // const Navigation = ({
// //   theme,
// //   toggleTheme,
// //   activeSection,
// //   scrollToSection,
// //   isMenuOpen,
// //   setIsMenuOpen,
// // }) => {
// //   return (
// //     <nav className={`fixed w-full ${theme === 'light' ? 'bg-white/90' : 'bg-gray-800/90'} backdrop-blur-sm shadow-md z-50 transition-colors duration-300`}>
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
// //         <div className="flex items-center space-x-3 sm:space-x-4">
// //           <button
// //             onClick={() => setActiveSection('about')}
// //             className={`text-lg sm:text-xl md:text-2xl font-bold ${
// //               theme === 'light' ? 'text-blue-600' : 'text-blue-400'
// //             } transition-transform duration-300 hover:scale-105 focus:outline-none`}
// //           >
// //             M.E
// //           </button>
// //         </div>
// //         <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
// //           {['about', 'projects', 'skills', 'contact'].map((item) => (
// //             <button
// //               key={item}
// //               onClick={() => setActiveSection(item)}
// //               className={`!rounded-button whitespace-nowrap capitalize text-sm lg:text-base ${
// //                 activeSection === item
// //                   ? theme === 'light' ? 'text-blue-600' : 'text-blue-400'
// //                   : theme === 'light' ? 'text-gray-600' : 'text-gray-300'
// //               } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
// //             >
// //               {item}
// //             </button>
// //           ))}
          
// //             href="/Munjuri_Eric_Resume.pdf"
// //             download="Munjuri_Eric_Resume.pdf"
// //             className="!rounded-button whitespace-nowrap bg-blue-600 text-white px-3 py-1.5 text-sm lg:px-4 lg:py-2 hover:bg-blue-700 transition-colors flex items-center"
            
// //             <i className="fas fa-download mr-2"></i>
// //             Resume
        
// //           <button
// //             onClick={toggleTheme}
// //             className="!rounded-button whitespace-nowrap p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
// //             aria-label="Toggle theme"
// //           >
// //             <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}></i>
// //           </button>
// //         </div>
// //         <button
// //           className="md:hidden text-gray-600"
// //           onClick={() => setIsMenuOpen(!isMenuOpen)}
// //         >
// //           <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navigation;