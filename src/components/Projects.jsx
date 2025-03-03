// src/components/Projects.jsx
import React from 'react';

const Projects = ({ theme }) => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB',
      image: 'https://public.readdy.ai/ai/img_res/5fe56a859c78113c14357ce981963a0e.jpg',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'AI Image Generator',
      description: 'Developed an AI-powered image generation tool using Python and TensorFlow',
      image: 'https://public.readdy.ai/ai/img_res/e88900d7cdfcbe330ef907829a3bd231.jpg',
      tags: ['Python', 'TensorFlow', 'AWS']
    },
    {
      title: 'Smart Home IoT Dashboard',
      description: 'Created a real-time IoT dashboard for smart home device management',
      image: 'https://public.readdy.ai/ai/img_res/63221ceea6777c8221b0055038a89203.jpg',
      tags: ['Vue.js', 'WebSocket', 'Node.js']
    }
  ];

  return (
    <section className={`py-12 sm:py-20 ${theme === 'light' ? 'bg-white/90' : 'bg-gray-800/90'} backdrop-blur-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-xl shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-700'} transition-all duration-300 hover:shadow-2xl`}>
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>{project.title}</h3>
                <p className={`mb-3 sm:mb-4 text-sm sm:text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                        theme === 'light'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-blue-900/30 text-blue-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2`}>
                <button className="!rounded-button whitespace-nowrap w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 hover:bg-white text-gray-700 rounded-full shadow-lg">
                  <i className="fas fa-external-link-alt text-sm sm:text-base"></i>
                </button>
                <button className="!rounded-button whitespace-nowrap w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 hover:bg-white text-gray-700 rounded-full shadow-lg">
                  <i className="fab fa-github text-sm sm:text-base"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <button className="!rounded-button whitespace-nowrap bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg hover:bg-blue-700 transition-colors shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;