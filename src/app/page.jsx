"use client";

import React, { useState } from "react";
import FirstPage from "../HeroPage/FirstPage";
import PageTwo from "@/HeroPage/PageTwo";
import PageThree from "@/HeroPage/PageThree";
import PageFour from "@/HeroPage/PageFour";
import FooterPage from "@/HeroPage/FooterPage";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main className="overflow-y-auto overflow-x-hidden bg-white">
      <AnimatedWrapper>
        <FirstPage />
      </AnimatedWrapper>
      <PageTwo onSelectCategory={setSelectedCategory} />
      <PageThree />
      <PageFour
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <FooterPage />
    </main>
  );
}
