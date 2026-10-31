export function VarsityLogo({ size = 20, className = "" }: { size?: number; className?: string }) {
  // SVG representation of the Zerodha Varsity shield logo
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blue shield background */}
      <path
        d="M 15 10 L 85 10 C 85 55, 50 90, 50 90 C 50 90, 15 55, 15 10 Z"
        fill="#4fa4fc"
      />
      {/* White 'v' path inside */}
      <path
        d="M 32 32 L 50 64 L 68 32"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
