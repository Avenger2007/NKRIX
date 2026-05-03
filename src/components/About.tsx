import { ScrollReveal } from "./ScrollReveal";

export const About = () => {
  return (
    <section id="about" className="py-32 relative border-t border-border">
      {/* Section marker */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center -translate-y-1/2">
        <span className="bg-background px-4 font-mono text-[9px] tracking-[0.35em] text-primary/50 border border-border">
          MODULE 01 // SUBJECT PROFILE
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Left column */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="lg:sticky lg:top-36">
                {/* Dossier photo */}
                <div className="border border-border p-1 mb-6 aspect-[3/4] max-w-[180px] relative bg-card overflow-hidden group">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="text-6xl font-bold text-primary/15">NK</div>
                    <div className="font-mono text-[9px] text-primary/25 tracking-widest text-center">
                      PHOTO<br />REDACTED
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-primary/50" />
                  <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-primary/50" />
                  <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-primary/50" />
                  <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-primary/50" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-3">
                  Subject<br />
                  <span className="text-primary">Profile</span>
                </h2>
                <div className="font-mono text-[9px] text-muted-foreground tracking-widest flex items-center gap-2">
                  <span className="w-5 h-px bg-border" />
                  CLASSIFIED // NEED TO KNOW
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column */}
          <div className="lg:col-span-8 space-y-6">

            {/* Personnel data block */}
            <ScrollReveal delay={0.1}>
              <div className="border border-border p-5 bg-card/30 relative">
                <div className="absolute -top-2.5 left-4 bg-background px-2 font-mono text-[9px] text-primary/50 tracking-[0.25em]">
                  PERSONNEL DATA
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {[
                    { field: "CODENAME", value: "NKRIX" },
                    { field: "REAL NAME", value: "NITHISH KUMAR REDDY" },
                    { field: "SPECIALIZATION", value: "AI & MACHINE LEARNING" },
                    { field: "STATUS", value: "SEEKING INTERNSHIP" },
                    { field: "LOCATION", value: "HYDERABAD, INDIA" },
                    { field: "PRIMARY FOCUS", value: "PYTHON / TENSORFLOW" },
                    { field: "CURRENT OPS", value: "BCA — CU KERALA" },
                    { field: "THREAT LEVEL", value: "MAXIMUM TALENT" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="font-mono text-[8px] tracking-[0.25em] text-muted-foreground">
                        {item.field}
                      </div>
                      <div className="font-mono text-[11px] text-primary">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Narrative */}
            <div className="space-y-5 font-mono text-sm text-muted-foreground leading-7">
              <ScrollReveal delay={0.2}>
                <p className="text-foreground/90">
                  &gt; First-year BCA operative at Central University of Kerala. Primary mission: mastering Artificial Intelligence and Machine Learning. Currently building hands-on capabilities in Python, TensorFlow, and Data Science through classified personal projects and field training via online courses.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p>
                  &gt; Subject is fascinated by how AI can neutralize real-world problems — from predictive analytics to automation. Weekends are spent running ML model experiments, engaging in live coding challenges, and monitoring the latest intelligence from the tech sector.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p>
                  &gt; Psych assessment indicates fresh perspective, rapid acquisition of new protocols, and genuine commitment to continuous capability growth. Currently cleared for internship operations and available for technical project deployment.
                </p>
              </ScrollReveal>
            </div>

            {/* Analyst note with redacted text */}
            <ScrollReveal delay={0.5}>
              <div className="border border-destructive/20 p-4 bg-destructive/5 relative">
                <div className="absolute -top-2.5 left-4 bg-background px-2 font-mono text-[9px] text-destructive/60 tracking-[0.25em]">
                  // ANALYST NOTE
                </div>
                <p className="font-mono text-xs text-muted-foreground leading-7">
                  Subject's full project portfolio has been{" "}
                  <span className="redacted px-8 cursor-pointer" title="hover to reveal">
                    ████████████████
                  </span>{" "}
                  pending clearance review. Direct contact recommended for comprehensive capability briefing.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
};
