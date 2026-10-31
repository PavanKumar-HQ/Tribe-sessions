import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const bars = [
  { rotate: 0, color: "#02284A" },
  { rotate: 45, color: "#C6C4FF" },
  { rotate: 90, color: "#77B5F7" },
  { rotate: 135, color: "#F49BB5" },
];

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1400),
      setTimeout(() => setStage(2), 2600),
      setTimeout(() => setStage(3), 3800),
      setTimeout(() => onComplete(), 4600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-darkbg bg-grain"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-32 w-32">
            {bars.map((b, i) => (
              <motion.span
                key={i}
                initial={{ scaleY: 0, opacity: 0, rotate: b.rotate - 90 }}
                animate={{ scaleY: 1, opacity: 1, rotate: b.rotate }}
                transition={{ delay: 0.18 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 18,
                  height: 128,
                  marginLeft: -9,
                  marginTop: -64,
                  borderRadius: 9,
                  background: b.color,
                  transformOrigin: "center",
                }}
              />
            ))}
          </div>

          <div className="mt-12 h-16 text-center">
            <AnimatePresence mode="wait">
              {stage >= 1 && stage < 2 && (
                <motion.h1
                  key="title"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="font-display text-2xl font-semibold tracking-[0.3em] text-navy sm:text-4xl"
                >
                  TRIBE
                </motion.h1>
              )}
              {stage >= 2 && (
                <motion.p
                  key="sub"
                  className="font-display text-xl tracking-[0.4em] text-sky sm:text-2xl"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  FINANCIAL LITERACY SESSIONS
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
