import { motion } from "motion/react";
import { Twitch, Instagram, Youtube, MessageCircle, Heart, Coffee, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Twitch", handle: "@fadi2hotty", href: "https://www.twitch.tv/fadi2hotty", icon: Twitch, desc: "Live streams, every week." },
  { name: "YouTube", handle: "@FadiStreams", href: "https://www.youtube.com/@FadiStreams", icon: Youtube, desc: "Highlights, vlogs & best moments." },
  { name: "Instagram", handle: "@fadi2hotty", href: "https://www.instagram.com/fadi2hotty/", icon: Instagram, desc: "Behind the scenes & daily life." },
  { name: "Discord", handle: "Join the server", href: "https://discord.gg/26wUR6jJmy", icon: MessageCircle, desc: "Hang with the community 24/7." },
  { name: "Patreon", handle: "Support the show", href: "https://www.patreon.com/c/fadi2hotty", icon: Heart, desc: "Perks, sub-only content, early access." },
  { name: "Tip Jar", handle: "Send a tip", href: "https://streamelements.com/fadi2hotty/tip", icon: Coffee, desc: "Fuel the next stream. Cheers." },
];

export default function Socials() {
  return (
    <section id="clips" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Everywhere Else</p>
          <h2 className="text-display text-[clamp(2.5rem,6vw,5rem)]">
            One <span className="gradient-text">Fadi</span>, many windows.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((l, i) => (
            <motion.a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-3xl bg-card border border-border/60 hover:border-foreground/20 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"
                   style={{ background: "radial-gradient(circle, oklch(0.85 0.15 305 / 0.45), transparent 70%)" }} />
              <div className="relative flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                  <l.icon size={18} />
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground transition-all duration-500 group-hover:text-foreground group-hover:rotate-12" />
              </div>
              <div className="relative mt-6">
                <h3 className="text-lg font-semibold tracking-tight">{l.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{l.handle}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{l.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
