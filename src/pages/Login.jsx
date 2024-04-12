import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
    return (
    <div className='bg-loginbg bg-cover h-screen '>
        <div className='ml-[40%] mx-16 relative w-[36rem] top-28 rounded-lg bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] h-[26rem] p-8'>
            <h2 className='text-center font-bold text-2xl text-white mb-2'>Select your role</h2>
            <div className='bg-white rounded-md flex gap-4 items-center p-4 h-36 mb-4 cursor-pointer hover:opacity-80'>
                <div>
                <img src='/teacher.png' className='relative -left-12 w-48'/>
                </div>
                <div>
                    <h2 className='text-2xl mx-8 mr-16'>Teacher</h2>
                </div>
                
            </div>
            <div className='bg-white rounded-md flex gap-4 items-center p-4 h-36 mb-4 cursor-pointer hover:opacity-80' onClick={()=>navigate('/login-form')}>
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