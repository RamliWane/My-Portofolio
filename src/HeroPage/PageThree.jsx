"use client";
import Button from "../Components/Button";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

export default function PageThree() {
    return (
            <div id="about" className="w-full flex items-center pt-30">
                <div className="flex justify-center items-center">
                    <div className="bg-[#2B5136] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-13 mt-10 mb-20 sm:mb-30 w-full mx-8 lg:mx-30 rounded-3xl">
                        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
                            <div className="flex-shrink-0 w-full lg:w-auto pl-0 sm:pl-5">
                                <img 
                                    className="w-full max-w-md lg:max-w-2xl mx-auto" 
                                    src="./aboutme-image.png" 
                                    alt="globe" 
                                />
                            </div>
                            
                            <div className="flex flex-col gap-4 pl-0 sm:pl-5 w-full">
                                <p className="text-white text-xl"><span className="text-[#FAB12F]">--</span> About Me</p>
                                <p className="text-white text-base sm:text-[15px] lg:text-[15px] xl:text-[15px] leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <div className="self-start mb-4 sm:mb-10 mt-2 sm:mt-4">
                                    <Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
}