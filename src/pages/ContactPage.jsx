import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
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
      <PageHeader eyebrow="CONTACT" title="A good project usually starts with a simple conversation.">
        Tell me what you’re thinking about, what is not working yet, or what you want to make next.
      </PageHeader>
      <section className="site-width page-section contact-page-grid">
        <div className="contact-page-details">
          <p className="eyebrow">REACH ME DIRECTLY</p>
          <h2>Let’s talk about the work.</h2>
          <p>I’m based in Jaipur and open to thoughtful freelance collaborations and product work.</p>
          <div className="contact-links">
            <a href="mailto:devanshumathur9@gmail.com"><Mail size={18} aria-hidden="true" /> devanshumathur9@gmail.com</a>
            <a href="tel:+919876544488"><Phone size={18} aria-hidden="true" /> +91 9876544488</a>
            <p><MapPin size={18} aria-hidden="true" /> Jaipur, Rajasthan, India</p>
          </div>
          <div className="social-links contact-social">
            <a href="https://github.com/devanshumathur22" target="_blank" rel="noreferrer" aria-label="Devanshu on GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/devanshu-mathur-474879241" target="_blank" rel="noreferrer" aria-label="Devanshu on LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
        <form className="contact-form contact-page-form" onSubmit={sendEmail}>
          <label>Your name<input name="name" value={form.name} onChange={updateForm} autoComplete="name" placeholder="What should I call you?" required /></label>
          <label>Email address<input type="email" name="email" value={form.email} onChange={updateForm} autoComplete="email" placeholder="you@company.com" required /></label>
          <label>Project details<textarea name="message" value={form.message} onChange={updateForm} placeholder="A short note about your idea, goals, or timeline." rows="7" required /></label>
          <button className="button button-primary" type="submit">Start an email <Send size={16} aria-hidden="true" /></button>
          <p className="form-hint">This opens your email app with the message ready to send.</p>
        </form>
      </section>
    </main>
  );
}
