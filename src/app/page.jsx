import React from "react";
import FirstPage from "../HeroPage/FirstPage";
import PageTwo from "@/HeroPage/PageTwo";
import PageThree from "@/HeroPage/PageThree";
import PageFour from "@/HeroPage/PageFour";
import FooterPage from "@/HeroPage/FooterPage";

export default function Home() {
  return (
    <main className="overflow-y-auto overflow-x-hidden">
      <FirstPage />
      <PageTwo />
      <PageThree />
      <PageFour />
      <FooterPage />
    </main>
  );
}