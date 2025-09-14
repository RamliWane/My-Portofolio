import React from "react";
import Button from "../Components/Button";

export default function PageThree() {
    return (
        <div className="flex items-center justify-center px-8 mt-10">
            <div className="flex justify-center bg-white h-240 md:h-120 md:w-full lg:h-130 rounded-2xl flex-col md:flex-row mt-20 mb-100">
                <div className="flex justify-center md:w-100 md:-ml-10 md:mr-5 md:mt-10 pl-10 z-1 -mt-5">
                    <img className="w-100 h-auto md:w-96 md:h-80 lg:ml-20" src="./Ellipse 40.png" alt="globe" />
                </div>
                <div className="flex flex-col gap-4 lg:ml-40 md:w-1/2 mt-20 ml-5">
                    <p className="text-xl font-mono text-black ">all the projects I have worked on</p>
                    <h1 className="text-4xl -mt-4 underline font-bold text-black">About Me</h1>
                    <p className="text-black text-2xl leading-8 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.Ut enim ad minim veniam</p>
                </div>
                <div>
                    <Button></Button>
                </div>
            </div>
         </div>
  );
}