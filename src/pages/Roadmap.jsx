import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "Node.js", "Express",
  "MongoDB", "JavaScript", "HTML", "CSS",
  "Git", "REST APIs"
];

const roadmap = [
  "HTML / CSS (Completed)",
  "JavaScript (Completed)",
  "React.js (Completed)",
  "Node.js & Express (Learning)",
  "MongoDB & Databases (Next)",
  "Full MERN Projects (Upcoming)"
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="
        px-6 md:px-16 py-24
        bg-gradient-to-b from-white via-indigo-50/50 to-purple-50/50
        text-slate-800 relative 
      "
    >
      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-300/30 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold">
          My{" "}
          <span className="
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
          ">
            Tech Stack & Roadmap
          </span>
        </h2>

        <p className="mt-4 text-slate-600">
          Technologies I work with and my continuous learning journey.
        </p>
      </div>

      {/* SKILLS PILLS */}
      <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="
              px-4 py-2 rounded-full text-sm font-medium
              bg-white/70 backdrop-blur-xl
              border border-gray-200
              shadow-sm
              hover:scale-105
              transition
            "
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10 mt-20 max-w-5xl mx-auto">

        {/* TIMELINE */}
        <div className="relative pl-6">
          {/* Vertical Line */}
          <div className="absolute left-2 top-0 w-[2px] h-full bg-gradient-to-b from-indigo-400 to-purple-400"></div>

          <h3 className="text-xl font-semibold mb-6">
            Learning Journey
          </h3>

          <div className="space-y-6">
            {roadmap.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500"></div>

                <p className="text-slate-700 text-sm">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CURRENT FOCUS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
            group p-6 rounded-2xl
            bg-white/70 backdrop-blur-xl
            border border-gray-200
            shadow-sm
            hover:-translate-y-2
            transition
            relative
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
            <h3 className="text-xl font-semibold mb-2">
              Current Focus
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Strengthening backend development with Node.js, Express, APIs, authentication and database integration to build complete full-stack applications.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Node.js & Express</li>
              <li>• REST APIs</li>
              <li>• Authentication (JWT)</li>
              <li>• MongoDB</li>
              <li>• Deployment</li>
            </ul>
          </div>

          {/* Border Glow */}
          <div className="
            absolute inset-0 rounded-2xl border border-transparent
            group-hover:border-indigo-400/40
            transition
          "></div>
        </motion.div>
      </div>
    </section>
  );
}