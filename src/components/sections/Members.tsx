import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { tribeMembers, activities, type TribeMember } from "@/data/content";
import { Reveal } from "@/components/tribe/Reveal";
import { accentText, accentVar } from "@/components/tribe/accent";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

const activityImages = [
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600",
    title: "Strategy Session",
  },
  {
    src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1600",
    title: "Mentorship Lab",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
    title: "Team Collaboration",
  },
];

import { SpotlightCard } from "@/components/tribe/SpotlightCard";

export function Members() {
  const [active, setActive] = useState<TribeMember | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const fullActivity = active ? activities.find((a) => a.name === active.activity) : null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % activityImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && active?.gallery) {
      setLightboxIndex((lightboxIndex - 1 + active.gallery.length) % active.gallery.length);
    }
  };

  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky">10 Mentors · 10 Sessions</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl text-foreground">
            Meet the Tribe & The 10 Sessions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">
            Ten Tribe members designed and conducted ten interactive finance sessions for school students. Click any card to explore their session plan and experience.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tribeMembers.map((m, i) => (
            <Reveal key={m.id} delay={(i % 3) * 0.1}>
              <motion.button
                onClick={() => setActive(m)}
                whileHover={{ y: -8 }}
                className="group relative w-full h-full"
                style={{ outline: "none" }}
              >
                <SpotlightCard className="h-full w-full overflow-hidden rounded-3xl border border-border bg-card p-8 text-left transition-colors hover:shadow-xl">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-2xl font-display text-2xl font-bold text-navy shadow-sm"
                    style={{ background: accentVar[m.accent] }}
                  >
                    {initials(m.name)}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                    {m.name}
                  </h3>
                  <p className={`mt-1 text-sm font-semibold ${accentText[m.accent]}`}>{m.role}</p>

                  <div className="mt-4 pt-4 border-t border-navy/5">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Activity
                    </p>
                    <p className="text-sm font-medium text-foreground/80">{m.activity}</p>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground line-clamp-2">{m.intro}</p>
                  <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                    View Experience & Photos →
                  </span>
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                    style={{ background: accentVar[m.accent] }}
                  />
                </SpotlightCard>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-white/70 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="relative w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
                <motion.button
                  initial={{ scale: 0, opacity: 0, rotate: -90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0, opacity: 0, rotate: 90 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                  onClick={() => setActive(null)}
                  className="fixed right-6 top-6 sm:right-10 sm:top-10 rounded-full bg-white shadow-xl hover:bg-gray-50 p-3 text-navy transition-colors z-20"
                  aria-label="Close"
                >
                  <X size={28} />
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                  <div>
                    <div className="flex items-center gap-6 mb-10">
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
                        className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl font-display text-4xl font-bold text-navy shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]"
                        style={{ background: accentVar[active.accent] }}
                      >
                        {initials(active.name)}
                      </motion.div>
                      <div>
                        <motion.h3
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="font-display text-4xl sm:text-5xl font-bold text-foreground"
                        >
                          {active.name}
                        </motion.h3>
                        <motion.p
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className={`mt-2 text-lg font-semibold tracking-wide uppercase ${accentText[active.accent]}`}
                        >
                          {active.role}
                        </motion.p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Field label="Introduction" value={active.intro} />
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Field label="Personal Reflection" value={active.reflection} />
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Field label="Memorable Moment" value={active.memorableMoment} />
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ y: 40, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
                    className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 h-fit overflow-hidden group"
                  >
                    <div
                      className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-30 transition-transform duration-1000 group-hover:scale-150"
                      style={{ background: accentVar[active.accent] }}
                    />

                    <div className="relative z-10">
                      <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-navy/5 text-navy text-sm font-bold uppercase tracking-widest backdrop-blur-sm">
                        Activity Conducted
                      </div>
                      <h4 className="font-display text-3xl font-bold text-foreground mb-8">
                        {active.activity}
                      </h4>

                      {fullActivity ? (
                        <div className="space-y-6">
                          <Field label="Objective" value={fullActivity.objective} />
                          <Field label="How it worked" value={fullActivity.how} />
                          <Field label="The Result" value={fullActivity.result} />
                        </div>
                      ) : (
                        <p className="text-muted-foreground italic">Activity details not found.</p>
                      )}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-20 pt-16 border-t border-navy/10"
                >
                  <h4 className="text-base font-bold uppercase tracking-widest text-navy mb-8">
                    Activity Gallery
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {active.gallery && active.gallery.length > 0 ? (
                      active.gallery.map((image, idx) => (
                        <motion.button
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.8 + idx * 0.1 }}
                          key={idx}
                          onClick={() => setLightboxIndex(idx)}
                          className="aspect-[4/3] rounded-3xl overflow-hidden bg-navy/5 group relative block w-full outline-none focus-visible:ring-2 focus-visible:ring-navy"
                        >
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center gap-2">
                            <span className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm text-navy px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                              VIEW FULLSCREEN
                            </span>
                            <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-sm tracking-wide transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 delay-75">
                              {image.title}
                            </span>
                          </div>
                        </motion.button>
                      ))
                    ) : (
                      <p className="text-muted-foreground italic col-span-full">No photos available.</p>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute right-6 top-6 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors z-20"
              aria-label="Close Gallery"
            >
              <X size={28} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-4 text-white transition-colors z-20"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.img
              key={lightboxIndex}
              src={active?.gallery[lightboxIndex]?.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
              alt={active?.gallery[lightboxIndex]?.title || "Gallery image"}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                if (lightboxIndex !== null && active?.gallery) {
                  setLightboxIndex((lightboxIndex + 1) % active.gallery.length);
                }
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-4 text-white transition-colors z-20"
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1 text-white">
              <span className="text-lg font-display font-semibold tracking-wide">
                {active?.gallery[lightboxIndex]?.title}
              </span>
              <span className="text-white/50 text-xs tracking-widest font-semibold uppercase">
                {lightboxIndex + 1} / {active?.gallery.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-lg text-foreground/90 leading-relaxed">{value}</p>
    </div>
  );
}
