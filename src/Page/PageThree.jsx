"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "../Components/Button";

export default function PageThree() {
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
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes slideInContainer {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
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

                .animate-slide-container {
                    animation: slideInContainer 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-600 { animation-delay: 0.6s; }
            `}</style>
                <div ref={pageRef} className=" bg-white h-auto flex items-center justify-center flex-wrap px-8 mt-20 mb-30">
                            <div className={`flex justify-center mt-10 md:w-100 md:-ml-10 md:mr-5 md:mt-10 md:mb-5 pl-10 z-1 ${isVisible ? 'animate-scale-in delay-300' : ''}`}>
                                <img className="w-100 -ml-10 h-auto md:w-96 md:h-80 lg:ml-20 lg:h-100 lg:w-200 md:ml-5" src="./Ellipse 40.png" alt="globe" />
                            </div>
                            <div className="flex flex-col gap-4 lg:ml-40 md:w-1/2 ml-5">
                                <p className={`text-xl font-mono text-black ${isVisible ? 'animate-fade-right delay-400' : ''}`}>all the projects I have worked on</p>
                                <h1 className={`text-4xl -mt-4 underline font-bold text-black ${isVisible ? 'animate-fade-right delay-500' : ''}`}>About Me</h1>
                                <p className={`text-black text-2xl leading-8 md:text-xl ${isVisible ? 'animate-fade-up delay-600' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.Ut enim ad minim veniam</p>
                                <div className={`self-start mb-10 mt-4 ${isVisible ? 'animate-fade-up delay-700' : ''}`}>
                                    <Button />
                                </div>                    
                            </div>
                </div>
        </>
    );
}