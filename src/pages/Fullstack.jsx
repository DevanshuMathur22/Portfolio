import {
  Code2,
  Server,
  Database,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Frontend Development",
    desc: "Building modern UI using React and component-based architecture with performance and responsiveness.",
    highlight: "React & Modern UI",
    icon: <Code2 size={22} />,
  },
  {
    title: "Backend Development",
    desc: "Developing scalable APIs and handling server-side logic with proper structure and performance.",
    highlight: "Node.js & APIs",
    icon: <Server size={22} />,
  },
  {
    title: "Database Systems",
    desc: "Managing structured data efficiently with optimized queries and scalable database design.",
    highlight: "MongoDB & SQL",
    icon: <Database size={22} />,
  },
  {
    title: "Problem Solving",
    desc: "Combining frontend, backend and logic to solve real-world problems effectively.",
    highlight: "Logic & Architecture",
    icon: <Lightbulb size={22} />,
  },
];

export default function Fullstack() {
  return (
    <section
      id="fullstack"
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
          Full Stack{" "}
          <span className="
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
          ">
            Development
          </span>
        </h2>

        <p className="mt-4 text-slate-600">
          Building complete web applications with clean architecture, performance and scalability.
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
            <div className="relative z-10">
              <div className="mb-4 text-indigo-600">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Highlight Text */}
              <p className="
                text-sm font-medium mb-2
                bg-gradient-to-r from-indigo-500 to-purple-500
                bg-clip-text text-transparent
              ">
                {item.highlight}
              </p>

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