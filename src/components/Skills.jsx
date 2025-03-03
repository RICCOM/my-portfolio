// src/components/Skills.jsx
import React from 'react';

const Skills = ({ theme }) => {
  const skills = {
    programming: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 }
    ],
    frameworks: [
      { name: 'React', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'Django', level: 80 }
    ],
    tools: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Kubernetes', level: 75 }
    ]
  };

  return (
    <section className={`py-12 sm:py-20 ${theme === 'light' ? 'bg-gray-50/90' : 'bg-gray-900/90'} backdrop-blur-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Technical Expertise</h2>
        <div className="space-y-6 sm:space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 capitalize ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {items.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-blue-100 transition-colors">
                      {category === 'programming' && (
                        <>
                          {skill.name === 'JavaScript' && <i className="fab fa-js text-3xl sm:text-4xl text-yellow-400"></i>}
                          {skill.name === 'TypeScript' && <i className="fab fa-js text-3xl sm:text-4xl text-blue-600"></i>}
                          {skill.name === 'Python' && <i className="fab fa-python text-3xl sm:text-4xl text-blue-500"></i>}
                          {skill.name === 'Java' && <i className="fab fa-java text-3xl sm:text-4xl text-red-500"></i>}
                        </>
                      )}
                      {category === 'frameworks' && (
                        <>
                          {skill.name === 'React' && <i className="fab fa-react text-3xl sm:text-4xl text-blue-400"></i>}
                          {skill.name === 'Node.js' && <i className="fab fa-node-js text-3xl sm:text-4xl text-green-600"></i>}
                          {skill.name === 'Vue.js' && <i className="fab fa-vuejs text-3xl sm:text-4xl text-green-500"></i>}
                          {skill.name === 'Django' && <i className="fab fa-python text-3xl sm:text-4xl text-green-800"></i>}
                        </>
                      )}
                      {category === 'tools' && (
                        <>
                          {skill.name === 'Git' && <i className="fab fa-git-alt text-3xl sm:text-4xl text-orange-600"></i>}
                          {skill.name === 'Docker' && <i className="fab fa-docker text-3xl sm:text-4xl text-blue-600"></i>}
                          {skill.name === 'AWS' && <i className="fab fa-aws text-3xl sm:text-4xl text-orange-400"></i>}
                          {skill.name === 'Kubernetes' && <i className="fas fa-dharmachakra text-3xl sm:text-4xl text-blue-500"></i>}
                        </>
                      )}
                    </div>
                    <span className="font-medium text-gray-800 text-sm sm:text-base">{skill.name}</span>
                    <span className="text-xs sm:text-sm text-gray-500 mt-1">{skill.level}% Proficiency</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;