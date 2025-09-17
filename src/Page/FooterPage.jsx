"use client";

import React from "react";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

export default function FooterPage() {
    return (
        <div className="flex justify-center flex-col items-center px-4">
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-40 items-center lg:items-start justify-center">
                    <div className="bg-[#F0F0F0] w-full max-w-sm lg:w-100 h-60 rounded-3xl flex flex-col justify-center items-center p-8 order-2 lg:order-1">
                        <div className="space-y-8 text-start">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email me at</h3>
                                <a href="mailto:ramlisilawane865@gmail.com" className="text-xl text-gray-800 hover:text-[#457476] transition-colors break-all">
                                    ramlisilawane865@gmail.com
                                </a>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Whatsapp me at</h3>
                                <a href="https://wa.me/6281211868821" className="text-xl text-gray-800 hover:text-[#457476] transition-colors">
                                    +62-812-1186-8821
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 max-w-lg w-full order-1 lg:order-2">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl lg:text-4xl font-bold text-[#457476] mb-4">Contact now</h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                collaboration or ask questions? You can send me a message.<br className="hidden sm:block"/>
                            </p>
                        </div>
                        
                        <form className="space-y-6">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Your name"
                                    required 
                                    className="w-full px-0 py-3 text-black bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-orange-400 transition-colors placeholder-gray-500"
                                />
                            </div>
                            
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Email address"
                                    required 
                                    className="w-full px-0 py-3 text-black bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-orange-400 transition-colors placeholder-gray-500"
                                />
                            </div>
                            
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Subject"
                                    required 
                                    className="w-full px-0 py-3 text-black bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-orange-400 transition-colors placeholder-gray-500"
                                />
                            </div>
                            
                            <div>
                                <textarea 
                                    placeholder="Write your message"
                                    rows={4}
                                    required 
                                    className="w-full px-0 py-3 text-black bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-orange-400 transition-colors placeholder-gray-500 resize-none"
                                />
                            </div>
                            
                            <div className="pt-4 text-center lg:text-left">
                                <button 
                                    type="submit"
                                    className="bg-black text-white hover:text-white hover:bg-[#D9D9D9] font-bold py-3 px-6 rounded-full text-base transition-all duration-200 flex items-center gap-2 group mx-auto lg:mx-0
                                     before:absolute before:inset-0 before:bg-[#457476] before:translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-0 
                                     before:-z-10 relative z-10 overflow-hidden group"
                                >
                                    SEND 
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </form>
                    </div>                
                </div>
            </div>
            <h1 className=" flex justify-center mr-10 text-center mb-5 mt-10 text-black font-kanit text-xl">@2025 Ramli silawane</h1>
        </div>
    );
}