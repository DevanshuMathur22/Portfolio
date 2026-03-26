// FeaturedProject.jsx
import { motion } from "framer-motion";
import projectImg from "../assets/image/petworld.jpg"; // change if needed

export default function FeaturedProject() {
  return (
    <section
        id="featured-project"
      className="
        px-6 md:px-16 py-24
        bg-gradient-to-b from-white via-indigo-50/50 to-purple-50/50
        text-slate-800 relative 
      "
    >
      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-300/30 blur-3xl rounded-full"></div>
      {/* <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-300/30 blur-3xl rounded-full"></div> */}

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="group relative rounded-2xl overflow-hidden"
        >
          <img
            src={projectImg}
            alt="project"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <h3 className="text-xl font-semibold mt-4">
            PetWorld — Adoption Platform
          </h3>

          <p className="text-slate-600 mt-4 leading-relaxed">
            A complete pet adoption platform where users can browse, filter and explore verified pets with a smooth user experience. Focused on UI clarity, responsiveness and performance.
          </p>

          {/* Tech */}
          <div className="flex gap-3 mt-5 flex-wrap">
            {["React", "Tailwind", "Routing", "UI/UX"].map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600 font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://pet-world-eta.vercel.app/"
              target="_blank"
              className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition"
            >
              Live Demo
            </a>

            <a
              href="#projects"
              className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              View All
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}