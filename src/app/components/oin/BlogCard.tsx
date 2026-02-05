import { motion } from "motion/react";
import { Clock, User, ArrowRight, Calendar } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage?: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags?: string[];
}

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "hero" | "compact";
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  if (variant === "hero") {
    return <HeroBlogCard post={post} />;
  }

  if (variant === "compact") {
    return <CompactBlogCard post={post} />;
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

        {/* Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <ImageWithFallback
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Category Badge */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-900 backdrop-blur-md dark:border-white/20 dark:bg-zinc-900/90 dark:text-white">
              {post.category}
            </span>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="mb-3 font-serif text-xl font-bold leading-tight text-zinc-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 border-t border-white/20 pt-4 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-500">
            <div className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Read More Link */}
          <motion.div
            className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <span>Read Full Story</span>
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

function HeroBlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative cursor-pointer overflow-hidden rounded-3xl"
    >
      {/* Hero Image Background */}
      <div className="relative aspect-[21/9] w-full overflow-hidden">
        <ImageWithFallback
          src={post.imageUrl}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
          {/* Category */}
          <div className="mb-4">
            <span className="rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-xl">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-4 max-w-4xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-zinc-200">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CompactBlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="group flex cursor-pointer gap-4 rounded-xl p-3 transition-colors hover:bg-white/30 dark:hover:bg-zinc-800/30"
    >
      {/* Thumbnail */}
      <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">
        <ImageWithFallback
          src={post.imageUrl}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center">
        <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {post.category}
        </span>
        <h4 className="mb-1 line-clamp-2 text-sm font-semibold leading-tight text-zinc-900 dark:text-white">
          {post.title}
        </h4>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </motion.article>
  );
}
