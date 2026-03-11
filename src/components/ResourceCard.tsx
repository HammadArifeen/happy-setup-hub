import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Resource } from "@/data/subjects";

interface ResourceCardProps {
  resource: Resource;
  index: number;
  accentColor: string;
}

const ResourceCard = ({ resource, index, accentColor }: ResourceCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.a
      ref={cardRef}
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={handleMouseMove}
      className="card-spotlight group relative flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-muted-foreground/30"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
        <img
          src={resource.icon}
          alt={resource.name}
          className="h-6 w-6 rounded"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h4 className="truncate text-sm font-semibold text-foreground">
            {resource.name}
          </h4>
          <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {resource.description}
        </p>
      </div>
      <div
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentColor}08, transparent 70%)`,
        }}
      />
    </motion.a>
  );
};

export default ResourceCard;
