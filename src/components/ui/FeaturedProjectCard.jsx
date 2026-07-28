import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TechBadge from "./TechBadge";
import GlowButton from "./GlowButton";

export default function FeaturedProjectCard({ project, badgeLabel = "Featured Project" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl overflow-hidden glass p-1"
    >
      {/* Gradient border glow */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-accent/40 via-transparent to-accent-2/40 opacity-60 -z-10 blur-sm" />

      <div className="rounded-[22px] bg-surface p-6 sm:p-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-accent-2">
            {badgeLabel}
          </span>
        </div>

        {/* Title + tagline */}
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          {project.name}
        </h3>
        <p className="text-text-secondary text-base sm:text-lg mb-6 max-w-2xl">
          {project.tagline}
        </p>
        <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-3xl">
          {project.description}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          {project.demo && (
            <GlowButton href={project.demo} variant="primary" icon={ArrowUpRight}>
              Live Demo
            </GlowButton>
          )}
          <GlowButton
            href={project.github}
            variant={project.demo ? "secondary" : "primary"}
            icon={FaGithub}
          >
            View Code
          </GlowButton>
        </div>

        {/* Architecture highlights */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {project.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors duration-300"
            >
              <CheckCircle2 size={16} className="text-accent-2 mb-3" />
              <h4 className="text-base font-semibold text-text-primary mb-2">
                {h.title}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {h.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </div>

        {/* Key features */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-3">
            Key Features
          </p>
          <div className="flex flex-wrap gap-2">
            {project.keyFeatures.map((feature) => (
              <TechBadge key={feature} size="sm">
                {feature}
              </TechBadge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}