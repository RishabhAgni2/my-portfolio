import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="glass rounded-2xl p-6 sm:p-7 flex flex-col h-full hover:bg-white/[0.05] transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-xl font-bold tracking-tight">
          {project.name}
        </h3>

        <div className="flex items-center gap-3 shrink-0 pt-1">
          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} GitHub`}
            className="text-text-secondary hover:text-accent-2 transition-colors duration-200"
          >
            <FaGithub size={17} />
          </a>

          {/* Live Demo */}
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} Live Demo`}
            className="text-text-secondary hover:text-accent-2 transition-colors duration-200"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <p className="text-sm text-text-secondary mb-4">
        {project.tagline}
      </p>

      <div className="flex flex-col gap-2.5 mb-5 flex-grow">
        {project.highlights.slice(0, 2).map((h) => (
          <div
            key={h.title}
            className="text-xs text-text-secondary leading-relaxed"
          >
            <span className="text-text-primary font-medium">
              {h.title}:{" "}
            </span>
            {h.detail}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.slice(0, 5).map((tech) => (
          <TechBadge key={tech} size="sm">
            {tech}
          </TechBadge>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.keyFeatures.map((feature) => (
          <span
            key={feature}
            className="text-[11px] font-mono text-accent-2 bg-accent/10 rounded-md px-2 py-0.5"
          >
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  );
}