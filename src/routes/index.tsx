import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader } from "@/components/tribe/Loader";
import { ScrollProgress } from "@/components/tribe/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Moments } from "@/components/sections/Moments";
import { StudentVoices } from "@/components/sections/StudentVoices";
import { Impact } from "@/components/sections/Impact";
import { ImpactCreated } from "@/components/sections/ImpactCreated";
import { BehindScenes } from "@/components/sections/BehindScenes";
import { FinalChapter } from "@/components/sections/FinalChapter";
import { Introduction } from "@/components/sections/Introduction";
import { OurMission } from "@/components/sections/OurMission";
import { WhyParticipating } from "@/components/sections/WhyParticipating";
import { ProblemsSolving } from "@/components/sections/ProblemsSolving";
import { ProgramsRunning } from "@/components/sections/ProgramsRunning";
import { Conclusion } from "@/components/sections/Conclusion";
import { MotivateJoin } from "@/components/sections/MotivateJoin";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Financial Literacy School Sessions — 10 Sessions on Finance" },
      {
        name: "description",
        content:
          "10 interactive finance sessions for school students. Demystifying money, investing, insurance, and financial decision-making.",
      },
    ],
  }),
  component: Index,
});

import { motion } from "motion/react";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none mix-blend-soft-light">
      <motion.div
        className="absolute h-[60vw] w-[60vw] rounded-full bg-sky/60 blur-[100px]"
        animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ top: "-10%", left: "-10%" }}
      />
      <motion.div
        className="absolute h-[50vw] w-[50vw] rounded-full bg-lavender/60 blur-[100px]"
        animate={{ x: [0, -150, 100, 0], y: [0, 150, -100, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ top: "20%", right: "-10%" }}
      />
      <motion.div
        className="absolute h-[55vw] w-[55vw] rounded-full bg-coral/50 blur-[100px]"
        animate={{ x: [0, 150, -150, 0], y: [0, -50, 150, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "-10%", left: "10%" }}
      />
    </div>
  );
}

function Index() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative bg-[#fdfbf7] min-h-screen">
      <AnimatedBackground />

      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <ScrollProgress />

      <div className="relative z-10">
        <Hero loaded={loaded} />

        {/* Introduction & Motivation */}
        <div className="relative z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 pb-12 shadow-sm">
          <Introduction />
          <OurMission />
          <WhyParticipating />
          <ProblemsSolving />
        </div>

        {/* 10 Sessions Plan with Interactive Lightbox for Photos */}
        <div className="relative z-20 bg-white/80 backdrop-blur-md border-y border-slate-200 py-12 shadow-sm my-12">
          <ProgramsRunning />
        </div>

        {/* Event Photos Gallery */}
        <Moments />

        {/* Student Voices & Impact */}
        <StudentVoices />
        <Impact />
        <ImpactCreated />
        <BehindScenes />

        {/* Classroom Highlights & Moments */}
        <div className="relative z-20 bg-white/80 backdrop-blur-md border-y border-slate-200 py-12 shadow-sm my-12">
          <Conclusion />
        </div>

        <MotivateJoin />
        <FinalChapter />
      </div>
    </main>
  );
}
