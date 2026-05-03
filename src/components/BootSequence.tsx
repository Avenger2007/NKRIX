import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { VisitorInfo } from "../App";

interface Props {
  visitorInfo: VisitorInfo;
  onComplete: () => void;
}

export const BootSequence = ({ visitorInfo, onComplete }: Props) => {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const bootLines = [
    "NKRIX INTELLIGENCE PORTFOLIO SYSTEM",
    "════════════════════════════════════════════════════",
    "KERNEL LOAD: OK",
    "MEMORY CHECK: 32768MB ... OK",
    "CRYPTO ENGINE: INITIALIZING...",
    "CRYPTO ENGINE: AES-256 READY",
    "ESTABLISHING SECURE CHANNEL...",
    "TLS 1.3 HANDSHAKE: COMPLETE",
    "SESSION ENCRYPTED",
    "────────────────────────────────────────────────────",
    `VISITOR IDENTITY CONFIRMED`,
    `  DESIGNATION : ${visitorInfo.name.toUpperCase()}`,
    `  ORGANIZATION: ${visitorInfo.organization.toUpperCase()}`,
    `  PURPOSE      : ${visitorInfo.purpose}`,
    "────────────────────────────────────────────────────",
    "LOADING MODULE: SUBJECT_PROFILE.............. DONE",
    "LOADING MODULE: CAPABILITIES_MATRIX.......... DONE",
    "LOADING MODULE: MISSION_FILES................ DONE",
    "LOADING MODULE: SERVICE_RECORD............... DONE",
    "LOADING MODULE: SECURE_CHANNELS.............. DONE",
    "────────────────────────────────────────────────────",
    "CLEARANCE LEVEL: AUTHORIZED",
    "ACCESS SCOPE   : FULL DOSSIER",
    "SESSION EXPIRES: ON BROWSER CLOSE",
    "════════════════════════════════════════════════════",
    `WELCOME TO NKRIX INTELLIGENCE. OPERATIVE ${visitorInfo.name.split(" ")[0].toUpperCase()}, PROCEED.`,
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        const currentLine = bootLines[i];
        const nextProgress = Math.round(((i + 1) / bootLines.length) * 100);
        i++;
        setLines((prev) => [...prev, currentLine]);
        setProgress(nextProgress);
      } else {
        clearInterval(interval);
        setDone(true);
        setTimeout(onComplete, 1000);
      }
    }, 110);
    return () => clearInterval(interval);
  }, []);

  const getLineStyle = (line: string | undefined) => {
    if (!line) return "text-primary/55";
    if (line.startsWith("WELCOME")) return "text-primary glow-primary font-bold text-sm";
    if (line.startsWith("════")) return "text-primary/30";
    if (line.startsWith("────")) return "text-primary/20";
    if (line.includes("DONE")) return "text-primary";
    if (line.includes("READY") || line.includes("COMPLETE") || line.includes("OK")) return "text-primary";
    if (line.includes("CLEARANCE") || line.includes("AUTHORIZED") || line.includes("FULL")) return "text-primary";
    if (line.startsWith("  ")) return "text-primary/80";
    return "text-primary/55";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#020904] flex flex-col justify-center p-6 md:p-16 font-mono relative overflow-hidden"
    >
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,230,80,0.012) 2px, rgba(0,230,80,0.012) 4px)",
        }}
      />

      <div className="max-w-3xl mx-auto w-full relative z-10">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.08 }}
            className={`text-xs md:text-sm leading-6 ${getLineStyle(line)}`}
          >
            {line}
          </motion.div>
        ))}
        {!done && <span className="text-primary cursor-blink">█</span>}

        {/* Progress bar */}
        <div className="mt-8 border border-primary/20 h-1 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.08 }}
          />
        </div>
        <div className="text-primary/40 text-[10px] mt-1.5 tracking-widest">
          LOADING: {progress}%
        </div>
      </div>
    </motion.div>
  );
};
