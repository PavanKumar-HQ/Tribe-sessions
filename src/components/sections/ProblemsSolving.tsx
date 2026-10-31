import { motion } from "motion/react";
import { Lightbulb, GraduationCap, UserX, Briefcase, Globe, BrainCircuit } from "lucide-react";

import { SpotlightCard } from "@/components/tribe/SpotlightCard";

const problems = [
  {
    title: "Financial Literacy Gap",
    desc: "Standard school curricula rarely touch on budgeting, tax fundamentals, index funds, or credit management.",
    icon: Lightbulb,
  },
  {
    title: "Classroom vs Real World",
    desc: "Memorizing equations leaves students unprepared for live trading interfaces, mutual fund allocation, and market cycles.",
    icon: GraduationCap,
  },
  {
    title: "Cost of Waiting",
    desc: "Delaying financial literacy by even a few years significantly blunts the life-changing magic of compound interest.",
    icon: UserX,
  },
  {
    title: "Impulse & Consumerism",
    desc: "Digital payment apps and instant-credit traps make young adults susceptible without solid mental models.",
    icon: Briefcase,
  },
  {
    title: "Scams & Misinformation",
    desc: "Social media 'finfluencers' and get-rich-quick tips target young audiences lacking skepticism and defense rules.",
    icon: Globe,
  },
  {
    title: "Modern Financial Tools",
    desc: "Students need early, safe, guided exposure to platforms like Kite and Coin before risking their hard-earned money.",
    icon: BrainCircuit,
  },
];

export function ProblemsSolving() {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-navy text-sm font-semibold tracking-widest uppercase mb-3">
          The Challenge
        </h2>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
          Why Financial Literacy in Schools?
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((problem, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="h-full"
          >
            <SpotlightCard className="h-full bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-sky/10 rounded-2xl flex items-center justify-center mb-6 text-sky group-hover:scale-110 group-hover:bg-sky group-hover:text-white transition-all duration-300">
                <problem.icon size={24} />
              </div>
              <h4 className="font-display text-xl font-bold text-navy mb-3">
                {problem.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {problem.desc}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
