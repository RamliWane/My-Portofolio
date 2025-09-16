import React from "react";

export default function CategoryWorks() {
  return (
        <div className="flex flex-wrap justify-center">
            <div className="flex justify-center flex-wrap gap-10">
                <div className="flex bg-[#D9D9D9] w-90 shadow-2xl h-50 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-90 relative overflow-hidden group" >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-xl"></div>
                    
                    <div className="flex bg-black w-13 shadow-2xl h-13 rounded-xl cursor-pointer relative z-10 group-hover:bg-white transition-colors duration-300 items-center justify-center" >
                        <svg className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                    </div>
                    <div className="flex flex-col ml-7 mt-13 relative z-10">
                        <img className="w-12 h-12 -ml-3" src="./gg_figma.png" alt="Figma" />
                        <h1 className="text-2xl font-bold text-black group-hover:text-white transition-colors duration-300">UI / UX Design</h1>
                        <p className="text-[15px] font-mono text-black group-hover:text-white transition-colors duration-300">Look All My UI / UX Design</p>
                    </div>
                </div>
                <div className="flex bg-[#D9D9D9] w-90 shadow-2xl h-50 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-90 relative overflow-hidden group" >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-xl"></div>
                    
                    <div className="flex bg-black w-13 shadow-2xl h-13 rounded-xl cursor-pointer relative z-10 group-hover:bg-white transition-colors duration-300 items-center justify-center" >
                        <svg className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                    </div>
                    <div className="flex flex-col ml-7 mt-13 relative z-10">
                        <img className="w-10 h-10 -ml-3" src="./WebsiteIcon.png" alt="Figma" />
                        <h1 className="text-2xl font-bold text-black mt-1 group-hover:text-white transition-colors duration-300">Website</h1>
                        <p className="text-[15px] font-mono text-black group-hover:text-white transition-colors duration-300">Look All My Website Projects</p>
                    </div>
                </div>
                <div className="flex bg-[#D9D9D9] w-90 shadow-2xl h-50 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-90 relative overflow-hidden group" >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-xl"></div>
                    
                    <div className="flex bg-black w-13 shadow-2xl h-13 rounded-xl cursor-pointer relative z-10 group-hover:bg-white transition-colors duration-300 items-center justify-center" >
                        <svg className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                    </div>
                    <div className="flex flex-col ml-7 mt-13 relative z-10">
                        <img className="w-11 h-11 -ml-3" src="./mobile-app.png" alt="Figma" />
                        <h1 className="text-2xl font-bold text-black group-hover:text-white transition-colors duration-300">Mobile Apps</h1>
                        <p className="text-[15px] font-mono text-black group-hover:text-white transition-colors duration-300">Look All My Mobile Apps Project</p>
                    </div>
                </div>
            </div>
        </div>
  );
}