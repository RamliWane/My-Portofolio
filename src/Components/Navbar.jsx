"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full flex justify-center mt-2 fixed z-50">
      <div className={`
        rounded-xl px-8 py-3 flex items-center justify-between max-w-4xl w-full transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-[#2B5136]/60 backdrop-blur-md shadow-xl border border-white/20"
            : "bg-[#2B5136] shadow-lg" 
        }
      `}>
        <h1 className={`text-xl font-bold ml-3 cursor-pointer transition-colors duration-300 ${
          isScrolled ? "text-white drop-shadow-lg" : "text-white"
        }`}>Ramli</h1>

        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link href="#home" className={`transition-colors duration-300 font-semibold ${
              isScrolled 
                ? "text-white hover:text-[#FAB12F] drop-shadow-lg" 
                : "text-white hover:text-[#FAB12F]"
            }`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className={`transition-colors duration-300 font-semibold ${
              isScrolled 
                ? "text-white hover:text-[#FAB12F]drop-shadow-lg" 
                : "text-white hover:text-[#FAB12F]"
            }`}>
              About
            </Link>
          </li>
          <li>
            <Link href="#portofolio" className={`transition-colors duration-300 font-semibold ${
              isScrolled 
                ? "text-white hover:text-[#FAB12F] drop-shadow-lg" 
                : "text-white hover:text-[#FAB12F]"
            }`}>
              Portofolio
            </Link>
          </li>
          <li>
            <Link href="#footer" className={`transition-colors duration-300 font-semibold ${
              isScrolled 
                ? "text-white hover:text-[#FAB12F] drop-shadow-lg" 
                : "text-white hover:text-[#FAB12F]"
            }`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}