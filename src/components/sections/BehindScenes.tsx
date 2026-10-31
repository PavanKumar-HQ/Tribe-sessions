import { motion } from "motion/react";
import { behindScenes } from "@/data/content";
import { Reveal } from "@/components/tribe/Reveal";

export function BehindScenes() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky">Section 10</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">Behind the scenes</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The day felt effortless because of everything that happened before it.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6">
          {behindScenes.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row items-baseline gap-6 glass rounded-[2rem] p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-white/80 hover:shadow-2xl hover:border-white/80"
            >
              <span className="font-display text-4xl font-bold text-navy/20 transition-colors duration-300 group-hover:text-sky shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-muted-foreground">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
