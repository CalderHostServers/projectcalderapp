import { motion } from "motion/react";

const words = ["Comedy", "Variety", "Just Chatting", "IRL", "Reactions", "Community", "Late Night", "Unhinged"];

export default function Marquee() {
  return (
    <section className="py-12 border-y border-border/60 overflow-hidden bg-secondary/30">
      <div className="relative flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 pr-12 whitespace-nowrap"
        >
          {[...words, ...words, ...words, ...words].map((w, i) => (
            <span key={i} className="text-display text-[clamp(2rem,5vw,4rem)] text-muted-foreground/40">
              {w} <span className="text-accent">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
