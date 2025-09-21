"use client";

import React from "react";
import SocialIcon from "../Components/SocialIcon";
import Button from "../Components/Button";
import AnimatedWrapper from "../Components/AnimatedWrapper";

export default function FirstPage() {
  const scrollToNextSection = () => {
    // Scroll to next section - adjust the scroll distance as needed
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex justify-center flex-wrap mt-10 lg:mt-30 relative">
      {/* Image Section */}
      <AnimatedWrapper animation="fade-left" delay={100}>  
        <div className="flex justify-center mb-10 z-1">
          <div className="flex justify-center">
            <img
              className="w-80 h-auto md:w-120 md:h-90 lg:w-140 lg:h-120"
              src="./New-Retangle.png"
              alt="globe"
            />
          </div>
        </div>
      </AnimatedWrapper>

      {/* Text Content Section */}
      <div className="flex self-start ml-10 items-start flex-wrap lg:ml-30 flex-col gap-7">
        <AnimatedWrapper animation="fade-left" delay={100}>  
          <h3 className="text-2xl font-bold text-black">
            Welcome to Portofolio
          </h3>
        </AnimatedWrapper>
        
        <AnimatedWrapper animation="fade-left" delay={100}>   
          <h1 className="text-4xl font-bold text-black">
            Hi, I'm{" "}
            Ramli Silawane <br />
            A Beginner Coder.
          </h1>
        </AnimatedWrapper>
        
        <AnimatedWrapper animation="fade-left" delay={100}>  
          <p className="text-black text-xl font-mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam
          </p>
          
          <div className="self-start lg:-ml-120 md:-ml-120 mt-4">
            <Button />
          </div>
          
          <div className="mb-5">
            <SocialIcon />
          </div>
        </AnimatedWrapper>
      </div>
      
      {/* Animated Scroll Down Section - Positioned at bottom center */}
      <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2">
        <div 
          className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 group"
          onClick={scrollToNextSection}
        >
          <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
            Scroll Down
          </h3>
          
          {/* Animated Arrow Down */}
          <div className="flex flex-col items-center">
            {/* First arrow */}
            <div className="animate-bounce">
              <svg 
                className="w-5 h-5 text-black mb-1 group-hover:text-gray-700 transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </div>
            
            {/* Second arrow dengan delay animation */}
            <div className="animate-bounce" style={{animationDelay: '0.2s'}}>
              <svg 
                className="w-4 h-4 text-black opacity-60 group-hover:text-gray-700 transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}