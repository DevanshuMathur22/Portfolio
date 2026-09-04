import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-width footer-inner">
        <div>
          <Link className="brand" to="/">DM<span>.</span></Link>
          <p>Clean websites, dashboards, and full-stack web apps.</p>
        </div>

        <div className="footer-links">
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <a href="mailto:devanshumathur9@gmail.com">
            Email <Mail size={14} aria-hidden="true" />
          </a>
          <a href="https://github.com/devanshumathur22" target="_blank" rel="noreferrer">
            GitHub <Github size={14} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/devanshu-mathur-474879241" target="_blank" rel="noreferrer">
            LinkedIn <Linkedin size={14} aria-hidden="true" />
          </a>
          <a href="/devanshu-mathur-resume.pdf" target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="site-width footer-bottom">© {year} Devanshu Mathur. Built with React.</div>
    </footer>
  );
}
