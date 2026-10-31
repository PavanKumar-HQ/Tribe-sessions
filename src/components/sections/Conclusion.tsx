import { motion } from "motion/react";

const pastEngagements = [
  {
    title: "Intro to Tribe & Finance",
    speaker: "Afan",
    summary:
      "Kicking off with financial fundamentals, debunking myths, and setting an open, welcoming foundation for school learners.",
    image: "/photos/afan/WhatsApp Image 2026-10-31 at 19.41.52.webp",
  },
  {
    title: "Smart Budgeting & Digital Payments",
    speaker: "Jeevan",
    summary:
      "Demystifying credit cards, UPI, digital payment traps, and constructing bulletproof student budgets.",
    image: "/photos/jeevan/WhatsApp Image 2026-10-31 at 19.41.50.webp",
  },
  {
    title: "Basics of Insurance & Risk",
    speaker: "Chirag",
    summary:
      "Teaching the core principle of risk transfer, life vs health coverage, and safeguarding against unexpected crises.",
    image: "/photos/chirag/Pasted 31-10-2026 at 20.44.30.webp",
  },
];

export function Conclusion() {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-navy text-sm font-semibold tracking-widest uppercase mb-3">
            Session Highlights
          </h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Interactive Classroom Moments
          </h3>
          <p className="text-slate-600 mb-8">
            Glimpses into the live discussions, student queries, and practical workshops conducted in the school.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {pastEngagements.map((eng, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="rounded-3xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={eng.image}
                alt={eng.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-1 justify-between">
              <div>
                <span className="text-xs font-bold text-sky uppercase tracking-wider mb-2 block">
                  Session Facilitator: {eng.speaker}
                </span>
                <h4 className="font-display text-2xl font-bold text-navy mb-3 group-hover:text-sky transition-colors">
                  {eng.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                  {eng.summary}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
