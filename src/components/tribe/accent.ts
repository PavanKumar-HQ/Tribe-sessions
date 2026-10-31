export type Accent = "sky" | "lavender" | "coral" | "yellow";

export const accentText: Record<Accent, string> = {
  sky: "text-sky",
  lavender: "text-lavender",
  coral: "text-coral",
  yellow: "text-yellow",
};

export const accentBg: Record<Accent, string> = {
  sky: "bg-sky",
  lavender: "bg-lavender",
  coral: "bg-coral",
  yellow: "bg-yellow",
};

export const accentBorder: Record<Accent, string> = {
  sky: "border-sky/40",
  lavender: "border-lavender/40",
  coral: "border-coral/40",
  yellow: "border-yellow/40",
};

export const accentVar: Record<Accent, string> = {
  sky: "var(--sky)",
  lavender: "var(--lavender)",
  coral: "var(--coral)",
  yellow: "var(--yellow)",
};
