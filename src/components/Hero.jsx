import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";
import hero from "../assets/hero.jpg";

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="home" className="legacy-hero">
      <div className="legacy-glow legacy-glow-one" />
      <div className="legacy-glow legacy-glow-two" />

      <div className="site-width legacy-hero-grid">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        >
          <motion.p variants={item} className="availability">
            <span /> Full Stack Developer
          </motion.p>

          <motion.h1 variants={item} className="legacy-hero-title small-hero-title">
            Web Developer
            <span>React • Next.js • UI</span>
          </motion.h1>

          <motion.p variants={item} className="legacy-hero-text">
            I build clean websites, dashboards, and web apps.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <a href="/work" className="button button-primary">
              View work <ArrowUpRight size={17} />
            </a>
            <a href="/contact" className="button button-secondary">
              Contact me
            </a>
            <a
              href="/devanshu-mathur-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="legacy-hero-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img src={hero} alt="Devanshu Mathur" />
          <div className="floating-note note-top">
            <Code2 size={16} /> React & Next.js
          </div>
          <div className="floating-note note-bottom">
            <Sparkles size={16} /> UI polish
          </div>
        </motion.div>
      </div>
    </section>
  );
}
