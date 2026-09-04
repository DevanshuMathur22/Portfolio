import { ArrowUp, FileText, Mail, MessageCircle } from "lucide-react";

export default function FloatingDock() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="floating-dock" aria-label="Quick actions">
      <a href="mailto:devanshumathur9@gmail.com" aria-label="Email Devanshu">
        <Mail size={18} />
      </a>
      <a
        href="https://wa.me/919876544488?text=Hi%20Devanshu%2C%20I%20want%20to%20discuss%20a%20website%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Devanshu"
      >
        <MessageCircle size={18} />
      </a>
      <a href="/devanshu-mathur-resume.pdf" target="_blank" rel="noreferrer" aria-label="View resume">
        <FileText size={18} />
      </a>
      <button type="button" onClick={scrollTop} aria-label="Back to top">
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
