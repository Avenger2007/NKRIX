import { ScrollReveal } from "./ScrollReveal";
import { GlitchText } from "./GlitchText";

const operations = [
  {
    codename: "NEURAL_SENTINEL",
    classification: "TOP SECRET",
    status: "ACTIVE",
    priority: "CRITICAL",
    description:
      "Predictive analytics engine built with TensorFlow and Python. Trains on real-world datasets to classify and forecast outcomes. Demonstrates end-to-end ML pipeline: data ingestion, preprocessing, model training, and inference deployment.",
    tech: ["Python", "TensorFlow", "NumPy", "Pandas", "Matplotlib"],
    link: "https://github.com/Avenger2007",
    demo: "#",
  },
  {
    codename: "IOT_GRID_ALPHA",
    classification: "SECRET",
    status: "ACTIVE",
    priority: "HIGH",
    description:
      "Internet of Things sensor network prototype. Collects environmental data from hardware nodes and pipes it through a Python backend for real-time analysis. Built to explore edge-computing and IoT-to-cloud data architectures.",
    tech: ["Python", "IoT", "MQTT", "Raspberry Pi", "Data Analysis"],
    link: "https://github.com/Avenger2007",
    demo: "#",
  },
  {
    codename: "PROMPT_OPS",
    classification: "CLASSIFIED",
    status: "COMPLETED",
    priority: "MEDIUM",
    description:
      "Applied prompt engineering toolkit for maximizing productivity with large language models. Documents systematic approaches to AI-assisted data analysis, content generation, and workflow automation. Based on Google AI Essentials curriculum.",
    tech: ["Prompt Engineering", "LLMs", "Google AI", "Data Analysis"],
    link: "https://github.com/Avenger2007",
    demo: "#",
  },
];

const statusStyle: Record<string, string> = {
  ACTIVE: "text-primary border-primary/60",
  COMPLETED: "text-foreground/60 border-border",
  ARCHIVED: "text-muted-foreground border-muted-foreground/30",
};

const priorityStyle: Record<string, string> = {
  CRITICAL: "text-destructive",
  HIGH: "text-primary",
  MEDIUM: "text-muted-foreground",
};

const stampColor: Record<string, string> = {
  "TOP SECRET": "border-primary text-primary",
  SECRET: "border-foreground/50 text-foreground/50",
  CLASSIFIED: "border-muted-foreground/50 text-muted-foreground/50",
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative border-t border-border">
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center -translate-y-1/2">
        <span className="bg-background px-4 font-mono text-[9px] tracking-[0.35em] text-primary/50 border border-border">
          MODULE 03 // MISSION FILES
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-3 relative heading-scan overflow-hidden">
                Active<br />
                <GlitchText className="text-primary">Operations</GlitchText>
              </h2>
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest">
                MISSION BRIEFINGS // AUTHORIZED PERSONNEL ONLY
              </p>
            </div>
            <div className="font-mono text-[9px] text-muted-foreground border border-border/50 px-4 py-2 shrink-0">
              TOTAL OPS: 0{operations.length} // ACTIVE: 02
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-5">
          {operations.map((op, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="group border border-border hover:border-primary/55 transition-colors duration-300 bg-card/25 relative overflow-hidden">

                {/* File header bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-border/60 bg-card/40">
                  <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest">
                    <span className="text-primary">OP: {op.codename}</span>
                    <span className="text-muted-foreground">#{String(i + 1).padStart(3, "0")}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] tracking-widest">
                    <span className={`border px-2 py-0.5 ${statusStyle[op.status]}`}>
                      {op.status}
                    </span>
                    <span className="text-muted-foreground">
                      PRIORITY:{" "}
                      <span className={priorityStyle[op.priority]}>{op.priority}</span>
                    </span>
                    <span className="border border-border/50 text-muted-foreground px-2 py-0.5">
                      {op.classification}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Visual panel */}
                  <div className="md:col-span-5 border border-border aspect-video bg-secondary/20 relative overflow-hidden flex items-center justify-center">
                    <div className="text-center select-none">
                      <div className="text-3xl font-bold text-primary/10 mb-1">{op.codename}</div>
                      <div className="font-mono text-[9px] text-primary/25 tracking-widest">
                        VISUAL INTEL
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary/35" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/35" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-primary/35" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary/35" />
                    <div className="absolute inset-x-0 top-0 h-px bg-primary/0 group-hover:bg-primary/30 transition-colors duration-700" />
                  </div>

                  {/* Info panel */}
                  <div className="md:col-span-7 flex flex-col gap-4">
                    <div>
                      <div className="font-mono text-[9px] text-muted-foreground tracking-[0.25em] mb-2">
                        MISSION BRIEF
                      </div>
                      <p className="font-mono text-xs text-muted-foreground leading-7">
                        &gt; {op.description}
                      </p>
                    </div>

                    <div>
                      <div className="font-mono text-[9px] text-muted-foreground tracking-[0.25em] mb-2">
                        ASSETS DEPLOYED
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {op.tech.map((t, j) => (
                          <span
                            key={j}
                            className="border border-border px-2 py-1 font-mono text-[9px] tracking-wider text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors duration-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex items-center gap-6 pt-2">
                      <a
                        href={op.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] tracking-widest text-primary hover:text-primary/70 transition-colors flex items-center gap-2 group/btn"
                      >
                        <span>ACCESS_REPO</span>
                        <span className="w-4 h-px bg-primary group-hover/btn:w-7 transition-all duration-200" />
                      </a>
                      <a
                        href={op.demo}
                        className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors"
                      >
                        LIVE_DEMO
                      </a>
                    </div>
                  </div>
                </div>

                {/* Rubber stamp — slams in on hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div
                    className={`stamp-reveal font-mono font-bold text-xl tracking-[0.3em] border-2 px-8 py-3 select-none ${stampColor[op.classification]}`}
                    style={{
                      textShadow:
                        op.classification === "TOP SECRET"
                          ? "0 0 12px hsl(145 85% 42% / 0.4)"
                          : "none",
                    }}
                  >
                    {op.classification}
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
