"use client";
import React, { useState, useEffect, useRef } from "react";
import PortofolioApp from "@/Components/PortofolioApp";
import PortofolioUI from "@/Components/PortofolioUI";
import PortofolioWeb from "@/Components/PortofolioWeb";

export default function PageFour() {
    const [isVisible, setIsVisible] = useState(false);
    const pageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Animasi trigger saat element 30% masuk viewport
                if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3, // Trigger saat 30% element terlihat
                rootMargin: '0px 0px -50px 0px' // Sedikit delay agar animasi lebih smooth
            }
        );

        if (pageRef.current) {
            observer.observe(pageRef.current);
        }

        // Cleanup observer
        return () => {
            if (pageRef.current) {
                observer.unobserve(pageRef.current);
            }
        };
    }, []);

    return (
        <>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fade-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-fade-left {
                    animation: fadeInLeft 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-fade-right {
                    animation: fadeInRight 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-scale-in {
                    animation: scaleIn 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
            `}</style>
            
            <div ref={pageRef}>
                <div className="flex flex-col items-center mb-5 justify-center px-8 md:mt-35 md:ml-5">
                    <p className={`text-xl font-mono text-black ${isVisible ? 'animate-fade-left delay-100' : ''}`}>
                        all the projects I have worked on
                    </p>
                    <h1 className={`text-3xl underline font-bold text-black ${isVisible ? 'animate-fade-left delay-200' : ''}`}>
                        Portofolio
                    </h1>
                </div>

                <div className={`flex justify-center ${isVisible ? 'animate-fade-left delay-100' : ''}`}>
                    <div className="bg-[#D9D9D9] w-180 rounded-4xl p-2 shadow-lg border border-gray-100 mb-8">
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

                <div className={`flex justify-center gap-5 flex-wrap`}>
                    <div className={`${isVisible ? 'animate-scale-in delay-100' : ''}`}>
                        <PortofolioUI></PortofolioUI>
                    </div>
                    <div className={`${isVisible ? 'animate-scale-in delay-200' : ''}`}>
                        <PortofolioWeb></PortofolioWeb>
                    </div>
                    <div className={`${isVisible ? 'animate-scale-in delay-300' : ''}`}>
                        <PortofolioApp></PortofolioApp>                
                    </div>
                    <div className={`${isVisible ? 'animate-scale-in delay-100' : ''}`}>
                        <PortofolioUI></PortofolioUI>
                    </div>
                    <div className={`${isVisible ? 'animate-scale-in delay-200' : ''}`}>
                        <PortofolioWeb></PortofolioWeb>
                    </div>
                    <div className={`${isVisible ? 'animate-scale-in delay-300' : ''}`}>
                        <PortofolioApp></PortofolioApp>                
                    </div>
                </div>
            </div>
        </>
    );
}