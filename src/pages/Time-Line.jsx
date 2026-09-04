import { motion } from "framer-motion";
import { Code2, Database, Figma, Server } from "lucide-react";

const skills = [
  { title: "Frontend", text: "Clean React interfaces with responsive layouts.", tags: ["React", "Next.js", "Tailwind"], icon: <Code2 size={24} /> },
  { title: "Backend", text: "APIs and server logic for practical app flows.", tags: ["Node.js", "Express", "REST APIs"], icon: <Server size={24} /> },
  { title: "Database", text: "Simple data structure that stays maintainable.", tags: ["MongoDB", "SQL", "Mongoose"], icon: <Database size={24} /> },
  { title: "UI/UX", text: "Clear screens, good spacing, and smooth polish.", tags: ["Figma", "Wireframes", "UX"], icon: <Figma size={24} /> },
];

export default function MyRole() {
  return (
    <section id="skills" className="section skills-premium">
      <div className="site-width">
        <div className="section-center">
          <p className="eyebrow">SKILLS</p>
          <h2 className="section-title">What I work with.</h2>
          <p className="section-copy">Frontend, backend, database, and final interface polish.</p>
        </div>

        <div className="skill-card-grid">
          {skills.map((skill, index) => (
            <motion.article
              className="skill-card"
              key={skill.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="capability-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
              <div className="tags">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
