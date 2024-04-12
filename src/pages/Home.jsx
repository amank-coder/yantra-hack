import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/Navbar';

const Home = () => {
    const data = [
        {
            name:"abc",
            img:"/ai.jpg",
            review:"aaaaaaaaaaaaaaaaaaaa"
        },
        {
            name:"abc",
            img:"/ai.jpg",
            review:"vvvvvvvvvvvvvvvvvvvvvvvv"
        },
        {
            name:"abc",
            img:"/ai.jpg",
            review:"ccccccccccccccccccccccccc"
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  
    return (
    <div>
        <div className='bg-banner h-[550px]'>
            <Navbar />
            <div className="bg-purple-500">

            </div>
        </div>
        <div className="bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] h-[300px]">

        </div>
    
    {/* <div className='w-3/4 m-auto'>
        <div className='mt-20 mb-20'>
        <Slider {...settings}>
            {data.map((d)=>(
                <div className='bg-red-200 h-[450px] rounded-xl'>
                    <div className='h-56 rounded-t-xl flex justify-center items-center bg-blue-200'>
                        <img src={d.img} className='h-44 w-44 rounded-full'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 p-4'>
                        <p>{d.name}</p>
                        <p>{d.review}</p>
                        <button>Read</button>
                    </div>

                </div>
            ))}
            </Slider>
        </div>
    </div> */}
        {/* <div>
    <div className='flex bg-[#010633] text-white justify-center'>
        <div className="py-[56px] px-[20px] md:px-[60px] 2xl:px-[110px] flex flex-col md:flex-row gap-36">
            <div className='flex flex-col'>
                <div className='ml-8'>
                    <img src='/footerLogo.png' alt='logo'/>
                </div>
                <div className='mt-24 text-center md:text-start'>
                    <h1 className='text-[22px] font-bold mb-4'>Social Media </h1>
                    <div className='flex gap-4 justify-around'>
                        <span className='cursor-pointer'><img src='/facebook.png' alt='facebook' /></span>
                        <span className="cursor-pointer"><img src='/facebook.png' alt='facebook' /></span>
                        <span className='cursor-pointer'><img src='/facebook.png' alt='facebook' /></span>
                        <span className="cursor-pointer"><img src='/facebook.png' alt='facebook' /></span>
                    </div>
                </div>
            </div>
        <div className="p-2 ml-8">
        <div class="flex flex-col gap-2 text-center mr-8 md:mr-0 md:text-start">
            <h1 class="font-bold text-[22px]">Services</h1>
            <p class="underline text-[20px] font-medium cursor-pointer">AI Tutor</p>
            <p class="underline text-[20px] font-medium cursor-pointer">Learning path generator</p>
            <p class="underline text-[20px] font-medium cursor-pointer">Multi-lingual Support</p>
        </div>
        <div class="mt-16 flex flex-col gap-2 mr-8 md:mr-0 text-center md:text-start">
            <h1 class="font-bold text-[22px]">Company</h1>
            <p class="text-[20px] font-medium cursor-pointer">About us</p>
            <p class="text-[20px] font-medium cursor-pointer">Policy</p>
        </div>
    </div>
    <div className="p-2">
        <h1 className="font-bold text-[22px]">Stay Connected With Us</h1>
        <div className='flex flex-col gap-2 mt-8'>
            <label for="email" className="text-[20px]">Email address</label>
            <input type="text" name="email" className="bg-transparent border-2 p-2 px-4 w-[327px]" placeholder="Eg: johndoe@gmail.com"/>
            <p className="text-[14px] w-[327px] mt-2">Get regular updates and stay in touch as we share the latest developments on Vidya Mandir.</p>
        </div>
        <div className="group relative inline-block mt-16">
            <button className="bg-gradient-to-r from-[#0000FF] to-[#4141F2] group-hover:from-transparent group-hover:to-transparent w-[150px] md:w-[267px] h-[32px] md:h-[55px] text-[18px] md:text-[30px] border-[#76777b] group-hover:border-[1px] hover:text-main">
              Register
            </button>
            <span className="absolute top-0 left-0 w-[1px] h-2 bg-[#FFF]"></span>
            <span className="absolute top-0 right-0 w-[1px] h-2 bg-[#FFF]"></span>
            <span className="absolute top-0 left-0 w-2 h-[1px] bg-[#FFF]"></span>
            <span className="absolute top-0 right-0 w-2 h-[1px] bg-[#FFF]"></span>
            <span className="absolute bottom-0 left-0 w-2 h-[1px] bg-[#FFF]"></span>
            <span className="absolute bottom-0 right-0 w-2 h-[1px] bg-[#FFF]"></span>
            <span className="absolute bottom-0 right-0 w-[1px] h-2 bg-[#FFF]"></span>
            <span className="absolute bottom-0 left-0 w-[1px] h-2 bg-[#FFF]"></span>
          </div>    
        </div>
    </div>
    
</div>
<div className='flex gap-[4rem] md:gap-[8rem] xl:gap-[16rem] items-center px-[18px] md:px-[60px] text-white pb-16 justify-center '>
<p className='text-[12px] md:text-[20px] font-medium'>Copyright@Metanet Devcon</p>
<p className="text-[12px] md:text-[20px]">Terms & Condition</p>
</div>
</div> */}
    </div>
  )
}

export default Home