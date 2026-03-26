// Stats.jsx
import { motion } from "framer-motion";

const stats = [
  { number: "5+", label: "Projects Built" },
  { number: "10+", label: "UI Designs" },
  { number: "100%", label: "Responsive" },
  { number: "Fast", label: "Performance Focused" },
];

export default function Stats() {
  return (
    <section
      className="
        px-6 md:px-16 py-20
        bg-white text-slate-800 relative
      "
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="
              group p-6 rounded-2xl
              bg-white/70 backdrop-blur-xl
              border border-gray-200
              shadow-sm
              hover:-translate-y-2
              transition relative
            "
          >
            {/* Glow */}
            <div className="
              absolute inset-0 rounded-2xl opacity-0
              group-hover:opacity-100
              bg-gradient-to-r from-indigo-500/20 to-purple-500/20
              blur-xl transition
            "></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-indigo-600">
                {s.number}
              </h3>

              <p className="text-sm text-slate-600 mt-1">
                {s.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}