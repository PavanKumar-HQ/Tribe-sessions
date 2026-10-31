import { motion } from "motion/react";

export function Introduction() {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-navy text-sm font-semibold tracking-widest uppercase mb-3">
            The Initiative
          </h2>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight">
            Financial Education for School Students
          </h3>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-8">
            <p>
              Standard schooling covers theoretical mathematics and commerce formulas, but students rarely get direct hands-on practice with how personal finance and modern markets actually work.
            </p>
            <p>
              From smart budgeting and credit cards to stock markets, compounding, insurance, taxes, and startup investing—experiential learning makes all the difference.
            </p>
            <p className="font-medium text-navy">
              This initiative brings 10 structured, interactive sessions into schools—giving students real data, live simulations, and practical frameworks to build lifelong financial confidence.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img 
            src="/photos/afan/WhatsApp Image 2026-10-31 at 19.41.49.webp" 
            alt="Intro to Tribe & Finance session with Afan" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy/5 mix-blend-multiply rounded-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
