// src/components/Contact.jsx
import React from 'react';

const Contact = ({ theme, formData, setFormData, handleSubmit }) => {
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
                <label className="block text-gray-700 text-sm sm:text-base mb-2">Email</label>
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
                <label className="block text-gray-700 text-sm sm:text-base mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 sm:h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="!rounded-button whitespace-nowrap w-full bg-blue-600 text-white py-2 px-4 text-base sm:text-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fas fa-envelope text-blue-600 text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Email</h3>
                <p className="text-gray-600 text-sm sm:text-base">ericmunjuri@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-blue-600 text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Location</h3>
                <p className="text-gray-600 text-sm sm:text-base">Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fab fa-linkedin text-blue-600 text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">LinkedIn</h3>
                <a href="https://linkedin.com/in/jameswilson" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                  /in/ericmunjuri
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;