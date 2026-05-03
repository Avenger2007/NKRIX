import { ScrollReveal } from "./ScrollReveal";

const serviceRecord = [
  {
    period: "2025 — PRESENT",
    rank: "BCA Student — Mathematics & Computer Science",
    unit: "CENTRAL UNIVERSITY OF KERALA",
    clearance: "TOP SECRET",
    description:
      "Currently enlisted at Central University of Kerala pursuing a Bachelor's degree in Mathematics and Computer Science (2025–2029). Simultaneously executing self-directed AI/ML training operations through personal projects, online certifications, and active participation in coding challenges.",
    achievements: ["AI & ML specialization", "Active project pipeline", "Google-certified"],
  },
  {
    period: "2025",
    rank: "Certified AI Operative — Google AI Essentials",
    unit: "GOOGLE / COURSERA",
    clearance: "SECRET",
    description:
      "Completed Google AI Essentials Specialization — covering practical AI usage, prompt engineering, productivity amplification, and leveraging AI as a creative expert partner. Multiple credentials earned across the Google AI curriculum.",
    achievements: [
      "5 Google certifications",
      "Prompt engineering",
      "AI productivity tools",
    ],
  },
  {
    period: "ONGOING",
    rank: "Independent ML Research & Projects",
    unit: "SELF-DIRECTED OPERATIONS",
    clearance: "CLASSIFIED",
    description:
      "Actively building and training ML models on personal datasets. Experimenting with TensorFlow, Python data pipelines, and IoT integrations. Monitoring latest AI research developments and participating in online coding challenges to sharpen operational readiness.",
    achievements: [
      "TensorFlow model builds",
      "Data pipeline development",
      "IoT prototyping",
    ],
  },
];

const clearanceBadge: Record<string, string> = {
  "TOP SECRET": "text-primary border-primary/50",
  SECRET: "text-foreground/55 border-border",
  CLASSIFIED: "text-muted-foreground border-muted-foreground/30",
};

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative border-t border-border">
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center -translate-y-1/2">
        <span className="bg-background px-4 font-mono text-[9px] tracking-[0.35em] text-primary/50 border border-border">
          MODULE 04 // SERVICE RECORD
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-3">
              Operational<br />
              <span className="text-primary">History</span>
            </h2>
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest">
              EDUCATION & TRAINING RECORD // VERIFIED
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {serviceRecord.map((entry, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="group border border-border hover:border-primary/50 transition-colors duration-300 bg-card/20 relative overflow-hidden">

                {/* Header bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-border/60 bg-card/30">
                  <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] tracking-widest">
                    <span className="text-primary font-bold">{entry.period}</span>
                    <span className="h-px w-4 bg-border hidden sm:block" />
                    <span className="text-muted-foreground">@ {entry.unit}</span>
                  </div>
                  <div
                    className={`font-mono text-[9px] border px-2 py-0.5 tracking-widest shrink-0 ${clearanceBadge[entry.clearance]}`}
                  >
                    {entry.clearance}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-5">
                  <div className="md:col-span-8">
                    <div className="font-mono text-[9px] text-muted-foreground tracking-[0.25em] mb-2">
                      DESIGNATION
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors duration-200">
                      {entry.rank}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground leading-7">
                      &gt; {entry.description}
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <div className="font-mono text-[9px] text-muted-foreground tracking-[0.25em] mb-3">
                      KEY ACHIEVEMENTS
                    </div>
                    <div className="space-y-2">
                      {entry.achievements.map((a, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground"
                        >
                          <span className="text-primary shrink-0">▶</span>
                          <span>{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
