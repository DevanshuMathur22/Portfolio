import { useState } from "react";
import {
  User,
  Target,
  Code2,
  Layers,
  Rocket,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Developer Mindset",
    short: "Focused on building scalable and production-ready applications.",
    full: "Focused on building scalable, maintainable and production-ready web applications with clean architecture, optimized performance and long-term usability in mind.",
    icon: <User size={24} />,
  },
  {
    title: "Problem Solving",
    short: "Approach development with logic and structure.",
    full: "I approach development with logic, structured thinking and performance optimization, ensuring solutions are efficient, scalable and easy to maintain.",
    icon: <Target size={24} />,
  },
  {
    title: "Frontend Expertise",
    short: "Modern UI with React & Next.js.",
    full: "Creating modern, responsive and accessible user interfaces using React, Next.js and clean component-based architecture with best UI/UX practices.",
    icon: <Layers size={24} />,
  },
  {
    title: "Backend Systems",
    short: "APIs and data handling with Node.js.",
    full: "Building robust backend systems, REST APIs and managing data flow using Node.js, Express and databases with proper structure and security practices.",
    icon: <Code2 size={24} />,
  },
  {
    title: "Real Projects",
    short: "Hands-on full-stack experience.",
    full: "Built multiple full-stack applications with real-world functionality, focusing on performance, scalability and practical use cases across frontend and backend.",
    icon: <Rocket size={24} />,
  },
  {
    title: "UI & Experience",
    short: "Clean UI and smooth interactions.",
    full: "Designing clean interfaces, smooth animations and user-focused experiences that enhance usability, engagement and overall product quality.",
    icon: <Sparkles size={24} />,
  },
];

export default function About() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="about"
      className="
        px-6 md:px-16 py-24
        bg-gradient-to-b from-white via-indigo-50/50 to-purple-50/50
        text-slate-800 relative 
      "
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold">
          About{" "}
          <span className="
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
          ">
            My Work
          </span>
        </h2>

        <p className="mt-4 text-slate-600">
          Focused on building scalable systems, clean UI and real-world applications.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
        {data.map((item, i) => {
          const isOpen = expanded === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="
                group relative p-6 rounded-2xl
                bg-white/60 backdrop-blur-xl
                border border-gray-200
                shadow-sm
                hover:-translate-y-2
                transition duration-300
              "
            >
              {/* Glow */}
              <div className="
                absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-100
                bg-gradient-to-r from-indigo-500/20 to-purple-500/20
                blur-xl transition
              "></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 text-indigo-600">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {isOpen ? item.full : item.short}
                </p>

                {/* Button */}
                <button
                  onClick={() =>
                    setExpanded(isOpen ? null : i)
                  }
                  className="
                    mt-3 text-sm font-medium
                    text-indigo-600 hover:text-indigo-800
                    transition
                  "
                >
                  {isOpen ? "Show Less" : "Read More"}
                </button>
              </div>

              {/* Border highlight */}
              <div className="
                absolute inset-0 rounded-2xl border border-transparent
                group-hover:border-indigo-400/40
                transition
              "></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}