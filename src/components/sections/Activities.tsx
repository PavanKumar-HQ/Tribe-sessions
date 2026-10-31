import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "motion/react";
import { activities } from "@/data/content";
import { accentText, accentVar } from "@/components/tribe/accent";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const imgs = [gallery1, gallery2, gallery3, gallery1];

function ActivityMarquee({
  data,
  baseVelocity = 1,
}: {
  data: typeof activities;
  baseVelocity: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    if (isHovered) return;
    let moveBy = baseVelocity * (delta / 1000);
    // Add scroll velocity for parallax
    moveBy += moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // Wrap between 0 and -50% to seamlessly loop since we duplicate the items once
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  // Repeat the activities multiple times so we have enough items to scroll infinitely
  const repeatedData = [...data, ...data, ...data, ...data];

  return (
    <div
      className="flex w-full overflow-hidden whitespace-nowrap py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="flex w-max gap-8 px-4" style={{ x }}>
        {repeatedData.map((a, idx) => (
          <motion.div
            key={`${a.id}-${idx}`}
            className="relative h-[400px] w-[300px] shrink-0 overflow-hidden rounded-[2rem] border border-border/50 bg-card shadow-xl sm:w-[450px]"
            whileHover={{ scale: 1.05, zIndex: 10, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link
              to="/activity/$id"
              params={{ id: a.id }}
              className="group block h-full w-full"
              aria-label={`View details for ${a.name}`}
            >
              <img
                src={imgs[idx % imgs.length]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 mix-blend-multiply opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                style={{ background: accentVar[a.accent] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-8 text-left whitespace-normal">
                <span
                  className={`font-display text-5xl font-bold opacity-50 ${accentText[a.accent]}`}
                >
                  0{(idx % data.length) + 1}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl leading-tight">
                  {a.name}
                </h3>
                <p className="mt-3 text-sm text-white/80 line-clamp-2 leading-relaxed">
                  {a.objective}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-white group-hover:text-navy">
                  Explore Activity
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function Activities() {
  return (
    <section className="relative overflow-hidden py-32 bg-muted/5 border-y border-border/30">
      <div className="mx-auto px-6 mb-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-sky">Section 04</p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">The Activities</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              The heart of the day. Hover to pause, click to dive into the details.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        className="w-full flex flex-col gap-4 py-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <ActivityMarquee data={activities} baseVelocity={-1.5} />
      </div>
    </section>
  );
}
