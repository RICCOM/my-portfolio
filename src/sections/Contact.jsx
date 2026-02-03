// import React from 'react';

// const Contact = ({ theme, formData, setFormData, handleSubmit }) => {
//   return (
//     <section className={`py-12 sm:py-20 ${theme === 'light' ? 'bg-white/90' : 'bg-gray-800/90'} backdrop-blur-sm transition-colors duration-300`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Get in Touch</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
//           <div className={`${theme === 'light' ? 'bg-gray-50/90' : 'bg-gray-700/90'} backdrop-blur-sm p-6 sm:p-8 rounded-lg transition-colors duration-300`}>
//             <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//               <div>
//                 <label className={`block ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'} text-sm sm:text-base mb-2`}>Name</label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className={`w-full px-3 py-2 text-sm sm:text-base border ${
//                     theme === 'light'
//                       ? 'border-gray-300 bg-white text-gray-900'
//                       : 'border-gray-600 bg-gray-800 text-gray-100'
//                   } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 text-sm sm:text-base mb-2">Email</label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className={`w-full px-3 py-2 text-sm sm:text-base border ${
//                     theme === 'light'
//                       ? 'border-gray-300 bg-white text-gray-900'
//                       : 'border-gray-600 bg-gray-800 text-gray-100'
//                   } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 text-sm sm:text-base mb-2">Message</label>
//                 <textarea
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 sm:h-32"
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="!rounded-button whitespace-nowrap w-full bg-blue-600 text-white py-2 px-4 text-base sm:text-lg hover:bg-blue-700 transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//           <div className="space-y-6 sm:space-y-8">
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                 <i className="fas fa-envelope text-blue-600 text-lg sm:text-xl"></i>
//               </div>
//               <div>
//                 <h3 className="font-bold text-gray-900 text-sm sm:text-base">Email</h3>
//                 <p className="text-gray-600 text-sm sm:text-base">ericmunjuri@gmail.com</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                 <i className="fas fa-map-marker-alt text-blue-600 text-lg sm:text-xl"></i>
//               </div>
//               <div>
//                 <h3 className="font-bold text-gray-900 text-sm sm:text-base">Location</h3>
//                 <p className="text-gray-600 text-sm sm:text-base">Nairobi, Kenya</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                 <i className="fas fa-phone text-blue-600 text-lg sm:text-xl"></i>
//               </div>
//               <div>
//                 <h3 className="font-bold text-gray-900 text-sm sm:text-base">Phone</h3>
//                 <a href="tel:+254704955300" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base">
//                   +254 704 955 300
//                 </a>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                 <i className="fab fa-linkedin text-blue-600 text-lg sm:text-xl"></i>
//               </div>
//               <div>
//                 <h3 className="font-bold text-gray-900 text-sm sm:text-base">LinkedIn</h3>
//                 <a href="https://www.linkedin.com/in/eric-munjuri" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base">
//                   /in/ericmunjuri
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // success / error message
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        // You can add more fields if your template uses them
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',          // ← replace
        'YOUR_TEMPLATE_ID',         // ← replace
        templateParams,
        'YOUR_PUBLIC_KEY'           // ← replace (public key)
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // reset form
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`py-12 sm:py-20 ${theme === 'light' ? 'bg-white/90' : 'bg-gray-800/90'} backdrop-blur-sm transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          <div className={`${theme === 'light' ? 'bg-gray-50/90' : 'bg-gray-700/90'} backdrop-blur-sm p-6 sm:p-8 rounded-lg transition-colors duration-300`}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className={`block ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'} text-sm sm:text-base mb-2`}>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3 py-2 text-sm sm:text-base border ${
                    theme === 'light'
                      ? 'border-gray-300 bg-white text-gray-900'
                      : 'border-gray-600 bg-gray-800 text-gray-100'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
              </div>

              <div>
                <label className={`block ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'} text-sm sm:text-base mb-2`}>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-3 py-2 text-sm sm:text-base border ${
                    theme === 'light'
                      ? 'border-gray-300 bg-white text-gray-900'
                      : 'border-gray-600 bg-gray-800 text-gray-100'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
              </div>

              <div>
                <label className={`block ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'} text-sm sm:text-base mb-2`}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-3 py-2 text-sm sm:text-base border ${
                    theme === 'light' ? 'border-gray-300' : 'border-gray-600'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 sm:h-32 bg-${
                    theme === 'light' ? 'white' : 'gray-800'
                  } text-${theme === 'light' ? 'gray-900' : 'gray-100'}`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full !rounded-button whitespace-nowrap py-2 px-4 text-base sm:text-lg text-white transition-colors ${
                  loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Inline feedback */}
            {status === 'success' && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-center">
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg text-center">
                Failed to send message. Please try again.
              </div>
            )}
          </div>

          {/* Right column — contact info (unchanged) */}
          <div className="space-y-6 sm:space-y-8">
            {/* ... your existing email, location, phone, linkedin ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired, // or PropTypes.string.isRequired
};

export default Contact;