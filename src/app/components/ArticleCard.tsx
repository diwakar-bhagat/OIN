import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ArticleCardProps {
  category: string;
  headline: string;
  summary: string;
  imageUrl: string;
  readTime: string;
  delay?: number;
}

export function ArticleCard({
  category,
  headline,
  summary,
  imageUrl,
  readTime,
  delay = 0,
}: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // ease-out curve
      }}
      className="group relative"
    >
      {/* Card Glow Effect (behind card) */}
      <div className="absolute -inset-1 rounded-[26px] bg-gradient-to-br from-white/40 via-white/20 to-white/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:from-white/20 dark:via-white/10 dark:to-transparent" />

      {/* Main Glass Card */}
      <motion.div
        whileHover={{
          scale: 1.02,
          y: -4,
          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
        }}
        className="relative h-full cursor-pointer overflow-hidden rounded-3xl border border-white/30 bg-white/15 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.1)] dark:border-white/[0.15] dark:bg-zinc-900/30 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_1px_2px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.7),0_2px_4px_rgba(0,0,0,0.4)]"
      >
        {/* Inner Highlight Gradient (top edge) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/30" />
        <div className="pointer-events-none absolute inset-x-6 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent dark:from-white/5" />

        {/* Noise Texture Overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Hover Shimmer Sweep Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-[100%] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          initial={false}
          whileHover={{
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 60%, transparent 100%)",
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 60%, transparent 100%)",
            ],
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />

        {/* Category Badge */}
        <div className="relative z-10 mb-4 inline-block">
          <span className="rounded-full border border-white/20 bg-white/25 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-zinc-300">
            {category}
          </span>
        </div>

        {/* Image */}
        <div className="relative z-10 mb-4 aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-white/20 dark:ring-white/10">
          <ImageWithFallback
            src={imageUrl}
            alt={headline}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-3">
          {/* Headline */}
          <h3 className="line-clamp-2 font-semibold leading-tight tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-zinc-950 dark:text-white dark:group-hover:text-white">
            {headline}
          </h3>

          {/* Summary */}
          <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {summary}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2">
            {/* Read Time */}
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-500">
              <Clock className="h-3.5 w-3.5" />
              <span>{readTime}</span>
            </div>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span>Read more</span>
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </div>
        </div>

        {/* Glass reflection effect on bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/15" />
      </motion.div>
    </motion.div>
  );
}
