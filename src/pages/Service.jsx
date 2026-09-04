import { motion } from "framer-motion";
import { ArrowRight, Code2, LayoutTemplate, Server, Sparkles } from "lucide-react";

const services = [
  { icon: <LayoutTemplate size={24} />, title: "Websites", text: "Clean business and portfolio websites." },
  { icon: <Code2 size={24} />, title: "Frontend", text: "Responsive React and Next.js interfaces." },
  { icon: <Server size={24} />, title: "Backend", text: "APIs, auth-ready structure, and app logic." },
  { icon: <Sparkles size={24} />, title: "Polish", text: "Speed, spacing, motion, and mobile fixes." },
];

export default function Service() {
  return (
    <section id="services" className="section service-premium-section">
      <div className="site-width">
        <div className="section-center">
          <p className="eyebrow">SERVICES</p>
          <h2 className="section-title">How I can help.</h2>
          <p className="section-copy">Websites, dashboards, full-stack apps, and UI cleanup.</p>
        </div>

        <div className="service-mini-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-mini-card"
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="capability-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="/services">Details <ArrowRight size={14} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
