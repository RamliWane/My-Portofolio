import React from "react";
import data from "../data/data.json";
import Link from "next/link";

const CARD_BG = ["#2B5136", "#FAB12F", "#99E5B5", "#F5E6D3"];

const getLayoutClass = (index) => {
  if (index === 0) return "lg:row-span-2";
  if (index >= 3 && index <= 4) return "lg:col-span-2";
  if (index === 6) return "lg:col-span-2 lg:row-span-2";
  return "";
};

export default function PortofolioWeb({ selectedCategory = "All" }) {
  const filteredProjects = data.users.filter(
    (user) => selectedCategory === "All" || user.category === selectedCategory
  );

  return (
    <div className="bg-transparent pt-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
        {filteredProjects.map((user, index) => (
          <Link
            href={`/detail/${user.id}`}
            key={user.id}
            aria-label={user.name}
            className={`group rounded-3xl overflow-hidden relative transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${getLayoutClass(
              index
            )}`}
            style={{ backgroundColor: CARD_BG[index % CARD_BG.length] }}
          >
            <img
              src={user.image}
              alt={user.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white text-black opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H8M17 7v9"
                />
              </svg>
            </div>

           
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl font-semibold text-black">
            Belum ada project di kategori ini.
          </p>
          <p className="text-gray-600 mt-2">
            Coba pilih kategori lain untuk melihat project terbaru saya.
          </p>
        </div>
      )}
    </div>
  );
}
