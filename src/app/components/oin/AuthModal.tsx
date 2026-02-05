import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User, Github, Chrome } from "lucide-react";
import { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "register";
}

export function AuthModal({ isOpen, onClose, initialMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Auth submission:", { mode, email, password, name });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-pink-400/20 opacity-50 blur-2xl dark:from-blue-500/30 dark:via-purple-500/20 dark:to-pink-500/15" />

              {/* Glass Container */}
              <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/90 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900/90">
                {/* Inner Highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/40" />

                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  className="absolute right-4 top-4 z-10 rounded-xl p-2 text-zinc-700 transition-colors hover:bg-white/50 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </motion.button>

                {/* Content */}
                <div className="p-8">
                  {/* Logo */}
                  <div className="mb-6 text-center">
                    <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-white">
                      OIN
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {mode === "login" ? "Welcome back" : "Join our global community"}
                    </p>
                  </div>

                  {/* Mode Toggle */}
                  <div className="mb-6 flex gap-2 rounded-2xl border border-white/30 bg-white/30 p-1 dark:border-white/10 dark:bg-zinc-800/30">
                    <button
                      onClick={() => setMode("login")}
                      className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                        mode === "login"
                          ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                          : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setMode("register")}
                      className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                        mode === "register"
                          ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                          : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      }`}
                    >
                      Register
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {mode === "register" && (
                      <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full rounded-xl border border-white/30 bg-white/50 py-3 pl-10 pr-4 text-zinc-900 placeholder:text-zinc-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 dark:border-white/10 dark:bg-zinc-800/50 dark:text-white dark:placeholder:text-zinc-500"
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full rounded-xl border border-white/30 bg-white/50 py-3 pl-10 pr-4 text-zinc-900 placeholder:text-zinc-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 dark:border-white/10 dark:bg-zinc-800/50 dark:text-white dark:placeholder:text-zinc-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          className="w-full rounded-xl border border-white/30 bg-white/50 py-3 pl-10 pr-4 text-zinc-900 placeholder:text-zinc-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 dark:border-white/10 dark:bg-zinc-800/50 dark:text-white dark:placeholder:text-zinc-500"
                          required
                        />
                      </div>
                    </div>

                    {mode === "login" && (
                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="rounded border-zinc-300 text-blue-600 focus:ring-2 focus:ring-blue-400/20"
                          />
                          <span className="text-zinc-600 dark:text-zinc-400">Remember me</span>
                        </label>
                        <a
                          href="#forgot"
                          className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Forgot password?
                        </a>
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {mode === "login" ? "Sign In" : "Create Account"}
                    </motion.button>
                  </form>

                  {/* Divider */}
                  <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700" />
                    <span className="text-sm text-zinc-500">or continue with</span>
                    <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700" />
                  </div>

                  {/* Social Login */}
                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/50 py-3 font-medium text-zinc-700 transition-colors hover:bg-white/70 dark:border-white/10 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800/70"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Chrome className="h-5 w-5" />
                      <span>Google</span>
                    </motion.button>

                    <motion.button
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/50 py-3 font-medium text-zinc-700 transition-colors hover:bg-white/70 dark:border-white/10 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800/70"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </motion.button>
                  </div>

                  {/* Terms */}
                  {mode === "register" && (
                    <p className="mt-6 text-center text-xs text-zinc-500">
                      By creating an account, you agree to our{" "}
                      <a href="#terms" className="text-blue-600 hover:underline dark:text-blue-400">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#privacy" className="text-blue-600 hover:underline dark:text-blue-400">
                        Privacy Policy
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
