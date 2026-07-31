import React from "react";

const SERVICES = [
  {
    icon: "./figma_icon.png",
    alt: "Figma",
    deco: "./01.png",
    title: "UI / UX Design",
    description:
      "Merancang antarmuka yang intuitif, bersih, dan user-friendly untuk pengalaman digital yang nyaman digunakan.",
    category: "UI/UX",
  },
  {
    icon: "./software.png",
    alt: "Website",
    deco: "./02.png",
    title: "Website",
    description:
      "Membangun website modern, responsif, dan cepat dengan tampilan yang profesional dan performa optimal.",
    category: "Website",
  },
  {
    icon: "./mobile-app.png",
    alt: "Mobile",
    deco: "./03.png",
    title: "Mobile Apps",
    description:
      "Mengembangkan aplikasi mobile yang praktis dan menarik, fokus pada kemudahan penggunaan dan fungsionalitas.",
    category: "Mobile",
  },
];

export default function CategoryWorks({ onSelectCategory }) {
  const handleSelect = (category) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    document
      .getElementById("portofolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {SERVICES.map((item, index) => (
        <button
          key={item.title}
          type="button"
          onClick={() => handleSelect(item.category)}
          className="relative bg-[#F0F0F0] rounded-2xl overflow-hidden cursor-pointer h-56 flex flex-col justify-end p-6 text-left group"
        >
          <div className="absolute inset-0 bg-[#2B5136] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

          <span className="absolute top-4 left-6 text-lg font-mono text-black/30 group-hover:text-white/30 transition-colors duration-500">
            0{index + 1}
          </span>

          <div className="absolute bottom-4 right-4 opacity-15 pointer-events-none">
            <img src={item.deco} alt="" className="w-20 h-16 object-contain" />
          </div>

          <div className="relative z-10 flex flex-col gap-1.5">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center mb-1">
              <img
                src={item.icon}
                alt={item.alt}
                className="w-6 h-6 object-contain"
              />
            </div>
            <h3 className="text-base font-bold text-black group-hover:text-[#FAB12F] transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-sm font-mono text-black/70 group-hover:text-white transition-colors duration-300 leading-relaxed">
              {item.description}
            </p>
            <p className="text-sm font-bold text-[#2B5136] group-hover:text-white transition-colors duration-300 mt-1">
              Learn More <span className="text-[#FAB12F] text-base pl-1">→</span>
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
