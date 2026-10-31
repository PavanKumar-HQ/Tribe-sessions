import { motion } from "motion/react";

export function ImpactCreated() {
  return (
    <section className="relative py-28 sm:py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-sky">
              Student Engagement
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy sm:text-5xl">
              From Hesitation to Financial Clarity
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              When sessions began, questions were cautious. Within minutes of introducing relatable scenarios—from pocket money allocations to credit card interest traps and digital scams—the classroom transformed into an active, high-energy forum of curious minds.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-sky/5 border border-sky/10">
                <span className="font-display text-3xl font-bold text-sky">10</span>
                <p className="text-sm font-semibold text-navy mt-1">Core Topics</p>
                <p className="text-xs text-slate-500 mt-1">Covering budgeting to VC</p>
              </div>
              <div className="p-5 rounded-2xl bg-coral/5 border border-coral/10">
                <span className="font-display text-3xl font-bold text-coral">100%</span>
                <p className="text-sm font-semibold text-navy mt-1">Real Scenarios</p>
                <p className="text-xs text-slate-500 mt-1">No dry textbook jargon</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/photos/afan/WhatsApp Image 2026-10-31 at 19.41.55.jpeg"
              alt="School students participating actively"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/5 mix-blend-multiply pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
