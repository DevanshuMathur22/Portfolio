import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers3, LayoutDashboard, Sparkles, Wand2 } from "lucide-react";
import PageHeader from "../components/PageHeader";

const packages = [
  {
    icon: <Layers3 aria-hidden="true" />,
    title: "Starter Website",
    text: "Clean 3–5 page website for a personal brand, doctor, or local business.",
    items: ["Responsive design", "Contact section", "Basic SEO"],
  },
  {
    icon: <Sparkles aria-hidden="true" />,
    title: "Business Website",
    text: "Premium website with better sections, stronger visuals, and conversion-focused flow.",
    items: ["Modern UI", "Service pages", "Fast loading"],
  },
  {
    icon: <LayoutDashboard aria-hidden="true" />,
    title: "Dashboard UI",
    text: "Admin panels, records, tables, reports, and practical workflow screens.",
    items: ["Dashboard layout", "CRUD screens", "Clean data flow"],
  },
  {
    icon: <Wand2 aria-hidden="true" />,
    title: "UI Revamp",
    text: "Improve an existing website with better spacing, mobile layout, colors, and polish.",
    items: ["Visual upgrade", "Mobile fixes", "Animation polish"],
  },
];

export default function PackagesPage() {
  return (
    <main className="inner-page packages-page">
      <PageHeader eyebrow="PACKAGES" title="Pick what you need built.">
        Simple website, premium business site, dashboard, or UI revamp.
      </PageHeader>

      <section className="site-width page-section packages-grid">
        {packages.map((item, index) => (
          <motion.article
            className="package-card"
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <div className="capability-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>

            <ul>
              {item.items.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </section>

      <section className="site-width page-section package-cta">
        <div>
          <p className="eyebrow">NEXT STEP</p>
          <h2>Tell me what you want to build.</h2>
        </div>
        <a href="/contact" className="button button-primary">
          Start a project <ArrowRight size={17} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
