import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/Navbar';
import mobileSide from './../components/MobileSide';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserData } from '../context/UserContext';

const Home = () => {
    const {isAuth} = UserData()
    const data = [
        {
            name:"Cyber Security",
            img:"/img1.png",
        },
        {
            name:"Generative AI",
            img:"/img2.png",
        },
        {
            name:"Python",
            img:"/img3.png",
        },
        {
            name:"Java",
            img:"/img4.png",
        },
        {
            name:"Blockchain",
            img:"/img5.png",
        },
        {
            name:"Web Development",
            img:"/img6.png",
        }

    ]
    const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    if(window.innerWidth<640)
      setIsMobile(true);
    else 
      setIsMobile(false);  
  },[window.innerWidth])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 4,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  
    return (
    <div>
    {/* <mobileSide open={true}/> */}
        <div className='bg-banner2 h-[580px]'>
        <Navbar isAuth={isAuth} />
        
        <h1 className='pt-24 mx-12 text-5xl font-bold'>Preparing Curious <span className='bg-gradient-to-r from-[#f600fe] to-[#a136ff] bg-clip-text text-transparent'>minds</span></h1>
        <h1 className='pt-2 mx-12 text-5xl font-bold'>to design their <span className='bg-gradient-to-r from-[#f600fe] to-[#a136ff] bg-clip-text text-transparent'>future</span></h1>
        <button className='mx-12 bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] px-8 py-2 rounded-xl mt-2 font-bold text-2xl'>Learn now</button>
        </div>
        <div className="bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] h-[270px] overflow-x-hidden pt-4 px-24">
        <h2 className='text-center font-bold text-2xl text-white mb-4'>Learn Top Skills</h2>
        <Slider {...settings}>
        {
            data.map((item,id)=>(
                <div key={id}>
                <img src={item.img} />
                <h2 className='text-center text-white font-semibold'>{item.name}</h2>
            </div>
                
            ))
        }   
        </Slider> 
        </div>
    
    <div>
        <h2 className='text-center text-3xl font-bold mt-8'>Top Courses</h2>
        <div className=" bg-purple-500 h-1 mx-auto w-8"></div>
        <div className='grid grid-cols-1 md:grid-cols-3 space-x-4 mx-8 mt-8 gap-2'>
            <div className='bg-purple-500 rounded-md h-72 p-2 cursor-pointer hover:transform hover:scale-105'>
                <img src='/thumb1.jpg' className=''/>
                <p className='text-gray-200 text-2xl mt-2 ml-2'>Save Model to File</p>
            </div>
            <div className='bg-purple-500 rounded-md h-72 p-2 cursor-pointer hover:transform hover:scale-105'>
                <img src='/thumb2.jpg' className=''/>
                <p className='text-gray-200 text-2xl mt-2 ml-2'>Random Forest</p>
            </div>
            <div className='bg-purple-500 rounded-md h-72 p-2 cursor-pointer hover:transform hover:scale-105'>
                <img src='/thumb3.jpg' className=''/>
                <p className='text-gray-200 text-2xl mt-2 ml-2'>Prompt Engineering</p>
            </div>
        </div>
    </div>

    <div className="bg-white px-16 pt-24 font-semibold text-3xl text-center ">Our Services </div>
      <div className="flex flex-col md:flex-row gap-2 bg-white justify-between md:px-16 pt-8 pb-12">

      <div className="shadow-lg hover:scale-105 hover:shadow-purple-500 cursor-pointer rounded-md border-black p-2">
                  <img src='/worth.jpg' alt='service-1' className='w-56 mx-auto'/>
                  <p className='text-center font-semibold'>Course Worthiness</p>
                  <p className='w-56 text-center text-sm ml-8'>Know the worth of the course</p>
                </div>
                <div className="shadow-lg hover:scale-105 hover:shadow-purple-500 cursor-pointer rounded-md border-black p-2">
    <img src='/s1.jpg' alt='service-1' className='w-56 mx-auto'/>
    <p className='text-center font-semibold'>AI Tutor & Course Navigation</p>
    <p className='text-center w-56 text-sm ml-8'>AI-assisted smart doubt resolution</p>
  </div>
  <div className="shadow-lg hover:scale-105 hover:shadow-purple-500 cursor-pointer rounded-md border-black p-2">
    <img src='/multi.jpg' alt='service-1' className='w-56 mx-auto'/>
    <p className='text-center font-semibold'>Multi-lingual</p>
    <p className='w-56 text-center text-sm ml-8'>Supports course content in regional language</p>
  </div>
  <div className="shadow-lg hover:scale-105 hover:shadow-purple-500 cursor-pointer rounded-md border-black p-2">
    <img src='/planned.jpg' alt='service-1' className='w-56 mx-auto'/>
    <p className='text-center font-semibold'>Course Creation</p>
    <p className='w-56 text-center text-sm ml-8'>We help teachers create their course</p>
  </div>

          
      </div>



    {/* Footer */}
    <div className='flex bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] text-white justify-center mt-16'>
        <div className="pt-8 bottom-0 px-[20px] md:px-[60px] 2xl:px-[110px] flex flex-col md:flex-row gap-36">
            <div className='flex flex-col'>
                <div className='bg-white mt-8 rounded-full w-48 mx-auto'>
                    <img src='/logo.png' alt='logo'/>
                </div>
                <div className='mt-24 text-center md:text-start'>
                    <h1 className='text-[22px] font-bold mb-4'>Social Media </h1>
                    <div className='flex gap-4 justify-around'>
                        <span className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> </span>
                        <span className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></span>
                        <span className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></span>
                        <span className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
                    </div>
                </div>
            </div>
        <div className="p-2">
        <div className="flex flex-col gap-2 text-start">
            <h1 className="font-bold text-[22px]">Services</h1>
            <p className="text-[20px] font-medium cursor-pointer">AI Tutor</p>
            <p className="text-[20px] font-medium cursor-pointer">Learning path generator</p>
            <p className="text-[20px] font-medium cursor-pointer">Multi-lingual Support</p>
        </div>
        <div className="mt-16 flex flex-col gap-2 mr-8 md:mr-0 text-center md:text-start">
            <h1 className="font-bold text-[22px]">Company</h1>
            <p className="text-[20px] font-medium cursor-pointer">About us</p>
            <p className="text-[20px] font-medium cursor-pointer">Policy</p>
        </div>
    </div>
    <div className="p-2">
        <h1 className="font-bold text-[22px]">Stay Connected With Us</h1>
        <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor="email" className="text-[20px]">Email address</label>
            <input type="text" name="email" className="bg-transparent border-2 p-2 px-4 w-[327px]" placeholder="Eg: johndoe@gmail.com"/>
            <p className="text-[14px] w-[327px] mt-2">Get regular updates and stay in touch as we share the latest developments on Vidya Mandir.</p>
        </div>  
        </div>
    </div> 
  </div>
</div>
  )
}

export default Home