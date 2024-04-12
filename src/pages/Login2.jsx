import React from 'react'

const Login2 = () => {
  return (
    // <div class="bg-loginbg bg-cover">
    // <form class="flex flex-col md:w-[500px] mx-auto bg-[#a136ff] p-8 text-main mt-8 gap-2 rounded-lg">
    // <label for="name" class="text-start">Enter your name</label>
    // <input type='text' name="name" placeholder="Eg: John Doe" class="px-4 py-1 bg-transparent border mb-8"/>
    
    // <label for="contact" class="text-start">Enter your contact number</label>
    // <input type='string' name="contact" class="px-4 py-1 bg-transparent border mb-8" placeholder="Eg: xxxxxxxx87"/>

    // <div class="mt-8">
    //     <button class="bg-gradient-to-r from-[#f600fe] to-[#0033d9] hover:opacity-80 w-[110px] md:w-[245px] h-[28px] md:h-[50px] text-[14px] md:text-[30px] border-[#76777b] group-hover:border-[1px] text-white hover:text-main" type="submit">
    //     Submit
    //     </button>
        
    // </div>
    // </form>
        
    // </div>
    <div className='bg-loginbg bg-cover h-screen'>
    <div className="pt-24">
    <form class="flex flex-col md:w-[500px] mx-auto bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] p-8 text-main gap-2 rounded-lg">
    <h2 className='text-center font-bold text-3xl text-white mb-4'>Login</h2>
    <label for="name" class="text-start text-white">Username</label>
    <input type='text' name="name" placeholder="Enter your username" class="px-4 py-1 bg-transparent border mb-8"/>
    
    <label for="contact" class="text-start text-white">Password</label>
    <input type='string' name="contact" class="px-4 py-1 bg-transparent border mb-8" placeholder="Enter password"/>

    <div class="mt-4 mx-auto">
        <button class=" hover:opacity-80 w-[110px] md:w-[245px] h-[28px] md:h-[50px] text-[14px] md:text-[30px] text-white hover:text-main border border-white rounded-lg" type="submit">
        Submit
        </button>
        
    </div>
    </form>
    </div>
            
    </div>
  )
}

export default Login2