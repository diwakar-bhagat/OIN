import { motion } from "motion/react";
import { ArticleCard } from "./ArticleCard";

interface Article {
  id: number;
  category: string;
  headline: string;
  summary: string;
  imageUrl: string;
  readTime: string;
}

interface FeaturedStoriesSectionProps {
  articles: Article[];
}

export function FeaturedStoriesSection({
  articles,
}: FeaturedStoriesSectionProps) {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="mb-16 text-center"
      >
        <h1 className="mb-4 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-600 bg-clip-text text-5xl font-semibold tracking-tight text-transparent dark:from-white dark:via-zinc-200 dark:to-zinc-400 sm:text-6xl lg:text-7xl">
          Featured Stories
        </h1>
        <p className="mx-auto max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          Discover the latest innovations, insights, and ideas shaping the
          future of technology
        </p>
      </motion.div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            category={article.category}
            headline={article.headline}
            summary={article.summary}
            imageUrl={article.imageUrl}
            readTime={article.readTime}
            delay={index * 0.15} // Stagger with 0.15s delay
          />
        ))}
      </div>
    </section>
  );
}
