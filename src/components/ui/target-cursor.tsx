import { useEffect, useRef, useState } from 'react';
import './target-cursor.css';

interface TargetCursorProps {
  targetSelector?: string;
  hideDefaultCursor?: boolean;
  spinDuration?: number;
  spinEase?: string;
}

const CORNER_SIZE = 12;
const BORDER_WIDTH = 3;

const TargetCursor = ({
  targetSelector = '.cursor-target',
  hideDefaultCursor = true,
}: TargetCursorProps) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cornerTLRef = useRef<HTMLDivElement | null>(null);
  const cornerTRRef = useRef<HTMLDivElement | null>(null);
  const cornerBRRef = useRef<HTMLDivElement | null>(null);
  const cornerBLRef = useRef<HTMLDivElement | null>(null);

  // Mutable state we update on every mousemove — kept in refs so we don't
  // trigger a React re-render at 60–125Hz (and up to 1kHz on high-poll mice).
  const posRef = useRef({ x: 0, y: 0 });
  const boundsRef = useRef<DOMRect | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const hasMovedRef = useRef(false);

  // Only React state we keep: drives the .spinning className on the center
  // dot. Toggles on mouseover/mouseleave (rare), never on mousemove.
  const [isTargeting, setIsTargeting] = useState(false);

  useEffect(() => {
    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    let activeTarget: HTMLElement | null = null;
    let currentLeaveHandler: (() => void) | null = null;

    const scheduleUpdate = () => {
      if (rafIdRef.current != null) return;
      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        const cursor = cursorRef.current;
        if (!cursor) return;

        const { x, y } = posRef.current;
        cursor.style.transform =
          `translate(${x}px, ${y}px) translate(-50%, -50%)`;

        if (!hasMovedRef.current) {
          cursor.style.opacity = '1';
          hasMovedRef.current = true;
        }

        const bounds = boundsRef.current;
        if (bounds) {
          const tl = cornerTLRef.current;
          const tr = cornerTRRef.current;
          const br = cornerBRRef.current;
          const bl = cornerBLRef.current;
          if (tl) {
            tl.style.transform =
              `translate(${bounds.left - x - BORDER_WIDTH}px, ${bounds.top - y - BORDER_WIDTH}px)`;
          }
          if (tr) {
            tr.style.transform =
              `translate(${bounds.right - x + BORDER_WIDTH - CORNER_SIZE}px, ${bounds.top - y - BORDER_WIDTH}px)`;
          }
          if (br) {
            br.style.transform =
              `translate(${bounds.right - x + BORDER_WIDTH - CORNER_SIZE}px, ${bounds.bottom - y + BORDER_WIDTH - CORNER_SIZE}px)`;
          }
          if (bl) {
            bl.style.transform =
              `translate(${bounds.left - x - BORDER_WIDTH}px, ${bounds.bottom - y + BORDER_WIDTH - CORNER_SIZE}px)`;
          }
        }
      });
    };

    const resetCorners = () => {
      // Clear inline transforms so the CSS defaults (corners tucked off-screen
      // relative to the cursor center) take over again.
      [cornerTLRef, cornerTRRef, cornerBRRef, cornerBLRef].forEach((r) => {
        if (r.current) r.current.style.transform = '';
      });
    };

    const moveHandler = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      scheduleUpdate();
    };

    const enterHandler = (e: MouseEvent) => {
      const directTarget = e.target as HTMLElement;

      let target: HTMLElement | null = null;
      let current: HTMLElement | null = directTarget;
      while (current && current !== document.body) {
        if (current.matches && current.matches(targetSelector)) {
          target = current;
          break;
        }
        current = current.parentElement;
      }
      if (!target || activeTarget === target) return;

      activeTarget = target;
      boundsRef.current = target.getBoundingClientRect();
      setIsTargeting(true);
      scheduleUpdate();

      const leaveHandler = () => {
        activeTarget = null;
        boundsRef.current = null;
        setIsTargeting(false);
        resetCorners();
        target!.removeEventListener('mouseleave', leaveHandler);
        currentLeaveHandler = null;
      };
      currentLeaveHandler = leaveHandler;
      target.addEventListener('mouseleave', leaveHandler);
    };

    window.addEventListener('mousemove', moveHandler, { passive: true });
    window.addEventListener('mouseover', enterHandler, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseover', enterHandler);
      if (rafIdRef.current != null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (activeTarget && currentLeaveHandler) {
        activeTarget.removeEventListener('mouseleave', currentLeaveHandler);
      }
      document.body.style.cursor = originalCursor;
    };
  }, [targetSelector, hideDefaultCursor]);

  return (
    <div ref={cursorRef} className="target-cursor" style={{ opacity: 0 }}>
      <div
        className={`target-cursor-center ${!isTargeting ? 'spinning' : ''}`}
      />
      <div
        ref={cornerTLRef}
        className="target-cursor-corner target-cursor-corner--top-left"
      />
      <div
        ref={cornerTRRef}
        className="target-cursor-corner target-cursor-corner--top-right"
      />
      <div
        ref={cornerBRRef}
        className="target-cursor-corner target-cursor-corner--bottom-right"
      />
      <div
        ref={cornerBLRef}
        className="target-cursor-corner target-cursor-corner--bottom-left"
      />
    </div>
  );
};

export default TargetCursor;
