import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lightbulb, BookOpen, Sparkles, FileText } from "lucide-react";
import type { Subject } from "@/data/subjects";
import ResourceCard from "./ResourceCard";

interface SubjectSectionProps {
  subject: Subject;
  index: number;
}

const accentMap: Record<string, string> = {
  maths: "hsl(262, 83%, 58%)",
  "combined-science": "hsl(142, 76%, 50%)",
  "triple-science": "hsl(142, 76%, 50%)",
  "computer-science": "hsl(210, 100%, 60%)",
  "english-lang": "hsl(340, 82%, 55%)",
  "english-lit": "hsl(340, 82%, 55%)",
  history: "hsl(28, 95%, 55%)",
  geography: "hsl(185, 100%, 50%)",
};

const SubjectSection = ({ subject, index }: SubjectSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const accent = accentMap[subject.id] || "hsl(262, 83%, 58%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group"
    >
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        role="button"
        tabIndex={0}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.995 }}
        className={`w-full cursor-pointer rounded-2xl border border-border bg-gradient-to-br ${subject.bgGradient} p-5 text-left transition-all hover:border-muted-foreground/20 ${isOpen ? subject.glowClass : ""}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.span
              className="text-4xl"
              animate={{ rotate: isOpen ? [0, -10, 10, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              {subject.icon}
            </motion.span>
            <div>
              <h2 className={`font-display text-lg font-bold ${subject.colorClass}`}>
                {subject.name}
              </h2>
              <div className="mt-1 flex items-center gap-2">
                <span className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {subject.examBoard}
                </span>
                <span className="text-xs text-muted-foreground">
                  {subject.resources.length} resources
                </span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </div>

        {subject.topics && subject.topics.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {subject.topics.map((topic) => (
              <span
                key={topic.name}
                className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-xs text-muted-foreground"
              >
                {topic.name}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-2 pt-4">
              <div className="mb-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-semibold text-foreground">Resources</h3>
                </div>
                {subject.specUrls && subject.specUrls.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {subject.specUrls.map((spec) => (
                      <a
                        key={spec.label}
                        href={spec.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <FileText className="h-3 w-3" />
                        {spec.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={subject.specUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <FileText className="h-3 w-3" />
                    Spec
                  </a>
                )}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {subject.resources.map((resource, i) => (
                  <ResourceCard
                    key={resource.name}
                    resource={resource}
                    index={i}
                    accentColor={accent}
                  />
                ))}
              </div>

              {subject.tips.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-5 rounded-xl border border-border bg-muted/50 p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-neon-yellow" />
                    <h3 className="text-sm font-semibold text-foreground">
                      Pro Tips
                    </h3>
                    <Sparkles className="h-3 w-3 text-neon-yellow" />
                  </div>
                  <ul className="space-y-1.5">
                    {subject.tips.map((tip, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className={`mt-0.5 ${subject.colorClass}`}>▸</span>
                        {tip}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SubjectSection;
