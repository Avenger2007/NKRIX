const FEED = [
  "SIGNAL_INTERCEPT: TENSORFLOW TRAINING CYCLE COMPLETE",
  "OPERATIVE: SEEKING HIGH-VALUE INTERNSHIP // HYDERABAD SECTOR",
  "IOT_GRID_ALPHA: ALL SENSOR NODES ONLINE",
  "THREAT_ASSESSMENT: ZERO CAPABILITY LIMITATIONS DETECTED",
  "CREDENTIALS: 5x GOOGLE AI CERTIFICATIONS — VERIFIED",
  "NEURAL_SENTINEL: PREDICTIVE MODEL — ACCURACY NOMINAL",
  "MISSION DOCTRINE: LEARN. BUILD. DISRUPT.",
  "STATUS_UPDATE: ACTIVELY SCANNING INTERNSHIP CHANNELS",
  "COMMS: nithishkumarreddy2007@gmail.com — CHANNEL OPEN",
  "CLEARANCE LEVEL: MAXIMUM TALENT — AUTHORIZED",
];

export const IntelTicker = () => {
  const items = [...FEED, ...FEED];

  return (
    <div className="relative overflow-hidden h-6 flex items-center border-b border-primary/10 bg-primary/[0.02]">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-[ticker_45s_linear_infinite]">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 font-mono text-[9px] text-primary/30 tracking-widest mx-10"
          >
            <span className="text-primary/50 text-[7px]">▶</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
