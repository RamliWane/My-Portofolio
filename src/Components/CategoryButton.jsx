import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

export default function CategoryButton({ animation = "fade-up", delay = 0 }) {
    return (
        <AnimatedWrapper animation={animation} delay={delay}>
            <div className="flex justify-center">
                <div className="bg-gray-300 max-w-4xl rounded-3xl p-3 shadow-lg border border-gray-100 mb-8">
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                            All Projects
                        </div>
                        <div className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer hover:shadow-md">
                            UI/UX Design
                        </div>
                        <div className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer hover:shadow-md">
                            Website
                        </div>
                        <div className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer hover:shadow-md">
                            Mobile Apps
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedWrapper>
    );
}
