const steps = [
  {
    n: "01",
    title: "Snap a photo",
    body: "Open the app and take a picture of any room — living room, bedroom, kitchen, office, anywhere.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8B931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Pick a style",
    body: "Choose from 12 designer styles — Modern, Scandinavian, Japandi, Bohemian, Industrial, and more.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8B931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="19" cy="13" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="10" cy="20" r="2.5" />
        <path d="M12 2a10 10 0 0 0 0 20" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Get your redesign",
    body: "AI transforms your space in under 60 seconds. Save, share, or try another style — instantly.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8B931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3l14 9-14 9z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="gold-line" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
            How it works
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            Three steps to a <span className="text-gold italic">new room</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.n} className="feature-card relative">
              <div className="absolute top-6 right-6 text-5xl font-bold italic text-gold/15 leading-none select-none" style={{ fontFamily: "var(--font-display), serif" }}>
                {step.n}
              </div>
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
