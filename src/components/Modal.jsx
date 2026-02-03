// src/components/Modal.jsx
// import React from 'react';

// const Modal = ({ showModal }) => {
//   return (
//     <>
//       {showModal && (
//         <div className="fixed bottom-4 left-4 sm:right-4 sm:left-auto bg-green-500 text-white px-4 py-2 text-sm sm:text-base rounded-lg shadow-lg max-w-[90%] sm:max-w-md">
//           Message sent successfully!
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;
// Modal.jsx
import React from 'react';

const Modal = ({ status, onClose }) => {
  if (!status) return null;

  const isSuccess = status === 'success';

  return (
    <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-8 z-50">
      <div
        className={`px-5 py-3 rounded-xl shadow-xl text-white flex items-center gap-3 max-w-md ${
          isSuccess ? 'bg-green-600' : 'bg-red-600'
        }`}
      >
        <span className="font-medium">
          {isSuccess ? 'Message sent successfully!' : 'Failed to send — please try again'}
        </span>
        <button
          onClick={onClose}
          className="ml-auto text-white/80 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;