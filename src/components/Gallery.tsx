import { motion } from "motion/react";
import p1 from "@/assets/photo-1.jpg";
import p2 from "@/assets/photo-2.jpg";
import p3 from "@/assets/photo-3.jpg";
import p4 from "@/assets/photo-4.jpg";
import p5 from "@/assets/photo-5.jpg";
import p6 from "@/assets/photo-6.jpg";
import p7 from "@/assets/photo-7.jpg";

const tiles = [
  { src: p1, span: "md:col-span-2 md:row-span-2", caption: "Times Square nights" },
  { src: p5, span: "md:col-span-2", caption: "London golden hour" },
  { src: p3, span: "", caption: "Winter cocoa" },
  { src: p2, span: "", caption: "Rooftop vibes" },
  { src: p6, span: "md:col-span-2", caption: "Thames after dark" },
  { src: p4, span: "", caption: "Crosswalks & billboards" },
  { src: p7, span: "md:col-span-2", caption: "Backstage crew" },
];

export default function Gallery() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Off Stream</p>
          <h2 className="text-display text-[clamp(2.5rem,6vw,5rem)]">
            Life between <span className="gradient-text">streams</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {tiles.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group overflow-hidden rounded-2xl bg-muted ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.caption}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-3 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {t.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
