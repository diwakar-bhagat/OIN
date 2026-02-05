'use client';

export default function App() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            OIN
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Apple-Glass News Cards Component
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-500/30 rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-300 text-sm">
                Modern glassmorphism design with smooth animations and responsive layout.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-500/30 rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-gray-300 text-sm">
                Built with Next.js for optimal performance and SEO optimization.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-500/30 rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsive</h3>
              <p className="text-gray-300 text-sm">
                Fully responsive design that works seamlessly on all devices.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Built with React • Next.js • Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  );
}