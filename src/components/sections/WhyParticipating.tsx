export function WhyParticipating() {
  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-coral">
              OUR MOTIVATION
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy sm:text-5xl">
              Why School Financial Education Matters
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              We believe that real financial education goes beyond textbooks—it requires hands-on experience, critical thinking, and open conversations. School students face complex economic choices earlier than ever. By organizing these 10 sessions, our goal is to share practical tools, demystify investing, and empower the next generation to approach money, business, and risk with clarity and confidence.
            </p>
          </div>
          <div className="relative h-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/photos/chirag/Pasted 31-10-2026 at 20.41.04.jpg" 
              alt="School session activities" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/5 mix-blend-multiply rounded-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
