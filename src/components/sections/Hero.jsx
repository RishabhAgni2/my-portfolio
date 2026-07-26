import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import GlowButton from "../ui/GlowButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-2/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center pt-24 pb-16">

        {/* Profile Image */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent to-accent-2 opacity-60 blur-md" />

            <img
              src="/profile.jpg"
              alt="Rishabh Agnihotri"
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-bg"
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-text-secondary mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for Software Engineering Internships
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Full-Stack Developer{" "}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            building secure, scalable products end-to-end.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-10"
        >
          I'm <strong>Rishabh Agnihotri</strong>, a Full-Stack Developer who
          builds modern web applications using React, Node.js, Express,
          Django, and Django REST Framework. I enjoy designing secure REST
          APIs, scalable backend systems, PostgreSQL & MongoDB databases,
          Redis caching, Bull Queue background jobs, JWT Authentication, and
          real-time applications with Socket.io. Currently exploring
          <strong> Generative AI</strong> while pursuing my B.Tech at
          IIIT Bhopal.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <GlowButton
            href="#projects"
            variant="primary"
            icon={ArrowRight}
          >
            View Projects
          </GlowButton>

          <GlowButton
            href="https://github.com/RishabhAgni2"
            variant="secondary"
            icon={FaGithub}
          >
            GitHub
          </GlowButton>

          <GlowButton
            href="/resume.pdf"
            variant="secondary"
            icon={FileDown}
          >
            Resume
          </GlowButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm font-mono text-text-secondary"
        >
          <span>CGPA 8.63</span>
          <span>•</span>
          <span>600+ DSA Problems</span>
          <span>•</span>
          <span>3★ CodeChef</span>
        </motion.div>

      </div>
    </section>
  );
}