import { Code2, Palette } from "lucide-react";
import { motion } from "framer-motion";

export default function Service() {
  return (
    <section
      id="services"
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
          What I{" "}
          <span className="
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
          ">
            Offer
          </span>
        </h2>

        <p className="mt-4 text-slate-600">
          Delivering clean, scalable and high-performance digital solutions.
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid md:grid-cols-2 gap-6 mt-16">

        {/* LEFT BIG CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
            group p-8 rounded-2xl
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
            <Code2 size={30} className="text-indigo-600 mb-4" />

            <h3 className="text-2xl font-semibold mb-3">
              Full Web Development
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Building complete web applications from frontend to backend with clean architecture, performance optimization and scalability in mind.
            </p>

            {/* Tech Pills */}
            <div className="flex gap-3 mt-6 flex-wrap">
              {["React", "Node.js", "MongoDB", "Next.js"].map((tech, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 text-xs rounded-full
                    bg-indigo-100 text-indigo-600
                    font-medium
                  "
                >
                  {tech}
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

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* UI CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
              group p-6 rounded-2xl
              bg-white/70 backdrop-blur-xl
              border border-gray-200
              shadow-sm
              hover:-translate-y-2
              transition relative
            "
          >
            <div className="
              absolute inset-0 rounded-2xl opacity-0
              group-hover:opacity-100
              bg-gradient-to-r from-indigo-500/20 to-purple-500/20
              blur-xl transition
            "></div>

            <div className="relative z-10">
              <Palette size={26} className="text-purple-600 mb-3" />

              <h3 className="text-lg font-semibold mb-2">
                UI & Frontend
              </h3>

              <p className="text-sm text-slate-600">
                Creating clean, modern and interactive interfaces with smooth animations and responsive layouts.
              </p>
            </div>

            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-400/40"></div>
          </motion.div>

          {/* SECOND SMALL CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
              group p-6 rounded-2xl
              bg-white/70 backdrop-blur-xl
              border border-gray-200
              shadow-sm
              hover:-translate-y-2
              transition relative
            "
          >
            <div className="
              absolute inset-0 rounded-2xl opacity-0
              group-hover:opacity-100
              bg-gradient-to-r from-indigo-500/20 to-purple-500/20
              blur-xl transition
            "></div>

            <div className="relative z-10">
              <Code2 size={26} className="text-indigo-600 mb-3" />

              <h3 className="text-lg font-semibold mb-2">
                Performance & Optimization
              </h3>

              <p className="text-sm text-slate-600">
                Ensuring fast load times, clean code structure and optimized performance across devices.
              </p>
            </div>

            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-400/40"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}