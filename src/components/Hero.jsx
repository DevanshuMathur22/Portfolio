import hero from "../assets/hero.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  // Stagger container
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Each text animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="
        min-h-[70vh] md:min-h-[90vh]
        flex items-center
        px-6 md:px-16 py-16 md:py-24
        bg-white text-slate-800 relative 
      "
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-200 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={item}
            className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-indigo-100 text-indigo-600 font-medium"
          >
            Full Stack Developer
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Building{" "}
            <span className="
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              bg-clip-text text-transparent
            ">
              scalable web applications
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg text-slate-600"
          >
            Hi, I'm{" "}
            <span className="font-semibold text-slate-800">
              Devanshu Mathur
            </span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 text-slate-600 leading-relaxed max-w-lg"
          >
            I specialize in{" "}
            <span className="text-indigo-600 font-medium">
              React, Next.js, and backend systems
            </span>{" "}
            — creating fast, responsive, and production-ready applications with clean architecture.
          </motion.p>

          <motion.div
            variants={item}
            className="flex gap-4 mt-8 flex-wrap"
          >
            <a
              href="#projects"
              className="
                px-6 py-3 rounded-xl text-lg font-medium
                bg-slate-900 text-white
                hover:bg-slate-800
                hover:scale-105
                transition duration-300
              "
            >
              View Work
            </a>

            <a
              href="#contact"
              className="
                px-6 py-3 rounded-xl text-lg font-medium
                border border-slate-300
                hover:bg-slate-100
                transition duration-300
              "
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end relative"
        >
          {/* Image */}
          <div className="
            w-60 h-60 md:w-80 md:h-80
            rounded-2xl overflow-hidden
            shadow-xl
          ">
            <img
              src={hero}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Tags */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="
              absolute top-[-10px] right-[-10px]
              bg-white border border-gray-200
              shadow-md rounded-lg px-3 py-1 text-sm
            "
          >
            React ⚡
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="
              absolute bottom-[-10px] left-[-10px]
              bg-white border border-gray-200
              shadow-md rounded-lg px-3 py-1 text-sm
            "
          >
            Node.js 🚀
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 text-sm"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}