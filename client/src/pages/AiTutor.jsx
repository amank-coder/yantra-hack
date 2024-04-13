import React from 'react'

const AiTutor = () => {
  return (
    <div >
    <div className='bg-[url("/bgother.png")] h-screen'>
        <div className='flex justify-between'>
            <div>
                <img src="/logoother.png" className='w-36'/>
            </div>
            <div>
                <div className='flex items-center gap-6'>
                    <div className='mt-4 font-bold'>12:20 AM - Thur, April 11</div>
                    <button className='px-6 py-2 rounded-xl border border-orange-500 mt-4 mr-8'>Login</button>
                </div>
            </div>
        </div>
        <div className='text-4xl mx-12 mt-20 font-bold'>
            <p>Transforming <span className='text-orange-500'>meeting</span> from</p>
            <p>Time drains to <span className='text-orange-500'>Productivity</span></p>
            <p className='text-orange-500'>Powerhouses</p>
            <button className='px-8 py-2 rounded-xl bg-orange-500 text-2xl mt-4'>Meet Now</button>
        </div>
    </div>
    <div className='flex gap-8 items-center'>
        <div><img src='Business.png' className='rounded-xl'/></div>
        <div className='text-center px-8 text-2xl'>
        Presentations are communication tools that can be used as demonstrations, lectures, speeches, reports, and more.
        </div>
    </div>
    <div>
        
    </div>

    </div>
  )
}

export default AiTutor