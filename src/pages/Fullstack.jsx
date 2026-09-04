import { motion } from "framer-motion";
import { ArrowUpRight, Braces, Database, Layers3, Server } from "lucide-react";

const stack = [
  { icon: <Layers3 size={24} />, title: "Frontend", text: "React, Next.js, Tailwind, motion, responsive UI." },
  { icon: <Server size={24} />, title: "Backend", text: "Node.js, Express, API routes, business logic." },
  { icon: <Database size={24} />, title: "Database", text: "MongoDB, SQL, models, clean data flow." },
  { icon: <Braces size={24} />, title: "Integration", text: "Forms, dashboards, auth-ready flows, deployment." },
];

export default function Fullstack() {
  return (
    <section className="section fullstack-section">
      <div className="site-width fullstack-layout">
        <div>
          <p className="eyebrow">FULL STACK</p>
          <h2 className="section-title">From interface to working product.</h2>
          <p className="section-copy">
            I connect clean UI with practical backend systems so the product feels simple and works properly.
          </p>
          <a href="/work" className="button button-primary">See projects <ArrowUpRight size={17} /></a>
        </div>

        <div className="stack-grid">
          {stack.map((item, index) => (
            <motion.article
              className="stack-card"
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="capability-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
