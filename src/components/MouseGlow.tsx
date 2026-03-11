import { useEffect, useRef } from "react";

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
        glowRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300"
      style={{
        background: "radial-gradient(circle, hsl(262 83% 58% / 0.12) 0%, hsl(185 100% 50% / 0.06) 40%, transparent 70%)",
      }}
    />
  );
};

export default MouseGlow;
