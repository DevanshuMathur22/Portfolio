import {
  Code2,
  Server,
  Database,
  Figma,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend Development",
    text: "Building modern, responsive and high-performance user interfaces.",
    tags: ["React", "Next.js", "Tailwind"],
    icon: <Code2 size={24} />,
  },
  {
    title: "Backend Development",
    text: "Developing scalable APIs and server-side logic with clean architecture.",
    tags: ["Node.js", "Express", "REST APIs"],
    icon: <Server size={24} />,
  },
  {
    title: "Database Systems",
    text: "Managing data efficiently with optimized queries and structure.",
    tags: ["MongoDB", "SQL", "Mongoose"],
    icon: <Database size={24} />,
  },
  {
    title: "UI/UX Design",
    text: "Designing clean interfaces with focus on usability and user experience.",
    tags: ["Figma", "Wireframing", "UX"],
    icon: <Figma size={24} />,
  },
];

export default function MyRole() {
  return (
    <section
      id="skills"
      className="
        px-6 md:px-16 py-24
        bg-gradient-to-b from-white via-indigo-50/50 to-purple-50/50
        text-slate-800 relative 
      "
    >
      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-300/30 blur-3xl rounded-full"></div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            What I{" "}
            <span className="
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              bg-clip-text text-transparent
            ">
              Do
            </span>
          </h2>

          <p className="mt-4 text-slate-600 max-w-md">
            I build complete web solutions from frontend to backend with focus on performance, scalability and user experience.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                group p-6 rounded-2xl
                bg-white/70 backdrop-blur-xl
                border border-gray-200
                shadow-sm
                hover:-translate-y-2
                transition relative
              "
            >
              {/* Glow */}
              <div className="
                absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-100
                bg-gradient-to-r from-indigo-500/20 to-purple-500/20
                blur-xl transition
              "></div>

              <div className="relative z-10">
                <div className="mb-3 text-indigo-600">
                  {s.icon}
                </div>

                <h3 className="text-lg font-semibold mb-1">
                  {s.title}
                </h3>

                <p className="text-sm text-slate-600 mb-3">
                  {s.text}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="
                        px-2 py-1 text-xs rounded-full
                        bg-indigo-100 text-indigo-600
                        font-medium
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Border Glow */}
              <div className="
                absolute inset-0 rounded-2xl border border-transparent
                group-hover:border-indigo-400/40
                transition
              "></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}