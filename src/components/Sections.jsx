import { motion } from 'framer-motion';
import { ExternalLink, Github, Mail, MapPin, Award, Briefcase, GraduationCap, CheckCircle, Code, Rocket, Server, Cloud } from 'lucide-react';

export default function Sections() {
  return (
    <div className="relative bg-black text-white">
      <GradientBackdrop />

      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Leadership />
      <Certifications />
      <Contact />
    </div>
  );
}

function GradientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-[1]">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] opacity-40 blur-3xl rounded-full bg-[conic-gradient(at_30%_20%,#06b6d4,transparent_50%,#a78bfa_70%,transparent_85%)]" />
    </div>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400">
          {title}
        </h2>
        {subtitle && <p className="text-white/70 mt-2 max-w-2xl">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About" subtitle="A snapshot of who I am and what I love to build.">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80 leading-relaxed">
              I’m Prathamesh Wakekar, a passionate frontend developer skilled in modern web technologies, Android development, and AI. With hands-on experience in projects like Weather Forecasting App and Victor’s Club Website, I strive to build interactive and data-driven solutions with impactful design.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_-10px_rgba(34,211,238,0.45)]">
            <div className="aspect-square bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-violet-600/10" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
            <InfoCard label="Education" value="Gurugram University" />
            <InfoCard label="Role" value="Frontend Developer" />
            <InfoCard label="Location" value={<span className="inline-flex items-center gap-1"><MapPin size={14}/> India</span>} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80">
      <div className="text-[10px] uppercase tracking-widest text-white/60">{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}

function Experience() {
  const items = [
    {
      org: 'Cosmic365.ai', role: 'Associate Intern', period: '2024–2025',
      desc: 'Assisted in training/testing ML models, optimizing accuracy, and working on AI-driven projects.'
    },
    {
      org: 'DevTown', role: 'Brand Ambassador', period: '2024–2025',
      desc: 'Promoted programs, organized workshops, and expanded student engagement.'
    },
    {
      org: 'Internshala', role: 'Brand Ambassador', period: '2023–2024',
      desc: 'Led internship campaigns and promoted student participation.'
    },
  ];

  return (
    <Section id="experience" title="Experience" subtitle="Where I’ve learned, shipped, and led.">
      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />
        <div className="space-y-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="font-semibold">{item.org} — <span className="text-white/80 font-normal">{item.role}</span></div>
                  <div className="text-white/60 text-sm">{item.period}</div>
                </div>
                <p className="text-white/80 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  const items = [
    {
      title: 'Weather Forecasting App', year: '2024',
      desc: 'Real-time weather updates and responsive UI built with Kotlin/Java.',
      tech: ['Kotlin', 'Java', 'OpenWeather'],
      link: 'https://github.com/mysticalalpha',
    },
    {
      title: 'Victor’s Club Website', year: '2025',
      desc: 'React + Node.js + MongoDB website for event management and community updates.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/mysticalalpha',
    },
  ];

  return (
    <Section id="projects" title="Projects" subtitle="Selected work with impact and craft.">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((p, idx) => (
          <motion.a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 hover:border-cyan-400/40 hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.4)] transition"
          >
            <div className="aspect-video rounded-xl bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-violet-600/10 border border-white/10" />
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-lg">{p.title} <span className="text-white/60 font-normal">({p.year})</span></h3>
                <p className="text-white/70 mt-1">{p.desc}</p>
              </div>
              <ExternalLink className="text-white/50 group-hover:text-cyan-300 transition" size={18} />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded border border-white/10 bg-white/5 text-white/80">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const groups = [
    { title: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'], icon: Code },
    { title: 'Frameworks & Tools', items: ['React', 'Node.js', 'Git/GitHub', 'Visual Studio', 'Android Studio'], icon: Server },
    { title: 'Core Areas', items: ['Frontend Development', 'Automation', 'AI', 'Cloud Technology'], icon: Cloud },
  ];

  return (
    <Section id="skills" title="Skills" subtitle="Tools and stacks I build with.">
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-center gap-2">
              <g.icon className="text-cyan-300" size={18} />
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="mt-3 grid gap-2">
              {g.items.map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                  <span className="text-white/80">{i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background and achievements.">
      <div className="grid gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="font-semibold">Gurugram University — B.Sc. Computer Science</div>
              <div className="text-white/70 text-sm">Expected May 2026</div>
            </div>
            <div className="text-white/70">GPA: 7.0 • Dean’s List (All Semesters)</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Leadership() {
  const items = [
    { title: 'Vice President — Victor’s Club', desc: 'Cloud & Android Development Club' },
    { title: 'Event Management Lead — GDSC DCE', desc: '2023–2024' },
  ];
  return (
    <Section id="leadership" title="Societies & Leadership" subtitle="Communities and roles I’ve contributed to.">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((l, idx) => (
          <motion.div
            key={l.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="font-semibold">{l.title}</div>
            <div className="text-white/70 mt-1">{l.desc}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  const items = [
    { title: 'Android App Development', org: 'Udemy' },
    { title: 'HTML, CSS & JavaScript for Web Developers', org: 'Coursera' },
  ];
  return (
    <Section id="certifications" title="Certifications" subtitle="Proof of continued learning.">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="font-semibold">{c.title}</div>
            <div className="text-white/70 mt-1">{c.org}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let’s build something outstanding.">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <div className="grid gap-3 text-white/80">
            <a href="mailto:prathameshwakekar8055@gmail.com" className="hover:text-white">prathameshwakekar8055@gmail.com</a>
            <a href="tel:+9193101900555" className="hover:text-white">+91 93101900555</a>
            <a href="https://github.com/mysticalalpha" target="_blank" rel="noreferrer" className="hover:text-white">github.com/mysticalalpha</a>
            <a href="https://linkedin.com/in/prathamesh-wakekar-648472296" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn Profile</a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <div className="grid gap-4">
            <div className="relative">
              <input type="text" required className="peer w-full rounded-lg bg-black/40 border border-white/15 px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" id="name"/>
              <label htmlFor="name" className="pointer-events-none absolute left-3 top-2 text-xs text-white/60 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Your name</label>
            </div>
            <div className="relative">
              <input type="email" required className="peer w-full rounded-lg bg-black/40 border border-white/15 px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Email" id="email"/>
              <label htmlFor="email" className="pointer-events-none absolute left-3 top-2 text-xs text-white/60 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Email</label>
            </div>
            <div className="relative">
              <textarea rows="4" required className="peer w-full rounded-lg bg-black/40 border border-white/15 px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Message" id="message"/>
              <label htmlFor="message" className="pointer-events-none absolute left-3 top-2 text-xs text-white/60 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Message</label>
            </div>
            <button className="group relative overflow-hidden rounded-xl px-5 py-2.5 font-medium">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 blur-sm opacity-60 group-hover:opacity-80 transition" />
              <span className="relative z-10 text-black">Send</span>
              <span className="absolute inset-0 ring-1 ring-white/20 rounded-xl" />
            </button>
          </div>
        </motion.form>
      </div>

      <div className="text-center text-white/60 text-sm mt-12">Designed & Developed by Prathamesh Wakekar © 2025</div>
    </Section>
  );
}
