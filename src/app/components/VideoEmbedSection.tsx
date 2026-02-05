import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState } from "react";

interface VideoEmbedSectionProps {
  title: string;
  description: string;
  youtubeId: string;
  thumbnailUrl?: string;
}

export function VideoEmbedSection({
  title,
  description,
  youtubeId,
  thumbnailUrl,
}: VideoEmbedSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultThumbnail = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Title & Description */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent dark:from-white dark:via-zinc-200 dark:to-zinc-400 sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>

        {/* Glass Video Container */}
        <motion.div
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
          }}
          className="group relative"
        >
          {/* Card Glow Effect */}
          <div className="absolute -inset-2 rounded-[30px] bg-gradient-to-br from-white/40 via-white/20 to-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-white/20 dark:via-white/10 dark:to-transparent" />

          {/* Glass Container */}
          <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/15 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:border-white/[0.15] dark:bg-zinc-900/30 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_1px_2px_rgba(0,0,0,0.3)] sm:p-6">
            {/* Inner Highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/30" />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent dark:from-white/5" />

            {/* Video Embed */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/20 dark:ring-white/10">
              {!isPlaying ? (
                // Thumbnail Preview with Play Button
                <motion.div
                  className="group/play relative h-full w-full cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Thumbnail Image */}
                  <img
                    src={thumbnailUrl || defaultThumbnail}
                    alt={title}
                    className="h-full w-full object-cover"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 transition-opacity duration-300 group-hover/play:from-black/70 group-hover/play:via-black/30" />

                  {/* Play Button */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover/play:border-white/60 group-hover/play:bg-white/30 sm:h-24 sm:w-24">
                      <Play className="ml-1 h-8 w-8 fill-white text-white sm:h-10 sm:w-10" />
                    </div>
                  </motion.div>

                  {/* Shimmer Effect on Hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/play:opacity-100"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                    }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              ) : (
                // YouTube Iframe
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
