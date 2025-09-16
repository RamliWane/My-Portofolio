"use client";

import React, { useState, useEffect } from "react";
import SocialIcon from "../Components/SocialIcon";
import Button from "../Components/Button";

export default function FirstPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animasi setelah component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-down {
          animation: slideDown 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
      
      <div className="flex items-center justify-center px-8 mt-15">
        <div className="flex flex-col md:flex-row mt-10 gap-12">
          <div className="flex flex-col gap-4 md:w-1/2 ml-4 lg:mt-20 lg:gap-5">
            <h3 className={`text-2xl font-bold text-black ${isVisible ? 'animate-fade-up delay-100' : ''}`}>
              Welcome to Portofolio
            </h3>
            <h1 className={`text-4xl font-bold text-black ${isVisible ? 'animate-fade-up delay-200' : ''}`}>
              Hi, I'm{" "}
              <span className="text-[#A1A1A1]">
                Ramli Silawane A <br />
                Beginner Coder.
              </span>
            </h1>
            <p className={`text-black text-xl font-mono ${isVisible ? 'animate-fade-up delay-300' : ''}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam
            </p>
            <div className={`self-start mt-4 ${isVisible ? 'animate-fade-up delay-400' : ''}`}>
              <Button />
            </div>
            <div className={`-mt-10 ${isVisible ? 'animate-fade-up delay-500' : ''}`}>
              <SocialIcon />
            </div>
          </div>

          <div className={`absolute top-0 right-0 w-[400px] md:w-[400px] lg:w-[1000px] hidden md:block ${isVisible ? 'animate-slide-down delay-300' : ''}`}>
            <img src="./RectangleMain.png" alt="" />
          </div>

          <div className={`flex justify-center md:w-1/2 pl-10 z-1 ${isVisible ? 'animate-scale-in delay-600' : ''}`}>
            <img
              className="w-80 h-auto md:w-96 md:h-80 lg:w-96 lg:h-80 lg:mt-20"
              src="./RectangleSementara.png"
              alt="globe"
            />
          </div>
          <div className={`absolute hidden md:block lg:block justify-center ml-10 mt-150 ${isVisible ? 'animate-fade-right delay-700' : ''}`}>
            <img className="w-300 h-7" src="./line.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}