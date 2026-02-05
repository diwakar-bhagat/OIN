import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.button
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group relative cursor-pointer overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      aria-label="OIN - Only International News"
    >
      <motion.div
        className="flex items-center justify-center"
        animate={{
          width: isExpanded ? "auto" : "auto",
        }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* OIN Text - Always visible */}
        <span className="font-serif text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
          O
        </span>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="overflow-hidden whitespace-nowrap font-serif text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl"
            >
              NLY_
            </motion.span>
          )}
        </AnimatePresence>

        <span className="font-serif text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
          I
        </span>

        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.1,
              }}
              className="overflow-hidden whitespace-nowrap font-serif text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl"
            >
              NTERNATIONAL
            </motion.span>
          )}
        </AnimatePresence>

        <span className="font-serif text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
          N
        </span>
      </motion.div>

      {/* Underline effect */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
