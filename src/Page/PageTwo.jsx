"use client";
import CategoryWorks from "../Components/CategoryWorks";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

export default function PageTwo() {
  return (    
      <div className="flex">
        <div className="w-full mt-15 mb-20">
          <div className="flex flex-col justify-start items-start px-8 mb-20 lg:mt-32 lg:mr-10 md:mt-20 md:ml-5">
          <AnimatedWrapper animation="fade-left" delay={100}>  
              <p className="text-xl font-mono text-black ">
                all the projects I have worked on
              </p>
          </AnimatedWrapper>
          <AnimatedWrapper animation="fade-left" delay={200}>  
              <h1 className="text-3xl underline font-bold text-black ">
                My Works
              </h1>
          </AnimatedWrapper>
          </div>
          <AnimatedWrapper animation="fade-left" delay={300}>  
            <div className="flex justify-center px-8 lg:mr-10 md:ml-5 ">
              <CategoryWorks></CategoryWorks>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
  );
}