"use client";
import Button from "../Components/Button";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

export default function PageThree() {
    return (
            <div id="about" className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <div className="bg-[#F0F0F0] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-13 rounded-xl mt-10 mb-20 sm:mb-30 w-full max-w-7xl">
                        
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl pl-0 sm:pl-5 underline font-bold text-black mb-6 sm:mb-10">
                            About Me
                        </h1>
                        
                        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
                            <div className="flex-shrink-0 w-full lg:w-auto pl-0 sm:pl-5">
                                <img 
                                    className="w-full max-w-md lg:max-w-xl mx-auto" 
                                    src="./about-coba.png" 
                                    alt="globe" 
                                />
                            </div>
                            
                            <div className="flex flex-col gap-4 pl-0 sm:pl-5 w-full">
                                <p className="text-black text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <div className="self-start mb-4 sm:mb-10 mt-2 sm:mt-4">
                                    <Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center items-center">
                    <img 
                        className="w-330 h-5" 
                        src="./line.png" 
                        alt="separator line" 
                    />
                </div>
            </div>
    );
}