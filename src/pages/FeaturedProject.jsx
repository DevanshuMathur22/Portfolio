import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import hospital from "../assets/image/hospital.jpg";

export default function FeaturedProject() {
  return (
    <section className="section featured-project-section">
      <div className="site-width featured-project-card">
        <motion.div className="featured-project-image" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={hospital} alt="Hospital Management dashboard preview" />
        </motion.div>

        <motion.div className="featured-project-copy" initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="eyebrow">FEATURED PROJECT</p>
          <h2>Hospital Management Dashboard</h2>
          <p>A responsive dashboard for patient records, operations, and admin workflow.</p>
          <div className="tags">
            <span>React</span>
            <span>Next.js</span>
            <span>Dashboard</span>
          </div>
          <div className="hero-actions">
            <a href="https://hospital-management-one-ruby.vercel.app/" target="_blank" rel="noreferrer" className="button button-primary">
              Live demo <ExternalLink size={16} />
            </a>
            <a href="/work" className="button button-secondary">
              More work <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
