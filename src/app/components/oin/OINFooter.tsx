import { motion } from "motion/react";
import { Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const footerSections = [
  {
    title: "Sections",
    links: [
      { name: "News", href: "#news" },
      { name: "Sport", href: "#sport" },
      { name: "Business", href: "#business" },
      { name: "Technology", href: "#technology" },
      { name: "Health", href: "#health" },
      { name: "Culture", href: "#culture" },
    ],
  },
  {
    title: "More Content",
    links: [
      { name: "Arts", href: "#arts" },
      { name: "Travel", href: "#travel" },
      { name: "Earth", href: "#earth" },
      { name: "Audio", href: "#audio" },
      { name: "Video", href: "#video" },
      { name: "Live", href: "#live" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "About OIN", href: "#about" },
      { name: "Editorial Guidelines", href: "#guidelines" },
      { name: "Careers", href: "#careers" },
      { name: "Press Office", href: "#press" },
      { name: "Advertise", href: "#advertise" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Accessibility", href: "#accessibility" },
      { name: "Parental Guidance", href: "#parental" },
      { name: "Modern Slavery", href: "#slavery" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function OINFooter() {
  return (
    <footer className="relative z-10 w-full border-t border-white/20 bg-white/80 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900/80">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 lg:px-12">
        {/* Top Section - Logo & Newsletter */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 font-serif text-3xl font-bold text-zinc-900 dark:text-white">
              OIN
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              ONLY_INTERNATIONAL — Your trusted source for global news,
              analysis, and insights. Committed to editorial excellence and
              journalistic integrity.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="rounded-xl border border-white/30 bg-white/50 p-2.5 text-zinc-700 transition-colors hover:bg-white/70 dark:border-white/10 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800/70"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:border-white/10 dark:from-blue-950/30 dark:to-purple-950/30">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-white/50 p-3 dark:bg-zinc-800/50">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    Stay Informed
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Get breaking news delivered to your inbox
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-white/30 bg-white/50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 dark:border-white/10 dark:bg-zinc-800/50 dark:text-white dark:placeholder:text-zinc-500"
                />
                <motion.button
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />

        {/* Links Grid */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="mb-1 font-medium">
              © {new Date().getFullYear()} ONLY_INTERNATIONAL
            </p>
            <p className="text-xs">
              All rights reserved. Committed to journalistic integrity and
              editorial independence.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#terms"
              className="text-xs hover:text-blue-600 dark:hover:text-blue-400"
            >
              Terms
            </a>
            <span className="text-zinc-400">•</span>
            <a
              href="#privacy"
              className="text-xs hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy
            </a>
            <span className="text-zinc-400">•</span>
            <a
              href="#cookies"
              className="text-xs hover:text-blue-600 dark:hover:text-blue-400"
            >
              Cookies
            </a>
            <span className="text-zinc-400">•</span>
            <a
              href="#accessibility"
              className="text-xs hover:text-blue-600 dark:hover:text-blue-400"
            >
              Accessibility
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 rounded-xl border border-white/20 bg-white/30 p-4 text-center dark:border-white/10 dark:bg-zinc-800/30">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            OIN is committed to maintaining the highest standards of editorial
            integrity. We are an independent news organization dedicated to
            serving the public interest through accurate, impartial reporting.
          </p>
        </div>
      </div>

      {/* Bottom Reflection Line */}
      <div className="pointer-events-none h-px bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/20" />
    </footer>
  );
}
