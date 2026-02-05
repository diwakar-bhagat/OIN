import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed right-6 top-6 z-50 overflow-hidden rounded-2xl border border-white/30 bg-white/15 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all hover:scale-105 dark:border-white/[0.15] dark:bg-zinc-900/30 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] sm:right-8 sm:top-8"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Inner Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/30" />
      
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 180 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
        ) : (
          <Sun className="h-5 w-5 text-zinc-300" />
        )}
      </motion.div>
    </motion.button>
  );
}