import { Twitch, Instagram, Youtube, MessageCircle, Heart, Coffee } from "lucide-react";

const links = [
  { href: "https://www.twitch.tv/fadi2hotty", icon: Twitch, label: "Twitch" },
  { href: "https://www.youtube.com/@FadiStreams", icon: Youtube, label: "YouTube" },
  { href: "https://www.instagram.com/fadi2hotty/", icon: Instagram, label: "Instagram" },
  { href: "https://discord.gg/26wUR6jJmy", icon: MessageCircle, label: "Discord" },
  { href: "https://www.patreon.com/c/fadi2hotty", icon: Heart, label: "Patreon" },
  { href: "https://streamelements.com/fadi2hotty/tip", icon: Coffee, label: "Tip" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fadi Dinha · Fadi2Hotty
        </p>
        <div className="flex items-center gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              aria-label={l.label}
              className="w-9 h-9 rounded-full bg-secondary hover:bg-foreground hover:text-background flex items-center justify-center transition-colors duration-300"
            >
              <l.icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
