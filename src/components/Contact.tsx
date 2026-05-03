import { ScrollReveal } from "./ScrollReveal";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative border-t border-border">
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center -translate-y-1/2">
        <span className="bg-background px-4 font-mono text-[9px] tracking-[0.35em] text-primary/50 border border-border">
          MODULE 05 // SECURE CHANNEL
        </span>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/4 blur-[80px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="border border-border p-8 md:p-12 bg-card/25 relative">

              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/50" />

              <div className="text-center">
                <div className="font-mono text-[9px] tracking-[0.4em] text-primary/50 mb-6 flex items-center justify-center gap-4">
                  <span className="w-8 h-px bg-primary/30" />
                  SECURE TRANSMISSION // END-TO-END ENCRYPTED
                  <span className="w-8 h-px bg-primary/30" />
                </div>

                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
                  Establish<br />
                  <span className="text-primary">Contact</span>
                </h2>

                <div className="border border-border p-4 mb-10 bg-card/40 text-left">
                  <div className="font-mono text-[9px] text-primary/50 tracking-[0.25em] mb-2">
                    // TRANSMISSION NOTICE
                  </div>
                  <p className="font-mono text-xs text-muted-foreground leading-7">
                    Subject is open to internship assignments, technical project collaborations, and learning opportunities in AI & Machine Learning. If your mission requires a motivated, fast-learning operative — initiate contact below.
                  </p>
                </div>

                {/* Primary CTA */}
                <a
                  href="mailto:nithishkumarreddy2007@gmail.com"
                  className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary text-primary-foreground font-mono font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-primary/90 transition-colors mb-10 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse" />
                  TRANSMIT_MESSAGE
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                {/* Social links */}
                <div className="grid grid-cols-2 gap-3 pt-8 border-t border-border/40 max-w-sm mx-auto">
                  {[
                    { label: "LINKEDIN", href: "https://www.linkedin.com/in/nithish-kumar-reddy-ai-tech" },
                    { label: "GITHUB", href: "https://github.com/Avenger2007" },
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-border hover:border-primary/60 hover:bg-primary/5 p-3 transition-all duration-200 font-mono text-[9px] tracking-widest text-muted-foreground hover:text-primary flex items-center justify-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-current rounded-full" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
