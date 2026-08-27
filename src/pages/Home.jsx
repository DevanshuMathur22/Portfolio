import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  Github,
  LayoutTemplate,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Server,
  Sparkles,
} from "lucide-react";
import heroImage from "../assets/image/hero.jpg";
import doctorProject from "../assets/image/dr.jpg";
import hospitalProject from "../assets/image/hospital.jpg";
import saasProject from "../assets/image/saas.jpg";

const projects = [
  {
    number: "01",
    title: "Dr. Vaibhav",
    type: "Healthcare website",
    description:
      "A clear, reassuring digital experience for a medical practice, designed to make information and next steps easy to find.",
    image: doctorProject,
    url: "https://dr-vaibhav-psi.vercel.app/",
    tags: ["React", "Tailwind CSS", "Responsive UI"],
  },
  {
    number: "02",
    title: "Hospital Management",
    type: "Operations dashboard",
    description:
      "A focused management interface for patients, operational data, and day-to-day hospital workflows.",
    image: hospitalProject,
    url: "https://hospital-management-one-ruby.vercel.app/",
    tags: ["React", "Next.js", "Dashboard"],
  },
  {
    number: "03",
    title: "Package Mover",
    type: "SaaS landing page",
    description:
      "A polished product landing page that balances premium visual detail with a fast, straightforward user journey.",
    image: saasProject,
    url: "https://package-mover.vercel.app/",
    tags: ["Next.js", "Motion", "Product UI"],
  },
];

const capabilities = [
  {
    icon: <LayoutTemplate aria-hidden="true" />,
    title: "Frontend systems",
    text: "Responsive interfaces that feel clear, considered, and reliable on every screen.",
  },
  {
    icon: <Server aria-hidden="true" />,
    title: "Backend & APIs",
    text: "Structured server-side logic and practical REST APIs built for real product needs.",
  },
  {
    icon: <Database aria-hidden="true" />,
    title: "Data foundations",
    text: "Thoughtful data models and database flows that keep products dependable as they grow.",
  },
  {
    icon: <Sparkles aria-hidden="true" />,
    title: "Product polish",
    text: "The small interaction and performance details that turn a useful app into a good experience.",
  },
];

const sectionMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, children, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {children && <p className="section-copy mt-5">{children}</p>}
    </div>
  );
}

export default function Home() {
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
    <main>
      <section id="home" className="hero-shell">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="site-width hero-grid">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={sectionMotion} className="availability">
              <span /> Available for selected freelance work
            </motion.p>
            <motion.h1 variants={sectionMotion} className="hero-title">
              Building web products that <em>work beautifully.</em>
            </motion.h1>
            <motion.p variants={sectionMotion} className="hero-copy">
              I’m Devanshu Mathur, a full-stack developer who turns thoughtful ideas into fast, clear, and scalable web experiences.
            </motion.p>
            <motion.div variants={sectionMotion} className="hero-actions">
              <a href="#work" className="button button-primary">
                Explore my work <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="#contact" className="button button-secondary">Let’s talk</a>
            </motion.div>
            <motion.div variants={sectionMotion} className="hero-proof">
              <div><strong>5+</strong><span>Projects shipped</span></div>
              <div><strong>Full stack</strong><span>From interface to API</span></div>
              <div><strong>Jaipur, IN</strong><span>Working remotely</span></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="portrait-wrap"
          >
            <div className="portrait-frame">
              <img src={heroImage} alt="Devanshu Mathur" />
            </div>
            <div className="floating-note note-top"><Code2 size={16} aria-hidden="true" /> React & Next.js</div>
            <div className="floating-note note-bottom"><Sparkles size={16} aria-hidden="true" /> Detail-driven builds</div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section site-width about-grid">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionMotion}>
          <SectionTitle eyebrow="ABOUT ME" title="A practical developer with an eye for the experience.">
            I enjoy the full journey: understanding a problem, shaping an interface, and building the systems that make it useful in the real world.
          </SectionTitle>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionMotion} className="about-card">
          <p>“The best products make complex things feel simple.”</p>
          <div className="about-details">
            <span>Based in Jaipur, Rajasthan</span>
            <span>Open to collaborations</span>
          </div>
        </motion.div>
      </section>

      <section id="work" className="section work-section">
        <div className="site-width">
          <SectionTitle eyebrow="SELECTED WORK" title="A few things I’ve brought to life.">
            Product-focused projects that combine clean visual design with purposeful engineering.
          </SectionTitle>
          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08 }}
                className="project-card"
              >
                <a href={project.url} target="_blank" rel="noreferrer" className="project-image-link" aria-label={`Open ${project.title} live demo`}>
                  <img src={project.image} alt={`${project.title} project preview`} className="project-image" />
                  <span className="project-open"><ArrowUpRight size={22} aria-hidden="true" /></span>
                </a>
                <div className="project-content">
                  <span className="project-number">{project.number}</span>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a href={project.url} target="_blank" rel="noreferrer" className="text-link">View live project <ArrowUpRight size={16} aria-hidden="true" /></a>
                </div>
              </motion.article>
            ))}
          </div>
          <a href="/project" className="button button-secondary all-projects">View all project details <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section id="skills" className="section site-width">
        <SectionTitle eyebrow="WHAT I DO" title="From first idea to dependable release.">
          I use the right layer of the stack for the job, without losing sight of clarity, accessibility, and maintainability.
        </SectionTitle>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="capability-card"
            >
              <div className="capability-icon">{capability.icon}</div>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </motion.article>
          ))}
        </div>
        <div className="toolbelt" aria-label="Technology stack">
          {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'Figma'].map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="site-width contact-layout">
          <div>
            <SectionTitle eyebrow="GET IN TOUCH" title="Have a project in mind? Let’s make it useful.">
              Tell me a little about what you’re building. I’ll be glad to hear about it.
            </SectionTitle>
            <div className="contact-links">
              <a href="mailto:devanshumathur9@gmail.com"><Mail size={18} aria-hidden="true" /> devanshumathur9@gmail.com</a>
              <a href="tel:+919876544488"><Phone size={18} aria-hidden="true" /> +91 9876544488</a>
              <p><MapPin size={18} aria-hidden="true" /> Jaipur, Rajasthan, India</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/devanshumathur22" target="_blank" rel="noreferrer" aria-label="Devanshu on GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/devanshu-mathur-474879241" target="_blank" rel="noreferrer" aria-label="Devanshu on LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={sendEmail}>
            <label>
              Your name
              <input name="name" value={form.name} onChange={updateForm} autoComplete="name" placeholder="What should I call you?" required />
            </label>
            <label>
              Email address
              <input type="email" name="email" value={form.email} onChange={updateForm} autoComplete="email" placeholder="you@company.com" required />
            </label>
            <label>
              Project details
              <textarea name="message" value={form.message} onChange={updateForm} placeholder="A short note about your idea, goals, or timeline." rows="5" required />
            </label>
            <button className="button button-primary" type="submit">Start an email <Send size={16} aria-hidden="true" /></button>
            <p className="form-hint">This opens your email app with the message ready to send.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
