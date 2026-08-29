import { motion } from "framer-motion";
import { ArrowUpRight, Check, Code2, Heart, Layers3 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import heroImage from "../assets/image/hero.jpg";

const principles = [
  "Start with the real user problem",
  "Keep interfaces clear and accessible",
  "Build foundations that are easy to extend",
];

export default function AboutPage() {
  return (
    <main className="inner-page">
      <PageHeader eyebrow="ABOUT DEVANSHU" title="A developer who cares about the details that make products feel easy.">
        I work across interface, backend, and data to create web experiences that are useful from the first click.
      </PageHeader>

      <section className="site-width page-section about-story">
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={heroImage} alt="Devanshu Mathur working as a developer" />
        </motion.div>
        <motion.div
          className="about-story-copy"
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">THE SHORT VERSION</p>
          <h2>I like turning a rough idea into something people can actually use.</h2>
          <p>
            I’m Devanshu Mathur, a full-stack developer based in Jaipur. My work blends React and Next.js interfaces with Node.js APIs and dependable data flows. I care about the whole experience: the words, the layout, the loading state, and the logic underneath.
          </p>
          <p>
            Whether I’m building a healthcare site, an operations dashboard, or a product landing page, I aim for work that is calm, responsive, and ready for the next iteration.
          </p>
          <a href="/work" className="text-link">See the work <ArrowUpRight size={16} aria-hidden="true" /></a>
        </motion.div>
      </section>

      <section className="page-section page-section-muted">
        <div className="site-width principle-layout">
          <div>
            <p className="eyebrow">HOW I THINK</p>
            <h2 className="subsection-title">Simple is a feature.</h2>
            <p className="section-copy">Good engineering gives people confidence. I keep the process collaborative, the UI intentional, and the codebase ready to change.</p>
          </div>
          <div className="principles-list">
            {principles.map((principle) => (
              <div className="principle" key={principle}><Check size={17} aria-hidden="true" /> {principle}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-width page-section">
        <p className="eyebrow">WHAT I BRING</p>
        <div className="value-grid">
          <article className="value-card"><Code2 aria-hidden="true" /><h3>Hands-on craft</h3><p>From semantic markup to API structure, I stay close to the work and the outcome.</p></article>
          <article className="value-card"><Layers3 aria-hidden="true" /><h3>Systems thinking</h3><p>I look for patterns that keep a product coherent as it grows beyond the first release.</p></article>
          <article className="value-card"><Heart aria-hidden="true" /><h3>Care for people</h3><p>Clear communication and thoughtful details make collaboration better for everyone.</p></article>
        </div>
      </section>
    </main>
  );
}
