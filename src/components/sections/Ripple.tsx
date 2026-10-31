import { motion } from "motion/react";
import { rippleNodes } from "@/data/content";

export function Ripple() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sky">Section 11</p>
        <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">The ripple effect</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          How a single day keeps moving, long after everyone goes home.
        </p>

        <div className="mt-12 w-full overflow-x-auto no-scrollbar py-16 -my-16 px-4">
          <div className="flex flex-col md:flex-row flex-nowrap items-center w-max mx-auto">
            {rippleNodes.map((node, i) => (
              <div key={node} className="flex flex-col md:flex-row items-center flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 200, damping: 18 }}
                className="relative rounded-full border border-sky/40 bg-card px-8 py-3 font-display text-lg whitespace-nowrap"
                style={{ boxShadow: `0 0 ${20 + i * 6}px -8px var(--sky)` }}
              >
                {node}
                <span className="absolute inset-0 -z-10 rounded-full bg-sky/10 blur-md" />
              </motion.div>
              {i < rippleNodes.length - 1 && (
                <>
                  {/* Vertical line for mobile */}
                  <motion.span
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.1, duration: 0.4 }}
                    className="md:hidden my-2 h-8 w-px origin-top bg-gradient-to-b from-sky to-lavender"
                  />
                  {/* Horizontal line for desktop */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.1, duration: 0.4 }}
                    className="hidden md:block mx-3 h-px w-12 origin-left bg-gradient-to-r from-sky to-lavender"
                  />
                </>
              )}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
