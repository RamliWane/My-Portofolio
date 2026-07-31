import React from "react";

const SOCIALS = [
  {
    href: "https://github.com/RamliWane",
    icon: "./github.png",
    alt: "GitHub",
  },
  {
    href: "https://www.instagram.com/wanee27_/",
    icon: "./instagram.png",
    alt: "Instagram",
  },
  {
    href: "mailto:ramlisilawane865@gmail.com",
    icon: "./email.png",
    alt: "Email",
  },
];

export default function SocialIcon({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map((social) => (
        <a
          key={social.alt}
          href={social.href}
          target={social.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={social.alt}
          className="group flex items-center justify-center bg-white w-12 h-12 rounded-xl shadow-md border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#FAB12F]/40"
        >
          <img
            src={social.icon}
            alt={social.alt}
            className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
}
