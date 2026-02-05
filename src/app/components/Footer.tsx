import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative z-10 w-full px-6 py-12 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="mx-auto max-w-7xl"
      >
        {/* Glass Footer Container */}
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-8 py-6 text-center shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/20">
          {/* Inner Highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/20" />

          {/* Copyright Text */}
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            All rights reserved © NISHA2026
          </p>

          {/* Bottom Reflection */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
        </div>
      </motion.div>
    </footer>
  );
}
