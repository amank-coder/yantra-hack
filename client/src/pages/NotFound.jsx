import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
	    <img src='/404-error.png' alt='404-error' className='w-72'/>
      <div className="text-center text-[#243341] text-2xl my-2">
        Page not found
	    </div>
		    <Link
		  	  to='/'
			    className=" hover:opacity-90 bg-blue-500 text-white py-2 px-16 rounded w-fit self-center mt-2 hover:underline">
          Go To Home
        </Link>
    </div>
  )
}

export default NotFound;