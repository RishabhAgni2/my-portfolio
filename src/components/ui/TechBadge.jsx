export default function TechBadge({ children, size = "md" }) {
  const sizeClasses =
    size === "sm"
      ? "px-2.5 py-1 text-[11px]"
      : "px-3 py-1.5 text-xs";

  return (
    <span
      className={`inline-flex items-center rounded-full glass font-mono text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors duration-200 ${sizeClasses}`}
    >
      {children}
    </span>
  );
}