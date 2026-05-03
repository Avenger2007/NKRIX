import type { VisitorInfo } from "../App";

interface Props {
  visitorInfo: VisitorInfo;
}

export const Footer = ({ visitorInfo }: Props) => {
  return (
    <footer className="border-t border-border bg-card/20">
      {/* Classification banner */}
      <div className="bg-primary/8 border-b border-primary/15 py-1.5 text-center font-mono text-[9px] tracking-[0.35em] text-primary/55 select-none">
        TOP SECRET // NKRIX INTELLIGENCE DIVISION // HANDLE VIA SECURE CHANNELS ONLY
      </div>

      <div className="container mx-auto px-4 md:px-6 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9px] text-muted-foreground tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="text-primary/60">NKRIX INTEL</span>
            <span className="text-border">//</span>
            <span>ALL RIGHTS RESERVED {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-3 text-center">
            <span>OPERATIVE:</span>
            <span className="text-primary">{visitorInfo.name.toUpperCase()}</span>
            <span className="text-border">//</span>
            <span className="hidden sm:inline">{visitorInfo.organization.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-2">
            <span>STATUS: ONLINE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};
