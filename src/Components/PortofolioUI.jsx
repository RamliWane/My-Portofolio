import React, { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";

export default function PortofolioUI ({ animation = "fadeInUp", delay = 0 } ) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
    <AnimatedWrapper animation={animation} delay={delay}>
        <div className="flex flex-wrap justify-center gap-5 mt-5 ">
            <div 
                className="bg-white w-100 h-85 rounded-3xl p-4 flex flex-col cursor-pointer transition-transform duration-150 ease-in-out hover:scale-95 shadow-lg relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <div className="flex-1 mb-10 w-full h-48 flex items-center justify-center">
                    <img className="w-full h-55 rounded-2xl" src="./UI UX Desain (3) 1.png" alt="" />
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <img className="w-8 h-8 rounded-2xl" src="./gg_figma.png" alt="UI/UX Design" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-black">UI / UX Design</h1>
                        <p className="text-sm text-gray-600">Look All My UI / UX Design</p>
                    </div>
                </div>
                
                {/* Tooltip */}
                {showTooltip && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-10 animate-fadeIn">
                        Click to view UI/UX Design projects
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                )}
            </div>
        </div>
    </AnimatedWrapper>
    );
}