import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import { feedback, type Feedback } from "@/data/content";

const themes: (Feedback["theme"] | "All")[] = [
  "All",
  "Learning",
  "Confidence",
  "Engagement",
  "Finance",
  "Technology",
  "Activities",
];

export function StudentVoices() {
  const [theme, setTheme] = useState<(typeof themes)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      feedback.filter(
        (f) =>
          (theme === "All" || f.theme === theme) &&
          f.quote.toLowerCase().includes(query.toLowerCase()),
      ),
    [theme, query],
  );

  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky">Section 07</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">What students said</h2>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5">
          <div className="relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the voices…"
              className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none focus:border-sky"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {themes.map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  theme === t
                    ? "bg-sky text-navy"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((f) => (
              <motion.div
                key={f.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-sky/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="mb-8">
                  <p className="text-slate-700 leading-relaxed text-[1.05rem] italic relative">
                    <span className="absolute -top-4 -left-4 text-6xl text-sky/20 font-serif leading-none">
                      "
                    </span>
                    {f.quote}
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-navy text-lg">{f.author}</h4>
                    <span className="text-sm text-slate-500">School Student</span>
                  </div>
                  <span className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-navy">
                    {f.theme}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No voices match that search.</p>
        )}
      </div>
    </section>
  );
}
