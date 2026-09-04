import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function updateForm(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function sendEmail(event) {
    event.preventDefault();
    const subject = `Portfolio enquiry from ${form.name || "a visitor"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:devanshumathur9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="inner-page contact-page">
      <PageHeader eyebrow="CONTACT" title="Let’s build something clean and useful.">
        Send a short message about your website, dashboard, or app requirement.
      </PageHeader>

      <section className="site-width page-section contact-page-grid">
        <motion.div className="contact-page-details" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow">DETAILS</p>
          <h2>Tell me what you need. I’ll reply with the next step.</h2>
          <p>Share the goal, pages, features, timeline, or current website link.</p>

          <div className="contact-links">
            <a href="mailto:devanshumathur9@gmail.com"><Mail size={18} aria-hidden="true" />devanshumathur9@gmail.com</a>
            <a href="tel:+919876544488"><Phone size={18} aria-hidden="true" />+91 9876544488</a>
            <p><MapPin size={18} aria-hidden="true" />Jaipur, Rajasthan, India</p>
          </div>

          <div className="social-links">
            <a href="https://github.com/devanshumathur22" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/devanshu-mathur-474879241" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="/devanshu-mathur-resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume"><ArrowUpRight size={20} /></a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form contact-page-form"
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <label>
            Your name
            <input name="name" value={form.name} onChange={updateForm} autoComplete="name" placeholder="Devanshu Mathur" required />
          </label>
          <label>
            Email address
            <input type="email" name="email" value={form.email} onChange={updateForm} autoComplete="email" placeholder="you@company.com" required />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={updateForm} placeholder="Tell me what you want to build." rows="6" required />
          </label>
          <button className="button button-primary" type="submit">
            Send message <Send size={16} aria-hidden="true" />
          </button>
          <p className="form-hint">This opens your email app with the message ready to send.</p>
        </motion.form>
      </section>
    </main>
  );
}
