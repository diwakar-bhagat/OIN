import { motion } from "motion/react";
import { Menu, Search, User, LogIn } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "../ThemeToggle";

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
  onRegisterClick: () => void;
  onLoginClick: () => void;
}

const categories = [
  "Home",
  "News",
  "Sport",
  "Business",
  "Technology",
  "Health",
  "Culture",
  "Arts",
  "Travel",
  "Earth",
  "Audio",
  "Video",
  "Live",
];

export function Header({
  onMenuClick,
  onSearchClick,
  onRegisterClick,
  onLoginClick,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Glass Header Container */}
      <div className="border-b border-white/20 bg-white/80 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900/80">
        {/* Top Bar */}
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Left: Hamburger & Search */}
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.button
                onClick={onMenuClick}
                className="rounded-xl p-2 text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </motion.button>

              <motion.button
                onClick={onSearchClick}
                className="rounded-xl p-2 text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Logo />
            </div>

            {/* Right: Auth, Theme, Language */}
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.button
                onClick={onRegisterClick}
                className="hidden rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-zinc-700 backdrop-blur-xl transition-colors hover:bg-white/20 dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-300 dark:hover:bg-zinc-900/30 sm:flex sm:items-center sm:gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <User className="h-4 w-4" />
                <span>Register</span>
              </motion.button>

              <motion.button
                onClick={onLoginClick}
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-zinc-700 backdrop-blur-xl transition-colors hover:bg-white/20 dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-300 dark:hover:bg-zinc-900/30 sm:px-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Sign In</span>
              </motion.button>

              <ThemeToggle />

              <LanguageSelector />
            </div>
          </div>

          {/* Category Navigation */}
          <nav className="border-t border-white/10 py-3 dark:border-white/5">
            <div className="hide-scrollbar flex gap-6 overflow-x-auto">
              {categories.map((category) => (
                <motion.a
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className="group relative whitespace-nowrap text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {category}
                  {/* Hover underline */}
                  <span className="absolute -bottom-3 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full dark:from-blue-400 dark:to-purple-400" />
                </motion.a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
