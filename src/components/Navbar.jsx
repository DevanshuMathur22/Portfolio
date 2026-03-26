import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Work", link: "#work" },
    { name: "Featured", link: "#featured-project" },
    { name: "Fullstack", link: "#fullstack" },
    { name: "Certificates", link: "#certificates" },
    { name: "Skills", link: "#skills" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  // ✅ Scroll Spy (fixed)
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.link);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.link);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-[999] bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="flex justify-between items-center px-6 md:px-14 py-4">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Devanshu Mathur
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item, i) => (
            <li key={i} className="relative group">
              <a
                href={item.link} // ✅ IMPORTANT (NO JS)
                className={`transition ${
                  active === item.link
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.name}
              </a>

              <span
                className={`absolute left-0 -bottom-1 h-[2px]
                bg-gradient-to-r from-indigo-500 to-purple-500
                transition-all duration-300
                ${
                  active === item.link
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 bg-white border-t">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}