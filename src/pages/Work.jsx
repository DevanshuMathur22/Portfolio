import {
  Code2,
  Settings,
  Lightbulb,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Frontend Development",
    desc: "Building modern, responsive and interactive user interfaces using React and clean component architecture.",
    icon: <Code2 size={26} />,
  },
  {
    title: "Problem Solving",
    desc: "Breaking down complex problems into structured, scalable and maintainable solutions.",
    icon: <Settings size={26} />,
  },
  {
    title: "Continuous Learning",
    desc: "Constantly exploring new tools, frameworks and best practices to stay updated in development.",
    icon: <Lightbulb size={26} />,
  },
  {
    title: "Collaboration",
    desc: "Working effectively in teams, sharing ideas and contributing to impactful digital products.",
    icon: <Users size={26} />,
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="
        px-6 md:px-16 py-24
        bg-gradient-to-b from-white via-indigo-50/50 to-purple-50/50
        text-slate-800 relative 
      "
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-300/30 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold">
          How{" "}
          <span className="
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
          ">
            I Work
          </span>
        </h2>

        <p className="mt-4 text-slate-600">
          My approach to building modern, scalable and user-focused applications.
        </p>
      </div>

      {/* GRID */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16"
      >
        {data.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
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
            <div className="relative z-10 text-center">
              <div className="mb-4 text-indigo-600 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Border Glow */}
            <div className="
              absolute inset-0 rounded-2xl border border-transparent
              group-hover:border-indigo-400/40
              transition
            "></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}