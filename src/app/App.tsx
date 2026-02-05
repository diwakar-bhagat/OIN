import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/oin/Header";
import { Sidebar } from "./components/oin/Sidebar";
import { AuthModal } from "./components/oin/AuthModal";
import { BlogCard } from "./components/oin/BlogCard";
import { VideoCard } from "./components/oin/VideoCard";
import { Carousel } from "./components/oin/Carousel";
import { OINFooter } from "./components/oin/OINFooter";
import type { BlogPost } from "./components/oin/BlogCard";
import type { VideoContent } from "./components/oin/VideoCard";

// Mock Data
const heroPost: BlogPost = {
  id: "hero-1",
  category: "Breaking News",
  title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
  excerpt:
    "World leaders unite in unprecedented cooperation to combat climate change, setting ambitious targets for the next decade and establishing new international frameworks for environmental protection.",
  author: "Sarah Mitchell",
  date: "Feb 5, 2026",
  readTime: "8 min read",
  imageUrl:
    "https://images.unsplash.com/photo-1669950200207-2b1b78ce5fe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB3b3JsZCUyMG5ld3MlMjBpbnRlcm5hdGlvbmFsfGVufDF8fHx8MTc3MDI5OTU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
};

const topStories: BlogPost[] = [
  {
    id: "1",
    category: "Technology",
    title: "AI Revolution Transforms Global Healthcare Systems",
    excerpt:
      "Machine learning algorithms now diagnose diseases with unprecedented accuracy, revolutionizing patient care worldwide.",
    author: "Dr. James Chen",
    date: "Feb 5, 2026",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1765256931300-ceeaed648d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGFic3RyYWN0fGVufDF8fHx8MTc3MDI2MTYwOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "2",
    category: "Business",
    title: "Markets Rally as Trade Agreement Signals Economic Recovery",
    excerpt:
      "International trade deal brings optimism to global markets, with economists predicting sustained growth.",
    author: "Maria Rodriguez",
    date: "Feb 4, 2026",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzcwMjY3ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    category: "Sport",
    title: "Olympic Champions Prepare for Summer Games in Historic Venue",
    excerpt:
      "Athletes from 200+ nations converge for what promises to be the most competitive Olympics in history.",
    author: "Tom Anderson",
    date: "Feb 4, 2026",
    readTime: "4 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1710789056962-ccee0cef42a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhY3Rpb24lMjBmb290YmFsbHxlbnwxfHx8fDE3NzAyOTk1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "4",
    category: "Health",
    title: "Breakthrough Treatment Shows Promise for Chronic Diseases",
    excerpt:
      "Revolutionary medical research offers new hope for millions suffering from previously incurable conditions.",
    author: "Dr. Emily Park",
    date: "Feb 3, 2026",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3ZWxsbmVzcyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzAyMTI0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const latestNews: BlogPost[] = [
  {
    id: "5",
    category: "News",
    title: "Breaking: International Leaders Convene for Peace Talks",
    excerpt:
      "Diplomatic efforts intensify as nations seek resolution to ongoing conflicts through dialogue.",
    author: "Alex Thompson",
    date: "Feb 5, 2026",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1622223145461-271074da3e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMG5ld3MlMjBqb3VybmFsaXNtfGVufDF8fHx8MTc3MDIxODQyMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "6",
    category: "Technology",
    title: "Quantum Computing Breakthrough Promises New Era of Innovation",
    excerpt:
      "Scientists achieve quantum supremacy milestone, opening doors to unprecedented computing power.",
    author: "Dr. Lisa Wang",
    date: "Feb 4, 2026",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1765256931300-ceeaed648d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGFic3RyYWN0fGVufDF8fHx8MTc3MDI2MTYwOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "7",
    category: "Culture",
    title: "Art Exhibition Explores Digital Renaissance in Modern Society",
    excerpt:
      "Groundbreaking exhibition merges traditional art forms with cutting-edge digital technology.",
    author: "Sophie Laurent",
    date: "Feb 3, 2026",
    readTime: "4 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1671067837196-1fcda33a63cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYXBwbGUlMjBwcm9kdWN0JTIwbWluaW1hbHxlbnwxfHx8fDE3NzAyOTU4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const videos: VideoContent[] = [
  {
    id: "v1",
    title: "Inside the UN: Diplomacy in Action",
    description:
      "Exclusive behind-the-scenes access to international negotiations shaping global policy.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1622223145461-271074da3e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMG5ld3MlMjBqb3VybmFsaXNtfGVufDF8fHx8MTc3MDIxODQyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "12:34",
    views: "2.3M views",
    date: "2 days ago",
    category: "Documentary",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: "The Future of Sustainable Energy",
    description:
      "Exploring innovative renewable energy solutions transforming the global power landscape.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1765256931300-ceeaed648d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGFic3RyYWN0fGVufDF8fHx8MTc3MDI2MTYwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "8:45",
    views: "1.8M views",
    date: "3 days ago",
    category: "Technology",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: "Champions League Final Highlights",
    description:
      "Relive the most thrilling moments from the season's most anticipated match.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1710789056962-ccee0cef42a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhY3Rpb24lMjBmb290YmFsbHxlbnwxfHx8fDE3NzAyOTk1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "15:22",
    views: "4.1M views",
    date: "1 day ago",
    category: "Sport",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleRegisterClick = () => {
    setAuthMode("register");
    setIsAuthModalOpen(true);
  };

  const handleLoginClick = () => {
    setAuthMode("login");
    setIsAuthModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800">
        {/* Ambient Background Elements */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/10" />
          <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-purple-400/15 blur-3xl dark:bg-purple-500/8" />
          <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-pink-400/15 blur-3xl dark:bg-pink-500/8" />
        </div>

        {/* Header */}
        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
          onRegisterClick={handleRegisterClick}
          onLoginClick={handleLoginClick}
        />

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Auth Modal */}
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          initialMode={authMode}
        />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-8 lg:px-12">
            <BlogCard post={heroPost} variant="hero" />
          </section>

          {/* Top Stories Carousel */}
          <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 lg:px-12">
            <Carousel title="Top Stories">
              {topStories.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </Carousel>
          </section>

          {/* Latest News Grid */}
          <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 lg:px-12">
            <h2 className="mb-8 font-serif text-3xl font-bold text-zinc-900 dark:text-white">
              Latest News
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestNews.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>

          {/* Video Section */}
          <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 lg:px-12">
            <Carousel title="Featured Videos">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </Carousel>
          </section>

          {/* Trending Sidebar Section */}
          <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="mb-6 font-serif text-3xl font-bold text-zinc-900 dark:text-white">
                  In Focus
                </h2>
                <div className="space-y-6">
                  {topStories.slice(0, 3).map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>

              {/* Trending Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 overflow-hidden rounded-2xl border border-white/30 bg-white/50 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/50">
                  <h3 className="mb-4 font-serif text-xl font-bold text-zinc-900 dark:text-white">
                    Trending Now
                  </h3>
                  <div className="space-y-3">
                    {latestNews.map((post) => (
                      <BlogCard key={post.id} post={post} variant="compact" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <OINFooter />
      </div>
    </ThemeProvider>
  );
}
