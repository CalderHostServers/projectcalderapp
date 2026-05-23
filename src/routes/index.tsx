import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LiveEmbed from "@/components/LiveEmbed";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import Socials from "@/components/Socials";
import TipCTA from "@/components/TipCTA";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fadi2Hotty — Fadi Dinha · Comedian & Streamer" },
      { name: "description", content: "Home of Fadi2Hotty. Twitch live streams, YouTube highlights, Instagram, Discord community, Patreon and tips." },
      { property: "og:title", content: "Fadi2Hotty — Fadi Dinha" },
      { property: "og:description", content: "Comedian. Streamer. Built different on the internet." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <LiveEmbed />
      <Marquee />
      <Gallery />
      <Socials />
      <TipCTA />
      <Footer />
    </main>
  );
}
