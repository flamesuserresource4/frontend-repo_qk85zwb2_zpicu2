import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onViewWork, onDownloadResume }) {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.25),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(124,58,237,0.25),transparent_40%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <p className="text-cyan-300/90 tracking-widest uppercase text-xs md:text-sm">Frontend Developer • AI Enthusiast • Android & Cloud Innovator</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 via-fuchsia-400 to-violet-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
            Prathamesh Wakekar
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            Building immersive, fast, and intelligent interfaces with cutting-edge web tech and a love for human-centered design.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={onViewWork} className="group relative overflow-hidden rounded-xl px-6 py-3 font-medium">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 blur-sm opacity-60 group-hover:opacity-80 transition" />
              <span className="relative z-10 text-black">View My Work</span>
              <span className="absolute inset-0 ring-1 ring-white/20 rounded-xl" />
            </button>
            <button onClick={onDownloadResume} className="rounded-xl px-6 py-3 font-medium text-white/90 hover:text-white border border-white/20 bg-white/5 hover:bg-white/10 transition">
              Download Resume
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 shadow-[0_0_60px_-10px_rgba(59,130,246,0.25)]">
            <div className="grid grid-cols-3 gap-4 text-center">
              <Stat label="Projects" value="12+" />
              <Stat label="Tech Stack" value="React • AI • Cloud" />
              <Stat label="Focus" value="Frontend" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400">
        {value}
      </div>
      <div className="text-white/70 text-xs mt-1 tracking-wide">{label}</div>
    </div>
  );
}
