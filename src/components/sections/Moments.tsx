import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "motion/react";
import { X } from "lucide-react";

const eventPhotos = [
  {
    src: "/photos/afan/WhatsApp Image 2026-10-31 at 19.41.49.jpeg",
    ctx: "Intro to Tribe and Finance with Afan.",
    session: "Session 1: Intro to Tribe and Finance",
    speaker: "Afan",
  },
  {
    src: "/photos/afan/WhatsApp Image 2026-10-31 at 19.41.52.jpeg",
    ctx: "Engaging classroom dialogue on financial fundamentals.",
    session: "Session 1: Intro to Tribe and Finance",
    speaker: "Afan",
  },
  {
    src: "/photos/afan/WhatsApp Image 2026-10-31 at 19.41.55.jpeg",
    ctx: "Students discussing questions and taking notes.",
    session: "Session 1: Intro to Tribe and Finance",
    speaker: "Afan",
  },
  {
    src: "/photos/afan/Pasted 31-10-2026 at 20.42.09.jpg",
    ctx: "Interactive session on financial reasoning.",
    session: "Session 1: Intro to Tribe and Finance",
    speaker: "Afan",
  },
  {
    src: "/photos/afan/package.jpeg",
    ctx: "Learning materials and kits prepared for the school sessions.",
    session: "Materials & Resources",
    speaker: "Afan",
  },
  {
    src: "/photos/jeevan/WhatsApp Image 2026-10-31 at 19.41.49.jpeg",
    ctx: "Smart Budgeting & Saving, Credit Cards & Digital Payments with Jeevan.",
    session: "Session 2: Smart Budgeting, Credit Cards & Digital Payments",
    speaker: "Jeevan",
  },
  {
    src: "/photos/jeevan/WhatsApp Image 2026-10-31 at 19.41.50.jpeg",
    ctx: "Practical budgeting drills and dissecting credit card traps.",
    session: "Session 2: Smart Budgeting, Credit Cards & Digital Payments",
    speaker: "Jeevan",
  },
  {
    src: "/photos/chirag/Pasted 31-10-2026 at 20.41.04.jpg",
    ctx: "Basics of Insurance & Risk Transfer session with Chirag.",
    session: "Session 4: Basics of Insurance",
    speaker: "Chirag",
  },
  {
    src: "/photos/chirag/Pasted 31-10-2026 at 20.44.30.jpg",
    ctx: "Understanding life, health, and vehicle insurance principles.",
    session: "Session 4: Basics of Insurance",
    speaker: "Chirag",
  },
  {
    src: "/photos/chirag/Pasted 31-10-2026 at 20.44.57.jpg",
    ctx: "Active student participation and real-world insurance scenarios.",
    session: "Session 4: Basics of Insurance",
    speaker: "Chirag",
  },
  {
    src: "/photos/chirag/Pasted 31-10-2026 at 20.45.16.jpg",
    ctx: "Q&A and student presentations during Chirag's session.",
    session: "Session 4: Basics of Insurance",
    speaker: "Chirag",
  },
].map((item, i) => ({ ...item, id: i }));

const row1 = [eventPhotos[0], eventPhotos[1], eventPhotos[2], eventPhotos[3], eventPhotos[4]];
const row2 = [eventPhotos[5], eventPhotos[6], eventPhotos[7], eventPhotos[8]];
const row3 = [eventPhotos[9], eventPhotos[10], eventPhotos[0], eventPhotos[5], eventPhotos[7]];

function Marquee({
  data,
  baseVelocity = 1,
  onOpen,
}: {
  data: typeof eventPhotos;
  baseVelocity: number;
  onOpen: (item: (typeof eventPhotos)[number]) => void;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      moveBy += velocityFactor.get() * moveBy;
    } else {
      moveBy += velocityFactor.get() * moveBy;
    }
    baseX.set(baseX.get() + moveBy);
  });

  const duplicated = [...data, ...data, ...data, ...data];

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div className="flex gap-4 sm:gap-6 py-2" style={{ x }}>
        {duplicated.map((item, idx) => (
          <button
            key={`${item.id}-${idx}`}
            onClick={() => onOpen(item)}
            className="group relative h-48 w-72 sm:h-64 sm:w-96 shrink-0 overflow-hidden rounded-2xl bg-muted text-left transition-transform duration-500 hover:scale-[1.02] shadow-sm hover:shadow-md"
          >
            <img
              src={item.src}
              alt={item.ctx}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky block mb-1">
                {item.speaker} · {item.session}
              </span>
              <p className="text-sm font-medium leading-snug line-clamp-2">{item.ctx}</p>
            </div>
          </button>
        ))}
      </motion.div>
    </div>
  );
}

export function Moments() {
  const [selected, setSelected] = useState<(typeof eventPhotos)[number] | null>(null);

  return (
    <section className="relative overflow-hidden py-24 sm:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky mb-2">
          Event Gallery
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-6xl">
          Captured in the Classroom
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Snapshots of intense collaboration, breakthrough insights, and enthusiastic student participation during our school sessions.
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Photo coverage: Sessions 1 to 4 (Afan, Jeevan & Chirag)
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        <Marquee data={row1} baseVelocity={-0.3} onOpen={setSelected} />
        <Marquee data={row2} baseVelocity={0.3} onOpen={setSelected} />
        <Marquee data={row3} baseVelocity={-0.25} onOpen={setSelected} />
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-card shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white/90 backdrop-blur-sm transition-all hover:bg-black/90 hover:text-white"
              >
                <X size={20} />
              </button>
              <div className="overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selected.src}
                  alt={selected.ctx}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-card text-card-foreground">
                <span className="text-xs font-bold text-sky uppercase tracking-wider block mb-1">
                  Facilitator: {selected.speaker} ({selected.session})
                </span>
                <p className="text-base font-medium">{selected.ctx}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
