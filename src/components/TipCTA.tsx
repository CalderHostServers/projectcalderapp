import { motion } from "motion/react";
import { Coffee, Heart } from "lucide-react";

export default function TipCTA() {
  return (
    <section id="schedule" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden border border-border/60"
          style={{ background: "linear-gradient(135deg, oklch(0.97 0.01 60), oklch(0.93 0.03 305 / 0.6))" }}
        >
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-50"
               style={{ background: "radial-gradient(circle, oklch(0.8 0.18 305 / 0.5), transparent 70%)" }} />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-40"
               style={{ background: "radial-gradient(circle, oklch(0.85 0.15 80 / 0.5), transparent 70%)" }} />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Keep the lights on</p>
            <h2 className="text-display text-[clamp(2.5rem,6vw,5rem)]">
              Buy Fadi a coffee.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Every tip funds the next bit, the next stream, the next dumb idea that somehow works.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="https://streamelements.com/fadi2hotty/tip"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full text-sm font-medium hover:scale-[1.03] transition-transform"
              >
                <Coffee size={16} />
                Send a tip
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="https://www.patreon.com/c/fadi2hotty"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-background/80 backdrop-blur border border-border text-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-background transition-colors"
              >
                <Heart size={16} />
                Become a Patron
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
