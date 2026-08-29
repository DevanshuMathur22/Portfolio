import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <nav className="site-width nav-bar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Devanshu Mathur home">DM<span>.</span></a>
        <div className="nav-links">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <a className="nav-cta" href="/contact">Let’s work together</a>
        <button className="menu-button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-navigation" className="mobile-nav">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a href="/contact" onClick={() => setOpen(false)}>Let’s work together</a>
        </div>
      )}
    </header>
  );
}
