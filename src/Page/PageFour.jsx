"use client";
import React from "react";
import PortofolioApp from "@/Components/PortofolioApp";
import PortofolioUI from "@/Components/PortofolioUI";
import PortofolioWeb from "@/Components/PortofolioWeb";
import CategoryButton from "@/Components/CategoryButton";
import AnimatedWrapper from "@/Components/AnimatedWrapper";

export default function PageFour() {
    return (
        <>
            <div>
                <div className="flex flex-col items-center mb-5 justify-center px-8 md:mt-35 md:ml-5">
                    <AnimatedWrapper animation="fade-left" delay={100}>
                        <p className="text-xl font-mono text-black">
                            all the projects I have worked on
                        </p>
                    </AnimatedWrapper>
                    <AnimatedWrapper animation="fade-left" delay={200}>
                        <h1 className="text-3xl underline font-bold text-black">
                            Portofolio
                        </h1>
                    </AnimatedWrapper>
                </div>

                <CategoryButton />

                <div className={`flex justify-center gap-5 flex-wrap`}>
                    <AnimatedWrapper animation="scale-in" delay={100}>
                        <PortofolioUI />
                    </AnimatedWrapper>
                    <AnimatedWrapper animation="scale-in" delay={200}>
                        <PortofolioWeb />
                    </AnimatedWrapper>
                    <AnimatedWrapper animation="scale-in" delay={300}>
                        <PortofolioApp />
                    </AnimatedWrapper>
                    <AnimatedWrapper animation="scale-in" delay={400}>
                        <PortofolioUI />
                    </AnimatedWrapper>
                    <AnimatedWrapper animation="scale-in" delay={500}>
                        <PortofolioWeb />
                    </AnimatedWrapper>
                    <AnimatedWrapper animation="scale-in" delay={600}>
                        <PortofolioApp />
                    </AnimatedWrapper>
                </div>
            </div>
        </>
    );
}
