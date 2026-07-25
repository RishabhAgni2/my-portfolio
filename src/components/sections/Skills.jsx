import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import TechBadge from "../ui/TechBadge";
import { skillGroups } from "../../data/skills";

const groupVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A full-stack toolkit, with the deepest experience in backend architecture, databases, and system reliability."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={groupVariant}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-accent-2 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <TechBadge key={skill}>{skill}</TechBadge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}