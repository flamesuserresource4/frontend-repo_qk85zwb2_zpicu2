import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const projectsRef = useRef(null);
  const [musicOn, setMusicOn] = useState(false);

  const handleViewWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Prathamesh_Wakekar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black selection:bg-cyan-500/30 selection:text-white">
      <Noise />
      <Navbar isMusicOn={musicOn} onToggleMusic={() => setMusicOn((v) => !v)} />
      <main>
        <Hero onViewWork={handleViewWork} onDownloadResume={handleDownload} />
        <Sections ref={projectsRef} />
      </main>
      <MusicPlayer isOn={musicOn} />
    </div>
  );
}

function Noise() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.07]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\
      %3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 600\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E')' }} />
  );
}

export default App;
