import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, Music, VolumeX } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ isMusicOn, onToggleMusic }) {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.6, 1] }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-violet-600 animate-pulse" />
            <span className="text-white font-semibold tracking-wider">Prathamesh Wakekar</span>
          </div>

          <button
            className="sm:hidden text-white/80 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <ul className="hidden sm:flex items-center gap-6 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleClick(s.id)}
                  className={`transition-colors hover:text-white ${
                    active === s.id ? 'text-cyan-400' : 'text-white/70'
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={onToggleMusic}
                className="rounded-full p-2 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
                aria-label="Toggle background music"
                title="Toggle background music"
              >
                {isMusicOn ? <Music size={18} /> : <VolumeX size={18} />}
              </button>
            </li>
            <li className="flex items-center gap-3 pl-3 ml-3 border-l border-white/10">
              <a href="mailto:prathameshwakekar8055@gmail.com" className="text-white/70 hover:text-white" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="tel:+9193101900555" className="text-white/70 hover:text-white" aria-label="Phone">
                <Phone size={18} />
              </a>
              <a href="https://github.com/mysticalalpha" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/prathamesh-wakekar-648472296" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </li>
          </ul>
        </nav>

        {open && (
          <div className="sm:hidden px-4 pb-4">
            <ul className="grid gap-2 bg-black/40 border border-white/10 rounded-xl p-3">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleClick(s.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition ${
                      active === s.id ? 'text-cyan-400' : 'text-white/80'
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
              <li className="flex items-center justify-between px-3 py-2">
                <span className="text-white/70 text-sm">Background music</span>
                <button
                  onClick={onToggleMusic}
                  className="rounded-full p-2 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
                  aria-label="Toggle background music"
                  title="Toggle background music"
                >
                  {isMusicOn ? <Music size={18} /> : <VolumeX size={18} />}
                </button>
              </li>
              <li className="flex items-center gap-3 px-3 pt-2 border-t border-white/10">
                <a href="mailto:prathameshwakekar8055@gmail.com" className="text-white/80" aria-label="Email"><Mail size={18} /></a>
                <a href="tel:+9193101900555" className="text-white/80" aria-label="Phone"><Phone size={18} /></a>
                <a href="https://github.com/mysticalalpha" target="_blank" rel="noreferrer" className="text-white/80" aria-label="GitHub"><Github size={18} /></a>
                <a href="https://linkedin.com/in/prathamesh-wakekar-648472296" target="_blank" rel="noreferrer" className="text-white/80" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
