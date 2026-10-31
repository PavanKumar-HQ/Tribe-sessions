import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  Wallet,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  LineChart,
  FileSpreadsheet,
  Rocket,
  Target,
  Image,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export type SessionPlan = {
  number: number;
  title: string;
  speaker: string;
  desc: string;
  hasPhotos: boolean;
  photoCount: number;
  allPhotos: { src: string; caption: string }[];
  icon: typeof Compass;
  accent: "sky" | "lavender" | "coral" | "yellow";
};

export const sessionsList: SessionPlan[] = [
  {
    number: 1,
    title: "Intro to Tribe & Finance",
    speaker: "Afan",
    desc: "Unpacking what finance really means, setting the foundation, busting common money myths, and introducing the power of early financial literacy.",
    hasPhotos: true,
    photoCount: 5,
    allPhotos: [
      {
        src: "/photos/afan/WhatsApp Image 2026-10-31 at 19.41.49.webp",
        caption: "Afan introducing financial concepts and setting the classroom tone.",
      },
      {
        src: "/photos/afan/WhatsApp Image 2026-10-31 at 19.41.52.webp",
        caption: "Engaging classroom dialogue on financial fundamentals and mindset.",
      },
      {
        src: "/photos/afan/WhatsApp Image 2026-10-31 at 19.41.55.webp",
        caption: "Students discussing questions and actively taking notes.",
      },
      {
        src: "/photos/afan/Pasted 31-10-2026 at 20.42.09.webp",
        caption: "Interactive reasoning and real-world economics exploration.",
      },
      {
        src: "/photos/afan/package.webp",
        caption: "Curated learning kits and resources prepared for students.",
      },
    ],
    icon: Compass,
    accent: "sky",
  },
  {
    number: 2,
    title: "Smart Budgeting & Saving, Credit Cards & Digital Payments",
    speaker: "Jeevan",
    desc: "Understanding cashflows, the 50/30/20 budgeting rule, emergency buffers, debit vs credit cards, UPI mechanics, and avoiding digital impulse debt traps.",
    hasPhotos: true,
    photoCount: 2,
    allPhotos: [
      {
        src: "/photos/jeevan/WhatsApp Image 2026-10-31 at 19.41.49.webp",
        caption: "Jeevan facilitating the Smart Budgeting and Digital Payments workshop.",
      },
      {
        src: "/photos/jeevan/WhatsApp Image 2026-10-31 at 19.41.50.webp",
        caption: "Classroom exercises on practical budget allocation and credit card traps.",
      },
    ],
    icon: Wallet,
    accent: "coral",
  },
  {
    number: 4,
    title: "Basics of Insurance",
    speaker: "Chirag",
    desc: "Demystifying insurance as risk transfer. Why insurance is not an investment, understanding health vs life covers, and protecting families from financial catastrophes.",
    hasPhotos: true,
    photoCount: 4,
    allPhotos: [
      {
        src: "/photos/chirag/Pasted 31-10-2026 at 20.41.04.webp",
        caption: "Chirag kicking off the Basics of Insurance session.",
      },
      {
        src: "/photos/chirag/Pasted 31-10-2026 at 20.44.30.webp",
        caption: "Exploring risk mitigation, health coverage, and term insurance.",
      },
      {
        src: "/photos/chirag/Pasted 31-10-2026 at 20.44.57.webp",
        caption: "Interactive student case studies analyzing real-world insurance needs.",
      },
      {
        src: "/photos/chirag/Pasted 31-10-2026 at 20.45.16.webp",
        caption: "Q&A and group discussions on policy pitfalls to avoid.",
      },
    ],
    icon: ShieldCheck,
    accent: "yellow",
  },
  {
    number: 5,
    title: "Online Scams & Fraud Safety",
    speaker: "Manoj",
    desc: "Spotting phishing, fake telegram trading tips, Ponzi traps, job offer scams, and building ironclad cybersecurity defense habits.",
    hasPhotos: false,
    photoCount: 0,
    allPhotos: [],
    icon: AlertTriangle,
    accent: "coral",
  },
  {
    number: 6,
    title: "Intro to Stocks & Markets",
    speaker: "Chirag",
    desc: "How stock exchanges operate, what shares and equity ownership mean, price discovery, and how real companies raise capital.",
    hasPhotos: false,
    photoCount: 0,
    allPhotos: [],
    icon: TrendingUp,
    accent: "sky",
  },
  {
    number: 7,
    title: "Power of Compounding & Growth",
    speaker: "Manoj",
    desc: "The mathematics of exponential compound growth. How investing small amounts early creates life-changing generational wealth.",
    hasPhotos: false,
    photoCount: 0,
    allPhotos: [],
    icon: LineChart,
    accent: "lavender",
  },
  {
    number: 8,
    title: "Basics of Taxes & Earning",
    speaker: "Chaitra",
    desc: "Demystifying direct vs indirect taxes, income slabs, GST, saving taxes legally, and understanding payslips and invoices.",
    hasPhotos: false,
    photoCount: 0,
    allPhotos: [],
    icon: FileSpreadsheet,
    accent: "yellow",
  },
  {
    number: 9,
    title: "Startup Investments & VC",
    speaker: "Afan",
    desc: "How startup funding works from Angel rounds to Venture Capital, evaluating business moats, risk-return profiles, and entrepreneurship.",
    hasPhotos: false,
    photoCount: 0,
    allPhotos: [],
    icon: Rocket,
    accent: "coral",
  },
  {
    number: 10,
    title: "Financial Planning for the Future",
    speaker: "Afan",
    desc: "Synthesizing all concepts into a lifelong roadmap: setting financial goals, asset allocation, diversification, and building financial independence.",
    hasPhotos: false,
    photoCount: 0,
    allPhotos: [],
    icon: Target,
    accent: "sky",
  },
];

export function ProgramsRunning() {
  const [activeSession, setActiveSession] = useState<SessionPlan | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  const openSessionModal = (session: SessionPlan, initialIdx = 0) => {
    if (!session.hasPhotos || session.allPhotos.length === 0) return;
    setActiveSession(session);
    setActivePhotoIdx(initialIdx);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeSession) {
      setActivePhotoIdx((prev) => (prev + 1) % activeSession.allPhotos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeSession) {
      setActivePhotoIdx(
        (prev) => (prev - 1 + activeSession.allPhotos.length) % activeSession.allPhotos.length
      );
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-navy text-xs font-bold tracking-widest uppercase mb-3 inline-block px-4 py-1.5 rounded-full bg-sky/10 text-sky">
          Curriculum & Classroom Sessions
        </span>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
          The 10 School Sessions
        </h3>
        <p className="text-slate-600">
          Structured by mentors to give school students an end-to-end foundation in personal money management and markets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {sessionsList.map((session, idx) => {
          const Icon = session.icon;
          return (
            <motion.div
              key={session.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between ${
                session.hasPhotos ? "cursor-pointer" : ""
              }`}
              onClick={() => session.hasPhotos && openSessionModal(session, 0)}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-sky/10 text-sky rounded-2xl">
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block">
                        Session {String(session.number).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-bold text-sky">
                        Speaker: {session.speaker}
                      </span>
                    </div>
                  </div>

                  {session.hasPhotos ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm transition-all hover:bg-emerald-100">
                      <Image size={13} />
                      {session.photoCount} Photos · Click to View
                    </span>
                  ) : (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-50 text-slate-400 border border-slate-200">
                      Topic Covered
                    </span>
                  )}
                </div>

                <h4 className="text-2xl font-bold text-navy mb-3 leading-snug">
                  {session.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {session.desc}
                </p>
              </div>

              {session.hasPhotos && session.allPhotos.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Classroom Photos ({session.allPhotos.length})
                    </p>
                    <span className="text-xs font-bold text-sky">
                      Open Lightbox →
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {session.allPhotos.slice(0, 3).map((photo, pIdx) => (
                      <div
                        key={pIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          openSessionModal(session, pIdx);
                        }}
                        className="group relative h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 transition-all hover:shadow-md"
                      >
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Session Photos Modal */}
      <AnimatePresence>
        {activeSession && activeSession.allPhotos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveSession(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-4xl w-full overflow-hidden rounded-3xl bg-card shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveSession(null)}
                className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-2.5 text-white/90 backdrop-blur-sm transition-all hover:bg-black/90 hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Main Image Stage */}
              <div className="relative overflow-hidden bg-black flex items-center justify-center h-[60vh] sm:h-[68vh]">
                <img
                  src={activeSession.allPhotos[activePhotoIdx].src}
                  alt={activeSession.allPhotos[activePhotoIdx].caption}
                  className="max-h-full max-w-full object-contain select-none"
                />

                {/* Left/Right Navigation */}
                {activeSession.allPhotos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/80 transition-colors backdrop-blur-sm"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/80 transition-colors backdrop-blur-sm"
                      aria-label="Next photo"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Photo Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-full text-xs font-semibold text-white/90 backdrop-blur-sm">
                  {activePhotoIdx + 1} / {activeSession.allPhotos.length}
                </div>
              </div>

              {/* Photo Details & Thumbnail Strip */}
              <div className="p-6 bg-card border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-sky uppercase tracking-wider block mb-1">
                    Session {activeSession.number}: {activeSession.title} · Facilitator: {activeSession.speaker}
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {activeSession.allPhotos[activePhotoIdx].caption}
                  </p>
                </div>

                {/* Thumbnail Strip */}
                {activeSession.allPhotos.length > 1 && (
                  <div className="flex gap-2 shrink-0 overflow-x-auto max-w-full py-1">
                    {activeSession.allPhotos.map((thumb, tIdx) => (
                      <button
                        key={tIdx}
                        onClick={() => setActivePhotoIdx(tIdx)}
                        className={`h-12 w-12 rounded-lg overflow-hidden border-2 transition-all ${
                          activePhotoIdx === tIdx
                            ? "border-sky scale-105 shadow-md"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={thumb.src}
                          alt="Thumbnail"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
