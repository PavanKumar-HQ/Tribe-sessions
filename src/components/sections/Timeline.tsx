import { useState } from "react";
import { motion } from "motion/react";
import { timeline } from "@/data/content";

export function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-navy/60 font-semibold">
            Section 08
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl text-foreground">
            The day, hour by hour
          </h2>
        </div>
      </div>

      <div className="scrollbar-hide mt-16 overflow-x-auto px-6 pb-6">
        <div className="relative mx-auto flex min-w-max gap-6">
          <div className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-navy/0 via-navy/20 to-coral/0" />
          {timeline.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative w-64 text-left"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-4 w-4 rounded-full border-2 transition-colors ${
                    active === i ? "border-coral bg-coral" : "border-navy/40 bg-transparent"
                  }`}
                />
                <span
                  className={`text-sm font-semibold transition-colors ${active === i ? "text-coral" : "text-navy/70"}`}
                >
                  {t.time}
                </span>
              </div>
              <div
                className={`mt-4 rounded-2xl border p-5 transition-colors ${
                  active === i ? "border-coral/50 bg-card shadow-sm" : "border-border bg-card/40"
                }`}
              >
                <h3 className="font-display text-xl font-semibold">{t.title}</h3>
                <motion.p
                  animate={{ opacity: active === i ? 1 : 0.5, height: "auto" }}
                  className="mt-2 text-sm text-muted-foreground"
                >
                  {t.description}
                </motion.p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
