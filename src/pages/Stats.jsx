import { motion } from "framer-motion";

const stats = [
  { number: "5+", label: "Projects built" },
  { number: "4", label: "Live demos" },
  { number: "100%", label: "Responsive focus" },
  { number: "Full stack", label: "Frontend to backend" },
];

export default function Stats() {
  return (
    <section className="section stats-section">
      <div className="site-width stats-grid">
        {stats.map((stat, index) => (
          <motion.article
            className="stat-card"
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <strong>{stat.number}</strong>
            <span>{stat.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
