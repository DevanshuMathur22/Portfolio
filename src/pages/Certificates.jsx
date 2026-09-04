import { motion } from "framer-motion";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";

const certificates = [
  "Frontend Development",
  "React Projects",
  "JavaScript Practice",
  "UI/UX Foundations",
];

export default function Certificates() {
  return (
    <section className="section certificates-section">
      <div className="site-width">
        <div className="section-center">
          <p className="eyebrow">CERTIFICATES</p>
          <h2 className="section-title">Learning backed by building.</h2>
          <p className="section-copy">Focused on modern frontend, React, UI structure, and web development practice.</p>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <motion.article
              className="certificate-card"
              key={certificate}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Award size={24} />
              <h3>{certificate}</h3>
              <p><CheckCircle2 size={15} /> Completed / practiced</p>
            </motion.article>
          ))}
        </div>

        <a href="/contact" className="text-link certificate-link">Need proof or details? Contact me <ExternalLink size={15} /></a>
      </div>
    </section>
  );
}
