import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { impactStats } from "@/data/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow">Section 09</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl text-foreground">
            The <span className="text-yellow">impact</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3">
          {impactStats.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="glass rounded-[2rem] p-8 text-center border-t border-l border-white/60 shadow-[0_8px_32px_rgba(234,179,8,0.1)] transition-transform hover:scale-[1.02]"
            >
              <div className="font-display text-5xl font-bold text-yellow sm:text-7xl drop-shadow-sm">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
