"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Mulai efek setelah scroll 50px
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function untuk menghapus event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full flex justify-center -mt-8 md:-mt-5 fixed z-50">
      <div className={`
        rounded-xl px-8 py-3 flex items-center justify-between max-w-4xl w-full transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-white/20 backdrop-blur-md shadow-xl border border-white/20" // Transparan dengan blur
            : "bg-white shadow-lg" // Background putih solid
        }
      `}>
        <h1 className={`text-xl font-bold ml-3 transition-colors duration-300 ${
          isScrolled ? "text-black drop-shadow-lg" : "text-gray-800"
        }`}>Ramli</h1>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className={`transition-colors duration-300 font-semibold ${
              isScrolled 
                ? "text-black hover:text-amber-300 drop-shadow-lg" 
                : "text-gray-700 hover:text-amber-900"
            }`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className={`transition-colors duration-300 font-semibold ${
              isScrolled 
                ? "text-black hover:text-amber-300 drop-shadow-lg" 
                : "text-gray-700 hover:text-amber-900"
            }`}>
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className={`transition-colors duration-300 font-semibold ${
              isScrolled 
                ? "text-black hover:text-amber-300 drop-shadow-lg" 
                : "text-gray-700 hover:text-amber-900"
            }`}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className={`transition-colors duration-300 font-semibold ${
              isScrolled 
                ? "text-black hover:text-amber-300 drop-shadow-lg" 
                : "text-gray-700 hover:text-amber-900"
            }`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}