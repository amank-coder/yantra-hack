// src/components/Navbar2.js
import React, { useState } from 'react';

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4 px-5 border-b border-gray-200">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Logo - visible for all screen sizes */}
          <a href="/" className="text-xl font-semibold">
            <img
              src="/path-to-your-logo/logo.png" // Replace with your logo path
              alt="Logo"
              className="h-8"
            />
          </a>
        </div>

        {/* Hamburger Icon - Visible only on small screens */}
        <button
          className="text-gray-700 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars text-2xl">HAM</i>
        </button>

        {/* Navbar Links */}
        <nav
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:mt-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <a
            href="/"
            className="block text-gray-700 hover:text-gray-900 py-2 px-5 lg:py-0"
          >
            Home
          </a>
          <a
            href="/about"
            className="block text-gray-700 hover:text-gray-900 py-2 px-5 lg:py-0"
          >
            About
          </a>
          <a
            href="/courses"
            className="block text-gray-700 hover:text-gray-900 py-2 px-5 lg:py-0"
          >
            Courses
          </a>
          <a
            href="/teachers"
            className="block text-gray-700 hover:text-gray-900 py-2 px-5 lg:py-0"
          >
            Teachers
          </a>
          <a
            href="/contact"
            className="block text-gray-700 hover:text-gray-900 py-2 px-5 lg:py-0"
          >
            Contact
          </a>
        </nav>

        {/* Join Now Button - Visible only on larger screens */}
        <a
          href="#"
          className="hidden lg:inline-block bg-primary text-white py-2 px-4 ml-auto"
        >
          Join Now
        </a>
      </div>

      {/* Mobile Join Now Button */}
      {isMenuOpen && (
        <a
          href="#"
          className="block lg:hidden bg-primary text-white text-center py-2"
        >
          Join Now
        </a>
      )}
    </div>
  );
};

export default Navbar2;
