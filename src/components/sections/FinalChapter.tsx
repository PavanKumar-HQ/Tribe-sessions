import { motion } from "motion/react";
import hero from "@/assets/hero-montage.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

export function FinalChapter() {
  return (
    <section className="relative overflow-hidden bg-darkbg py-32 sm:py-48">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {[
          { t: "We came together for the sessions.", d: 0 },
          { t: "We left with financial ideas that will last a lifetime.", d: 0.3 },
        ].map((line) => (
          <motion.h2
            key={line.t}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.1, delay: line.d, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-3xl leading-snug text-navy sm:text-5xl"
          >
            {line.t}
          </motion.h2>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 border-t border-border pt-8 text-center flex flex-col items-center"
        >
          <div className="font-display text-xl sm:text-2xl font-bold tracking-widest text-navy uppercase">
            10 SESSIONS ON FINANCE · EMPOWERING SCHOOLS
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            A journey of curiosity, interactive learning, and practical financial confidence.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              "/photos/afan/package.jpeg",
              "/photos/chirag/Pasted 31-10-2026 at 20.44.57.jpg",
              "/photos/jeevan/WhatsApp Image 2026-10-31 at 19.41.49.jpeg",
              "/photos/afan/Pasted 31-10-2026 at 20.42.09.jpg"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="h-20 w-32 overflow-hidden rounded-xl border border-border shadow-md"
              >
                <img src={img} alt="Session photo" className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-xs text-muted-foreground/60">
            © Financial Literacy School Sessions. Built with passion for practical education.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
