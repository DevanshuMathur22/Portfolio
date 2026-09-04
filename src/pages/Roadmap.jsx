import { motion } from "framer-motion";

const steps = [
  ["01", "Plan", "Understand goal, audience, and pages."],
  ["02", "Design", "Create clean layout and user flow."],
  ["03", "Build", "Develop frontend, backend, and data flow."],
  ["04", "Launch", "Fix mobile, speed, SEO, and deploy."],
];

export default function Roadmap() {
  return (
    <section className="section roadmap-section">
      <div className="site-width">
        <div className="section-center">
          <p className="eyebrow">ROADMAP</p>
          <h2 className="section-title">My build process.</h2>
          <p className="section-copy">Simple steps from idea to launch-ready product.</p>
        </div>

        <div className="roadmap-grid">
          {steps.map(([number, title, text], index) => (
            <motion.article
              className="roadmap-card"
              key={number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
