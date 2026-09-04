import { motion } from "framer-motion";

export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="page-header v2-page-header">
      <motion.div
        className="site-width page-header-inner"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        {children && <p className="page-lede">{children}</p>}
      </motion.div>
    </section>
  );
}
