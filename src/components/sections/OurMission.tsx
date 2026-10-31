import { motion } from "motion/react";
import { Target, Globe } from "lucide-react";

export function OurMission() {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex items-center bg-sky/5 rounded-3xl my-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-navy text-sm font-semibold tracking-widest uppercase mb-3">
            Our Mission
          </h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
            Demystifying money and investing for the next generation.
          </h3>
          <div className="text-lg text-slate-700 leading-relaxed mb-10 font-light text-left space-y-6">
            <div className="flex items-start gap-4">
              <Target className="text-sky flex-shrink-0 mt-1" size={28} />
              <p>
                Financial habits and risk perceptions take root during teenage years. Delivering experiential, jargon-free education at zero cost helps students make confident, lifelong financial choices.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="text-sky flex-shrink-0 mt-1" size={28} />
              <p>
                Through 10 hands-on modules, this initiative pairs real-world concepts with curious school learners to replace fear of finance with genuine curiosity, practical awareness, and critical thinking.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
