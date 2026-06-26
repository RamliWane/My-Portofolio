"use client";

import React from "react";
import SocialIcon from "../Components/SocialIcon";
import Button from "../Components/Button";

export default function FirstPage() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex justify-between items-center flex-wrap mt-10 lg:mt-30 relative px-8 lg:px-30 pb-24">
      <div className="flex self-start items-start flex-wrap flex-col gap-4 order-2 lg:order-1">
          <h3 className="text-2xl font-bold text-black">
            Welcome to Portofolio
          </h3>

          <h1 className="text-4xl font-bold text-black">
            Hi, I'm{" "}
            <span className="text-[#FAB12F] underline">
            <i> Ramli Silawane</i>
            </span>
             <br />
            A Beginner Coder.
          </h1>

          <p className="text-black text-[18px] font-mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam
          </p>

          <div className="self-start mt-1">
            <Button />
          </div>

          <div className="mb-5">
            <SocialIcon />
          </div>
      </div>

      <div className="flex justify-center items-center mb-10 order-1 lg:order-2 w-full lg:w-auto">
        <img
          className="w-90 h-auto md:w-100 lg:w-120 max-w-full"
          src="./image-first-page.png"
          alt="globe"
        />
      </div>

      <div className="absolute -bottom-8  left-1/2 transform -translate-x-1/2">
        <div
          className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 group"
          onClick={scrollToNextSection}
        >
          <h3 className="text-lg hidden lg:flex md:flex font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
            Scroll Down
          </h3>

          <div className="hidden lg:flex md:flex flex-col items-center">
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

            <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
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