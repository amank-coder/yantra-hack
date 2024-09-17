// src/components/Carousel.js
import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = () => {
  return (
    <div className="relative bottom-16">
      <ReactCarousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src="/carousel-1.jpg" alt="carousel-1" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h5 className="text-lg mb-2 uppercase">Best Online Courses</h5>
            <h1 className="text-4xl font-bold mb-4">Best Education From Your Home</h1>
            <a href="#" className="bg-primary text-white py-2 px-4">Learn More</a>
          </div>
        </div>
        <div>
          <img src="/carousel-2.jpg" alt="carousel-2" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h5 className="text-lg mb-2 uppercase">Best Online Courses</h5>
            <h1 className="text-4xl font-bold mb-4">Best Online Learning Platform</h1>
            <a href="#" className="bg-primary text-white py-2 px-4">Learn More</a>
          </div>
        </div>
        <div>
          <img src="/carousel-3.jpg" alt="carousel-3" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h5 className="text-lg mb-2 uppercase">Best Online Courses</h5>
            <h1 className="text-4xl font-bold mb-4">New Way To Learn From Home</h1>
            <a href="#" className="bg-primary text-white py-2 px-4">Learn More</a>
          </div>
        </div>
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
