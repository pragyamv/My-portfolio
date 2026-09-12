import { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR = "a, button, [role=button], input, textarea, select, summary";

type CursorPoint = { x: number; y: number };

export default function SignalCursor() {
  const [point, setPoint] = useState<CursorPoint>({ x: -100, y: -100 });
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!media.matches) return;

    const handleMove = (event: PointerEvent) => {
      setPoint({ x: event.clientX, y: event.clientY });
      setVisible(true);
      const target = event.target instanceof Element ? event.target.closest(INTERACTIVE_SELECTOR) : null;
      setInteractive(Boolean(target));
    };
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`signal-cursor${visible ? " is-visible" : ""}${interactive ? " is-interactive" : ""}${pressed ? " is-pressed" : ""}`}
      style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)` }}
    >
      <span className="signal-cursor-ring" />
      <span className="signal-cursor-core" />
      <span className="signal-cursor-arm signal-cursor-arm-top" />
      <span className="signal-cursor-arm signal-cursor-arm-right" />
      <span className="signal-cursor-arm signal-cursor-arm-bottom" />
      <span className="signal-cursor-arm signal-cursor-arm-left" />
      <span className="signal-cursor-label">ptr://</span>
    </div>
  );
}
