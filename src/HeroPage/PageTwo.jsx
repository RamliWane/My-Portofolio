"use client";
import CategoryWorks from "../Components/CategoryWorks";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

export default function PageTwo() {
  return (
    <div className="flex">
      <div className="w-full mb-20">
        <div className="px-8 lg:px-30 mb-10 flex justify-between items-end">
          <div className="flex flex-col gap-2">
              <p className="text-xl font-mono text-black">
                <i className="text-[#FAB12F]">--</i> Services
              </p>
              <h1 className="text-3xl font-bold text-black">
                <i className="text-[#FAB12F] underline">Services</i> I Provide
              </h1>
          </div>
          <button className="flex items-center bg-[#FAB12F] rounded-full h-11 p-1 gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-2">
            <span className="bg-[#2B5136] text-white font-semibold rounded-full px-5 py-2">
              View My Portofolio
            </span>
            <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center text-black font-bold text-lg">
              →
            </div>
          </button>
        </div>
          <div className="px-8 lg:px-30">
            <CategoryWorks />
          </div>
      </div>
    </div>
  );
}