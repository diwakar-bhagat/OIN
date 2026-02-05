import { motion, AnimatePresence } from "motion/react";
import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", name: "English", dir: "ltr" },
  { code: "hi", name: "हिन्दी", dir: "ltr" },
  { code: "es", name: "Español", dir: "ltr" },
  { code: "ar", name: "العربية", dir: "rtl" },
  { code: "fr", name: "Français", dir: "ltr" },
  { code: "de", name: "Deutsch", dir: "ltr" },
  { code: "zh", name: "中文", dir: "ltr" },
  { code: "ja", name: "日本語", dir: "ltr" },
  { code: "pt", name: "Português", dir: "ltr" },
  { code: "ru", name: "Русский", dir: "ltr" },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (code: string) => {
    setSelectedLang(code);
    setIsOpen(false);
    // Here you would implement actual language switching logic
  };

  const currentLanguage = languages.find((lang) => lang.code === selectedLang);

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-zinc-700 backdrop-blur-xl transition-colors hover:bg-white/20 dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-300 dark:hover:bg-zinc-900/30"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute right-0 top-full z-50 mt-2 w-48 origin-top-right overflow-hidden rounded-2xl border border-white/30 bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900/90 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
            {/* Inner highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/30" />

            <div className="max-h-80 overflow-y-auto py-2">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/50 dark:hover:bg-zinc-800/50"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className="font-medium text-zinc-700 dark:text-zinc-300"
                    dir={lang.dir}
                  >
                    {lang.name}
                  </span>
                  {selectedLang === lang.code && (
                    <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
