import { APP_STORE_URL } from "@/lib/links";

type Variant = "primary" | "ghost";

export default function AppStoreButton({
  variant = "primary",
  label = "Download on the App Store",
  className = "",
}: {
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-colors";
  const styles =
    variant === "primary"
      ? "bg-gold text-dark hover:bg-gold-dim"
      : "border border-dark-border text-text-primary hover:border-gold/40 hover:text-gold";

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.5 12.5c0-2.6 2.1-3.9 2.2-3.9-1.2-1.7-3-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.4 1-4.3 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.3 2.6 1.3-.1 1.8-.9 3.4-.9 1.6 0 2 .9 3.4.8 1.4 0 2.3-1.3 3.2-2.6.7-1 1.2-2 1.6-3.1-2.7-1.1-3.1-3.9-3.1-4zm-2.7-7.2c.7-.9 1.2-2.1 1.1-3.3-1.1.1-2.4.7-3.1 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.4-.6 3.1-1.5z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
