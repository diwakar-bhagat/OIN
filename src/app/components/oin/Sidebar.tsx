import { motion, AnimatePresence } from "motion/react";
import { X, Search, ChevronDown, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  {
    name: "News",
    subcategories: ["World", "Local", "Politics", "Breaking"],
  },
  {
    name: "Sport",
    subcategories: ["Football", "Cricket", "Tennis", "Olympics"],
  },
  {
    name: "Business",
    subcategories: ["Markets", "Economy", "Companies", "Tech"],
  },
  {
    name: "Technology",
    subcategories: ["AI", "Gadgets", "Science", "Innovation"],
  },
  {
    name: "Health",
    subcategories: ["Wellness", "Medicine", "Mental Health", "Fitness"],
  },
  {
    name: "Culture",
    subcategories: ["Film", "Music", "Books", "Fashion"],
  },
  {
    name: "Arts",
    subcategories: ["Exhibitions", "Theater", "Dance", "Photography"],
  },
  {
    name: "Travel",
    subcategories: ["Destinations", "Tips", "Adventure", "Luxury"],
  },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Sidebar Panel */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="fixed left-0 top-0 z-50 h-full w-full max-w-sm overflow-y-auto border-r border-white/20 bg-white/95 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900/95 sm:w-96"
          >
            {/* Inner highlight */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-white/30" />

            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-white/20 bg-white/80 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-white">
                  Menu
                </h2>
                <motion.button
                  onClick={onClose}
                  className="rounded-xl p-2 text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Search Field */}
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search news, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-white/30 bg-white/50 py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 dark:border-white/10 dark:bg-zinc-800/50 dark:text-white dark:placeholder:text-zinc-500"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="p-6">
              <nav className="space-y-1">
                {/* Home Link */}
                <motion.a
                  href="#home"
                  className="block rounded-xl px-4 py-3 font-medium text-zinc-900 transition-colors hover:bg-white/50 dark:text-white dark:hover:bg-zinc-800/50"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Home
                </motion.a>

                {/* Expandable Categories */}
                {categories.map((category) => (
                  <div key={category.name}>
                    <motion.button
                      onClick={() => toggleCategory(category.name)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium text-zinc-900 transition-colors hover:bg-white/50 dark:text-white dark:hover:bg-zinc-800/50"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>{category.name}</span>
                      <motion.div
                        animate={{
                          rotate: expandedCategory === category.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {expandedCategory === category.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-1 py-2 pl-4">
                            {category.subcategories.map((sub) => (
                              <motion.a
                                key={sub}
                                href={`#${sub.toLowerCase()}`}
                                className="block rounded-lg px-4 py-2 text-sm text-zinc-600 transition-colors hover:bg-white/30 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/30 dark:hover:text-white"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                              >
                                {sub}
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Newsletter CTA */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-blue-50 to-purple-50 p-6 dark:border-white/10 dark:from-blue-950/30 dark:to-purple-950/30">
                <Mail className="mb-3 h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
                  Stay Informed
                </h3>
                <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                  Get the latest news delivered to your inbox
                </p>
                <motion.button
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Instagram, href: "#" },
                    { icon: Youtube, href: "#" },
                  ].map(({ icon: Icon, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      className="rounded-lg bg-white/50 p-2.5 text-zinc-700 transition-colors hover:bg-white/80 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800/80"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
