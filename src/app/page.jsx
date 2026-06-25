"use client";

import React from "react";
import FirstPage from "../HeroPage/FirstPage";
import PageTwo from "@/HeroPage/PageTwo";
import PageThree from "@/HeroPage/PageThree";
import PageFour from "@/HeroPage/PageFour";
import FooterPage from "@/HeroPage/FooterPage";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

export default function Home() {
  return (
    <main className="overflow-y-auto overflow-x-hidden bg-white">
      <AnimatedWrapper animation="fade-up" delay={0}>
        <FirstPage />
      </AnimatedWrapper>
        <PageThree />
        <PageTwo />
        <PageFour />
        <FooterPage />
    </main>
  );
}