import { motion } from "framer-motion";
import { ArrowRight, Code2, Gauge, Layers3, Server } from "lucide-react";
import PageHeader from "../components/PageHeader";

const services = [
  { icon: <Layers3 aria-hidden="true" />, title: "Product interfaces", text: "Responsive, accessible frontends with clear hierarchy and interaction that feels natural.", items: ["React & Next.js", "Tailwind CSS", "Motion & states"] },
  { icon: <Server aria-hidden="true" />, title: "Web applications", text: "End-to-end builds that connect a thoughtful interface to practical backend systems.", items: ["Node.js & Express", "REST APIs", "Auth-ready structure"] },
  { icon: <Code2 aria-hidden="true" />, title: "Data foundations", text: "Clean data flows and models that make features easier to trust, test, and extend.", items: ["MongoDB & SQL", "Mongoose", "Scalable patterns"] },
  { icon: <Gauge aria-hidden="true" />, title: "Polish & performance", text: "A final pass on speed, responsive behavior, and the small details users notice.", items: ["Performance checks", "Responsive QA", "UI refinement"] },
];

const process = [
  ["01", "Discover", "We define the audience, the problem, and what a useful first version needs to do."],
  ["02", "Shape", "We turn the idea into a clear flow, visual direction, and buildable plan."],
  ["03", "Build", "I develop the interface and supporting systems in small, reviewable steps."],
  ["04", "Refine", "We test the experience, smooth the rough edges, and prepare it for its next chapter."],
];

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <PageHeader eyebrow="SERVICES" title="The right mix of design thinking and engineering for your next release.">
        Pick the support you need, or bring me the whole idea. I can help from first direction through a polished build.
      </PageHeader>
      <section className="site-width page-section service-grid">
        {services.map((service, index) => (
          <motion.article key={service.title} className="service-page-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
            <div className="capability-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <ul>{service.items.map((item) => <li key={item}><ArrowRight size={14} aria-hidden="true" />{item}</li>)}</ul>
          </motion.article>
        ))}
      </section>
      <section className="page-section page-section-muted">
        <div className="site-width">
          <p className="eyebrow">A SIMPLE PROCESS</p>
          <h2 className="subsection-title">Clear steps. Better momentum.</h2>
          <div className="process-grid">
            {process.map(([number, title, text]) => <article key={number} className="process-step"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="site-width page-section service-cta"><h2>Let’s make the next version feel obvious.</h2><a href="/contact" className="button button-primary">Tell me about it <ArrowRight size={17} aria-hidden="true" /></a></section>
    </main>
  );
}
