"use client";

import React from "react";
import SocialIcon from "../Components/SocialIcon";
import PillButton from "@/Components/PillButton";


const FLOATING_SKILLS = [
  { name: "React Js", icon: "./react-icon.webp" },
  { name: "Express", icon: "./express-2.png" },
  { name: "MySQL", icon: "./mysql-2.png" },
];

export default function FirstPage() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2B5136_1px,transparent_1px),linear-gradient(to_bottom,#2B5136_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-24 -right-32 w-96 h-96 rounded-full bg-[#99E5B5]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-[#FAB12F]/20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-5">
          
          <div>
            <h3 className="text-xl font-mono text-black/70 mb-2">
              <i className="text-[#FAB12F]">--</i> Welcome to my portfolio
            </h3>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-[#FAB12F] underline decoration-[#FAB12F]">
                <i>Ramli Silawane</i>
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2B5136] mt-2">
              A Beginner Coder.
            </h2>
          </div>

          <p className="text-black/80 text-[17px] font-mono leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <PillButton
              label="Explore My Work"
              onClick={() => scrollToSection("portofolio")}
            />

          </div>

          <div className="mt-1">
            <SocialIcon />
          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            src="./image-first-page.png"
            alt="globe illustration"
            className="relative w-72 sm:w-80 lg:w-120 h-auto drop-shadow-2xl"
          />

          {FLOATING_SKILLS.map((skill, index) => {
            const positions = [
              "top-4 -left-4 animate-[float_5s_ease-in-out_infinite]",
              "top-1/2 -right-6 animate-[float_6s_ease-in-out_0.8s_infinite]",
              "bottom-10 -left-4 animate-[float_5.5s_ease-in-out_1.5s_infinite]",
            ];
            return (
              <div
                key={skill.name}
                className={`absolute ${positions[index]} hidden sm:flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-xl border border-black/5`}
              >
                <img
                  src={skill.icon}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm font-semibold text-black">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => scrollToSection("services")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-black/60 hover:text-black transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <span className="flex w-6 h-9 rounded-full border-2 border-current justify-center pt-1.5">
          <span className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </span>
      </button>
    </section>
  );
}
