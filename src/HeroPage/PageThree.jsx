"use client";
import Button from "../Components/Button";

export default function PageThree() {
  return (
    <div id="about" className="w-full px-8 lg:px-30 py-20">
      <div className="bg-[#2B5136] rounded-3xl px-8 lg:px-12 py-10 lg:py-13">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <img
              className="w-full max-w-md mx-auto"
              src="./aboutme-image.png"
              alt="About Me"
            />
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <p className="text-white text-xl">
              <span className="text-[#FAB12F]">--</span> About Me
            </p>
            <p className="text-white text-[15px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam
            </p>
            <div className="self-start mt-4">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}