import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { GlitchText } from "./GlitchText";

const capabilities = [
  { label: "Python", category: "LANG", clearance: "TOP SECRET", level: 88 },
  { label: "TensorFlow", category: "AI FRAMEWORK", clearance: "TOP SECRET", level: 82 },
  { label: "Data Science", category: "DISCIPLINE", clearance: "TOP SECRET", level: 80 },
  { label: "Machine Learning", category: "AI/ML", clearance: "TOP SECRET", level: 78 },
  { label: "Deep Learning", category: "AI/ML", clearance: "SECRET", level: 72 },
  { label: "Internet of Things", category: "HARDWARE/IOT", clearance: "SECRET", level: 70 },
  { label: "Data Analysis", category: "ANALYTICS", clearance: "SECRET", level: 82 },
  { label: "Prompt Engineering", category: "AI OPS", clearance: "CLASSIFIED", level: 85 },
];

const certifications = [
  "Google AI Essentials Specialization",
  "Google Prompting Essentials Specialization",
  "Maximize Productivity With AI Tools",
  "Speed Up Data Analysis & Presentation Building",
  "Use AI as a Creative or Expert Partner",
];

const clearanceBadge: Record<string, string> = {
  "TOP SECRET": "border-primary/60 text-primary",
  SECRET: "border-foreground/25 text-foreground/55",
  CLASSIFIED: "border-muted-foreground/25 text-muted-foreground/70",
};

function SkillBar({ level, animate }: { level: number; animate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let startTs: number | null = null;
    const duration = 1600;
    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * level));
      if (progress < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [animate, level]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between font-mono text-[9px] text-muted-foreground">
        <span>PROFICIENCY</span>
        <span className="text-primary tabular-nums">{animate ? count : 0}%</span>
      </div>
      <div className="h-px bg-border relative">
        <div
          className="absolute top-0 left-0 h-px bg-primary group-hover:shadow-[0_0_8px_hsl(145_85%_42%/0.8)] transition-shadow duration-300"
          style={{ width: `${animate ? count : 0}%` }}
        />
      </div>
    </div>
  );
}

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section ref={sectionRef} id="skills" className="py-32 relative border-t border-border">
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center -translate-y-1/2">
        <span className="bg-background px-4 font-mono text-[9px] tracking-[0.35em] text-primary/50 border border-border">
          MODULE 02 // CAPABILITIES ASSESSMENT
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-3 relative heading-scan overflow-hidden">
                Technical<br />
                <GlitchText className="text-primary">Arsenal</GlitchText>
              </h2>
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest">
                PROFICIENCY METRICS // VERIFIED ASSESSMENT
              </p>
            </div>
            <div className="border border-border p-4 bg-card/50 font-mono text-xs text-right shrink-0">
              <div className="text-muted-foreground text-[9px] tracking-widest">ASSESSMENT DATE</div>
              <div className="text-primary mt-1">
                {new Date()
                  .toLocaleDateString("en-US", { year: "numeric", month: "long" })
                  .toUpperCase()}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {capabilities.map((cap, i) => (
            <StaggerItem key={i}>
              <div className="group border border-border hover:border-primary/60 transition-colors duration-300 p-5 bg-card/25 relative overflow-hidden">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-mono text-[9px] text-muted-foreground tracking-[0.25em] mb-1">
                      {cap.category}
                    </div>
                    <div className="text-base font-bold tracking-tight group-hover:text-primary transition-colors duration-200">
                      {cap.label}
                    </div>
                  </div>
                  <div
                    className={`font-mono text-[8px] tracking-[0.15em] border px-2 py-0.5 shrink-0 ml-2 ${clearanceBadge[cap.clearance]}`}
                  >
                    {cap.clearance}
                  </div>
                </div>
                <SkillBar level={cap.level} animate={isInView} />
                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Certifications block */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 border border-border p-5 bg-card/25 relative">
            <div className="absolute -top-2.5 left-4 bg-background px-2 font-mono text-[9px] text-primary/50 tracking-[0.25em]">
              // VERIFIED CREDENTIALS & CERTIFICATIONS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 font-mono text-[10px] text-muted-foreground border border-border/50 px-3 py-2.5 bg-background/40 hover:border-primary/40 hover:text-primary/80 transition-colors duration-200"
                >
                  <span className="text-primary shrink-0 mt-0.5">▶</span>
                  <span className="leading-5">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-6 border border-primary/15 p-6 bg-primary/4 relative">
            <div className="absolute -top-2.5 left-4 bg-background px-2 font-mono text-[9px] text-primary/50 tracking-[0.25em]">
              // OPERATIONAL DOCTRINE
            </div>
            <p className="font-mono text-xs text-muted-foreground leading-7">
              &gt; Fast learner. Problem-driven. AI-obsessed. Fresh perspectives are an asset, not a liability.
              <br />
              &gt; Building real solutions with Python and TensorFlow — one model at a time. Doctrine enforced without exception.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
