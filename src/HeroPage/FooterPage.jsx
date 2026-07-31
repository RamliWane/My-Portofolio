"use client";

import React, { useState } from "react";
import AnimatedWrapper from "@/Components/AnimatedWrapper";
import SocialIcon from "@/Components/SocialIcon";

const inputClass =
  "w-full px-0 py-3 text-black bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-[#FAB12F] transition-colors placeholder-gray-500";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function FooterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:ramlisilawane865@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Hi Ramli,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer id="footer" className="px-4 pt-20 lg:pt-28 pb-10">
      <div className="max-w-6xl mx-auto">
        <AnimatedWrapper>
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-center">
            <div className="w-full lg:w-2/5">
              <div className="bg-white w-full max-w-md mx-auto lg:mx-0 rounded-3xl p-8 shadow-xl border border-black/5">
                <div className="space-y-7">
                  <div>
                    <p className="text-lg font-mono text-black/70 mb-2">
                      <i className="text-[#FAB12F]">--</i> Contact
                    </p>
                    <h2 className="text-3xl font-bold text-black">
                      Get In{" "}
                      <i className="text-[#FAB12F] underline decoration-[#FAB12F]">
                        Touch
                      </i>
                    </h2>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        Email
                      </h3>
                      <a
                        href="mailto:ramlisilawane865@gmail.com"
                        className="text-lg text-gray-800 hover:text-[#457476] transition-colors break-all"
                      >
                        ramlisilawane865@gmail.com
                      </a>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        Whatsapp
                      </h3>
                      <a
                        href="https://wa.me/6281211868821"
                        className="text-lg text-gray-800 hover:text-[#457476] transition-colors"
                      >
                        +62-812-1186-8821
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-black/5">
                    <SocialIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/5 lg:pl-8">
              <div className="max-w-xl mx-auto lg:mx-0">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  Let&apos;s talk about{" "}
                  <i className="text-[#FAB12F] underline decoration-[#FAB12F]">
                    your project
                  </i>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Collaboration or questions? Send me a message and I&apos;ll
                  get back to you as soon as possible.
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />

                  <textarea
                    name="message"
                    placeholder="Write your message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="bg-[#2B5136] text-white font-bold py-3 px-8 rounded-full text-base transition-all duration-200 flex items-center gap-2 group relative z-10 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-[#FAB12F] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-10" />
                      SEND
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 mt-16 pt-8">
          <p className="text-black/80">
            © {new Date().getFullYear()} Ramli Silawane. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#2B5136] text-white font-semibold rounded-full px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Back to top
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
