/**
 * NIGHT SHIFT CONSOLE — personal AIML portfolio workspace.
 * Midnight ink, Signal Cyan, mono typography, asymmetric dossiers, playful precision.
 */
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  AtSign,
  Braces,
  ChevronRight,
  CircleDot,
  Command,
  Copy,
  Cpu,
  FolderOpen,
  Github,
  Play,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { type CSSProperties, useEffect, useState } from "react";
import { toast } from "sonner";

type Project = {
  id: string;
  number: string;
  title: string;
  type: string;
  summary: string;
  tags: string[];
  accent: "cyan" | "amber" | "blue";
  metrics: Array<[string, string]>;
  note: string;
};

const projects: Project[] = [
  {
    id: "noise-atlas",
    number: "01",
    title: "Night Signal Atlas",
    type: "audio ML · mapping",
    summary:
      "A city-scale listening experiment that turns everyday sound into an explorable, classifiable signal.",
    tags: ["PyTorch", "Librosa", "GeoJSON"],
    accent: "cyan",
    metrics: [
      ["model", "CNN spectrogram classifier"],
      ["signal", "urban acoustic scenes"],
      ["output", "interactive sound-map"],
    ],
    note:
      "Replace this sample project with a build you are proud of — the card, dossier and tags are all ready to edit.",
  },
  {
    id: "seedling",
    number: "02",
    title: "Seedling / Study Copilot",
    type: "LLM · learning systems",
    summary:
      "A tiny study companion that converts messy notes into gentler prompts, retrieval trails, and next questions.",
    tags: ["RAG", "FastAPI", "Embeddings"],
    accent: "amber",
    metrics: [
      ["model", "retrieval-augmented assistant"],
      ["signal", "lecture notes + links"],
      ["output", "question-led revision"],
    ],
    note:
      "The most interesting systems do not only answer; they help you find the next thought worth having.",
  },
  {
    id: "drift",
    number: "03",
    title: "Drift Detector",
    type: "MLOps · visual telemetry",
    summary:
      "A deliberately visual way to spot when model inputs wander away from the data a system learned from.",
    tags: ["Python", "Evidently", "Docker"],
    accent: "blue",
    metrics: [
      ["model", "feature drift monitor"],
      ["signal", "distribution shift"],
      ["output", "human-readable alerts"],
    ],
    note:
      "A future-facing placeholder for any production-minded project, dashboard, or model reliability experiment.",
  },
];

const fieldNotes = [
  ["after hours", "learning tiny web experiments that make technical ideas feel touchable"],
  ["weekend route", "taking photographs of strange light, old signage, and accidental geometry"],
  ["currently looping", "building in public, tinkering with agent workflows, and collecting good questions"],
];

const asciiPortrait = [
  "       .-''''-.",
  "     .'  _  _  '.",
  "    /   (o)(o)   \\",
  "   |      __      |",
  "   |   .-____-.   |",
  "    \\   \\____/   /",
  "     '.  \\__/  .'",
  "       '-.__.-'",
  "      _/|  |\\_",
  "     /  |  |  \\",
  "    /___|__|___\\",
].join("\n");

function formatIST() {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [bootProgress, setBootProgress] = useState(3);
  const [activeNav, setActiveNav] = useState("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [istTime, setIstTime] = useState(formatIST());

  useEffect(() => {
    const steps = [
      window.setTimeout(() => setBootProgress(22), 420),
      window.setTimeout(() => setBootProgress(46), 1180),
      window.setTimeout(() => setBootProgress(68), 1920),
      window.setTimeout(() => setBootProgress(82), 2750),
      window.setTimeout(() => setBootProgress(92), 3420),
      window.setTimeout(() => setBootProgress(100), 4000),
      window.setTimeout(() => setLoading(false), 4650),
    ];
    return () => steps.forEach(window.clearTimeout);
  }, []);

  useEffect(() => {
    const clock = window.setInterval(() => setIstTime(formatIST()), 1000);
    return () => window.clearInterval(clock);
  }, []);

  const navigateTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveNav(target);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("your.email@example.com");
      toast.success("Email placeholder copied — replace it with your own.");
    } catch {
      toast("Add your email here when you are ready.");
    }
  };

  return (
    <div className="site-shell">
      <AnimatePresence>
        {loading && (
          <motion.section
            className={`boot-sequence ${bootProgress >= 46 ? "boot-lock" : ""} ${bootProgress >= 92 ? "boot-enter" : ""}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45 } }}
            aria-label="Loading portfolio"
          >
            <div className="boot-image" />
            <div className="boot-vignette" />
            <div className="boot-grid" />
            <div className="boot-flight-path" aria-hidden="true"><span /><span /><span /></div>
            <div className="boot-laptop-target" aria-hidden="true">
              <span className="target-caption">screen_portal://ready</span>
              <span className="target-scan" />
              <span className="target-cursor">enter_</span>
            </div>
            <div className="boot-header">
              <div className="boot-brand"><img src="/manus-storage/sidequest-prompt-mark_c6087525.png" alt="" /> SIDEQUEST://</div>
              <button type="button" className="boot-skip" onClick={() => setLoading(false)}>skip intro <ChevronRight size={15} /></button>
            </div>
            <div className="boot-copy">
              <p className="eyebrow">booting world</p>
              <div className="boot-meter" aria-label={`${bootProgress}% loaded`}>
                <span style={{ transform: `scaleX(${bootProgress / 100})` }} />
              </div>
              <p className="boot-log">{bootProgress < 46 ? "scanning block-world coordinates..." : bootProgress < 92 ? "screen locked · portal handshake..." : "entering laptop workspace..."} <b>{String(bootProgress).padStart(3, "0")}%</b></p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.div
        className={`portfolio-app ${loading ? "portfolio-hidden" : ""}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? 8 : 0 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      >
        <header className="app-header">
          <button className="brand-lockup" onClick={() => navigateTo("home")} aria-label="Go to beginning">
            <img src="/manus-storage/sidequest-prompt-mark_c6087525.png" alt="" />
            <span>SIDEQUEST://</span>
          </button>
          <div className="header-status">
            <span className="online-dot" /> <span>portfolio.exe</span>
            <span className="header-divider" />
            <span>IST {istTime}</span>
          </div>
        </header>

        <aside className="command-rail" aria-label="Portfolio navigation">
          <div className="rail-line" />
          {[
            ["home", "./home", Command],
            ["work", "./work", FolderOpen],
            ["sidequests", "./sidequests", Sparkles],
            ["contact", "./contact", AtSign],
          ].map(([id, label, Icon]) => {
            const NavigationIcon = Icon as typeof Command;
            return (
              <button
                type="button"
                key={id as string}
                className={`rail-command ${activeNav === id ? "active" : ""}`}
                onClick={() => navigateTo(id as string)}
              >
                <NavigationIcon size={16} strokeWidth={1.7} />
                <span>{label as string}</span>
              </button>
            );
          })}
          <div className="rail-spacer" />
          <a className="rail-command icon-only" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub placeholder"><Github size={17} /></a>
          <span className="rail-orbit">▲</span>
        </aside>

        <main className="workspace">
          <section id="home" className="hero-workspace section-anchor">
            <div className="hero-serial">USER_01 <span>◌</span> AIML / REMOTE / 2026</div>
            <div className="signal-route route-one"><i /> <i /> <i /></div>
            <div className="hero-copy">
              <p className="eyebrow">root@sidequest:~$ <span>whoami</span></p>
              <h1>models, <span className="glitch-command">mischief</span><br />&amp; midnight builds.</h1>
              <p className="hero-intro">A final-year AIML student turning curious questions into systems, sketches, and occasional rabbit holes worth keeping.</p>
              <div className="hero-actions">
                <button type="button" className="signal-button" onClick={() => navigateTo("work")}><Play size={15} fill="currentColor" /> open project dossiers</button>
                <button type="button" className="quiet-button" onClick={() => navigateTo("sidequests")}>read field notes <ArrowDownRight size={17} /></button>
              </div>
              <div className="entry-memory">
              <div className="entry-memory-image"><img src="/manus-storage/sidequest-voxel-tokyo-bright-stars_966de2d2.png" alt="Block-world student working at a bright, star-filled Tokyo night skyline" /></div>
                <div><span>entry_memory://hill_01</span><strong>night world → laptop channel → this workspace</strong></div>
              </div>
            </div>

            <div className="portrait-module">
              <div className="module-tab"><span>identity.ascii</span><span>×</span></div>
              <div className="portrait-grid" />
              <pre aria-label="Editable ASCII portrait placeholder">{asciiPortrait}</pre>
              <div className="portrait-label">
                <span>YOUR ASCII SELF — ADD LATER</span>
                <span>◒ 001</span>
              </div>
              <div className="portrait-corner">+<br />+</div>
            </div>

            <div className="live-readout">
              <p><CircleDot size={14} /> current state</p>
              <strong>learning in public<br />building with intent</strong>
              <span>last compiled: just now</span>
            </div>
          </section>

          <section id="work" className="work-section section-anchor">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / selected work</p>
                <h2>things that escaped<br />the notebook.</h2>
              </div>
              <div className="work-telemetry">
                <span>system posture</span>
                <strong>designed to wander.<br />built to learn.</strong>
                <div><i>3 dossiers</i><i>∞ tabs</i></div>
              </div>
            </div>
            <div className="project-stack">
              {projects.map((project, index) => (
                <motion.button
                  type="button"
                  key={project.id}
                  className={`project-dossier dossier-${project.accent}`}
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.06, duration: 0.38 }}
                >
                  <span className="dossier-number">{project.number}</span>
                  <span className="dossier-content">
                    <span className="dossier-kind">{project.type}</span>
                    <strong>{project.title}</strong>
                    <span>{project.summary}</span>
                  </span>
                  <span className="dossier-tags">{project.tags.map((tag) => <i key={tag}>{tag}</i>)}</span>
                  <span className="dossier-action">inspect <ArrowUpRight size={18} /></span>
                </motion.button>
              ))}
            </div>
          </section>

          <section id="sidequests" className="field-section section-anchor">
            <div className="field-visual">
              <img src="/manus-storage/sidequest-signal-network_baaf3b17.png" alt="Pixel-art constellation of side projects, learning and hobbies" />
              <span className="visual-marker marker-a">RANDOM WALK</span>
              <span className="visual-marker marker-b">GOOD SIGNAL</span>
            </div>
            <div className="field-copy">
              <p className="eyebrow">03 / non-linear evidence</p>
              <h2>side quests<br />make the system.</h2>
              <p className="body-copy">The best work is rarely made in a straight line. This is where hobbies, borrowed fascinations, and unreasonably specific experiments get to matter.</p>
              <div className="field-notes">
                {fieldNotes.map(([label, note], index) => (
                  <div className="field-note" key={label} style={{ "--note-index": index } as CSSProperties}>
                    <span>0{index + 1}</span>
                    <div><strong>{label}</strong><p>{note}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="build-section">
            <div className="build-terminal">
              <div className="module-tab"><span>now_building.log</span><span className="signal-pulse" /></div>
              <div className="terminal-lines">
                <p><span>$</span> focus --this-week</p>
                <p className="terminal-answer">interpretable ML + small magical interfaces</p>
                <p><span>$</span> toolkit --show</p>
                <div className="toolkit-chips"><i>PYTHON</i><i>PYTORCH</i><i>SQL</i><i>REACT</i><i>GIT</i></div>
                <p><span>$</span> status</p>
                <p className="terminal-answer amber">still curious<span className="cursor">_</span></p>
              </div>
            </div>
            <div className="build-aside">
              <Cpu size={26} />
              <p>Not just a student portfolio.</p>
              <strong>A record of what I keep returning to.</strong>
              <div><span>NODE 07</span><span>LINK STABLE</span></div>
            </div>
          </section>

          <section id="contact" className="contact-section section-anchor">
            <div className="contact-routes"><span /> <span /> <span /></div>
            <p className="eyebrow">04 / leave a message in the machine</p>
            <h2>got an interesting<br /><span className="glitch-command">problem?</span></h2>
            <p>For collaborations, friendly rabbit holes, and projects that need a curious pair of hands.</p>
            <div className="contact-actions">
              <button type="button" className="email-button" onClick={copyEmail}><AtSign size={17} /> <span><small>replace://email</small>your.email@example.com</span> <Copy size={15} /></button>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="contact-link"><span>link_in://replace-handle</span> <ArrowUpRight size={16} /></a>
            </div>
          </section>

          <footer className="workspace-footer">
            <span>© 2026 // built after hours</span>
            <span>made with <Zap size={13} fill="currentColor" /> and unreasonable curiosity</span>
          </footer>
        </main>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div className="dossier-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
            <motion.article
              className={`project-inspector inspector-${selectedProject.accent}`}
              initial={{ opacity: 0, x: 42 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 42 }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="inspector-top"><span>open_dossier://{selectedProject.number}</span><button type="button" onClick={() => setSelectedProject(null)} aria-label="Close dossier"><X size={20} /></button></div>
              <div className="inspector-body">
                <p className="eyebrow">{selectedProject.type}</p>
                <h3>{selectedProject.title}</h3>
                <p className="inspector-summary">{selectedProject.summary}</p>
                <div className="inspector-visual"><img src="/manus-storage/sidequest-terminal-window_242a6979.png" alt="Pixel-art late-night laptop workstation" /><div className="scan-line" /></div>
                <div className="metrics-list">{selectedProject.metrics.map(([key, value]) => <div key={key}><span>{key}</span><strong>{value}</strong></div>)}</div>
                <div className="placeholder-note"><Braces size={18} /><p>{selectedProject.note}</p></div>
                <button type="button" className="close-dossier" onClick={() => setSelectedProject(null)}>return to workspace <ChevronRight size={16} /></button>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
