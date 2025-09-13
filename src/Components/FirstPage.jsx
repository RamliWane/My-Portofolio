import React from "react";

export default function FirstPage() {
  return (
  <div className="flex items-center justify-center px-8">
      <div className="flex flex-col md:flex-row mt-20 gap-12">
        <div className="flex flex-col gap-4 md:w-1/2 ml-5">
          <h3 className="text-2xl font-bold text-black">Welcome to My kisah</h3>
          <h1 className="text-4xl font-bold text-black">Hi, I’m{" "}<span className="text-amber-900">Ramli Silawane A <br />Beginner Coder.</span></h1>
          <p className="text-black text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam</p>
        </div>

        <div className="flex justify-center md:w-1/2 pl-10">
          <img className="w-60 h-auto md:w-96" src="./globe.svg" alt="globe" />
        </div>
        
      </div>
    </div>
  );
}
