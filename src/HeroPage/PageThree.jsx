"use client";

import PillButton from "@/Components/PillButton";
import Button from "../Components/Button";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

const FOCUS = [
  { number: "01", label: "Web Development" },
  { number: "02", label: "Mobile Apps" },
  { number: "03", label: "UI / UX Design" },
];


export default function PageThree() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <AnimatedWrapper>
          <div className="bg-[#2B5136] rounded-[2rem] px-6 sm:px-10 lg:px-14 py-12 lg:py-16 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#99E5B5]/10 blur-3xl pointer-events-none" />

            <div className="relative grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 " />
                  <img
                    className="relative w-full rounded-[2rem] object-cover "
                    src="./aboutme-image.png"
                    alt="Ilustrasi Ramli Silawane"
                  />

                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-5">
                <p className="text-lg font-mono text-white/80">
                  <i className="text-[#FAB12F]">--</i> About Me
                </p>

                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug">
                  
                  I am always open to {" "}
                  <i className="text-[#FAB12F] underline decoration-[#FAB12F]">
                    Projects
                  </i>

                  .
                </h2>

                <p className="text-white/85 leading-relaxed">

                  I'm Ramli, a developer focusing on web and mobile application development. Most of my work is project-based and academic, where I'm directly involved in everything from design and development to implementation.
                </p>

                <div className="mt-2 border-l-2 border-[#FAB12F] pl-5 flex flex-col gap-3 py-1">
                  {FOCUS.map((item) => (
                    <div key={item.number} className="flex items-baseline gap-3">
                      <span className="text-sm font-mono text-white/40 w-6">
                        {item.number}
                      </span>
                      <span className="text-lg font-semibold text-white">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>


                <div className="flex flex-wrap gap-4 items-center">
                  <PillButton
                    label="Explore My Work"
                    onClick={() => scrollToSection("portofolio")}
                  />

                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
