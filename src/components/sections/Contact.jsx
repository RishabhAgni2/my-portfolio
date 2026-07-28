import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import SocialIcons from "../ui/SocialIcons";
import GlowButton from "../ui/GlowButton";

const EMAIL = "rishabhagni247@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API blocked (rare) — mailto link below still works as fallback
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="I'm actively looking for Software Engineering internships. If you're hiring, or just want to talk backend architecture, reach out."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden glass p-1"
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-accent/30 via-transparent to-accent-2/30 opacity-60 -z-10 blur-sm" />

          <div className="rounded-[22px] bg-surface p-8 sm:p-12 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center mx-auto mb-6">
              <Mail size={24} className="text-accent-2" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              {EMAIL}
            </h3>
            <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto">
              Best way to reach me — I try to respond within a day.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <GlowButton href={`mailto:${EMAIL}`} variant="primary" icon={ArrowUpRight}>
                Send an Email
              </GlowButton>
              <GlowButton
                onClick={handleCopy}
                as="button"
                variant="secondary"
                icon={copied ? Check : Copy}
              >
                {copied ? "Copied!" : "Copy Email"}
              </GlowButton>
              <GlowButton
                href="https://www.linkedin.com/in/rishabh-agnihotri1"
                variant="secondary"
                icon={ArrowUpRight}
              >
                Connect on LinkedIn
              </GlowButton>
            </div>

            <div className="pt-8 border-t border-border flex flex-col items-center gap-4">
              <p className="text-xs font-mono uppercase tracking-widest text-text-secondary">
                Find me elsewhere
              </p>
              <SocialIcons size={20} gap="gap-7" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}