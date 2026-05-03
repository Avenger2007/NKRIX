import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import type { VisitorInfo } from "../App";
import { IntelTicker } from "./IntelTicker";

interface Props {
  visitorInfo: VisitorInfo;
}

export const Navbar = ({ visitorInfo }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const iv = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(iv);
  }, []);

  const navItems = [
    { label: "PROFILE", id: "about" },
    { label: "CAPABILITIES", id: "skills" },
    { label: "OPERATIONS", id: "projects" },
    { label: "RECORD", id: "experience" },
    { label: "CONTACT", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-border/30"
      }`}
    >
      {/* Intel ticker strip */}
      <IntelTicker />

      {/* UTC clock strip */}
      <div className="bg-primary/5 border-b border-primary/10 px-4 py-0.5 flex items-center justify-between font-mono text-[9px] tracking-[0.25em] text-primary/40">
        <span className="hidden sm:block">NKX-INTEL // CLEARANCE: AUTHORIZED // EYES ONLY</span>
        <span className="sm:hidden">NKX-INTEL</span>
        <span className="tabular-nums">{time.toUTCString()}</span>
      </div>

      <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-primary font-bold tracking-tighter text-lg group-hover:opacity-80 transition-opacity glow-primary">
            NKRIX
          </span>
          <span className="text-muted-foreground text-xs">//</span>
          <span className="text-primary/50 text-[10px] tracking-widest hidden sm:block">
            INTELLIGENCE
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative font-mono text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-200 group/nav"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover/nav:w-full" />
            </button>
          ))}
        </nav>

        {/* Operative badge */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <div className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground">
            OPERATIVE:{" "}
            <span className="text-primary">
              {visitorInfo.name.split(" ")[0].toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-1.5 border border-primary/35 px-2.5 py-1">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-[9px] text-primary tracking-widest">AUTHORIZED</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
