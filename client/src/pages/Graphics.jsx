import React from 'react'

const Graphics = () => {
  return (
    <div>
        <h2 className='font-bold text-3xl mt-8 ml-6'>Create your own graphics</h2>
        <div className="px-4 py-3 flex items-center justify-between mt-12">
            <input type="text" placeholder="Type your prompt for graphics..." className="flex-1 bg-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md shadow-purple-300"/>
            <button className="ml-2 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 focus:outline-none focus:bg-purple-600" >Send</button>
      </div>
    
    </div>
  )
}

export default Graphics