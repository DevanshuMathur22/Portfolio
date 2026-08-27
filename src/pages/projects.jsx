import { motion } from "framer-motion"

import {
  ExternalLink,
  ArrowUpRight,
} from "lucide-react"

import Drwebsite from "../assets/image/dr.jpg"
import hospital from "../assets/image/hospital.jpg"
import saas from "../assets/image/saas.jpg"

const projects = [
  {
    id: 1,
    title: "Dr-Website",
    desc: "A modern healthcare website for a medical practice, featuring a clean design and easy navigation.",
    image: Drwebsite,
    live: "https://dr-vaibhav-psi.vercel.app/",
    tags: ["React", "Tailwind", "UI/UX"],
    color: "from-amber-500 to-orange-500",
  },

  {
    id: 2,
    title: "Hospital Management",
    desc: "Modern hospital dashboard with patient management, analytics and responsive admin panels.",
    image: hospital,
    live: "https://hospital-management-one-ruby.vercel.app/",
    tags: ["React", "Dashboard", "Framer Motion", "Next.js"],
    color: "from-emerald-500 to-teal-500",
  },

  {
    id: 3,
    title: "SaaS Landing Page",
    desc: "Apple inspired SaaS website with premium animations, glassmorphism and smooth interactions.",
    image: saas,
    live: "https://package-mover.vercel.app/",
    tags: ["Next.js", "Tailwind", "Animation"],
    color: "from-indigo-500 to-purple-500",
  },
]

export default function Project() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f8f8] py-28">
      {/* 🔥 BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_55%)]" />

      {/* 🔥 GRID */}
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 BLOBS */}
      <div className="absolute -top-40 -left-40 w-[380px] h-[380px] rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-[380px] h-[380px] rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 🔥 HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              inline-flex items-center
              rounded-full
              border border-black/10
              bg-white/70
              px-5 py-2
              text-sm
              text-slate-600
              backdrop-blur-xl
              shadow-lg
            "
          >
            Portfolio Projects
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="
              mt-6
              text-5xl md:text-7xl
              font-semibold
              tracking-tight
              leading-[0.95]
            "
          >
            <span className="bg-gradient-to-b from-black via-slate-700 to-slate-500 bg-clip-text text-transparent">
              Selected
              <br />
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              mt-6
              text-base md:text-lg
              text-slate-500
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            A collection of premium UI projects,
            dashboards and modern web experiences
            crafted with performance and aesthetics.
          </motion.p>
        </div>

        {/* 🔥 PROJECTS */}
        <div className="mt-24 space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border border-white/20
                bg-white/70
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(0,0,0,0.06)]
              "
            >
              <div className="grid lg:grid-cols-2">
                {/* 🔥 IMAGE */}
                <div className="relative overflow-hidden">
                  {/* overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-[320px] md:h-[500px]
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* floating icon */}
                  <div
                    className="
                      absolute
                      top-6 right-6
                      z-20
                      flex items-center justify-center
                      w-14 h-14
                      rounded-full
                      border border-white/20
                      bg-white/20
                      backdrop-blur-xl
                    "
                  >
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* 🔥 CONTENT */}
                <div className="relative flex flex-col justify-center p-8 md:p-14">
                  {/* glow */}
                  <div
                    className={`
                      absolute inset-0 opacity-0
                      group-hover:opacity-100
                      transition duration-700
                      bg-gradient-to-br ${project.color}/10
                      blur-3xl
                    `}
                  />

                  <div className="relative z-10">
                    {/* number */}
                    <span className="text-sm text-slate-400">
                      0{project.id}
                    </span>

                    {/* title */}
                    <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                      {project.title}
                    </h2>

                    {/* desc */}
                    <p className="mt-6 text-slate-500 leading-relaxed text-lg">
                      {project.desc}
                    </p>

                    {/* tags */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="
                            rounded-full
                            border border-black/5
                            bg-black/[0.03]
                            px-4 py-2
                            text-sm
                            text-slate-600
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                      <motion.a
                        whileHover={{
                          scale: 1.03,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className={`
                          flex items-center gap-2
                          rounded-full
                          bg-gradient-to-r ${project.color}
                          px-6 py-3
                          text-sm font-medium
                          text-white
                          shadow-lg
                        `}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>

                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#f8f8f8]" />
    </section>
  )
}
