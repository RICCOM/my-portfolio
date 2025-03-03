// src/components/Modal.jsx
import React from 'react';

const Modal = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <div className="fixed bottom-4 left-4 sm:right-4 sm:left-auto bg-green-500 text-white px-4 py-2 text-sm sm:text-base rounded-lg shadow-lg max-w-[90%] sm:max-w-md">
          Message sent successfully!
        </div>
      )}
    </>
  );
};

export default Modal;