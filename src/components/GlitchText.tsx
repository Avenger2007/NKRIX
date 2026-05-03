import { useState, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%█▓▒░";

interface Props {
  children: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const GlitchText = ({ children, className = "", as: Tag = "span" }: Props) => {
  const [display, setDisplay] = useState(children);
  const timer = useRef<ReturnType<typeof setInterval>>();

  const scramble = useCallback(() => {
    clearInterval(timer.current);
    let frame = 0;
    const max = 18;
    timer.current = setInterval(() => {
      if (frame >= max) {
        setDisplay(children);
        clearInterval(timer.current);
        return;
      }
      const progress = frame / max;
      setDisplay(
        children
          .split("")
          .map((ch, i) => {
            if (" /.-_".includes(ch)) return ch;
            return i / children.length < progress
              ? ch
              : CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      frame++;
    }, 38);
  }, [children]);

  const reset = useCallback(() => {
    clearInterval(timer.current);
    setDisplay(children);
  }, [children]);

  const Comp = Tag as React.ElementType;
  return (
    <Comp className={className} onMouseEnter={scramble} onMouseLeave={reset}>
      {display}
    </Comp>
  );
};
