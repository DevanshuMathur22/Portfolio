import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Drwebsite from "../assets/image/dr.jpg";
import hospital from "../assets/image/hospital.jpg";
import saas from "../assets/image/saas.jpg";
import petworld from "../assets/image/petworld.jpg";

const projects = [
  {
    id: 1,
    title: "Doctor Website",
    type: "Healthcare",
    desc: "A clean healthcare website with simple navigation and patient-focused sections.",
    image: Drwebsite,
    live: "https://dr-vaibhav-psi.vercel.app/",
    tags: ["React", "Tailwind", "Responsive UI"],
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 2,
    title: "Hospital Management",
    type: "Dashboard",
    desc: "A responsive dashboard for patient data, records, and admin workflow.",
    image: hospital,
    live: "https://hospital-management-one-ruby.vercel.app/",
    tags: ["React", "Next.js", "Admin UI"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Package Mover",
    type: "SaaS",
    desc: "A premium SaaS landing page with motion, structure, and clean visuals.",
    image: saas,
    live: "https://package-mover.vercel.app/",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 4,
    title: "PetWorld",
    type: "Platform UI",
    desc: "A friendly pet adoption interface with clean cards and responsive browsing.",
    image: petworld,
    live: "https://pet-world-eta.vercel.app/",
    tags: ["React", "Routing", "UI/UX"],
    color: "from-pink-500 to-rose-500",
  },
];

export default function Project() {
  return (
    <main className="inner-page project-detail-page">
      <section className="project-hero">
        <div className="site-width">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="availability">
            <span /> Portfolio projects
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            Websites, dashboards, and product interfaces.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
            A focused collection of work built with clean design, practical structure, and responsive execution.
          </motion.p>
        </div>
      </section>

      <section className="site-width page-section project-detail-list">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ delay: index * 0.06 }}
            className="project-detail-card"
          >
            <a href={project.live} target="_blank" rel="noreferrer" className="project-detail-image">
              <img src={project.image} alt={`${project.title} preview`} />
              <span><ArrowUpRight size={22} aria-hidden="true" /></span>
            </a>

            <div className="project-detail-copy">
              <p className="project-type">{project.type}</p>
              <span className="project-number">0{project.id}</span>
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href={project.live} target="_blank" rel="noreferrer" className="button button-primary">
                Live demo <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
