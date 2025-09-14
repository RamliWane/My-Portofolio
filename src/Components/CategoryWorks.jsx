import React from "react";

export default function CategoryWorks() {
  return (
        <div className="flex flex-wrap gap-4 mb-5 ml-2">
            <div className="flex justify-center flex-wrap md:flex md:justify-center md:flex-wrap lg:gap-7">
                <div className="flex mt-7 bg-white w-90 shadow-2xl h-50 rounded-xl cursor-pointer lg:mt-10 lg:ml-43 md:mt-10 transition-transform duration-150 ease-in-out hover:scale-90" >
                    <div className="flex bg-black w-13 shadow-2xl h-13 rounded-xl cursor-pointer" >
                        <img className="w-10 h-9 mt-2 ml-1" src="arrow miring.png" alt="" />
                    </div>
                    <div className="flex flex-col ml-7 mt-13">
                        <img className="w-12 h-12 -ml-3" src="./gg_figma.png" alt="Figma" />
                        <h1 className="text-2xl font-bold text-black">UI / UX Design</h1>
                        <p className="text-[15px] font-mono text-black">Look All My UI / UX Design</p>
                    </div>
                </div>
                <div className="flex mt-10 bg-white w-90 shadow-2xl h-50 rounded-xl cursor-pointer lg:mt-10 md:ml-5 transition-transform duration-150 ease-in-out hover:scale-90" >
                    <div className="flex bg-black w-13 shadow-2xl h-13 rounded-xl cursor-pointer" >
                        <img className="w-10 h-9 mt-2 ml-1" src="arrow miring.png" alt="" />
                    </div>
                    <div className="flex flex-col ml-7 mt-13">
                        <img className="w-10 h-10 -ml-3" src="./WebsiteIcon.png" alt="Figma" />
                        <h1 className="text-2xl font-bold text-black mt-1">Website</h1>
                        <p className="text-[15px] font-mono text-black">Look All My Website Projects</p>
                    </div>
                </div>
                <div className="flex mt-7 bg-white w-90 shadow-2xl h-50 rounded-xl cursor-pointer lg:mt-10 md:ml-5 transition-transform duration-150 ease-in-out hover:scale-90" >
                    <div className="flex bg-black w-13 shadow-2xl h-13 rounded-xl cursor-pointer" >
                        <img className="w-10 h-9 mt-2 ml-1" src="arrow miring.png" alt="" />
                    </div>
                    <div className="flex flex-col ml-7 mt-13">
                        <img className="w-11 h-11 -ml-3" src="./mobile-app.png" alt="Figma" />
                        <h1 className="text-2xl font-bold text-black">Mobile Apps</h1>
                        <p className="text-[15px] font-mono text-black">Look All My Mobile Apps Project</p>
                    </div>
                </div>
            </div>
        </div>
  );
}
