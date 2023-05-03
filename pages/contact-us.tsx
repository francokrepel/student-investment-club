// pages/contact.tsx

import React from 'react';
import Header from '../components/Header';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <section className="container mx-auto mt-12 px-4 md:px-0">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-teal-400">
            Contact Us
          </h1>
          <p className="text-lg mb-8">
            We'd love to hear from you! If you have any questions or concerns, please feel free to reach out to us.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto">
          <form
            className="bg-gray-800 p-6 rounded-lg"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
            }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-400 py-2 rounded-lg text-black font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
