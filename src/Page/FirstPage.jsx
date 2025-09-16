"use client";

import React from "react";
import SocialIcon from "../Components/SocialIcon";
import Button from "../Components/Button";
import AnimatedWrapper from "../Components/AnimatedWrapper";

export default function FirstPage() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center px-8 mt-15 ">
        <div className="flex justify-center flex-col md:flex-row  mt-10 gap-12">
          <div className="flex flex-col gap-4 ml-4 lg:mt-15 lg:gap-5">
            <AnimatedWrapper animation="fade-up" delay={100}>
              <h3 className="text-2xl font-bold text-black">
                Welcome to Portofolio
              </h3>
            </AnimatedWrapper>

            <AnimatedWrapper animation="fade-up" delay={200}>
              <h1 className="text-4xl font-bold text-black">
                Hi, I'm{" "}
                <span className="text-[#A1A1A1]">
                  Ramli Silawane A <br />
                  Beginner Coder.
                </span>
              </h1>
            </AnimatedWrapper>

            <AnimatedWrapper animation="fade-up" delay={300}>
              <p className="text-black text-xl font-mono">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </AnimatedWrapper>

            <AnimatedWrapper animation="fade-up" delay={400}>
              <div className="self-start mt-4">
                <Button />
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper animation="fade-up" delay={500}>
              <div className="-mt-10">
                <SocialIcon />
              </div>
            </AnimatedWrapper>
          </div>

          <AnimatedWrapper animation="slide-down" delay={300}>
            <div className="absolute -top-10 right-[0px] lg:w-[800px] md:w-[500px] md:h-[300px]">
              <img src="./Rectangle 1552.png" alt="" />
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper animation="scale-in" delay={600}>
            <div className="flex justify-center md:w-1/2 lg:ml-20 z-1">
              <img
                className="w-80 h-auto md:w-200 md:h-80 lg:w-200 lg:h-80 lg:mt-20"
                src="./RectangleSementara.png"
                alt="globe"
              />
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper animation="fade-right" delay={700}>
            <div className="absolute hidden md:block lg:block justify-center ml-10 mt-150">
              <img className="w-300 h-7" src="./line.png" alt="" />
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </>
  );
}
