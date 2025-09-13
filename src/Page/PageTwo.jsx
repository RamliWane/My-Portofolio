import React from "react";
import CategoryWorks from "../Components/CategoryWorks";

export default function PageTwo() {
  return (
    <div className="flex">
        <div className="flex flex-wrap">
            <div className="flex flex-col items-start justify-start px-8 lg:mt-65 lg:ml-26 md:mt-35 md:ml-5 mt-30">
                <p className="text-xl font-mono text-black">all the projects I have worked on</p>
                <h1 className="text-3xl underline font-bold text-black">My Works</h1>
            </div>
            <div className="flex justify-center">
                <CategoryWorks></CategoryWorks>
            </div>
        </div>
    </div>
  );
}
