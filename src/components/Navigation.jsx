// // src/components/Navigation.jsx
// import React from 'react';

// const Navigation = ({ theme, toggleTheme, activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
//   return (
//     <nav className={`fixed w-full ${theme === 'light' ? 'bg-white/90' : 'bg-gray-800/90'} backdrop-blur-sm shadow-md z-50 transition-colors duration-300`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         <div className="flex items-center space-x-3 sm:space-x-4">
//           <button
//             onClick={() => setActiveSection('about')}
//             className={`text-lg sm:text-xl md:text-2xl font-bold ${
//               theme === 'light' ? 'text-blue-600' : 'text-blue-400'
//             } transition-transform duration-300 hover:scale-105 focus:outline-none`}
//           >
//             M.E
//           </button>
//         </div>
//         <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
//           {['about', 'projects', 'skills', 'contact'].map((item) => (
//             <button
//               key={item}
//               onClick={() => setActiveSection(item)}
//               className={`!rounded-button whitespace-nowrap capitalize text-sm lg:text-base ${
//                 activeSection === item
//                   ? theme === 'light' ? 'text-blue-600' : 'text-blue-400'
//                   : theme === 'light' ? 'text-gray-600' : 'text-gray-300'
//               } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
//             >
//               {item}
//             </button>
//           ))}
//           <button
//             onClick={() => window.open('/resume.pdf')}
//             className="!rounded-button whitespace-nowrap bg-blue-600 text-white px-3 py-1.5 text-sm lg:px-4 lg:py-2 hover:bg-blue-700 transition-colors flex items-center"
//           >
//             <i className="fas fa-download mr-2"></i>
//             Resume
//           </button>
//           <button
//             onClick={toggleTheme}
//             className="!rounded-button whitespace-nowrap p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
//             aria-label="Toggle theme"
//           >
//             <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}></i>
//           </button>
//         </div>
//         <button
//           className="md:hidden text-gray-600"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
import React from 'react';

const Navigation = ({ theme, toggleTheme, activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={`fixed w-full ${theme === 'light' ? 'bg-white/90' : 'bg-gray-800/90'} backdrop-blur-sm shadow-md z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={() => setActiveSection('about')}
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
              onClick={() => setActiveSection(item)}
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