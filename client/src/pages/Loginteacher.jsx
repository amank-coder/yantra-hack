import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Loginteacher = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
          if(!email || !password)
          {
            return alert("Provide all fields")
          }
          console.log(email)
          console.log(password)
  
          const { data } = await axios.post(`http://localhost:3000/api/auth/login`,{
            email, password
  
          })
  
          console.log(data)
          if(data?.success)
          {
            console.log(data)
            localStorage.setItem("token", data.token);
            localStorage.setItem("user",JSON.stringify(data.user))
            alert("Login successful");
            navigate("/teacher-dashboard");
          }
        }catch(err)
        {
          alert("Invalid! Try again")
          console.log(err);
        }
    }

    return (
    <div className='bg-loginbg bg-cover h-screen'>
        <div className="pt-24">
            <form className="flex flex-col md:w-[500px] mx-auto bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] p-8 text-main gap-2 rounded-lg" onSubmit={handleSubmit}>
                <h2 className='text-center font-bold text-3xl text-white mb-4'>Teacher Login</h2>
                
                <label htmlFor="name" className="text-start text-white">Email</label>
                <input type='text' name="email" placeholder="Enter your username" className="px-4 py-1 bg-transparent border mb-8" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    
                <label htmlFor="contact" className="text-start text-white">Password</label>
                <input type='password' name="password" className="px-4 py-1 bg-transparent border mb-8" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className='text-end text-2xl font-bold hover:underline cursor-pointer text-white'><a href='/signup'>Sign Up</a></div>
                <div className="mt-4 mx-auto">
                    <button className=" hover:opacity-80 w-[110px] md:w-[245px] h-[28px] md:h-[50px] text-[14px] md:text-[30px] text-white hover:text-main border border-white rounded-lg" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>    
    </div>
  )
}

export default Loginteacher;