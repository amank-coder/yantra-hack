import React from 'react'

const mobileSide = ({isOpen}) => {
  return (
<aside className={`${isOpen ? 'absolute w-full h-full bg-black border-r-2 shadow-lg z-40':'hidden'}`}>
	<nav className="p-12 text-xl flex flex-col gap-4 mt-8 text-white">
		<div className='flex items-center gap-8'>
        <a className="block border-white border-2 p-2 px-4" href="/login">Login</a>
		<a className="block" href="/register">Register</a>
        </div>  
		<a className="block mt-6" href="/dashboard">Dashboard</a>
		<a className="block" href="#contact">About</a>
	</nav>
</aside>
  )
}

export default mobileSide