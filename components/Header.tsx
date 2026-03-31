import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-dark-border bg-dark/80 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          Space<span className="gold-shimmer">AI</span>
        </Link>
        <div className="flex items-center gap-8 text-sm text-text-secondary">
          <Link
            href="/privacy"
            className="hover:text-text-primary transition-colors duration-200"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-text-primary transition-colors duration-200"
          >
            Terms
          </Link>
          <Link
            href="/support"
            className="hover:text-text-primary transition-colors duration-200"
          >
            Support
          </Link>
        </div>
      </nav>
    </header>
  );
}
