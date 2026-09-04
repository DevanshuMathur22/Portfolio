import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const details = [
  { icon: <Mail size={18} />, text: "devanshumathur9@gmail.com", href: "mailto:devanshumathur9@gmail.com" },
  { icon: <Phone size={18} />, text: "+91 9876544488", href: "tel:+919876544488" },
  { icon: <MapPin size={18} />, text: "Jaipur, Rajasthan", href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-mini-section">
      <div className="site-width">
        <div className="section-center">
          <p className="eyebrow">CONTACT</p>
          <h2 className="section-title">Have an idea? Let’s build it.</h2>
          <p className="section-copy">Send a short message about your website, dashboard, or app.</p>
        </div>

        <motion.div className="contact-mini-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="contact-mini-details">
            {details.map((item) =>
              item.href ? (
                <a key={item.text} href={item.href}>{item.icon}{item.text}</a>
              ) : (
                <p key={item.text}>{item.icon}{item.text}</p>
              )
            )}
          </div>

          <div className="social-links">
            <a href="https://github.com/devanshumathur22" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/devanshu-mathur-474879241" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>

          <a href="/contact" className="button button-primary">
            Open contact page <Send size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
