import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 pt-16 pb-8 border-t border-gray-200">

      {/* Top Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 mb-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h1 className="text-xl font-bold mb-3">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Devanshu Mathur
            </span>
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            Full Stack Developer building modern, scalable and high-performance web apps with clean UI/UX.
          </p>

          <div className="mt-4 space-y-1 text-xs text-slate-600">
            <p className="flex items-center gap-2">
              <Mail size={14} /> devanshumathur9@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} /> +91 9876544488
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={14} /> Jaipur, Rajasthan
            </p>
          </div>
        </div>

        {/* CENTER - COMPACT LINKS */}
        <div className="flex flex-col items-start md:items-center">
          <h2 className="text-sm font-semibold mb-3 text-slate-800">
            Quick Links
          </h2>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600">
            {[
              { name: "Home", link: "/#home" },
              { name: "About", link: "/#about" },
            
              { name: "Skills", link: "/#skills" },
              { name: "Services", link: "/#services" },
              { name: "Certificates", link: "/#certificates" },
              { name: "Contact", link: "/#contact" },
              { name: "Featured", link: "/#featured-project" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="hover:text-indigo-600 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col md:items-end">
          <h2 className="text-sm font-semibold mb-3 text-slate-800">
            Connect
          </h2>

          <div className="flex gap-3">
            {[
              {
                icon: <Linkedin size={16} />,
                link: "https://www.linkedin.com/in/devanshu-mathur-474879241",
              },
              {
                icon: <Github size={16} />,
                link: "https://github.com/devanshumathur22",
              },
              {
                icon: <Instagram size={16} />,
                link: "https://www.instagram.com/devanshumathur22",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
                  w-9 h-9 flex items-center justify-center rounded-lg
                  bg-gray-100
                  hover:bg-indigo-500 hover:text-white
                  transition duration-300
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 mt-10 pt-5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Devanshu Mathur — All rights reserved.
      </div>
    </footer>
  );
}