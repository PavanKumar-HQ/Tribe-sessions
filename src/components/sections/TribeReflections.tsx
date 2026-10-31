import { useRef } from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { reflections } from "@/data/content";
import { accentText, accentVar, accentBg } from "@/components/tribe/accent";
import { SpotlightCard } from "@/components/tribe/SpotlightCard";

function FloatCard({ r, i }: { r: (typeof reflections)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-8px)`;
  }
  function reset() {
    if (ref.current) ref.current.style.transform = "";
  }

  // Get initials for the avatar
  const initials = r.author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
      className="animate-float-slow group"
      style={{ animationDelay: `${i * 0.6}s` }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="h-full w-full will-change-transform transition-transform duration-300 ease-out"
      >
        <SpotlightCard className="relative h-full overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-b from-white to-slate-50/80 p-8 md:p-10 shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:border-slate-300 flex flex-col justify-between">
        {/* Background glow */}
        <div
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-30"
          style={{ background: accentVar[r.accent] }}
        />
        
        {/* Giant background quote */}
        <Quote 
          className="absolute right-6 top-8 w-24 h-24 opacity-5 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-10" 
          strokeWidth={1}
          style={{ color: accentVar[r.accent] }}
        />

        <div>
          {/* Stylized Prompt Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm mb-6 relative z-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${accentBg[r.accent]}`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${accentBg[r.accent]}`}></span>
            </span>
            <span className={`text-[0.65rem] font-black tracking-widest uppercase ${accentText[r.accent]}`}>
              {r.prompt}
            </span>
          </div>

          {/* Quote Text */}
          <p className="text-[1.05rem] leading-loose text-slate-700 relative z-10 font-medium">
            <span className={`text-2xl leading-none mr-1 ${accentText[r.accent]}`}>"</span>
            {r.quote}
            <span className={`text-2xl leading-none ml-1 ${accentText[r.accent]}`}>"</span>
          </p>
        </div>

        {/* Author Footer */}
        <div className="mt-8 flex items-center gap-4 relative z-10 border-t border-slate-100 pt-6">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold tracking-wider shadow-md ${accentBg[r.accent]}`}>
            {initials}
          </div>
          <div>
            <p className="text-sm font-bold text-navy">{r.author}</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">Tribe Member</p>
          </div>
        </div>
        </SpotlightCard>
      </div>
    </motion.div>
  );
}

export function TribeReflections() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky">Section 06</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
            What the Tribe experienced
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {reflections.map((r, i) => (
            <FloatCard key={r.id} r={r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
