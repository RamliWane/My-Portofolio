"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Button from "@/Components/Button";
import HomeButton from "@/Components/HomeButton";
import SocialIcon from "@/Components/SocialIcon";
import React from "react";
import dataImport from "@/data/data.json";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

export default function Detail() {
  const params = useParams();
  const projectId = params.id;

  const data = dataImport.users;
  const project = data.find((item) => item.id === parseInt(projectId));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Project yang kamu cari tidak ditemukan.
          </p>
          <HomeButton />
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 mb-10 pt-24">
      <AnimatedWrapper>
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <HomeButton />
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper>
        <div className="flex justify-center items-center w-full max-w-6xl mx-auto relative py-8">
          <img
            className="w-full h-auto object-cover rounded-3xl shadow-lg"
            src={project.image}
            alt={project.name}
          />
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper>
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              {project.name}
            </h2>
            <h3 className="text-xl font-semibold text-[#2B5136]">
              Project Overview
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {project.descriptions}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {project.descriptions2}
            </p>
            <div className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xl">{project.times}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-black">
                Tools Used
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                {project.descriptionstools}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.toolsicon.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-3 h-12 rounded-xl bg-black text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={tool.icon}
                      alt={tool.name}
                    />
                    <span className="font-semibold text-sm sm:text-base">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex items-start justify-start flex-col gap-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-black">
                See In Repo
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  label="GitHub Repository"
                  href="https://github.com/RamliWane"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper>
        <div className="max-w-6xl mx-auto mt-16">
          <img
            className="w-full h-auto object-cover rounded-3xl"
            src={project.imagefooterdetail}
            alt={`${project.name} detail`}
          />
        </div>
      </AnimatedWrapper>

      <footer className="max-w-6xl mx-auto pt-12 pb-8 border-t border-gray-200 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-black">{project.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.footerdescriptions}
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-black">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-[#457476] transition-colors">
                  ← Back to Portfolio
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/RamliWane"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#457476] transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="mailto:ramlisilawane865@gmail.com"
                  className="hover:text-[#457476] transition-colors"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-black">Get In Touch</h3>
            <p className="text-sm text-gray-600">
              Tertarik dengan project ini?
              <br />
              Mari berdiskusi lebih lanjut!
            </p>
            <div className="pt-2">
              <SocialIcon />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
