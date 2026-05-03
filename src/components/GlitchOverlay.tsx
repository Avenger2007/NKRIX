import { useEffect, useRef, useState } from "react";

interface GlitchLine {
  top: number;
  left: number;
  width: number;
  opacity: number;
}

export const GlitchOverlay = () => {
  const [active, setActive] = useState(false);
  const [lines, setLines] = useState<GlitchLine[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const schedule = () => {
      timerRef.current = setTimeout(
        () => {
          const count = 2 + Math.floor(Math.random() * 3);
          setLines(
            Array.from({ length: count }, () => ({
              top: 5 + Math.random() * 90,
              left: Math.random() * 20,
              width: 30 + Math.random() * 70,
              opacity: 0.04 + Math.random() * 0.08,
            }))
          );
          setActive(true);

          // Second glitch flash after short pause
          setTimeout(() => {
            setLines(
              Array.from({ length: 1 }, () => ({
                top: 10 + Math.random() * 80,
                left: Math.random() * 30,
                width: 20 + Math.random() * 50,
                opacity: 0.06,
              }))
            );
          }, 80);

          setTimeout(() => {
            setActive(false);
            setLines([]);
            schedule();
          }, 160);
        },
        9000 + Math.random() * 14000
      );
    };

    schedule();
    return () => clearTimeout(timerRef.current);
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden">
      {/* Horizontal interference lines */}
      {lines.map((line, i) => (
        <div
          key={i}
          className="absolute h-px bg-primary"
          style={{
            top: `${line.top}%`,
            left: `${line.left}%`,
            width: `${line.width}%`,
            opacity: line.opacity,
            boxShadow: `0 0 3px hsl(145 85% 42% / 0.5)`,
            transform: `translateX(${(Math.random() - 0.5) * 6}px)`,
          }}
        />
      ))}

      {/* Scanline flash */}
      <div
        className="absolute inset-x-0 h-0.5 bg-primary/8"
        style={{
          top: `${20 + Math.random() * 60}%`,
          filter: "blur(1px)",
        }}
      />

      {/* RGB color shift on a random strip */}
      <div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: `${Math.random() * 80}%`,
          height: `${2 + Math.random() * 4}%`,
          background: `linear-gradient(transparent, rgba(0,230,80,0.025), transparent)`,
          transform: `translateX(${(Math.random() - 0.5) * 8}px)`,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
};
