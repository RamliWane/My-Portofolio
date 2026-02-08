//page tempat memanggil component category button dan portofolio web

"use client";
import React from "react";
import PortofolioWeb from "@/Components/PortofolioWeb";
import CategoryButton from "@/Components/CategoryButton";
import AnimatedWrapper from "@/Components/AnimatedWrapper";
import { useState } from "react";

export default function PageFour() {
        const [selectedCategory, setSelectedCategory] = useState('All');

    // Function untuk handle perubahan category
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        console.log('Category selected:', category);
    };
    return (
        <>
                <div id="portofolio">
                    <div className="flex flex-col lg:ml-30 items-start mb-5 justify-start px-8 md:mt-10 md:ml-5">
                        <p className="text-xl font-mono text-black">
                            all the projects I have worked on
                        </p>
                        <h1 className="text-3xl underline font-bold text-black">
                            Portofolio
                        </h1>
                    </div>
                    <div className="flex lg:ml-35 justify-start">
                        <CategoryButton onCategoryChange={handleCategoryChange} />
                    </div>

                    <div className={`flex justify-center gap-5 mb-10 flex-wrap`}>
                       <PortofolioWeb selectedCategory={selectedCategory} />
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="w-330 h-5" src="./line.png" alt="" />
                    </div>
                </div>
        </>
    );
}
