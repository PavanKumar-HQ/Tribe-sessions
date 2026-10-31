import { motion } from "motion/react";
import { recognition } from "@/data/content";
import { Reveal } from "@/components/tribe/Reveal";

export function Recognition() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky">Section 12</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">Special recognition</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            None of this happens alone. Thank you.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recognition.map((r, i) => (
            <motion.div
              key={r.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <h3 className="font-display text-xl font-semibold text-lavender">{r.group}</h3>
              <ul className="mt-4 space-y-2">
                {r.names.map((n) => (
                  <li key={n} className="text-muted-foreground">
                    {n}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
