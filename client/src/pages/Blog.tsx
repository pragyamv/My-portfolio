/**
 * NIGHT SHIFT CONSOLE — dedicated writing archive.
 * The blog keeps the black, white-first terminal system and uses bl (#0000FF) for active signals.
 */
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Copy,
  TerminalSquare,
} from "lucide-react";
import { Link } from "wouter";

const mediumArticleUrl =
  "https://medium.com/@pragyamv/proton-vpn-on-linux-why-my-connection-disappeared-and-how-i-fixed-it-5b0097c864dd";

const tags = ["Proton", "ProtonVPN", "VPN", "Linux", "Fedora"];

export default function Blog() {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <Link href="/" className="blog-back">
          <span className="sidequest-cursor" aria-hidden="true"><i /><i /><i /></span>
          <span>SIDEQUEST://</span>
          <small>writing.log</small>
        </Link>
        <div className="blog-header-status"><span className="online-dot" /> writing.log <i /> synced from Medium</div>
        <a className="blog-medium-link" href="https://medium.com/@pragyamv" target="_blank" rel="noreferrer">
          Medium <ArrowUpRight size={14} />
        </a>
      </header>

      <main className="blog-workspace">
        <section className="blog-intro">
          <div className="blog-intro-main">
            <div className="blog-kicker"><TerminalSquare size={15} /> root:~$ ls ./writing</div>
            <p className="eyebrow">04 / notes from the machine</p>
            <h1>small fixes.<br /><span>good rabbit holes.</span></h1>
            <p className="blog-lede">A separate archive for the things I learn, break, and carefully put back together. These are my published Medium posts, kept here in the same workspace.</p>
            <div className="blog-stats"><span><b>01</b> published post</span><span><b>2026</b> archive start</span><span><b>∞</b> things to learn</span></div>
          </div>
          <div className="blog-origin-memory" aria-hidden="true">
            <div className="memory-image" />
            <span>ORIGIN_MEMORY // TOKYO_NIGHT</span>
            <b>world loaded</b>
          </div>
          <div className="blog-route-rail" aria-hidden="true"><i /><i /><i /></div>
        </section>

        <div className="blog-reader-grid">
          <aside className="blog-index" aria-label="Writing index">
            <div className="index-head"><BookOpen size={16} /><span>archive.index</span></div>
            <a href="#proton-vpn-linux" className="index-entry active">
              <span>01</span>
              <strong>Proton VPN on Linux</strong>
              <small>Aug 18, 2026</small>
            </a>
            <a className="index-source" href="https://medium.com/@pragyamv" target="_blank" rel="noreferrer">
              <span>all writing on Medium</span><ArrowUpRight size={14} />
            </a>
          </aside>

          <article id="proton-vpn-linux" className="medium-article">
            <div className="article-topline">
              <span>imported_post://01</span>
              <a href={mediumArticleUrl} target="_blank" rel="noreferrer">view original <ArrowUpRight size={13} /></a>
            </div>
            <div className="article-meta">
              <span><CalendarDays size={14} /> Aug 18, 2026</span>
              <span><Clock3 size={14} /> 2 min read</span>
              <span><Copy size={14} /> originally published on Medium</span>
            </div>
            <h2>Proton VPN on Linux : Why My Connection Disappeared and How I Fixed it</h2>
            <div className="article-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>

            <div className="article-body">
              <p>Proton VPN is my go to. I used it on Windows before, and now that I switched to Linux, specifically Fedora, I wanted it here too.</p>

              <h3>The Issue :</h3>
              <p>Installing Proton VPN was easy- a few commands and I was done.</p>
              <p>The next day, I noticed that I wasn&apos;t connected and opened up the app, only to find out that the connection terminated every time the app was closed.</p>
              <p className="article-aside">The message shown every time I tried closing the window</p>
              <p>This was a problem because I definitely did not want the app window open at all times.</p>

              <h3>The Fix :</h3>
              <p>Here are a few commands I ran on my GNOME terminal to fix this.</p>

              <section className="fix-step">
                <span>01</span>
                <div>
                  <h4>Download your Proton WireGuard config :</h4>
                  <p>Sign in to your Proton account, and go to Downloads -&gt; WireGuard configuration. Choose a server that has a low load, and download the config. Green -&gt; lower load, red -&gt; higher load.</p>
                </div>
              </section>

              <section className="fix-step">
                <span>02</span>
                <div>
                  <h4>Import the config file into your Network Manager :</h4>
                  <pre><code>nmcli connection import type wireguard file ~/Downloads/file-name.conf</code></pre>
                  <p>If it says something along the lines of &lsquo;Connection added&rsquo;, you&apos;re good. You can run the next line to confirm.</p>
                  <pre><code>nmcli connection show</code></pre>
                </div>
              </section>

              <section className="fix-step">
                <span>03</span>
                <div>
                  <h4>Activate the connection :</h4>
                  <p>Refer to the name of your VPN connection shown after running the line above. Next, run this line to activate the connection.</p>
                  <pre><code>nmcli connection up "name"</code></pre>
                  <p>You should now see &lsquo;Connection successfully activated&rsquo;.</p>
                </div>
              </section>

              <section className="fix-step">
                <span>04</span>
                <div>
                  <h4>Auto connecting to the server :</h4>
                  <p>You wouldn&apos;t want to reconnect every time you turn your system on. So we establish auto connect using</p>
                  <pre><code>nmcli connection modify "name" connection.autoconnect yes</code></pre>
                </div>
              </section>

              <h3>All done!</h3>
              <p>And here you&apos;re done with just a few simple steps.</p>
              <p className="article-signoff">— Pragya M V</p>
              <blockquote>Thanks for reading! If you found this useful, feel free to follow me for more posts about Software, ML and things I&apos;m learning along the way. I hope this saved you some time!</blockquote>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
