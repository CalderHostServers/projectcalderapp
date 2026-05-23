import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Twitch, Instagram, Youtube, MessageCircle, Heart, Coffee } from "lucide-react";

const socials = [
  { name: "Twitch", href: "https://www.twitch.tv/fadi2hotty", icon: Twitch, color: "oklch(0.55 0.2 305)" },
  { name: "YouTube", href: "https://www.youtube.com/@FadiStreams", icon: Youtube, color: "oklch(0.6 0.22 25)" },
  { name: "Instagram", href: "https://www.instagram.com/fadi2hotty/", icon: Instagram, color: "oklch(0.6 0.2 15)" },
  { name: "Discord", href: "https://discord.gg/26wUR6jJmy", icon: MessageCircle, color: "oklch(0.55 0.18 265)" },
  { name: "Patreon", href: "https://www.patreon.com/c/fadi2hotty", icon: Heart, color: "oklch(0.55 0.18 25)" },
  { name: "Tip Jar", href: "https://streamelements.com/fadi2hotty/tip", icon: Coffee, color: "oklch(0.7 0.15 80)" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-border/40" : ""}`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          fadi<span className="text-muted-foreground">2hotty</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[13px] text-muted-foreground">
          <a href="#live" className="hover:text-foreground transition-colors">Live</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#clips" className="hover:text-foreground transition-colors">Clips</a>
          <a href="#schedule" className="hover:text-foreground transition-colors">Schedule</a>

          <div className="relative" onMouseLeave={() => setOpen(false)}>
            <button
              onMouseEnter={() => setOpen(true)}
              onClick={() => setOpen((o) => !o)}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Connect <ChevronDown size={13} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-full pt-3 w-72"
                >
                  <div className="glass rounded-2xl border border-border/60 shadow-2xl p-2">
                    {socials.map((s, i) => (
                      <motion.a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary transition-colors group"
                      >
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ background: `color-mix(in oklab, ${s.color} 12%, transparent)`, color: s.color }}
                        >
                          <s.icon size={15} />
                        </span>
                        <span className="text-sm text-foreground">{s.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <a
          href="https://www.twitch.tv/fadi2hotty"
          target="_blank"
          rel="noreferrer"
          className="text-[13px] bg-foreground text-background px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Follow
        </a>
      </nav>
    </motion.header>
  );
}
