import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { timeline } from "../../data/experience";

const iconMap = {
  education: GraduationCap,
  milestone: Award,
};

const itemVariant = {
  hidden: { opacity: 0, x: -24 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Journey"
          title="Education & Milestones"
          description="Where I've studied and the moments that pushed me to build under pressure."
        />

        <div className="relative pl-8 sm:pl-10">
          {/* Vertical connecting line */}
          <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-transparent" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => {
              const Icon = iconMap[item.type] || GraduationCap;
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={itemVariant}
                  className="relative"
                >
                  {/* Node */}
                  <div className="absolute -left-8 sm:-left-10 top-1 w-6 h-6 rounded-full glass flex items-center justify-center">
                    <Icon size={12} className="text-accent-2" />
                  </div>

                  <div className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-text-primary">{item.title}</h3>
                      <span className="text-xs font-mono text-accent-2 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mb-2">{item.org}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}