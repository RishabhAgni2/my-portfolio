export default function GlowButton({
  href,
  onClick,
  children,
  variant = "primary",
  icon: Icon,
  as = "a",
  className = "",
}) {
  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 group";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent to-accent-2 text-white shadow-[0_0_0_0_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_4px_rgba(99,102,241,0.35)] hover:-translate-y-0.5",
    secondary:
      "glass text-text-primary hover:bg-white/[0.06] hover:-translate-y-0.5",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (as === "button") {
    return (
      <button onClick={onClick} className={classes}>
        {children}
        {Icon && <Icon size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />}
      </button>
    );
  }

  return (
    <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={classes}>
      {children}
      {Icon && <Icon size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />}
    </a>
  );
}