import { motion } from "motion/react";
import { Reveal } from "@/components/tribe/Reveal";

const center = ["Ideas", "Experiences", "Conversations", "Growth"];

export function InTheRoom() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky">Section 02</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">Who was in the room</h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-3">
          <Reveal>
            <div className="glass rounded-3xl p-8 text-center">
              <div className="font-display text-5xl font-bold text-sky">100+</div>
              <p className="mt-2 font-display text-2xl">School Students</p>
              <p className="mt-2 text-sm text-muted-foreground">Curious minds hungry to understand money.</p>
            </div>
          </Reveal>

          <div className="relative flex flex-col items-center gap-3">
            {center.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="rounded-full border border-border bg-card/60 px-6 py-2 font-display text-lg text-navy"
              >
                {c}
              </motion.div>
            ))}
            <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full" aria-hidden>
              <motion.line
                x1="0%"
                y1="50%"
                x2="50%"
                y2="50%"
                stroke="var(--sky)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
          </div>

          <Reveal>
            <div className="glass rounded-3xl p-8 text-center">
              <div className="font-display text-5xl font-bold text-coral">10</div>
              <p className="mt-2 font-display text-2xl">Tribe Mentors</p>
              <p className="mt-2 text-sm text-muted-foreground">10 immersive financial sessions.</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16 text-center text-lg text-muted-foreground">
          Two worlds met in the middle — and connections began to form.
        </Reveal>
      </div>
    </section>
  );
}
