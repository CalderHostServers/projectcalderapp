import { motion } from "motion/react";
import { Twitch } from "lucide-react";

export default function LiveEmbed() {
  const host = typeof window !== "undefined" ? window.location.hostname : "localhost";
  return (
    <section id="live" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">The Main Stage</p>
          <h2 className="text-display text-[clamp(2.5rem,6vw,5rem)]">
            Pull up <span className="gradient-text">live</span>.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Catch the chaos as it unfolds. Live streams, real reactions, zero filter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] overflow-hidden border border-border/60 shadow-2xl bg-card"
        >
          <div className="aspect-video">
            <iframe
              src={`https://player.twitch.tv/?channel=fadi2hotty&parent=${host}&parent=lovable.app&parent=localhost&autoplay=false`}
              allowFullScreen
              className="w-full h-full"
              title="Fadi2Hotty Twitch Stream"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 flex justify-center"
        >
          <a
            href="https://www.twitch.tv/fadi2hotty/chat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitch size={14} /> Open chat in a new tab
          </a>
        </motion.div>
      </div>
    </section>
  );
}
