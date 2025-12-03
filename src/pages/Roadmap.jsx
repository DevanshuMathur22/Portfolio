import React from "react";
import {
  FaJava,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaPython,
  FaSwift,
} from "react-icons/fa";
import {
  SiKotlin,
  SiC,
  SiCplusplus,
  SiMysql,
  SiJavascript,
  SiRust,
} from "react-icons/si";

import roadmap from "../assets/pdfs/roadmap.pdf";

export default function Roadmap() {
  const techStack = [
    { name: "Java", icon: <FaJava className="text-3xl text-red-500" />, level: "Intermediate" },
    { name: "PHP", icon: <FaPhp className="text-3xl text-indigo-500" />, level: "Beginner" },
    { name: "Kotlin", icon: <SiKotlin className="text-3xl text-purple-400" />, level: "Beginner" },
    { name: "C", icon: <SiC className="text-3xl text-blue-500" />, level: "Intermediate" },
    { name: "C++", icon: <SiCplusplus className="text-3xl text-blue-400" />, level: "Intermediate" },
    { name: "SQL", icon: <SiMysql className="text-3xl text-green-500" />, level: "Intermediate" },
    { name: "JavaScript", icon: <SiJavascript className="text-3xl text-yellow-400" />, level: "Advanced" },
    { name: "React", icon: <FaReact className="text-3xl text-cyan-400" />, level: "Advanced" },
    { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-500" />, level: "Learning" },
    { name: "Python", icon: <FaPython className="text-3xl text-yellow-500" />, level: "Intermediate" },
    { name: "Swift", icon: <FaSwift className="text-3xl text-orange-400" />, level: "Beginner" },
    { name: "Rust", icon: <SiRust className="text-3xl text-gray-400" />, level: "Beginner" },
  ];

  return (
    <section
      id="my-tech-stack"
      className="px-10 py-20 text-white bg-gradient-to-r from-indigo-900 via-black to-indigo-900 h-screen"
    >
      <h2 className="text-4xl font-bold text-center tracking-wide">My Tech Stack / RoadMap</h2>
      <div className="w-60 h-1 bg-yellow-500 mx-auto mt-3 rounded"></div>

      {/* Tech Box Grid */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="p-4 bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-700 shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_40px_#6a00ff] hover:scale-105 transition w-40 text-center"
          >
            <div className="flex justify-center mb-2">{tech.icon}</div>
            <p className="font-semibold">{tech.name}</p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2 overflow-hidden">
              <div
                className={`h-2 rounded-full ${
                  tech.level === "Beginner"
                    ? "w-1/4 bg-red-500"
                    : tech.level === "Intermediate"
                    ? "w-2/4 bg-yellow-500"
                    : tech.level === "Advanced"
                    ? "w-3/4 bg-green-500"
                    : "w-1/3 bg-blue-500"
                }`}
              ></div>
            </div>

            <p className="text-xs mt-1 text-gray-400">{tech.level}</p>
          </div>
        ))}
      </div>

      {/* ROADMAP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">

        {/* Completed Roadmap */}
        <div className="p-8 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition text-center">
          <FaReact className="text-5xl text-purple-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold">My Learning Roadmap</h3>

          <ul className="text-left text-gray-300 mt-6 space-y-2">
            <li>✅ HTML / CSS - Completed</li>
            <li>✅ JavaScript - Completed</li>
            <li>✅ React.js - Completed</li>
            <li>🚀 Node.js / Express - Learning</li>
            <li>🔜 MongoDB & Databases - Next</li>
            <li>🎯 Full MERN Projects - Upcoming</li>
          </ul>

          <a
            href={roadmap}
            download="roadmap.pdf"
            className="mt-6 inline-block bg-purple-600 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            Download Roadmap PDF
          </a>
        </div>

        {/* Node.js Roadmap */}
        <div className="p-8 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition text-center">
          <FaNodeJs className="text-5xl text-green-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Current Focus: Node.js</h3>

          <ul className="text-left text-gray-300 mt-6 space-y-2">
            <li>📌 JavaScript Refresh + ES6</li>
            <li>📌 Node.js Core Modules (FS, Path, HTTP)</li>
            <li>📌 Express.js Framework</li>
            <li>📌 REST APIs + Routing</li>
            <li>📌 Middleware + Auth + JWT</li>
            <li>📌 MongoDB + Mongoose</li>
            <li>📌 Postman Testing</li>
            <li>📌 Deploy APIs to Render/Vercel</li>
          </ul>

          <p className="text-gray-400 mt-4 text-sm">
            Completing backend foundations to build full-stack MERN apps.
          </p>
        </div>

      </div>
    </section>
  );
}
