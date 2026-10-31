import { ArrowRight } from "lucide-react";

export function MotivateJoin() {
  return (
    <section className="relative py-32 bg-white overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 bg-gradient-to-tr from-sky/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-navy sm:text-5xl md:text-6xl">
              Bringing Financial Confidence to Every Student
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              The energy, curiosity, and rapid learning we witness across these 10 sessions demonstrate how much young minds can accomplish when taught practically. Understanding money is an essential life skill. Join us in bringing hands-on financial education to schools and helping the next generation build a secure, informed future.
            </p>
            <button className="mt-12 inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-navy/90 hover:shadow-lg">
              Get Involved <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative h-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/photos/jeevan/WhatsApp Image 2026-10-31 at 19.41.49.jpeg" 
              alt="School financial sessions with Jeevan" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/10 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
