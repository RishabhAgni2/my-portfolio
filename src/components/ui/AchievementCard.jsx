import { motion } from "framer-motion";
import { Trophy, Star, Code2, ArrowUpRight } from "lucide-react";

const iconMap = {
  trophy: Trophy,
  star: Star,
  code: Code2,
};

export default function AchievementCard({ achievement, index = 0 }) {
  const Icon = iconMap[achievement.icon] || Trophy;

  const CardContent = (
    <>
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center mb-5">
        <Icon size={20} className="text-accent-2" />
      </div>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-text-primary leading-snug">
          {achievement.title}
        </h3>
        {achievement.link && (
          <ArrowUpRight size={16} className="text-text-secondary shrink-0 mt-0.5" />
        )}
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">
        {achievement.detail}
      </p>
    </>
  );

  const wrapperClasses =
    "glass rounded-2xl p-6 h-full hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300";

  const motionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  if (achievement.link) {
    return (
      <motion.a
        href={achievement.link}
        target="_blank"
        rel="noreferrer"
        {...motionProps}
        className={`${wrapperClasses} block`}
      >
        {CardContent}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps} className={wrapperClasses}>
      {CardContent}
    </motion.div>
  );
}