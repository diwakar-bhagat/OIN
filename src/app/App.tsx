export default function App() {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              OIN
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Apple-Glass News Cards Component
            </p>
            <p className="text-sm md:text-base text-gray-500">
              Modern glassmorphism design with React & Vite
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Card 1 */}
            <div className="group relative h-64 rounded-2xl overflow-hidden backdrop-blur-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Design</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Modern glassmorphism design with smooth animations and responsive layout.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative h-64 rounded-2xl overflow-hidden backdrop-blur-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Performance</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Built with React and Vite for optimal performance and fast development.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative h-64 rounded-2xl overflow-hidden backdrop-blur-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Responsive</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Fully responsive design that works seamlessly on all devices and screen sizes.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="text-gray-500 text-sm">
              Built with <span className="text-blue-400">React</span> • <span className="text-cyan-400">Vite</span> • <span className="text-purple-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
