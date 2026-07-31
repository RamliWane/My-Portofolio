"use client";

import CategoryWorks from "../Components/CategoryWorks";
import AnimatedWrapper from "@/Components/AnimatedWrapper";
import SectionHeader from "@/Components/SectionHeader";
import PillButton from "@/Components/PillButton";

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6">
    <circle r="2.05" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const SKILLS = [
  { name: "Tailwind CSS", icon: "./tailwind-css.png" },
  { name: "HTML", icon: "./html.png" },
  { name: "JavaScript", icon: "./javascript.png" },
  { name: "React", svg: <ReactIcon /> },
  {
    name: "TypeScript",
    icon: "./typescript.png",
  },
  {
    name: "Astro JS",
    icon: "./astro.jpeg",
  },
  {
    name: "Express JS",
    icon: "./express-2.png",
  },
  {
    name: "Nodemon",
    icon: "./nodemon.png",
  },
  {
    name: "PostgreSQL",
    icon: "./Postgresql.webp",
  },
  {
    name: "MySQL",
    icon: "./mysql-2.png",
  },
];

const SkillIcon = ({ skill }) => {
  if (skill.icon) {
    return (
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-6 h-6 object-contain"
      />
    );
  }

  if (skill.svg) {
    return <>{skill.svg}</>;
  }

  return (
    <span
      className="flex items-center justify-center w-6 h-6 rounded-md text-[10px] font-bold text-white flex-shrink-0"
      style={{ backgroundColor: skill.badge.bg }}
    >
      {skill.badge.label}
    </span>
  );
};

export default function PageTwo({ onSelectCategory }) {
  const scrollToPortofolio = () => {
    document
      .getElementById("portofolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper>
          <SectionHeader
            label="Services"
            title={
              <>
                Services{" "}
                <i className="text-[#FAB12F] underline decoration-[#FAB12F]">
                  I Provide
                </i>
              </>
            }
            action={
              <PillButton
                label="View My Portfolio"
                onClick={scrollToPortofolio}
              />
            }
          />
        </AnimatedWrapper>

        <div className="mt-10">
          <AnimatedWrapper>
            <CategoryWorks onSelectCategory={onSelectCategory} />
          </AnimatedWrapper>
        </div>
      </div>

      <div className="relative overflow-hidden py-6 mt-20 border-y border-black/5">
        <AnimatedWrapper>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f6f6f6] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f6f6f6] to-transparent z-10" />

            <div className="flex w-max animate-marquee gap-4">
              {[...SKILLS, ...SKILLS].map((skill, index) => (
                <div
                  key={index}
                  aria-hidden={index >= SKILLS.length}
                  className="flex items-center gap-2.5 bg-white rounded-full px-6 py-3 shadow-sm border border-black/5"
                >
                  <SkillIcon skill={skill} />
                  <span className="font-medium text-black whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
