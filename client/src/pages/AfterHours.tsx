import { ArrowUpRight, Github, Home as HomeIcon } from "lucide-react";
import { Link } from "wouter";

const work = [
  {
    number: "01",
    title: "RAG + Chatbot / Customer Support",
    type: "RAG · workflow automation",
    summary: "Google Drive documents become a Pinecone knowledge layer for chat and support workflows.",
    tags: ["n8n", "Pinecone", "AI Agent"],
    href: "https://github.com/pragyamv/n8n/tree/main/RAG%20%2B%20Chatbot%20and%20Customer%20support",
  },
  {
    number: "02",
    title: "TrueScan",
    type: "medical CV · full-stack dashboard",
    summary: "An ensemble vision system for knee X-ray authenticity and anomaly analysis.",
    tags: ["PyTorch", "YOLOv8", "Flask"],
    href: "https://github.com/pragyamv/TrueScan",
  },
  {
    number: "03",
    title: "MoleColyte",
    type: "geometric deep learning · chemistry",
    summary: "A 3D equivariant graph pipeline for multi-assay molecular toxicity prediction.",
    tags: ["EGNN", "DGL", "Tox21"],
    href: "https://github.com/pragyamv/MoleColyte",
  },
  {
    number: "04",
    title: "CA-6",
    type: "vision-language · local inference",
    summary: "A private, local image-understanding system powered by Ollama and LLaVA-Phi-3.",
    tags: ["LLaVA-Phi-3", "OpenCV", "Ollama"],
    href: "https://github.com/pragyamv/CA-6",
  },
];

export default function AfterHours() {
  return (
    <div className="after-hours-page">
      <header className="app-header after-hours-header">
        <Link href="/" className="app-header-home"><span className="terminal-prompt-mark" aria-hidden="true">›</span><span>root/pragya/</span><small>home</small></Link>
        <span className="after-hours-status"><span className="online-dot" /> after_hours.log</span>
      </header>
      <main className="after-hours-workspace">
        <div className="after-hours-topline"><span>root:~$ ls ./after-hours</span><span>04 / WORK TRACE</span></div>
        <section className="after-hours-hero">
          <p className="eyebrow">sidequest://after-hours</p>
          <h1>work made<br /><span>after hours.</span></h1>
          <p>A small archive of the things that escaped the notebook and became something real.</p>
        </section>
        <section className="after-hours-grid" aria-label="Pragya's work archive">
          {work.map((item) => (
            <article className="after-hours-card" key={item.number}>
              <div className="after-hours-card-top"><span>{item.number}</span><span>{item.type}</span></div>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <div className="after-hours-tags">{item.tags.map((tag) => <i key={tag}>{tag}</i>)}</div>
              <a href={item.href} target="_blank" rel="noreferrer"><Github size={15} /> open repository <ArrowUpRight size={15} /></a>
            </article>
          ))}
        </section>
        <Link href="/" className="after-hours-back"><HomeIcon size={15} /> return to workspace</Link>
      </main>
    </div>
  );
}
