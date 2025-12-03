import React from "react";
import { FaLaptopCode, FaPalette } from "react-icons/fa";

export default function Service() {
  return (
    <section id="services" className="px-10 py-20 bg-black text-white ">
      <h2 className="text-4xl font-bold text-center tracking-wide">What I Offer</h2>
      <div className="w-36 h-1 bg-yellow-500 mx-auto mt-3 rounded"></div>

      <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-center leading-relaxed">
        I create clean, modern and high-performance digital experiences—from UI design to full responsive development, ensuring your brand looks professional online.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* Web Development */}
        <div className="p-8 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300">
          <FaLaptopCode className="text-5xl text-purple-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-300 leading-relaxed">
            I build fast, responsive and SEO-friendly websites using modern frameworks and clean code that works across all devices.
          </p>

          {/* Tech Pills */}
          <div className="flex gap-3 mt-5 flex-wrap">
            {[
              { tech: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
              { tech: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
              { tech: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="px-4 py-2 bg-gray-800 rounded-full text-xs font-medium text-white hover:bg-purple-600 hover:shadow-[0_0_15px_#a200ff] transition cursor-pointer"
              >
                {item.tech}
              </a>
            ))}
          </div>
        </div>

        {/* Frontend UI Development */}
        <div className="p-8 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300">
          <FaPalette className="text-5xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Frontend & UI Development</h3>
          <p className="text-gray-300 leading-relaxed">
            I design visually polished user interfaces with smooth interactions, animations, and pixel-perfect layouts using React & Tailwind.
          </p>

          {/* Tech Pills */}
          <div className="flex gap-3 mt-5 flex-wrap">
            {[
              { tech: "React", link: "https://reactjs.org" },
              { tech: "Tailwind", link: "https://tailwindcss.com" },
              { tech: "Figma", link: "https://www.figma.com/" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="px-4 py-2 bg-gray-800 rounded-full text-xs font-medium text-white hover:bg-purple-600 hover:shadow-[0_0_15px_#a200ff] transition cursor-pointer"
              >
                {item.tech}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
