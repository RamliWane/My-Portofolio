"use client";
import React, { useState } from "react";
import PortofolioWeb from "@/Components/PortofolioWeb";
import CategoryButton from "@/Components/CategoryButton";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

export default function PageFour() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id="portofolio" className="bg-[#f3f3f3]">
      <div className="px-8 lg:px-30 pt-20 flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-mono text-black">
            <i className="text-[#FAB12F]">--</i> My Portofolio
          </p>
          <h1 className="text-3xl font-bold text-black">
             My Latest  <i className="text-[#FAB12F] underline">Projects</i>
          </h1>
        </div>
        <button className="flex items-center bg-[#FAB12F] rounded-full h-11 p-1 gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-2">
          <span className="bg-[#2B5136] text-white font-semibold rounded-full px-5 py-2">
            See In Repo
          </span>
          <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center text-black font-bold text-lg">
            →
          </div>
        </button>
      </div>
      <div className="flex justify-center gap-5 mb-10 flex-wrap px-8 lg:px-20">
        <PortofolioWeb selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}