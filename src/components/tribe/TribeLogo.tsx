import { TribeMark } from "./TribeMark";
import { VarsityLogo } from "./VarsityLogo";

export function TribeLogo({ 
  size = 64, 
  className = "" 
}: { 
  size?: number; 
  className?: string 
}) {
  const isSmall = size < 40;
  
  return (
    <div className={`flex items-center ${isSmall ? "gap-2" : "gap-3"} ${className}`}>
      <TribeMark size={size} />
      <div className="flex flex-col text-left">
        <span 
          className="font-display font-extrabold tracking-wider text-[#02284a] leading-none"
          style={{ fontSize: isSmall ? size * 0.55 : size * 0.62 }}
        >
          TRIBE
        </span>
        <div 
          className="flex items-center text-slate-400 uppercase tracking-widest font-semibold leading-none"
          style={{ 
            fontSize: isSmall ? Math.max(size * 0.17, 7) : size * 0.17, 
            marginTop: isSmall ? 2 : 4,
            gap: isSmall ? 2 : 4
          }}
        >
          <span className="normal-case text-slate-500 font-normal">A Zerodha</span>
          <VarsityLogo size={isSmall ? Math.max(size * 0.22, 9) : 14} />
          <span className="font-bold text-[#02284a]">VARSITY</span>
          <span className="normal-case text-slate-500 font-normal">initiative</span>
        </div>
      </div>
    </div>
  );
}
