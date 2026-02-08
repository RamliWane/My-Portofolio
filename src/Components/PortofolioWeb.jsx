//component portofolio web

import React, { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import data from "../data/data.json";
import Link from "next/link";

export default function PortofolioWeb({ animation = "fadeInUp", delay = 0 }) {
    const [hoveredId, setHoveredId] = useState(null);

    return (
            <div className="min-h-screen bg-transparent py-10 px-5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
                    
                    {data.users.map((user, index) => (
                        <Link 
                            href={`/detail/${user.id}`} 
                            key={user.id}
                            className={`rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 ${

                                index === 0 ? 'lg:row-span-2 bg-indigo-600' :
                                index >= 3 && index <= 4 ? 'lg:col-span-2 bg-indigo-600' :
                                index === 6 ? 'lg:col-span-2 lg:row-span-2 bg-red-600' :
                                'bg-[#F5E6D3]'
                            }`}
                        >
                            <img
                                src={user.image}
                                alt={`Card ${user.id}`}
                                className="w-full h-full object-cover"
                            />
                        </Link>
                    ))}

                </div>
            </div>
    );
}