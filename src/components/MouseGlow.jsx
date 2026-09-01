import { useEffect, useRef } from "react";

/** Minimal cursor-tracking light. Small, faint radial glow; no trail. */
export function MouseGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const glow = ref.current;
    if (!glow) return;
    if (window.matchMedia?.("(pointer: coarse)").matches) return;

    let frame = 0;
    const half = glow.offsetWidth / 2 || 140;
    const move = (e) => {
      const x = e.clientX - half;
      const y = e.clientY - half;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.transform = `translate(${x}px, ${y}px)`;
        glow.style.opacity = "1";
      });
    };
    const leave = () => {
      glow.style.opacity = "0";
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return <div className="mouse-glow" ref={ref} aria-hidden="true" />;
}
