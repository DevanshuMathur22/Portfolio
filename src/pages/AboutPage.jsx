import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  Sparkles,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import heroImage from "../assets/image/hero.jpg";

const principles = [
  "Simple user flow",
  "Clean reusable code",
  "Responsive layout",
  "Final UI polish",
];

const values = [
  {
    icon: <Layers3 aria-hidden="true" />,
    title: "Design",
    text: "Clear layout, spacing, and visual balance.",
  },
  {
    icon: <Code2 aria-hidden="true" />,
    title: "Frontend",
    text: "Smooth React interfaces for all screens.",
  },
  {
    icon: <Database aria-hidden="true" />,
    title: "Backend",
    text: "Practical APIs and clean data flow.",
  },
];

export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <PageHeader eyebrow="ABOUT" title="Clean UI. Practical code.">
        I build websites, dashboards, and web apps with simple design and solid structure.
      </PageHeader>

      <section className="site-width page-section about-story">
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={heroImage} alt="Devanshu Mathur" />
        </motion.div>

        <motion.div
          className="about-story-copy"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">MY APPROACH</p>
          <h2>Simple outside. Solid inside.</h2>
          <p>
            I create clean digital products that look good, load fast, and feel easy to use.
          </p>
          <p>
            My focus is React, Next.js, Tailwind, Node.js, APIs, and dashboards.
          </p>
          <a
            className="text-link"
            href="/devanshu-mathur-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View resume <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </section>

      <section className="page-section page-section-muted">
        <div className="site-width principle-layout">
          <div>
            <p className="eyebrow">PRINCIPLES</p>
            <h2 className="subsection-title">How I build.</h2>
          </div>

          <div className="principles-list">
            {principles.map((item) => (
              <div className="principle" key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-width page-section">
        <p className="eyebrow">STRENGTHS</p>
        <div className="value-grid">
          {values.map((value, index) => (
            <motion.article
              className="value-card"
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              {value.icon}
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="site-width page-section service-cta about-cta">
        <div>
          <p className="eyebrow">NEXT STEP</p>
          <h2>Need a clean website?</h2>
        </div>
        <a href="/contact" className="button button-primary">
          Contact me <Sparkles size={17} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
