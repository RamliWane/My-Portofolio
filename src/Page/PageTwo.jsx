"use client";
import React, { useState, useEffect, useRef } from "react";
import CategoryWorks from "../Components/CategoryWorks";

export default function PageTwo() {
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
        rootMargin: '0px 0px -100px 0px' // Sedikit delay agar animasi lebih smooth
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
      
      <div ref={pageRef} className="flex">
        <div className="flex flex-wrap justify-center mt-15 mb-20">
          <div className="flex flex-col justify-center items-center px-8 mb-20 lg:mt-32 lg:ml-14 lg:mr-10 md:mt-20 md:ml-5">
            <h1 className={`text-3xl underline font-bold text-black ${isVisible ? 'animate-fade-left delay-200' : ''}`}>
              My Works
            </h1>
            <p className={`text-xl font-mono text-black ${isVisible ? 'animate-fade-left delay-100' : ''}`}>
              all the projects I have worked on
            </p>
          </div>
          <div className={`flex justify-start ${isVisible ? 'animate-scale-in delay-300' : ''}`}>
            <CategoryWorks></CategoryWorks>
          </div>
        </div>
      </div>
    </>
  );
}