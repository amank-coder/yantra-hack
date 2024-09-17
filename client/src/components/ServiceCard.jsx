import React from 'react'

const ServiceCard = ({title, text, image, background}) => {
  return (
<div
  className='rounded-lg shadow-sm cursor-pointer p-6 relative'
  style={{ 
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>  
  <div
    className='absolute inset-0 bg-white opacity-40 rounded-lg' 
    style={{ zIndex: 0 }} // Overlay with opacity
  ></div>      
  <h3 className='relative z-10 mt-4 text-xl font-bold'>{title}</h3>
  <p className='relative z-10 mt-2 text-md text-gray-800 font-medium'>{text}</p>
</div>
  )
}

export default ServiceCard