import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";

import heroImage from "../assets/image/hero.jpg";
import doctorProject from "../assets/image/dr.jpg";
import hospitalProject from "../assets/image/hospital.jpg";
import saasProject from "../assets/image/saas.jpg";
import petProject from "../assets/image/petworld.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const stats = [
  ["5+", "Projects"],
  ["4", "Live demos"],
  ["Full stack", "Frontend to backend"],
];

const stack = [
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "REST APIs",
  "Framer Motion",
];

const services = [
  {
    icon: <Layers3 aria-hidden="true" />,
    title: "Business websites",
    text: "Modern websites for doctors, service brands, and local businesses.",
  },
  {
    icon: <Code2 aria-hidden="true" />,
    title: "Frontend UI",
    text: "Responsive React interfaces with clean layout and smooth motion.",
  },
  {
    icon: <Server aria-hidden="true" />,
    title: "Web apps",
    text: "Dashboards, forms, APIs, and practical full-stack product flows.",
  },
  {
    icon: <Database aria-hidden="true" />,
    title: "Data flow",
    text: "Clean database structure, records, tables, and admin screens.",
  },
];

const projects = [
  {
    title: "Dr. Vaibhav",
    type: "Healthcare website",
    text: "Clean doctor website with patient-focused sections and simple navigation.",
    image: doctorProject,
    url: "https://dr-vaibhav-psi.vercel.app/",
    tags: ["React", "Tailwind", "Responsive"],
  },
  {
    title: "Hospital Management",
    type: "Dashboard",
    text: "Admin dashboard for patient records, operations, and hospital workflow.",
    image: hospitalProject,
    url: "https://hospital-management-one-ruby.vercel.app/",
    tags: ["React", "Next.js", "Admin UI"],
  },
  {
    title: "Package Mover",
    type: "SaaS landing",
    text: "Premium landing page with smooth motion and clear product sections.",
    image: saasProject,
    url: "https://package-mover.vercel.app/",
    tags: ["Next.js", "Motion", "Product UI"],
  },
  {
    title: "PetWorld",
    type: "Platform UI",
    text: "Pet adoption interface with clean cards and responsive browsing.",
    image: petProject,
    url: "https://pet-world-eta.vercel.app/",
    tags: ["React", "Routing", "UI/UX"],
  },
];

const process = [
  ["01", "Plan", "Goal, pages, features, and content."],
  ["02", "Design", "Layout, spacing, flow, and visual direction."],
  ["03", "Build", "Frontend, backend, forms, APIs, and pages."],
  ["04", "Polish", "Mobile, speed, animation, SEO, and deploy."],
];

function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "home-v3-title center" : "home-v3-title"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
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
    <main className="home-v3">
      <section className="home-v3-hero">
        <div className="home-v3-bg-grid" />
        <div className="home-v3-orb orb-one" />
        <div className="home-v3-orb orb-two" />

        <div className="site-width home-v3-hero-grid">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="home-v3-hero-copy"
          >
            <motion.p variants={fadeUp} className="availability">
              <span /> Available for freelance work
            </motion.p>

            <motion.h1 variants={fadeUp}>
              Building clean digital products for modern businesses.
            </motion.h1>

            <motion.p variants={fadeUp}>
              I’m Devanshu Mathur, a full-stack developer creating websites, dashboards, and web apps with fast UI, clean code, and smooth user flow.
            </motion.p>

            <motion.div variants={fadeUp} className="home-v3-actions">
              <a href="#work" className="button button-primary">
                View work <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="#contact" className="button button-secondary">
                Start project
              </a>
              <a href="/devanshu-mathur-resume.pdf" target="_blank" rel="noreferrer" className="button button-secondary">
                Resume
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="home-v3-stats">
              {stats.map(([number, label]) => (
                <div key={label}>
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="home-v3-visual" initial={{ opacity: 0, y: 18, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="home-v3-photo">
              <img src={heroImage} alt="Devanshu Mathur" />
            </div>

            <div className="home-v3-float float-top">
              <Zap size={16} aria-hidden="true" />
              Fast UI
            </div>

            <div className="home-v3-float float-bottom">
              <Sparkles size={16} aria-hidden="true" />
              UI Polish
            </div>
          </motion.div>
        </div>
      </section>

      <section className="home-v3-stack">
        <div className="site-width">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="about" className="section site-width home-v3-about">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionTitle
            eyebrow="ABOUT"
            title="Clean design. Practical development."
            text="I focus on simple interfaces, reliable structure, and final polish that makes a product feel complete."
          />
        </motion.div>

        <motion.div className="home-v3-about-card" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <CheckCircle2 size={22} aria-hidden="true" />
          <h3>What I care about</h3>
          <ul>
            <li>Clear user flow</li>
            <li>Reusable React components</li>
            <li>Responsive mobile layout</li>
            <li>Fast and clean final build</li>
          </ul>
          <a href="/about" className="text-link">
            More about me <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </motion.div>
      </section>

      <section id="services" className="section home-v3-muted">
        <div className="site-width">
          <SectionTitle
            eyebrow="SERVICES"
            title="What I can build."
            text="Websites, dashboards, web apps, APIs, and final UI improvement."
            center
          />

          <div className="home-v3-service-grid">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                className="home-v3-service-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="capability-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section site-width">
        <SectionTitle
          eyebrow="SELECTED WORK"
          title="Projects with clean UI and useful flow."
          text="A few builds focused on layout, responsiveness, interaction, and practical product structure."
        />

        <div className="home-v3-project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={index === 0 ? "home-v3-project-card featured" : "home-v3-project-card"}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.14 }}
              transition={{ delay: index * 0.05 }}
            >
              <a href={project.url} target="_blank" rel="noreferrer" className="home-v3-project-image" aria-label={`Open ${project.title}`}>
                <img src={project.image} alt={`${project.title} preview`} />
                <span><ArrowUpRight size={20} aria-hidden="true" /></span>
              </a>

              <div className="home-v3-project-copy">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noreferrer" className="text-link">
                  Live demo <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <a href="/work" className="button button-secondary home-v3-more">
          View full work <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </section>

      <section className="section home-v3-process-section">
        <div className="site-width">
          <SectionTitle
            eyebrow="PROCESS"
            title="Simple process. Clean delivery."
            text="Clear steps from first idea to launch-ready product."
            center
          />

          <div className="home-v3-process-grid">
            {process.map(([number, title, text]) => (
              <article className="home-v3-process-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section site-width home-v3-hire">
        <div className="home-v3-hire-card">
          <div>
            <p className="eyebrow">HIRE ME</p>
            <h2>Need a premium website or dashboard?</h2>
            <p>I can help with a fresh build, redesign, landing page, business website, or full-stack dashboard.</p>
          </div>

          <div className="home-v3-hire-list">
            <span>Website</span>
            <span>Dashboard</span>
            <span>Web App</span>
            <span>UI Revamp</span>
          </div>

          <div className="home-v3-actions">
            <a href="#contact" className="button button-primary">Start project</a>
            <a href="/work" className="button button-secondary">See work</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section home-v3-contact">
        <div className="site-width home-v3-contact-grid">
          <div>
            <SectionTitle
              eyebrow="CONTACT"
              title="Have an idea? Let’s build it."
              text="Send a short message about your website, dashboard, or app."
            />

            <div className="contact-links">
              <a href="mailto:devanshumathur9@gmail.com"><Mail size={18} aria-hidden="true" /> devanshumathur9@gmail.com</a>
              <a href="tel:+919876544488"><Phone size={18} aria-hidden="true" /> +91 9876544488</a>
              <p><MapPin size={18} aria-hidden="true" /> Jaipur, Rajasthan, India</p>
            </div>

            <div className="social-links">
              <a href="https://github.com/devanshumathur22" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/devanshu-mathur-474879241" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <motion.form className="contact-form home-v3-form" onSubmit={sendEmail} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <label>
              Your name
              <input name="name" value={form.name} onChange={updateForm} autoComplete="name" placeholder="Your name" required />
            </label>
            <label>
              Email address
              <input type="email" name="email" value={form.email} onChange={updateForm} autoComplete="email" placeholder="you@company.com" required />
            </label>
            <label>
              Message
              <textarea name="message" value={form.message} onChange={updateForm} placeholder="Tell me what you need." rows="5" required />
            </label>
            <button className="button button-primary" type="submit">
              Send message <Send size={16} aria-hidden="true" />
            </button>
            <p className="form-hint">This opens your email app with the message ready.</p>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
