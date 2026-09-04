import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const points = [
  "Clean and responsive UI",
  "React and Next.js development",
  "Backend and database flow",
  "Fast build and final polish",
];

export default function About() {
  return (
    <section id="about" className="section about-mini-section">
      <div className="site-width about-mini-layout">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="eyebrow">ABOUT</p>
          <h2 className="section-title">Developer with design sense.</h2>
          <p className="section-copy">
            I build clean websites and web apps that look good, load fast, and stay easy to use.
          </p>
          <a href="/about" className="button button-primary">More about me <ArrowUpRight size={17} /></a>
        </motion.div>

        <motion.div className="about-mini-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {points.map((point) => (
            <p key={point}><CheckCircle2 size={18} />{point}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
