import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { VisitorInfo } from "../App";

interface Props {
  onClearanceGranted: (info: VisitorInfo) => void;
}

export const AccessGate = ({ onClearanceGranted }: Props) => {
  const [uiPhase, setUiPhase] = useState<"scanning" | "ready" | "processing">("scanning");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [purpose, setPurpose] = useState("");
  const [processingLines, setProcessingLines] = useState<string[]>([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [error, setError] = useState("");

  const sysId = `NKX-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
  const timestamp = new Date().toISOString();

  useEffect(() => {
    let p = 0;
    const scanInterval = setInterval(() => {
      p += Math.random() * 18 + 8;
      if (p >= 100) {
        p = 100;
        clearInterval(scanInterval);
        setTimeout(() => setUiPhase("ready"), 400);
      }
      setScanProgress(Math.min(p, 100));
    }, 80);
    return () => clearInterval(scanInterval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !organization.trim() || !purpose) {
      setError("ALL FIELDS REQUIRED. INCOMPLETE SUBMISSIONS WILL BE FLAGGED.");
      return;
    }
    setError("");
    setUiPhase("processing");

    const lines = [
      `> INITIATING CLEARANCE PROTOCOL...`,
      `> VISITOR DESIGNATION: ${name.toUpperCase()}`,
      `> ORGANIZATION: ${organization.toUpperCase()}`,
      `> ACCESS PURPOSE: ${purpose}`,
      `> SCANNING THREAT DATABASE...`,
      `> CROSS-REFERENCING CLEARED PERSONNEL LIST...`,
      `> BIOMETRIC ANALYSIS: PENDING...`,
      `> BEHAVIORAL ASSESSMENT: NOMINAL`,
      `> THREAT LEVEL: NONE DETECTED`,
      `> GENERATING SESSION TOKEN: ${Math.random().toString(36).slice(2, 14).toUpperCase()}`,
      `> CLEARANCE LEVEL ASSIGNED: AUTHORIZED`,
      `> `,
      `> ACCESS GRANTED. WELCOME, ${name.split(" ")[0].toUpperCase()}.`,
    ];

    let i = 0;
    const iv = setInterval(() => {
      if (i < lines.length) {
        const currentLine = lines[i];
        i++;
        setProcessingLines((prev) => [...prev, currentLine]);
      } else {
        clearInterval(iv);
        setTimeout(() => onClearanceGranted({ name: name.trim(), organization: organization.trim(), purpose }), 700);
      }
    }, 280);
  };

  return (
    <div className="min-h-screen bg-[#020904] flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* CRT scanlines */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,230,80,0.015) 2px, rgba(0,230,80,0.015) 4px)",
        }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,80,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,80,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Classification banners */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="fixed top-0 left-0 right-0 bg-primary py-2 text-center font-mono text-[10px] tracking-[0.35em] text-primary-foreground font-bold z-50 select-none"
      >
        ▲ TOP SECRET // NKRIX INTELLIGENCE DIVISION // CLEARANCE REQUIRED ▲
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="fixed bottom-0 left-0 right-0 bg-primary py-2 text-center font-mono text-[10px] tracking-[0.35em] text-primary-foreground font-bold z-50 select-none"
      >
        ▲ UNAUTHORIZED ACCESS IS PROHIBITED AND WILL BE PROSECUTED ▲
      </motion.div>

      <div className="relative z-20 w-full max-w-xl mt-8">
        {/* Logo / Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="font-mono text-[10px] tracking-[0.5em] text-primary/50 mb-3">
            ████ CLASSIFIED ACCESS TERMINAL ████
          </div>
          <div className="text-5xl font-bold tracking-tighter text-primary glow-primary mb-1">
            NKRIX
          </div>
          <div className="font-mono text-[10px] text-primary/40 tracking-[0.3em]">
            INTELLIGENCE PORTFOLIO SYSTEM // v4.2.1
          </div>
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>

        {/* Scanning phase */}
        <AnimatePresence>
          {uiPhase === "scanning" && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-6 py-8"
            >
              <div className="font-mono text-xs text-primary/60 tracking-widest">
                INITIALIZING SECURE TERMINAL...
              </div>
              <div className="font-mono text-xs text-primary/40">
                SCANNING ENVIRONMENT <span className="cursor-blink">█</span>
              </div>
              <div className="border border-primary/20 h-1 mx-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-primary"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
              <div className="font-mono text-[10px] text-primary/30 tracking-widest">
                {Math.floor(scanProgress)}%
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form phase */}
        <AnimatePresence>
          {uiPhase === "ready" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* System notice */}
              <div className="border border-primary/20 p-4 mb-6 bg-primary/5 font-mono text-[11px] leading-6 text-primary/50">
                <div className="text-primary/70 mb-2 tracking-widest">// SYSTEM NOTICE:</div>
                <p>
                  This terminal provides access to classified personnel files for the operative designated NKRIX. All sessions are monitored and logged.
                </p>
                <p className="mt-1 text-primary/30">
                  SYS_ID: {sysId} | TS: {timestamp}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary/60 mb-4">
                  VISITOR REGISTRATION — ENTER CREDENTIALS TO PROCEED:
                </div>

                {/* Name */}
                <div>
                  <label className="block font-mono text-[9px] tracking-[0.3em] text-primary/50 mb-1.5">
                    01 // VISITOR DESIGNATION
                  </label>
                  <div className="relative border border-primary/25 focus-within:border-primary/70 transition-colors duration-200">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/40 text-xs">▶</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="ENTER FULL NAME"
                      className="w-full bg-transparent font-mono text-sm text-primary placeholder:text-primary/25 pl-8 pr-4 py-3.5 outline-none tracking-wider"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label className="block font-mono text-[9px] tracking-[0.3em] text-primary/50 mb-1.5">
                    02 // ORGANIZATION / AGENCY
                  </label>
                  <div className="relative border border-primary/25 focus-within:border-primary/70 transition-colors duration-200">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/40 text-xs">▶</span>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="COMPANY / INSTITUTION"
                      className="w-full bg-transparent font-mono text-sm text-primary placeholder:text-primary/25 pl-8 pr-4 py-3.5 outline-none tracking-wider"
                    />
                  </div>
                </div>

                {/* Purpose */}
                <div>
                  <label className="block font-mono text-[9px] tracking-[0.3em] text-primary/50 mb-1.5">
                    03 // PURPOSE OF ACCESS
                  </label>
                  <div className="relative border border-primary/25 focus-within:border-primary/70 transition-colors duration-200">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/40 text-xs">▶</span>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full bg-[#020904] font-mono text-sm text-primary pl-8 pr-4 py-3.5 outline-none tracking-wider appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        SELECT ACCESS PURPOSE
                      </option>
                      <option value="RECRUITMENT">RECRUITMENT / TALENT ACQUISITION</option>
                      <option value="COLLABORATION">PROJECT COLLABORATION</option>
                      <option value="RESEARCH">RESEARCH / INTELLIGENCE GATHERING</option>
                      <option value="NETWORKING">PROFESSIONAL NETWORKING</option>
                      <option value="OTHER">OTHER AUTHORIZED PURPOSE</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/40 text-xs pointer-events-none">▼</span>
                  </div>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-mono text-[10px] text-destructive tracking-widest border border-destructive/30 px-3 py-2 bg-destructive/5"
                  >
                    ⚠ {error}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.998 }}
                  className="w-full bg-primary text-primary-foreground font-mono font-bold tracking-[0.35em] py-4 text-xs uppercase hover:bg-primary/90 transition-colors mt-2 flex items-center justify-center gap-3"
                >
                  <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse" />
                  REQUEST CLEARANCE
                  <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse" />
                </motion.button>

                <div className="text-center font-mono text-[9px] text-primary/25 tracking-widest">
                  ALL ACCESS ATTEMPTS ARE LOGGED AND MONITORED
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Processing phase */}
        <AnimatePresence>
          {uiPhase === "processing" && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs space-y-1.5 py-4"
            >
              {processingLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.12 }}
                  className={
                    line.includes("ACCESS GRANTED")
                      ? "text-primary glow-primary font-bold text-sm mt-3"
                      : line.includes("THREAT") || line.includes("NOMINAL")
                      ? "text-primary"
                      : "text-primary/60"
                  }
                >
                  {line}
                </motion.div>
              ))}
              {processingLines.length > 0 && processingLines.length < 13 && (
                <span className="text-primary cursor-blink">█</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
