import { useEffect, useRef, useCallback } from "react";

interface EmojiBody {
  emoji: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  isDragging: boolean;
}

const EMOJIS = ["📐", "🧪", "🔬", "✍️", "📚", "🏛️", "🌍", "💻", "📝", "🎓", "📖", "🧠", "⚗️", "🔢", "📏", "🌡️", "🧬", "⚡"];
const GRAVITY = 0.3;
const FRICTION = 0.99;
const BOUNCE = 0.6;
const EMOJI_COUNT = 12;

const EmojiPhysics = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bodiesRef = useRef<EmojiBody[]>([]);
  const dragRef = useRef<{ index: number; offsetX: number; offsetY: number; lastX: number; lastY: number } | null>(null);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const initBodies = useCallback((width: number, height: number) => {
    const bodies: EmojiBody[] = [];
    for (let i = 0; i < EMOJI_COUNT; i++) {
      bodies.push({
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        x: Math.random() * (width - 40) + 20,
        y: Math.random() * (height * 0.5),
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 2,
        size: 24 + Math.random() * 16,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        isDragging: false,
      });
    }
    bodiesRef.current = bodies;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (bodiesRef.current.length === 0) {
        initBodies(canvas.width, canvas.height);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bodiesRef.current.forEach((body, i) => {
        if (body.isDragging) {
          body.x += (mouseRef.current.x - body.x) * 0.3;
          body.y += (mouseRef.current.y - body.y) * 0.3;
          body.rotation += body.rotationSpeed;
        } else {
          body.vy += GRAVITY;
          body.vx *= FRICTION;
          body.vy *= FRICTION;
          body.x += body.vx;
          body.y += body.vy;
          body.rotation += body.rotationSpeed * (Math.abs(body.vx) + Math.abs(body.vy)) * 0.05;

          // Bounce off walls
          if (body.x < body.size / 2) {
            body.x = body.size / 2;
            body.vx *= -BOUNCE;
          }
          if (body.x > canvas.width - body.size / 2) {
            body.x = canvas.width - body.size / 2;
            body.vx *= -BOUNCE;
          }
          if (body.y > canvas.height - body.size / 2) {
            body.y = canvas.height - body.size / 2;
            body.vy *= -BOUNCE;
            body.vx *= 0.95;
            if (Math.abs(body.vy) < 1) body.vy = 0;
          }
          if (body.y < body.size / 2) {
            body.y = body.size / 2;
            body.vy *= -BOUNCE;
          }
        }

        // Simple collision between emojis
        for (let j = i + 1; j < bodiesRef.current.length; j++) {
          const other = bodiesRef.current[j];
          const dx = other.x - body.x;
          const dy = other.y - body.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = (body.size + other.size) / 2;

          if (dist < minDist && dist > 0) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = minDist - dist;

            body.x -= nx * overlap * 0.5;
            body.y -= ny * overlap * 0.5;
            other.x += nx * overlap * 0.5;
            other.y += ny * overlap * 0.5;

            const dvx = body.vx - other.vx;
            const dvy = body.vy - other.vy;
            const dotProduct = dvx * nx + dvy * ny;

            if (dotProduct > 0) {
              body.vx -= dotProduct * nx * 0.5;
              body.vy -= dotProduct * ny * 0.5;
              other.vx += dotProduct * nx * 0.5;
              other.vy += dotProduct * ny * 0.5;
            }
          }
        }

        // Draw
        ctx.save();
        ctx.translate(body.x, body.y);
        ctx.rotate(body.rotation);
        ctx.font = `${body.size}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.globalAlpha = 0.7;
        ctx.fillText(body.emoji, 0, 0);
        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    // Mouse/touch handlers
    const getPos = (e: MouseEvent | Touch) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const findBody = (x: number, y: number) => {
      for (let i = bodiesRef.current.length - 1; i >= 0; i--) {
        const body = bodiesRef.current[i];
        const dx = x - body.x;
        const dy = y - body.y;
        if (Math.sqrt(dx * dx + dy * dy) < body.size) {
          return i;
        }
      }
      return -1;
    };

    const onDown = (x: number, y: number) => {
      const idx = findBody(x, y);
      if (idx >= 0) {
        dragRef.current = {
          index: idx,
          offsetX: x - bodiesRef.current[idx].x,
          offsetY: y - bodiesRef.current[idx].y,
          lastX: x,
          lastY: y,
        };
        bodiesRef.current[idx].isDragging = true;
        bodiesRef.current[idx].vx = 0;
        bodiesRef.current[idx].vy = 0;
        mouseRef.current = { x, y };
      }
    };

    const onMove = (x: number, y: number) => {
      if (dragRef.current) {
        const drag = dragRef.current;
        drag.lastX = mouseRef.current.x;
        drag.lastY = mouseRef.current.y;
        mouseRef.current = { x, y };
      }
    };

    const onUp = () => {
      if (dragRef.current) {
        const body = bodiesRef.current[dragRef.current.index];
        body.isDragging = false;
        body.vx = (mouseRef.current.x - dragRef.current.lastX) * 0.5;
        body.vy = (mouseRef.current.y - dragRef.current.lastY) * 0.5;
        dragRef.current = null;
      }
    };

    const mouseDown = (e: MouseEvent) => { const p = getPos(e); onDown(p.x, p.y); };
    const mouseMove = (e: MouseEvent) => { const p = getPos(e); onMove(p.x, p.y); };
    const mouseUp = () => onUp();

    const touchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const p = getPos(e.touches[0]);
        const idx = findBody(p.x, p.y);
        if (idx >= 0) {
          e.preventDefault();
          onDown(p.x, p.y);
        }
      }
    };
    const touchMove = (e: TouchEvent) => {
      if (dragRef.current && e.touches.length > 0) {
        e.preventDefault();
        const p = getPos(e.touches[0]);
        onMove(p.x, p.y);
      }
    };
    const touchEnd = () => onUp();

    canvas.addEventListener("mousedown", mouseDown);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
    canvas.addEventListener("touchstart", touchStart, { passive: false });
    canvas.addEventListener("touchmove", touchMove, { passive: false });
    canvas.addEventListener("touchend", touchEnd);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      canvas.removeEventListener("touchstart", touchStart);
      canvas.removeEventListener("touchmove", touchMove);
      canvas.removeEventListener("touchend", touchEnd);
    };
  }, [initBodies]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto fixed inset-0 z-10"
      style={{ cursor: "grab" }}
    />
  );
};

export default EmojiPhysics;
