"use client";

import { useParams } from 'next/navigation';
import Button from "@/Components/Button";
import HomeButton from "@/Components/HomeButton";
import React from "react";
import dataImport from "@/data/data.json";
import AnimatedWrapper from '@/Components/AnimatedWrapper';


export default function Detail( ) {
    const params = useParams();
    const projectId = params.id;

    const data = dataImport.users;

    const project = data.find(item => item.id === parseInt(projectId));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
                    <p className="text-gray-600 mb-8">Project yang kamu cari tidak ditemukan.</p>
                    <HomeButton />
                </div>
            </div>
        );
    }

    return (
        <AnimatedWrapper animation="fade-up" delay={100}> 
            <div className="px-4 lg:px-8 mb-10">
                <div className="relative w-full pt-10">
                    <div className="flex justify-center items-center w-full max-w-6xl mx-auto relative z-10 py-8">
                        <img
                            className="w-full h-auto object-cover rounded-3xl shadow-lg"
                            src={project.image}
                            alt="Project Detail"
                        />
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-black">
                            Project Overview
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            {project.descriptions}
                        </p>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            {project.descriptions2}
                        </p>
                        <div className="flex items-center gap-2 text-gray-600">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xl">{project.times}</span>
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <div className="space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-black">
                                Tools Used
                            </h2>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                                {project.descriptionstools}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-4 py-3 h-13 rounded-xl bg-black transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                                    <img className="w-10 h-10 rounded-full" src={project.toolsicon[0].icon} alt="" />
                                    <span className="font-semibold text-sm sm:text-base">
                                        {project.toolsicon[0].name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-3 h-13 rounded-xl bg-black transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                                    <img className="w-8 h-8" src={project.toolsicon[1].icon} alt="" />
                                    <span className="font-semibold text-sm sm:text-base">
                                        {project.toolsicon[1].name}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 px-4 py-3 h-13 rounded-xl bg-black transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                                    <img className="w-10 h-10" src={project.toolsicon[2].icon} alt="" />
                                    <span className="font-semibold text-sm sm:text-base">
                                        {project.toolsicon[2].name}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex items-start justify-start flex-col gap-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-black">
                                See In Repo
                            </h2>
                            <div className="flex gap-3">
                                <Button />
                                <HomeButton />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-40">
                    <div className="flex justify-center items-center w-full max-w-7xl mx-auto relative -mt-20">
                        <img
                            className="w-full h-auto object-cover rounded-3xl"
                            src={project.imagefooterdetail}
                            alt="Project Detail"
                        />
                    </div>
                </div>

                <footer className="max-w-6xl mx-auto pt-12 pb-8 border-t lg:ml-55 border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-black">LookSy Project</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {project.footerdescriptions}
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-black">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-cyan-600 transition-colors">← Back to Portfolio</a></li>
                                <li><a href="#" className="hover:text-cyan-600 transition-colors">View Live Demo</a></li>
                                <li><a href="#" className="hover:text-cyan-600 transition-colors">GitHub Repository</a></li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-black">Get In Touch</h3>
                            <p className="text-sm text-gray-600">
                                Tertarik dengan project ini?<br />
                                Mari berdiskusi lebih lanjut!
                            </p>
                            <div className="flex gap-3 pt-2">
                                <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </AnimatedWrapper>
    );
}