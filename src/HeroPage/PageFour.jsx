"use client";

import PortofolioWeb from "@/Components/PortofolioWeb";
import CategoryButton from "@/Components/CategoryButton";
import AnimatedWrapper from "@/Components/AnimatedWrapper";
import SectionHeader from "@/Components/SectionHeader";
import PillButton from "@/Components/PillButton";

export default function PageFour({ selectedCategory, onCategoryChange }) {
  return (
    <section id="portofolio" className="bg-[#f3f3f3] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper>
          <SectionHeader
            label="My Portfolio"
            title={
              <>
                My Latest{" "}
                <i className="text-[#FAB12F] underline decoration-[#FAB12F]">
                  Projects
                </i>
              </>
            }
            action={
              <PillButton
                label="See In Repo"
                href="https://github.com/RamliWane"
              />
            }
          />
        </AnimatedWrapper>


      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortofolioWeb selectedCategory={selectedCategory} />
      </div>
    </section>
  );
}
