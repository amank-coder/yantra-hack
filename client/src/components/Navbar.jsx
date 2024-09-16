import React, { useState } from 'react';

const Navbar = ({isAuth}) => {
  const [activeMenu, setActiveMenu] = useState('');
  const [sidebar, setSidebar] = useState(false);

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  const toggleMenu = () => {
    setSidebar(!sidebar);
  };

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  return (
    <div className="flex gap-56 h-[95px] pr-[40px] items-center text-[18px] text-black font-bold w-full z-10">
      <div className="w-[40px] md:w-[200px] hidden md:block">
        <a href="/" className="cursor-pointer" onClick={() => handleClick('home')}>
          <img src="/logo.png" alt="logo" className='w-56'/>
        </a>
      </div>
      <div className='block md:hidden ml-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </div>
      <div className="hidden md:flex justify-end gap-8 w-full items-center">
        <a
          className={ 'hover:scale-110 hover:text-main hover:underline cursor-pointer transition-transform ease-in-out duration-700'}
          href="/about-us"
        >
          About
        </a>

        {isAuth && (<a
          className={ 'hover:scale-110 hover:text-main hover:underline cursor-pointer transition-transform ease-in-out duration-700'}
          href="/dashboard"
        >
          Dashboard
        </a>)}
        
        <div>
          {!isAuth ? <button className="w-[144px] h-[51px] text-[18px] border-black hover:text-main border rounded-md hover:bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] hover:text-white">
            <a href="/login">Login</a>
          </button>:<div>{user?.name}</div>}
        </div>
      </div>
      <div className="md:hidden absolute right-2 ml-4 cursor-pointer flex gap-2">
        {!sidebar ? (
          <div className="group relative inline-block">
            <button className="bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] hover:text-white h-[39px] w-[100px] text-[12px] border-[#76777b] group-hover:border-[1px] hover:text-main">
              Login
            </button>
          </div>
        ) : (
          <div onClick={toggleMenu} className="z-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="blue"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
