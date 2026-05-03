import { useEffect, useRef } from "react";

const CHARS = "アイウエオカキクケコサシスセソNKRIX01█▓░ABCDEF789∴∵∶∷";

export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const FONT_SIZE = 12;
    let cols = Math.floor(canvas.width / FONT_SIZE);
    let drops: number[] = Array.from({ length: cols }, () =>
      Math.floor((Math.random() * canvas.height) / FONT_SIZE)
    );

    let raf: number;
    let lastTs = 0;

    const draw = (ts: number) => {
      raf = requestAnimationFrame(draw);
      if (ts - lastTs < 80) return;
      lastTs = ts;

      ctx.fillStyle = "rgba(2, 9, 4, 0.055)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px 'Share Tech Mono', monospace`;

      cols = Math.floor(canvas.width / FONT_SIZE);
      while (drops.length < cols) drops.push(0);

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * FONT_SIZE;

        // Head char — slightly brighter
        if (drops[i] === Math.floor(y / FONT_SIZE)) {
          ctx.fillStyle = "rgba(120, 255, 160, 0.16)";
        } else {
          ctx.fillStyle = "rgba(0, 210, 80, 0.08)";
        }

        ctx.fillText(char, i * FONT_SIZE, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: "screen", opacity: 0.8 }}
    />
  );
};
