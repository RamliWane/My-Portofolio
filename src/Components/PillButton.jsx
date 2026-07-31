import React from "react";

export default function PillButton({ label, onClick, href, className = "" }) {
  const content = (
    <>
      <span className="bg-[#2B5136] text-white font-semibold rounded-full px-5 py-2 transition-colors duration-300">
        {label}
      </span>
      <span className="bg-white rounded-full w-9 h-9 flex items-center justify-center text-black font-bold text-lg transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </>
  );

  const classes = `group flex items-center bg-[#FAB12F] rounded-full h-11 p-1 gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FAB12F]/40 active:translate-y-0 ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
