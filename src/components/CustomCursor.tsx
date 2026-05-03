import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const outer = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setCoords({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHovering(
        !!(
          t.closest("a") ||
          t.closest("button") ||
          t.tagName === "INPUT" ||
          t.tagName === "SELECT" ||
          t.tagName === "TEXTAREA"
        )
      );
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const loop = () => {
      outer.current.x += (pos.current.x - outer.current.x) * 0.1;
      outer.current.y += (pos.current.y - outer.current.y) * 0.1;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outer.current.x}px, ${outer.current.y}px)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer targeting box — lagged */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform"
        style={{ transform: "translate(-200px,-200px)" }}
      >
        <div
          className={`relative -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            clicking ? "scale-75" : hovering ? "scale-[1.6]" : "scale-100"
          }`}
          style={{ width: 34, height: 34 }}
        >
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-primary" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-primary" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-primary" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-primary" />
          {/* Crosshair lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-primary/25" />
          <div className="absolute top-0 left-1/2 h-full w-px bg-primary/25" />
          {/* Outer ring */}
          <div
            className="absolute inset-1.5 rounded-full border border-primary/20"
            style={{ transition: "all 0.2s" }}
          />
        </div>
        {/* Coordinate readout */}
        <div
          className="absolute font-mono text-[7px] text-primary/30 tracking-wider whitespace-nowrap select-none"
          style={{ top: 22, left: 20 }}
        >
          {String(coords.x).padStart(4, "0")},{String(coords.y).padStart(4, "0")}
        </div>
      </div>

      {/* Inner dot — instant */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform"
        style={{ transform: "translate(-200px,-200px)" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-100 ${
            clicking ? "w-0.5 h-0.5" : hovering ? "w-2 h-2" : "w-1 h-1"
          }`}
          style={{
            boxShadow: "0 0 6px hsl(145 85% 42% / 0.9), 0 0 14px hsl(145 85% 42% / 0.4)",
          }}
        />
      </div>
    </>
  );
};
