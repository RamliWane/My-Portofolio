import React from "react";
import FirstPage from "../Page/FirstPage";
import PageTwo from "@/Page/PageTwo";
import PageThree from "@/Page/PageThree";

export default function Home() {
  return (
    <main>
        <FirstPage></FirstPage>
        <PageTwo></PageTwo>
        <PageThree></PageThree>
    </main>
  );
}