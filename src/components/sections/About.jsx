import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Code2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    detail: "Final-year B.Tech in Electronics and Communication Engineering at IIIT Bhopal, CGPA 8.63/10.",
  },
  {
    icon: Code2,
    title: "What I Build",
    detail: "Full-stack products end-to-end — React interfaces backed by secure, scalable Node.js/Express systems with real payment, queueing, and auth infrastructure.",
  },
  {
    icon: Sparkles,
    title: "Currently Exploring",
    detail: "Generative AI — I've already integrated the Google Gemini API into TrustTrade for AI-powered descriptions and fraud detection, and I'm going deeper from there.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="About Me"
          title="A full-stack developer who cares how systems hold up under real conditions."
          description="I'm Rishabh Agnihotri — I build complete products, but I spend the most time thinking about the backend: how data flows, how payments stay consistent, and how systems fail gracefully instead of breaking."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
              className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center mb-4">
                <card.icon size={18} className="text-accent-2" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{card.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{card.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}