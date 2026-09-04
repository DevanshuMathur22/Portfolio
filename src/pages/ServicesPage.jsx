import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Gauge,
  Layers3,
  Server,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

const services = [
  {
    icon: <Layers3 aria-hidden="true" />,
    title: "Websites",
    text: "Clean websites for doctors, businesses, and service brands.",
    items: ["Landing pages", "Portfolio", "Business site"],
  },
  {
    icon: <Code2 aria-hidden="true" />,
    title: "Frontend",
    text: "Responsive React interfaces with smooth user experience.",
    items: ["React", "Next.js", "Tailwind"],
  },
  {
    icon: <Server aria-hidden="true" />,
    title: "Web Apps",
    text: "Full-stack apps with APIs, dashboards, and clean flows.",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    icon: <Database aria-hidden="true" />,
    title: "Dashboards",
    text: "Admin panels for records, tables, reports, and workflow.",
    items: ["CRUD", "Tables", "Reports"],
  },
  {
    icon: <Gauge aria-hidden="true" />,
    title: "Polish",
    text: "Speed, mobile fixes, animation, spacing, and final cleanup.",
    items: ["Speed", "Mobile", "UI polish"],
  },
];

const process = [
  ["01", "Plan", "Goal, pages, content."],
  ["02", "Design", "Layout and user flow."],
  ["03", "Build", "Code and integrations."],
  ["04", "Launch", "Mobile, speed, deploy."],
];

export default function ServicesPage() {
  return (
    <main className="inner-page services-page">
      <PageHeader eyebrow="SERVICES" title="Websites, apps, and UI polish.">
        Clean development for modern digital products.
      </PageHeader>

      <section className="site-width page-section service-grid service-grid-premium">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="service-page-card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="capability-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>

            <ul>
              {service.items.map((item) => (
                <li key={item}>
                  <ArrowRight size={14} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </section>

      <section className="page-section page-section-muted">
        <div className="site-width">
          <p className="eyebrow">PROCESS</p>
          <h2 className="subsection-title">Simple process.</h2>

          <div className="process-grid">
            {process.map(([number, title, text]) => (
              <article key={number} className="process-step">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-width page-section service-cta">
        <h2>Need something built?</h2>
        <a href="/contact" className="button button-primary">
          Contact me <ArrowRight size={17} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
