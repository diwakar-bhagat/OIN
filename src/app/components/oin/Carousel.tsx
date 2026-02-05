import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, ReactNode } from "react";

interface CarouselProps {
  title?: string;
  children: ReactNode[];
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export function Carousel({
  title,
  children,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, children.length - itemsPerView.desktop);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <div className="group relative">
      {/* Title */}
      {title && (
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-white">
            {title}
          </h2>

          {/* Navigation Buttons - Desktop */}
          <div className="hidden items-center gap-2 md:flex">
            <motion.button
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className="rounded-xl border border-white/30 bg-white/50 p-2 text-zinc-700 backdrop-blur-xl transition-all hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800/70"
              whileHover={canGoPrevious ? { scale: 1.05 } : {}}
              whileTap={canGoPrevious ? { scale: 0.95 } : {}}
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <motion.button
              onClick={handleNext}
              disabled={!canGoNext}
              className="rounded-xl border border-white/30 bg-white/50 p-2 text-zinc-700 backdrop-blur-xl transition-all hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800/70"
              whileHover={canGoNext ? { scale: 1.05 } : {}}
              whileTap={canGoNext ? { scale: 0.95 } : {}}
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      )}

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Fade - Left */}
        {canGoPrevious && (
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-950" />
        )}

        {/* Gradient Fade - Right */}
        {canGoNext && (
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-zinc-50 to-transparent dark:from-zinc-950" />
        )}

        {/* Sliding Container */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: `-${currentIndex * (100 / itemsPerView.desktop + (24 / itemsPerView.desktop))}%`,
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {children.map((child, index) => (
            <motion.div
              key={index}
              className="min-w-full shrink-0 md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Navigation - Floating Buttons */}
        <div className="absolute left-4 right-4 top-1/2 z-20 flex -translate-y-1/2 justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:hidden">
          <motion.button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className="rounded-full border border-white/30 bg-white/80 p-2 text-zinc-700 backdrop-blur-xl shadow-lg disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-300"
            whileHover={canGoPrevious ? { scale: 1.1 } : {}}
            whileTap={canGoPrevious ? { scale: 0.9 } : {}}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            disabled={!canGoNext}
            className="rounded-full border border-white/30 bg-white/80 p-2 text-zinc-700 backdrop-blur-xl shadow-lg disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-300"
            whileHover={canGoNext ? { scale: 1.1 } : {}}
            whileTap={canGoNext ? { scale: 0.9 } : {}}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                : "w-2 bg-zinc-300 dark:bg-zinc-700"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
