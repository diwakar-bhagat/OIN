import { motion } from "motion/react";
import { Play, Clock, Eye, Calendar } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export interface VideoContent {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  views: string;
  date: string;
  category: string;
  youtubeId?: string;
  author?: string;
}

interface VideoCardProps {
  video: VideoContent;
  variant?: "default" | "large";
  onPlay?: () => void;
}

export function VideoCard({ video, variant = "default", onPlay }: VideoCardProps) {
  if (variant === "large") {
    return <LargeVideoCard video={video} onPlay={onPlay} />;
  }

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative h-full cursor-pointer"
    >
      {/* Card Glow */}
      <div className="absolute -inset-1 rounded-[26px] bg-gradient-to-br from-white/40 via-white/20 to-white/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:from-white/20 dark:via-white/10 dark:to-transparent" />

      {/* Glass Card */}
      <div className="relative h-full overflow-hidden rounded-3xl border border-white/30 bg-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:border-white/[0.15] dark:bg-zinc-900/30 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Inner Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/30" />

        {/* Thumbnail with Play Button */}
        <div className="relative aspect-video w-full overflow-hidden">
          <ImageWithFallback
            src={video.thumbnailUrl}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Play Button */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/60 bg-white/30 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:border-white/80 group-hover:bg-white/50">
              <Play className="ml-1 h-7 w-7 fill-white text-white" />
            </div>
          </motion.div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3">
            <div className="flex items-center gap-1.5 rounded-lg bg-black/80 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              <Clock className="h-3 w-3" />
              <span>{video.duration}</span>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute left-3 top-3">
            <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-900 backdrop-blur-md dark:border-white/20 dark:bg-zinc-900/90 dark:text-white">
              {video.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="mb-3 line-clamp-2 font-serif text-lg font-bold leading-tight text-zinc-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {video.title}
          </h3>

          {/* Description */}
          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {video.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500">
            <div className="flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5" />
              <span>{video.views}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>{video.date}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function LargeVideoCard({ video, onPlay }: { video: VideoContent; onPlay?: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative cursor-pointer"
    >
      {/* Card Glow */}
      <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-br from-white/40 via-white/20 to-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-white/20 dark:via-white/10 dark:to-transparent" />

      {/* Glass Container */}
      <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/15 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/[0.15] dark:bg-zinc-900/30 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] sm:p-6">
        {/* Inner Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/30" />

        {/* Video Container */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900">
          <ImageWithFallback
            src={video.thumbnailUrl}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/50" />

          {/* Play Button */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={onPlay}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-3 border-white/70 bg-white/40 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:border-white/90 group-hover:bg-white/60 sm:h-24 sm:w-24">
              <Play className="ml-1 h-10 w-10 fill-white text-white sm:h-12 sm:w-12" />
            </div>
          </motion.div>

          {/* Duration Badge */}
          <div className="absolute bottom-4 right-4">
            <div className="flex items-center gap-2 rounded-xl bg-black/90 px-3 py-2 text-sm font-bold text-white backdrop-blur-md">
              <Clock className="h-4 w-4" />
              <span>{video.duration}</span>
            </div>
          </div>

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="mb-2">
              <span className="rounded-full border border-white/40 bg-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-xl">
                {video.category}
              </span>
            </div>
            <h2 className="mb-2 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
              {video.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-zinc-200">
              <div className="flex items-center gap-1.5">
                <Eye className="h-4 w-4" />
                <span>{video.views}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{video.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
