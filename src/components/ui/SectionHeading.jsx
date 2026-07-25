import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClasses = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignClasses} mb-14`}
    >
      {eyebrow && (
        <span className="text-xs font-mono uppercase tracking-widest text-accent-2 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary max-w-2xl text-sm sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}