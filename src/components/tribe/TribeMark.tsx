import { motion } from "motion/react";

// Tribe-inspired geometric asterisk mark.
export function TribeMark({
  size = 64,
  className = "",
  animate = false,
}: {
  size?: number;
  className?: string;
  animate?: boolean;
}) {
  const spokes = [
    { rotate: 90, color: "var(--navy)", type: "flat" },        // Right
    { rotate: 270, color: "var(--yellow)", type: "flat" },     // Left
    { rotate: 180, color: "var(--navy)", type: "flat" },       // Bottom
    { rotate: 315, color: "var(--navy)", type: "flat" },       // Top-left
    { rotate: 135, color: "var(--coral)", type: "ribbon" },    // Bottom-right
    { rotate: 0, color: "var(--lavender)", type: "ribbon" },   // Top
    { rotate: 45, color: "#A8D1FA", type: "ribbon" },          // Top-right
    { rotate: 225, color: "#5398FF", type: "ribbon" },         // Bottom-left
  ];

  // Viewbox coordinates: center is (50, 50). Spokes go from y=50 to y=10.
  // Width is 16 (from x=42 to x=58).
  const flatD = "M 42 50 L 42 10 L 58 10 L 58 50 Z";
  const ribbonD = "M 42 50 L 42 10 L 50 18 L 58 10 L 58 50 Z";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
    >
      {spokes.map((s, i) => (
        <g key={i} transform={`rotate(${s.rotate}, 50, 50)`}>
          <motion.path
            d={s.type === "ribbon" ? ribbonD : flatD}
            fill={s.color}
            style={{ transformOrigin: "50px 50px" }}
            initial={animate ? { scaleY: 0, opacity: 0 } : { scaleY: 1, opacity: 1 }}
            animate={animate ? { scaleY: 1, opacity: 1 } : { scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.15 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </g>
      ))}
    </svg>
  );
}
