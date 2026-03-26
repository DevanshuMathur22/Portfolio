import { ShieldCheck, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Cyber Security",
    desc: "Completed a Cyber Security course covering network security, encryption, threat detection and protecting systems from vulnerabilities.",
    icon: <ShieldCheck size={28} />,
    link: "https://www.coursera.org/user/f69fdce36c92e70b981ff652fc7ca687",
  },
  {
    title: "Digital Marketing",
    desc: "Learned SEO, content strategy, paid ads and analytics with practical understanding of growing online visibility and audience targeting.",
    icon: <Megaphone size={28} />,
    link: "https://www.coursera.org/user/f69fdce36c92e70b981ff652fc7ca687",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="
        px-6 md:px-16 py-24
        bg-gradient-to-b from-white via-indigo-50/50 to-purple-50/50
        text-slate-800 relative 
      "
    >
      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-300/30 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold">
          My{" "}
          <span className="
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
          ">
            Certifications
          </span>
        </h2>

        <p className="mt-4 text-slate-600">
          Verified skills and learning through professional certifications.
        </p>
      </div>

      {/* LIST */}
      <div className="mt-16 space-y-6 max-w-4xl mx-auto">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              group flex flex-col md:flex-row items-start md:items-center
              justify-between gap-6
              p-6 rounded-2xl
              bg-white/60 backdrop-blur-xl
              border border-gray-200
              shadow-sm
              hover:-translate-y-2
              transition duration-300
              relative
            "
          >
            {/* Glow */}
            <div className="
              absolute inset-0 rounded-2xl opacity-0
              group-hover:opacity-100
              bg-gradient-to-r from-indigo-500/20 to-purple-500/20
              blur-xl transition
            "></div>

            {/* LEFT */}
            <div className="relative z-10 flex items-start gap-4">
              <div className="text-indigo-600 mt-1">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm mt-1 max-w-lg">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* RIGHT BUTTON */}
            <div className="relative z-10">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
                  px-5 py-2 rounded-lg text-sm font-medium
                  bg-gradient-to-r from-indigo-500 to-purple-500
                  text-white
                  hover:scale-105
                  transition duration-300
                "
              >
                View Certificate
              </a>
            </div>

            {/* Border Glow */}
            <div className="
              absolute inset-0 rounded-2xl border border-transparent
              group-hover:border-indigo-400/40
              transition
            "></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}