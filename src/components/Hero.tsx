import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const glitchChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

function useGlitch(target: string, delay = 0) {
  const [text, setText] = useState(target);

  useEffect(() => {
    let frame = 0;
    const maxFrames = 18;
    const timeout = setTimeout(() => {
      const iv = setInterval(() => {
        if (frame >= maxFrames) {
          setText(target);
          clearInterval(iv);
          return;
        }
        setText(
          target
            .split("")
            .map((char, i) =>
              i < (frame / maxFrames) * target.length
                ? char
                : glitchChars[Math.floor(Math.random() * glitchChars.length)]
            )
            .join("")
        );
        frame++;
      }, 45);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, delay]);

  return text;
}

export const Hero = () => {
  const nkrix = useGlitch("NKRIX", 600);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,200,80,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
        }}
      />

      {/* Corner brackets */}
      {[
        "top-28 left-4 border-t border-l",
        "top-28 right-4 border-t border-r",
        "bottom-6 left-4 border-b border-l",
        "bottom-6 right-4 border-b border-r",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute w-8 h-8 border-primary/35 hidden md:block ${cls}`}
        />
      ))}

      <div className="absolute right-0 top-1/3 w-px h-40 bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl">

          {/* Classification badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 mb-10 font-mono text-[10px] tracking-widest"
          >
            <div className="flex items-center gap-2 border border-primary/50 px-3 py-1 text-primary">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              TOP SECRET
            </div>
            <span className="text-muted-foreground">FILE: NKX-00001</span>
            <span className="text-muted-foreground hidden sm:block">CLASSIFICATION: EYES ONLY</span>
            <span className="text-muted-foreground hidden md:block">
              {new Date().toISOString().slice(0, 10)}
            </span>
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="h-px bg-gradient-to-r from-primary/60 via-primary/20 to-transparent mb-8"
          />

          {/* Subject designation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-mono text-[10px] text-primary/50 tracking-[0.35em] mb-3">
              SUBJECT DESIGNATION //
            </div>
            <h1 className="font-bold tracking-tighter leading-[0.85] uppercase mb-6">
              <span
                className="block text-7xl md:text-9xl lg:text-[11rem] glow-primary"
                style={{ color: "hsl(145 85% 42%)" }}
              >
                {nkrix}
              </span>
              <span
                className="block text-4xl md:text-6xl lg:text-7xl"
                style={{
                  WebkitTextStroke: "1px hsl(145 85% 42% / 0.3)",
                  color: "transparent",
                }}
              >
                CLASSIFIED
              </span>
            </h1>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <div className="h-px bg-border/50 mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {[
                { label: "DESIGNATION", value: "AI & ML ENGINEER" },
                { label: "STATUS", value: "SEEKING INTERNSHIP" },
                { label: "THREAT LEVEL", value: "MAXIMUM TALENT" },
                { label: "CLEARANCE", value: "TOP SECRET" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  className="border border-border hover:border-primary/50 p-4 bg-card/50 transition-colors duration-300"
                >
                  <div className="font-mono text-[8px] tracking-[0.25em] text-muted-foreground mb-1.5">
                    {stat.label}
                  </div>
                  <div className="font-mono text-[11px] font-bold text-primary">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-[11px] tracking-[0.25em] uppercase hover:bg-primary/90 transition-all"
            >
              <span>VIEW MISSION FILES</span>
              <svg
                className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
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
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border border-primary/40 text-primary font-mono text-[11px] tracking-[0.25em] uppercase hover:bg-primary/8 transition-all"
            >
              ESTABLISH CONTACT
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom-right metadata */}
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-primary/25 tracking-widest flex flex-col items-end gap-1 hidden md:flex select-none">
        <span>FILE: NKX-00001</span>
        <span>ORIGIN: HYDERABAD, INDIA</span>
        <span>STATUS: ACTIVE</span>
      </div>
    </section>
  );
};
