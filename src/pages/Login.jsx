import React from 'react'

const Login = () => {
  return (
    <div className='bg-loginbg bg-cover h-screen'>
        <div className='ml-[50%] mx-16 relative top-28 rounded-lg bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] h-96 p-4'>
            <div className='bg-white rounded-md flex gap-4 items-center p-4 h-36 mb-4'>
                <div>
                <img src='/teacher.png' className='relative -left-12 w-48'/>
                </div>
                <div>
                    <h2 className='text-2xl mx-8 mr-16'>Teacher</h2>
                </div>
                
            </div>
            <div className='bg-white rounded-md flex gap-4 items-center p-4 h-36 mb-4'>
                <div>
                <img src='/student.png' className='relative -left-12 w-48'/>
                </div>
                <div>
                    <h2 className='text-2xl mx-8 mr-16'>Student</h2>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Login