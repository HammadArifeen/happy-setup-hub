import { motion } from "framer-motion";
import { Zap, Gamepad2, Target } from "lucide-react";
import resourceHubLogo from "@/assets/resource-hub-logo.png";
import moseleySchoolLogo from "@/assets/moseley-school-logo.png";
import { subjects } from "@/data/subjects";
import SubjectSection from "@/components/SubjectSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background grid-bg">
      {/* Floating orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -left-32 top-1/4 h-64 w-64 rounded-full opacity-20 blur-[100px]"
          style={{ background: "hsl(262, 83%, 58%)" }}
        />
        <div
          className="absolute -right-32 top-2/3 h-64 w-64 rounded-full opacity-20 blur-[100px]"
          style={{ background: "hsl(185, 100%, 50%)" }}
        />
        <div
          className="absolute left-1/2 top-0 h-48 w-48 rounded-full opacity-15 blur-[80px]"
          style={{ background: "hsl(340, 82%, 55%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <motion.img
              src={resourceHubLogo}
              alt="Moseley Resource Hub logo"
              className="h-24 w-24 rounded-2xl object-contain shadow-lg sm:h-28 sm:w-28"
              whileHover={{ scale: 1.1, rotate: 3, boxShadow: "0 0 30px hsl(262, 83%, 58%, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Gamepad2 className="h-8 w-8 text-primary" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Zap className="h-6 w-6 text-neon-yellow" />
            </motion.div>
          </div>

          <h1 className="font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            <span className="text-glow-purple">Resource</span>{" "}
            <span className="text-glow-cyan">Hub</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Your ultimate GCSE revision arsenal — all the best resources in one place
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mt-6 h-0.5 w-32 rounded-full bg-gradient-to-r from-primary via-neon-cyan to-accent"
          />

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Target className="h-3.5 w-3.5" />
            <span>
              {subjects.length} subjects • {subjects.reduce((a, s) => a + s.resources.length, 0)} resources
            </span>
          </div>
        </motion.header>

        {/* Subject sections */}
        <div className="space-y-4">
          {subjects.map((subject, i) => (
            <SubjectSection key={subject.id} subject={subject} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 pb-8 text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <img
              src={moseleySchoolLogo}
              alt="Moseley School and Sixth Form"
              className="h-16 rounded-lg object-contain sm:h-20"
            />
            <p className="text-xs text-muted-foreground">
              Good luck with your GCSEs! 🚀 You've got this.
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
