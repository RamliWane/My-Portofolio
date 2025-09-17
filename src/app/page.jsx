import React from "react";
import FirstPage from "../Page/FirstPage";
import PageTwo from "@/Page/PageTwo";
import PageThree from "@/Page/PageThree";
import PageFour from "@/Page/PageFour";
import FooterPage from "@/Page/FooterPage";

export default function Home() {
  return (
    <main className="overflow-y-auto overflow-x-hidden">
        <FirstPage></FirstPage>
        <PageTwo></PageTwo>
        <PageFour></PageFour>
        <PageThree></PageThree>
        <FooterPage></FooterPage>
    </main>
  );
}