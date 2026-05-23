import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Twitch } from "lucide-react";
import pfp from "@/assets/pfp.png";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-50 blur-3xl"
             style={{ background: "radial-gradient(circle, oklch(0.85 0.12 305 / 0.4), transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
             style={{ background: "radial-gradient(circle, oklch(0.85 0.1 220 / 0.5), transparent 60%)" }} />
        <div className="absolute inset-0 noise opacity-40" />
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 text-[12px] text-muted-foreground bg-secondary/80 backdrop-blur px-3 py-1.5 rounded-full border border-border/60 mb-8"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
          </span>
          Streaming live · variety & comedy
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full opacity-60"
              style={{ background: "conic-gradient(from 0deg, transparent, oklch(0.7 0.2 305), transparent 40%)" }}
            />
            <img
              src={pfp}
              alt="Fadi2Hotty"
              className="relative w-24 h-24 rounded-full object-cover border-4 border-background shadow-xl"
            />
          </div>
        </motion.div>

        <h1 className="text-display text-[clamp(3rem,10vw,8rem)] gradient-text">
          Fadi Dinha
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-[clamp(1.1rem,2vw,1.5rem)] text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Comedian. Streamer. Built different on the internet.
          <br className="hidden sm:block" />
          Welcome to the home of <span className="text-foreground font-medium">Fadi2Hotty</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <a
            href="https://www.twitch.tv/fadi2hotty"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:scale-[1.03] transition-transform"
          >
            <Twitch size={16} />
            Watch on Twitch
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-muted transition-colors"
          >
            Explore everything
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}
