import React, { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import data from "../data/data.json";
import Link from "next/link";

export default function PortofolioWeb({ animation = "fadeInUp", delay = 0 }) {
    const [hoveredId, setHoveredId] = useState(null); // ⬅️ Track ID yang di-hover
    
    return (
        <AnimatedWrapper animation="fade-right" delay={100}>
            <div className="flex flex-wrap justify-center gap-5 mt-5">
                {data.users.map((users) => (
                    <Link href={`/detail/${users.id}`} key={users.id}>
                        <div 
                            className="bg-white w-100 h-85 rounded-3xl p-4 flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-lg relative" 
                            onMouseEnter={() => setHoveredId(users.id)} // ⬅️ Set ID
                            onMouseLeave={() => setHoveredId(null)}     // ⬅️ Reset
                        >
                            <div className="flex-1 mb-10 w-full h-48 flex items-center justify-center">
                                <img className="w-full h-55 rounded-2xl" src={users.image} alt="" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <img className="w-8 h-8 rounded-2xl" src={users.icon} alt="UI/UX Design" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-xl font-bold text-black">{users.name}</h1>
                                    <p className="text-sm text-gray-600">{users.category}</p>
                                </div>
                            </div>
                            {hoveredId === users.id && ( // ⬅️ Cek ID yang di-hover
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-10 animate-fadeIn">
                                    Click to view details
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </AnimatedWrapper>
    );
}