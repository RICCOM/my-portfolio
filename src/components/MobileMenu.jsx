// src/components/MobileMenu.jsx
import React from 'react';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, setActiveSection }) => {
  return (
    <>
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md z-40 md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsMenuOpen(false);
                }}
                className="!rounded-button whitespace-nowrap capitalize text-left text-base hover:bg-gray-100 py-2 px-4 rounded transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;