import SocialIcons from "../ui/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <img
            src="/profile.jpg"
            alt="Rishabh Agnihotri"
            className="w-8 h-8 rounded-full object-cover border border-border"
            style={{ objectPosition: "center 35%" }}
          />
          <span className="font-mono text-sm text-text-secondary">
            Rishabh Agnihotri © {year}
          </span>
        </div>

        <SocialIcons size={16} gap="gap-5" />

        <p className="text-xs text-text-secondary">
          Built with React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}