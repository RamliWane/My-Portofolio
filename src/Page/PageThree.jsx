"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "../Components/Button";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

export default function PageThree() {
    return (
                <div className=" bg-[#F0F0F0] h-auto flex items-center justify-center flex-wrap px-8 mt-10 mb-30">
                        <AnimatedWrapper animation="fade-left" delay={100}>    
                            <div className="flex justify-center mt-10 md:w-100 md:-ml-10 md:mr-5 md:mt-10 md:mb-5 pl-10 z-1">
                                <img className="w-100 -ml-10 h-auto md:w-96 md:h-80 lg:ml-10 lg:h-100 lg:w-200 md:ml-5" src="./Ellipse 40.png" alt="globe" />
                            </div>
                        </AnimatedWrapper>
                        <AnimatedWrapper animation="fade-left" delay={100}>        
                            <div className="flex flex-col gap-4 lg:ml-40 md:w-1/2 ml-5">
                                <p className="text-xl font-mono text-black ">all the projects I have worked on</p>
                                <h1 className="text-4xl -mt-4 underline font-bold text-[#457476] ">About Me</h1>
                                <p className="text-black text-2xl leading-8 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.Ut enim ad minim veniam</p>
                                <div className="self-start mb-10 mt-4">
                                    <Button />
                                </div>                    
                            </div>
                        </AnimatedWrapper>
                </div>
    );
}