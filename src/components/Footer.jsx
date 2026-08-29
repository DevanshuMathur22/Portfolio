import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-width footer-inner">
        <div>
          <a className="brand" href="/">DM<span>.</span></a>
          <p>Full-stack developer creating useful, polished web experiences.</p>
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/work">Work</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="https://github.com/devanshumathur22" target="_blank" rel="noreferrer">GitHub <Github size={16} aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/devanshu-mathur-474879241" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={16} aria-hidden="true" /></a>
          <a href="mailto:devanshumathur9@gmail.com">Email <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="site-width footer-bottom">© {new Date().getFullYear()} Devanshu Mathur. Built with care.</div>
    </footer>
  );
}
