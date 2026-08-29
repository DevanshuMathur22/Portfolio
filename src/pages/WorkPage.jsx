import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import PageHeader from "../components/PageHeader";
import doctorProject from "../assets/image/dr.jpg";
import hospitalProject from "../assets/image/hospital.jpg";
import saasProject from "../assets/image/saas.jpg";
import petProject from "../assets/image/petworld.jpg";

const projects = [
  {
    title: "Dr. Vaibhav",
    type: "Healthcare website",
    text: "A reassuring medical practice website where patients can find essential information and next steps without friction.",
    image: doctorProject,
    url: "https://dr-vaibhav-psi.vercel.app/",
    tags: ["React", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Hospital Management",
    type: "Operations dashboard",
    text: "A focused admin experience for patient management, operational data, and everyday hospital workflows.",
    image: hospitalProject,
    url: "https://hospital-management-one-ruby.vercel.app/",
    tags: ["React", "Next.js", "Dashboard"],
  },
  {
    title: "Package Mover",
    type: "SaaS landing page",
    text: "A premium product story with deliberate motion, clear hierarchy, and a fast path to understanding the offer.",
    image: saasProject,
    url: "https://package-mover.vercel.app/",
    tags: ["Next.js", "Motion", "Product UI"],
  },
  {
    title: "PetWorld",
    type: "Adoption platform",
    text: "A friendly browsing experience for discovering pets, with an emphasis on clarity, filtering, and responsive layouts.",
    image: petProject,
    url: "https://pet-world-eta.vercel.app/",
    tags: ["React", "Routing", "UI/UX"],
  },
];

export default function WorkPage() {
  return (
    <main className="inner-page">
      <PageHeader eyebrow="SELECTED WORK" title="A small collection of useful, carefully built web experiences.">
        Each project is a chance to make the path clearer, the interface stronger, and the technology quietly dependable.
      </PageHeader>
      <section className="site-width page-section work-grid-page">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="work-page-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ delay: index * 0.06 }}
          >
            <a className="work-page-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
              <img src={project.image} alt={`${project.title} preview`} />
              <span><ArrowUpRight size={19} aria-hidden="true" /></span>
            </a>
            <div className="work-page-copy">
              <p className="project-type">{project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.text}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href={project.url} target="_blank" rel="noreferrer" className="text-link">Open live demo <ExternalLink size={15} aria-hidden="true" /></a>
            </div>
          </motion.article>
        ))}
      </section>
      <section className="site-width page-section work-note">
        <div><p className="eyebrow">NEXT PROJECT</p><h2>Have a product worth making clearer?</h2></div>
        <a href="/contact" className="button button-primary">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></a>
      </section>
    </main>
  );
}
