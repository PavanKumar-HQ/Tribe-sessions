import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Reveal } from "@/components/tribe/Reveal";

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const main = videoRef.current;
    const bg = bgVideoRef.current;
    if (main && bg) {
      if (isPlaying) {
        main.pause();
        bg.pause();
      } else {
        main.play().catch((err) => console.log("Video play interrupted:", err));
        bg.play().catch((err) => console.log("Video play interrupted:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && bgVideoRef.current) {
      const diff = Math.abs(videoRef.current.currentTime - bgVideoRef.current.currentTime);
      if (diff > 0.3) {
        bgVideoRef.current.currentTime = videoRef.current.currentTime;
      }
    }
  };

  return (
    <section className="relative py-28 sm:py-40 bg-navy/5 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky font-semibold">Motion</p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl text-foreground">
            The Highlight Reel
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-lg">
            Experience the energy, curiosity, and interactive learning of the school finance sessions in motion.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16 flex justify-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-navy/10 bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] group cursor-pointer aspect-[16/9] w-full max-w-4xl" onClick={togglePlay}>
            {/* Blurred Background Video */}
            <video
              ref={bgVideoRef}
              src="/photos/General/capcut edit mfk reel.mp4"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-105 pointer-events-none"
              loop
              muted
              playsInline
            />

            {/* Sharp Foreground Video */}
            <video
              ref={videoRef}
              src="/photos/General/capcut edit mfk reel.mp4"
              className="relative h-full mx-auto object-contain z-10"
              loop
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
            />

            {/* Custom overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/35 opacity-60 transition-opacity group-hover:opacity-80 z-20" />

            {/* Central Play/Pause Button overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <motion.div
                initial={false}
                animate={{ scale: isPlaying ? 0.8 : 1, opacity: isPlaying ? 0 : 1 }}
                whileHover={{ scale: 1.1 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-2xl transition-all group-hover:bg-white/30"
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
              </motion.div>
            </div>

            {/* Bottom Controls / Status Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-30 pointer-events-none">
              <span className="text-xs uppercase tracking-widest text-white/70 font-semibold bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
                {isPlaying ? "Playing Highlight Reel" : "Click anywhere to watch"}
              </span>

              <button
                onClick={toggleMute}
                className="pointer-events-auto p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
