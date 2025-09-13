import React from "react";
import SocialIcon from "../Components/SocialIcon";

export default function FirstPage() {
  return (
  <div className="flex items-center justify-center px-8">
      <div className="flex flex-col md:flex-row mt-20 gap-12">
        <div className="flex flex-col gap-4 md:w-1/2 ml-4">
          <h3 className="text-2xl font-bold text-black">Welcome to My kisah</h3>
          <h1 className="text-4xl font-bold text-black">Hi, I’m{" "}<span className="text-amber-900">Ramli Silawane A <br />Beginner Coder.</span></h1>
          <p className="text-black text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam</p>
            <div>
                <SocialIcon/>
            </div>
        </div>

        <div className="absolute top-0 right-0 w-[400px] md:w-[400px] lg:w-[550px] hidden md:block">
            <img src="./Rectangle 133.png" alt="" />
        </div>

        <div className="flex justify-center md:w-1/2 pl-10 z-1">
          <img className="w-80 -ml-7 h-auto md:w-96 md:h-80 lg:w-96 lg:h-80" src="./RectangleSementara.png" alt="globe" />
        </div>

      </div>
    </div>
  );
}
