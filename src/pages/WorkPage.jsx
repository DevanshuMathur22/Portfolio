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
    type: "Healthcare",
    text: "Clean doctor website with simple sections and patient-friendly UI.",
    image: doctorProject,
    url: "https://dr-vaibhav-psi.vercel.app/",
    tags: ["React", "Tailwind", "Responsive"],
  },
  {
    title: "Hospital Management",
    type: "Dashboard",
    text: "Admin dashboard for patient records and hospital workflow.",
    image: hospitalProject,
    url: "https://hospital-management-one-ruby.vercel.app/",
    tags: ["React", "Next.js", "Admin UI"],
  },
  {
    title: "Package Mover",
    type: "SaaS",
    text: "Premium landing page with clean layout and smooth motion.",
    image: saasProject,
    url: "https://package-mover.vercel.app/",
    tags: ["Next.js", "Motion", "UI"],
  },
  {
    title: "PetWorld",
    type: "Platform",
    text: "Pet adoption interface with clear cards and responsive browsing.",
    image: petProject,
    url: "https://pet-world-eta.vercel.app/",
    tags: ["React", "Routing", "UX"],
  },
];

export default function WorkPage() {
  return (
    <main className="inner-page work-page">
      <PageHeader eyebrow="WORK" title="Selected work.">
        Clean websites, dashboards, and product interfaces.
      </PageHeader>

      <section className="site-width page-section work-grid-page">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="work-page-card premium-work-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ delay: index * 0.06 }}
          >
            <a
              className="work-page-image"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
            >
              <img src={project.image} alt={`${project.title} preview`} />
              <span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </span>
            </a>

            <div className="work-page-copy">
              <p className="project-type">{project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.text}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Live demo <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="site-width page-section work-note">
        <div>
          <p className="eyebrow">AVAILABLE</p>
          <h2>Need a similar project?</h2>
        </div>

        <a href="/contact" className="button button-primary">
          Start a project <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
