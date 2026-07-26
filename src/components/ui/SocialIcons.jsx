import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { socials } from "../../data/socials";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
  codechef: SiCodechef,
};

export default function SocialIcons({
  size = 18,
  gap = "gap-4",
  className = "",
}) {
  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {socials.map((s) => {
        const Icon = iconMap[s.icon];

        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            aria-label={s.name}
            className="text-text-secondary hover:text-accent-2 transition-colors duration-200"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}