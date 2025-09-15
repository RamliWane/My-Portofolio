import React from "react";

export default function PortofolioUI() {
    return (
        <div className="flex flex-wrap justify-center gap-5 mt-5 ">
            <div className="bg-white w-100 h-85 rounded-3xl p-4 flex flex-col cursor-pointer transition-transform duration-150 ease-in-out hover:scale-95 shadow-lg">
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
            </div>
        </div>
    );
}