import React from "react";
import FirstPage from "../Page/FirstPage";
import PageTwo from "@/Page/PageTwo";

export default function Home() {
  return (
    <main>
      <div>
        <FirstPage></FirstPage>
      </div>
      <div>
        <PageTwo></PageTwo>
      </div>
    </main>
  );
}