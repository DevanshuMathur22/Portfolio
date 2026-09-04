import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navClass = ({ isActive }) => (isActive ? "active" : undefined);

  useEffect(() => {
    let lastY = window.scrollY;

    function handleScroll() {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setHidden(currentY > lastY && currentY > 90);
      lastY = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-shell v2-nav glass-nav ${scrolled ? "nav-scrolled" : ""} ${hidden && !open ? "nav-hidden" : ""}`}>
      <nav className="site-width nav-bar" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Devanshu Mathur home" onClick={() => setOpen(false)}>
          DM<span>.</span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <NavLink key={link.href} to={link.href} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <a className="nav-cta" href="/devanshu-mathur-resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>

        <button
          className="menu-button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="mobile-nav">
          {links.map((link) => (
            <NavLink key={link.href} to={link.href} className={navClass} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <a href="/devanshu-mathur-resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
