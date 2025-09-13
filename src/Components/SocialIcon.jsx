import React from "react";

export default function SocialIcon() {
  return (
    <div className="flex space-x-4 mt-5">
        <div className="flex flex-col justify-start">
            <h1 className="text-2xl font-bold text-black mt-5">Contact me</h1>
            <div className="flex gap-3 mt-5">
                <div className="flex bg-white w-13 shadow-2xl h-13 rounded-xl cursor-pointer transition-transform hover:scale-105">
                    <a href="https://github.com/RamliWane" className="flex ml-3 justify-center items-center text-gray-700 hover:text-purple-700 transition">
                        <img src="./github.png" alt="GitHub" className="w-7 h-7" />
                    </a>
                </div>
                <div className="flex bg-white shadow-2xl w-13 h-13 rounded-xl cursor-pointer transition-transform hover:scale-105">
                    <a href="https://www.instagram.com/wanee27_/" className="flex ml-3 justify-center items-center text-gray-700 hover:text-purple-700 transition">
                        <img src="./instagram.png" alt="Instagram" className="w-7 h-7" />
                    </a>
                </div>
                <div className="flex bg-white shadow-2xl w-13 h-13 rounded-xl cursor-pointer transition-transform hover:scale-105">
                    <a href="#" className="flex ml-2 justify-center items-center text-gray-700 hover:text-purple-700 transition">
                        <img src="./email.png" alt="email" className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
