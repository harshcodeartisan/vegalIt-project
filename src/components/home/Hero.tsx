import React from 'react';
import { Link } from 'react-router-dom';
import '../home/hero.css';
import video from '../assets/video.mp4';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content Layer */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              IT Solutions & <span className="text-blue-400">Smart Home</span> Automation
            </h1>
            <p className="text-lg text-gray-100 mb-8">
              VegaTech delivers cutting-edge IT services, infrastructure solutions, and home automation systems to transform the way businesses operate and people live.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="custom-contact-btn">
                <span className="text">Get Started</span>
                <span className="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 268.832 268.832"
                    className="svg-icon"
                  >
                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                  </svg>
                </span>
              </Link>
              <Link 
                to="/services" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Image + Animated Floating Badge */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="IT Solutions" 
              className="rounded-md shadow-xl w-full max-w-xl mx-auto transform transition duration-700 ease-in-out hover:scale-105"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 w-72 animate-[float_6s_ease-in-out_infinite]">
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-3">
                  <div className="bg-blue-600 rounded-full w-3 h-3"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">24/7 Technical Support</p>
                  <p className="text-sm text-gray-600">Always ready to assist you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
