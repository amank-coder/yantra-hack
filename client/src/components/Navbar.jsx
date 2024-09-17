import React, { useState } from 'react';

const Navbar = ({ isAuth }) => {
  const [sidebar, setSidebar] = useState(false);

  const toggleMenu = () => {
    setSidebar(!sidebar);
  };

  const user = localStorage.getItem("user");

  return (
    <div className="flex justify-between items-center h-[75px] px-6 md:px-10 text-[18px] text-black font-bold w-full z-20 fixed bg-white opacity-90">
      {/* Logo Section */}
      <div className="w-[40px] md:w-[200px]">
        <a href="/" className="cursor-pointer">
          <img src="/logo2.png" alt="logo" className="w-40" />
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="block md:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Desktop Navbar Links */}
      <div className="hidden md:flex gap-8 items-center">
        <a
          href="/"
          className="hover:scale-110 hover:text-main hover:underline transition-transform ease-in-out duration-500"
        >
          Home
        </a>
        <a
          href="/about-us"
          className="hover:scale-110 hover:text-main hover:underline transition-transform ease-in-out duration-500"
        >
          About
        </a>
        <a
          href="/all-courses"
          className="hover:scale-110 hover:text-main hover:underline transition-transform ease-in-out duration-500"
        >
          Courses
        </a>
        {isAuth ? (
          <a
            href="/profile"
            className="hover:scale-110 hover:text-main hover:underline transition-transform ease-in-out duration-500"
          >
            Profile
          </a>
        ) : (
          <a
            href="/login"
            className="hover:scale-110 hover:text-main hover:underline transition-transform ease-in-out duration-500"
          >
            Login
          </a>
        )}
      </div>

      {/* Mobile Sidebar */}
      {sidebar && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50">
          <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <a
            href="/"
            className="py-2 text-lg hover:scale-110 hover:text-main hover:underline transition-transform ease-in-out duration-500"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/about"
            className="py-2 text-lg hover:scale-110 hover:text-main hover:underline transition-transform ease-in-out duration-500"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="/courses"
            className="py-2 text-lg hover:scale-110 hover:text-main hover:underline transition-transform ease-in-out duration-500"
            onClick={toggleMenu}
          >
            Courses
          </a>
          {isAuth ? (
            <a
              href="/profile"
              className="py-2 text-lg hover:scale-110 hover:text-main hover:underline transition-transform ease-in-out duration-500"
              onClick={toggleMenu}
            >
              Profile
            </a>
          ) : (
            <a
              href="/login"
              className="py-2 text-lg hover:scale-110 hover:text-main hover:underline transition-transform ease-in-out duration-500"
              onClick={toggleMenu}
            >
              Login
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
