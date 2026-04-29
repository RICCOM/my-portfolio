
// import React from 'react';
// import hotxnewsImage from '../assets/hotxnews.png'; 
// import mymechImage from '../assets/mymech.png';
// import senditImage from '../assets/sendit.jpg'; 
// import coffee254Image from'../assets/coffee254.jpg';
// import swimmersImage from '../assets/Swimmers.png';
// import partnerfarmsImage from '../assets/partnerfarms.png';
// const Projects = ({ theme }) => {
//   const projects = [
//      {
//       title: 'Latest News Updates Platform',
//       description: 'Developed a Platform for latest news updates using NewsAPI',
//       image: hotxnewsImage,
//       tags: ['Javascript' , 'React'],
//       liveUrl: 'https://hotxnews.vercel.app/',
      
//     },
//     {
//       title: 'Auto Services Platform',
//       description: 'Built a full-stack Auto Services platform with React, Flask, and Postegresql',
//       image: mymechImage, 
//       tags: ['React', 'Flask', 'Postgresql'],
//       liveUrl: 'https://autoexpert-ke.vercel.app/',
//       // githubUrl: '
//     },
//     {
//       title: 'Courier Services Platform',
//       description: 'Built a full-stack Courier Services platform with React, Flask, and Postegresql',
//       image: senditImage, 
//       tags: ['React', 'Flask', 'Postgresql'],
//       liveUrl: 'https://sendit-fe-nine.vercel.app/',
//       // githubUrl: 'https://github.com/RICCOM/SENDIT-FE'
//     },
//     {
//       title: 'Swimmers Club Platform',
//       description: 'Developed a Platform for Swimmers Club',
//       image: swimmersImage,
//       tags: ['Javascript' , 'React'],
//       liveUrl: 'https://swimmers-club-project.vercel.app/',
      
//     },
//     {
//       title: 'Coffee Restaurant Shop',
//       description: 'Created a Modern Coffee Restaurant Website',
//       image: coffee254Image,
//       tags: ['React.js', 'Node.js'],
//       liveUrl: 'https://caffee254.vercel.app',
     
//     },
//     {
//       title: 'Livestock Investment Platform',
//       description: 'Developing a Universal Livestock Investment Platform',
//       image: partnerfarmsImage,
//       tags: ['React.js', 'Flask', 'Node.js'],
//       liveUrl: 'https://partnerfarms.vercel.app/',
     
//     }
//   ];

//   return (
//     <section className={`py-12 sm:py-20 ${theme === 'light' ? 'bg-white/90' : 'bg-gray-800/90'} backdrop-blur-sm transition-colors duration-300`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>My Projects</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
//           {projects.map((project, index) => (
//             <a
//               key={index}
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`group relative overflow-hidden rounded-xl shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-700'} transition-all duration-300 hover:shadow-2xl block`}
//             >
//               <div className="aspect-w-16 aspect-h-12 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-4 sm:p-6">
//                 <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>{project.title}</h3>
//                 <p className={`mb-3 sm:mb-4 text-sm sm:text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{project.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className={`px-2 py-1 rounded-full text-xs sm:text-sm ${theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900/30 text-blue-300'}`}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2`}>
//                 <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="!rounded-button whitespace-nowrap w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 hover:bg-white text-gray-700 rounded-full shadow-lg"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <i className="fas fa-external-link-alt text-sm sm:text-base"></i>
//                 </a>
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="!rounded-button whitespace-nowrap w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 hover:bg-white text-gray-700 rounded-full shadow-lg"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <i className="fab fa-github text-sm sm:text-base"></i>
//                 </a>
//               </div>
//             </a>
//           ))}
//         </div>
//         {/* <div className="text-center mt-8 sm:mt-12">
//           <button className="!rounded-button whitespace-nowrap bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg hover:bg-blue-700 transition-colors shadow-lg">
//             View All Projects
//           </button>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from 'react';
import hotxnewsImage from '../assets/hotxnews.png';
import mymechImage from '../assets/mymech.png';
import senditImage from '../assets/sendit.jpg';
import coffee254Image from '../assets/coffee254.jpg';
import agentmarketImage from '../assets/agentmarket.png';
import partnerfarmsImage from '../assets/partnerfarms.png';

const Projects = ({ theme }) => {
  const projects = [
    {
      title: 'Latest News Updates Platform',
      description: 'Developed a Platform for latest news updates using NewsAPI',
      image: hotxnewsImage,
      tags: ['Javascript', 'React'],
      liveUrl: 'https://hotxnews.vercel.app/',
    },
    {
      title: 'Auto Services Platform',
      description:
        'Built a full-stack Auto Services platform with React, Flask, and PostgreSQL',
      image: mymechImage,
      tags: ['React', 'Flask', 'PostgreSQL'],
      liveUrl: 'https://autoexpert-ke.vercel.app/',
    },
    {
      title: 'Courier Services Platform',
      description:
        'Built a full-stack Courier Services platform with React, Flask, and PostgreSQL',
      image: senditImage,
      tags: ['React', 'Flask', 'PostgreSQL'],
      liveUrl: 'https://sendit-fe-nine.vercel.app/',
    },
    {
      title: 'AI Assistant Platform',
      description: 'Developed a Platform for AI Assistant with React and Flask, and PostgreSQL',
      image: agentmarketImage,
      tags: ['Javascript', 'React', 'Flask', 'PostgreSQL'],
      liveUrl: 'https://agentmarket-red.vercel.app/',
    },
    {
      title: 'Coffee Restaurant Shop',
      description: 'Created a Modern Coffee Restaurant Website',
      image: coffee254Image,
      tags: ['React.js', 'Node.js'],
      liveUrl: 'https://caffee254.vercel.app',
    },
    {
      title: 'Livestock Investment Platform',
      description: 'Developing a Universal Livestock Investment Platform',
      image: partnerfarmsImage,
      tags: ['React.js', 'Flask', 'Node.js'],
      liveUrl: 'https://partnerfarms.vercel.app/',
    },
  ];

  return (
    <section
      className={`py-12 sm:py-20 ${
        theme === 'light' ? 'bg-white/90' : 'bg-gray-800/90'
      } backdrop-blur-sm transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${
            theme === 'light' ? 'text-gray-900' : 'text-gray-100'
          }`}
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative flex flex-col overflow-hidden rounded-xl shadow-lg
                ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}
                transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
              `}
            >
              {/* Image - fixed aspect ratio */}
              <div className="aspect-[4/3] overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content area - grows to push tags down */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3
                  className={`text-lg sm:text-xl font-bold mb-2.5 ${
                    theme === 'light' ? 'text-gray-900' : 'text-gray-100'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm sm:text-base mb-4 leading-relaxed ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}
                >
                  {project.description}
                </p>

                {/* Tags pushed to bottom */}
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`
                        px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium
                        ${
                          theme === 'light'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-blue-900/40 text-blue-200'
                        }
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover action buttons */}
              <div
                className={`
                  absolute top-3 right-3 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 flex gap-2.5
                `}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 hover:bg-white text-gray-700 rounded-full shadow-md transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Live demo"
                >
                  <i className="fas fa-external-link-alt text-base"></i>
                </a>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 hover:bg-white text-gray-700 rounded-full shadow-md transition-colors"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="GitHub repository"
                  >
                    <i className="fab fa-github text-base"></i>
                  </a>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;