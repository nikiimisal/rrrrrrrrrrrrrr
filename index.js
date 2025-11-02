import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Component() {
  useEffect(() => {
    document.title = "Nikhil Misal — Neon Project Index";
  }, []);

  const projects = [
    { title: "Networking", link: "https://github.com/nikiimisal/Networking", desc: "Network setup, tools, configs" },
    { title: "Linux", link: "https://github.com/nikiimisal/Linux", desc: "Core Linux notes & scripts" },
    { title: "IAM & CLI", link: "https://github.com/nikiimisal/S3-CLI-IAm", desc: "IAM guides & AWS CLI" },
    { title: "HTML Basics", link: "https://github.com/nikiimisal/html_basic_code_myprofile", desc: "Static site + EC2 guide" },
    { title: "WordPress", link: "https://github.com/nikiimisal/wordpress_basic", desc: "WP themes & setup" },
    { title: "LEPM / LEMP", link: "https://github.com/nikiimisal/LAMP_ubuntu", desc: "LEMP stack & AWS integration" },
    { title: "Python Hosting", link: "https://github.com/nikiimisal/Python_Project_Hosting", desc: "Host Python apps" },
    { title: "NodeJS / MEAN / MERN", link: "https://github.com/nikiimisal/NodeJS___NodeJS-using-Nginx___MEAN-and-MERN", desc: "Node & nginx" },
    { title: "3-Tier Architecture", link: "https://github.com/nikiimisal/3-tier_Architecture_Related", desc: "VPC / RDS / LB / CloudWatch" },
    { title: "Serverless", link: "https://github.com/nikiimisal/project--Serverless-application--Sacred-Temple-File-Uploader--using-lambda", desc: "Lambda + S3 uploader" },
    { title: "Git / Mirror Sync", link: "https://github.com/nikiimisal/Project-GitMirrorSync-GitLab-GitHub-Repository-Mirroring", desc: "Repo mirroring & git flow" },
    { title: "Jenkins", link: "https://github.com/nikiimisal/Jenkins", desc: "CI/CD pipelines & Node.js deployments" },
    { title: "Bitbucket", link: "https://github.com/nikiimisal/Bitbucket", desc: "Bitbucket examples" }
  ];

  // typing animation
  const phrases = [
    "DevOps • Cloud • CI/CD • Automation",
    "Networking • Terraform • Terraform Modules",
    "Designing reliable, scalable infra"
  ];
  const [typing, setTyping] = useState(phrases[0]);
  useEffect(() => {
    let pi = 0, ci = 0, forward = true, timeout;
    const tick = () => {
      const cur = phrases[pi];
      if (forward) {
        ci++;
        setTyping(cur.slice(0, ci));
        if (ci === cur.length) { forward = false; timeout = setTimeout(tick, 900); return; }
      } else {
        ci--;
        setTyping(cur.slice(0, ci));
        if (ci === 0) { forward = true; pi = (pi + 1) % phrases.length; }
      }
      timeout = setTimeout(tick, 40 + Math.random()*40);
    };
    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ minHeight: "100vh", fontFamily: 'Inter, system-ui, -apple-system, Roboto, Arial', color: '#e8faff', overflowX: 'hidden' }}>
      {/* animated neon background layers */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -3, background: '#000814' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: -2, background: 'radial-gradient(ellipse at 15% 20%, rgba(0,234,255,0.08), transparent 12%), radial-gradient(ellipse at 85% 80%, rgba(124,77,255,0.06), transparent 18%)', mixBlendMode: 'screen', animation: 'float 12s linear infinite' }} />
      <style>{`@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-10px)}100%{transform:translateY(0)}} .glow-card{box-shadow:0 8px 40px rgba(0,234,255,0.06);border:1px solid rgba(124,77,255,0.08);}`}</style>

      {/* capsule wave header */}
      <div style={{ textAlign: 'center', paddingTop: 18 }}>
        <img src="https://capsule-render.vercel.app/api?type=waving&color=00ffff,7c4dff&height=100&section=header" alt="wave" style={{ maxWidth: '100%' }} />
      </div>

      <header style={{ maxWidth: 1100, margin: '18px auto 8px', padding: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width:56, height:56, borderRadius:12, display:'grid', placeItems:'center', fontWeight:800, background: 'linear-gradient(135deg,#00eaff,#7c4dff)', color:'#00121a', boxShadow: '0 10px 40px rgba(0,234,255,0.12)'}}>NM</div>
          <div>
            <div style={{ fontWeight:900, fontSize:20 }}>Nikhil Misal</div>
            <div style={{ color:'#9fbfdc', fontSize:13 }}>Cloud & DevOps Engineer</div>
          </div>
        </div>
        <nav style={{ display:'flex', gap:12, alignItems:'center' }}>
          <a href="#index" style={{ color:'#9fbfdc', textDecoration:'none' }}>Index</a>
          <a href="#projects" style={{ color:'#9fbfdc', textDecoration:'none' }}>Projects</a>
          <a href="#connect" style={{ color:'#9fbfdc', textDecoration:'none' }}>Connect</a>
          <a href="#contact" style={{ color:'#9fbfdc', textDecoration:'none' }}>Contact</a>
          <a href="https://github.com/nikiimisal/nikiimisal" target="_blank" rel="noreferrer" style={{ background: 'linear-gradient(90deg,#00eaff,#7c4dff)', color:'#00121a', padding:'8px 12px', borderRadius:999, fontWeight:800, textDecoration:'none' }}>Profile</a>
        </nav>
      </header>

      <main style={{ maxWidth: 1100, margin: '6px auto 60px', padding: '0 18px' }}>
        <section style={{ padding: '26px', borderRadius:14, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.03)' }}>
          <h1 style={{ margin:0, fontSize:34, fontWeight:900, background: 'linear-gradient(90deg,#00eaff,#7c4dff)', WebkitBackgroundClip:'text', color:'transparent' }}>🗂️ Project INDEX</h1>
          <p style={{ color:'#9fbfdc', marginTop:8, fontWeight:700 }}>{typing}</p>

          <div style={{ marginTop:18, display:'flex', gap:12, flexWrap:'wrap' }}>
            <a href="#index" style={{ padding:'10px 14px', borderRadius:999, background:'linear-gradient(90deg,#00eaff,#7c4dff)', color:'#00121a', fontWeight:800, textDecoration:'none' }}>Open Index</a>
            <a href="#projects" style={{ padding:'10px 14px', borderRadius:999, border:'1px solid rgba(255,255,255,0.03)', color:'#9fbfdc', fontWeight:800, textDecoration:'none' }}>Highlighted Projects</a>
            <a href="https://github.com/nikiimisal" style={{ padding:'10px 14px', borderRadius:999, border:'1px solid rgba(255,255,255,0.03)', color:'#9fbfdc', fontWeight:800, textDecoration:'none' }}>GitHub Profile</a>
            
            <a href="https://nikiimisal.github.io/Portfollio.in/" target="_blank" rel="noreferrer" style={{ padding:'10px 14px', borderRadius:999, border:'1px solid rgba(255,255,255,0.03)', color:'#9fbfdc', fontWeight:800, textDecoration:'none' }}>Portfolio Site</a>
          </div>

        </section>

        <section id="index" style={{ marginTop:28 }}>
          <h2 style={{ color:'#00eaff', marginBottom:14, fontSize:20, fontWeight:800 }}>INDEX</h2>
          <div style={{ display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))' }}>
            {projects.slice(0,6).map((p, i) => (
              <article key={i} className="glow-card" style={{ padding:14, borderRadius:12, background:'rgba(255,255,255,0.01)' }}>
                <strong style={{ display:'block', marginBottom:8 }}>{p.title}</strong>
                <a href={p.link} target="_blank" rel="noreferrer" style={{ color:'#9fe8ff', textDecoration:'none', fontWeight:700 }}>Open Repo →</a>
                <p style={{ color:'#9fbfdc', marginTop:8, fontSize:13 }}>{p.desc}</p>
              </article>
            ))}
            {/* Add extra cards for specific docs like IAM/CLI, VPC etc. */}
            <article className="glow-card" style={{ padding:14, borderRadius:12, background:'rgba(255,255,255,0.01)' }}>
              <strong>IAM & AWS CLI Docs</strong>
              <div style={{ marginTop:8 }}>
                <a href="https://github.com/nikiimisal/S3-CLI-IAm/blob/main/IAM.md" target="_blank" rel="noreferrer" style={{ display:'block', color:'#9fe8ff' }}>IAM Notes</a>
                <a href="https://github.com/nikiimisal/S3-CLI-IAm/blob/main/AWS_CLI.md" target="_blank" rel="noreferrer" style={{ display:'block', color:'#9fe8ff' }}>AWS CLI</a>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" style={{ marginTop:28 }}>
          <h2 style={{ color:'#00eaff', marginBottom:12, fontSize:20, fontWeight:800 }}>Highlighted Projects</h2>
          <div style={{ display:'grid', gap:14, gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
            {projects.map((p, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} className="glow-card" style={{ padding:16, borderRadius:12, background:'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))' }}>
                <h3 style={{ margin:0, color:'#9fe8ff' }}>{p.title}</h3>
                <p style={{ color:'#9fbfdc', marginTop:6 }}>{p.desc}</p>
                <div style={{ marginTop:10, display:'flex', gap:8 }}>
                  <a href={p.link} target="_blank" rel="noreferrer" style={{ padding:'8px 10px', borderRadius:8, background:'transparent', border:'1px solid rgba(255,255,255,0.04)', color:'#9fe8ff', textDecoration:'none', fontWeight:700 }}>View Repo</a>
                  {/* Special links for 3-tier services */}
                  {p.title === '3-Tier Architecture' && (
                    <a href="https://github.com/nikiimisal/3-tier_Architecture_Related/blob/main/3-tier-Arc_all_servaces_include.md" target="_blank" rel="noreferrer" style={{ padding:'8px 10px', borderRadius:8, background:'linear-gradient(90deg,#00eaff,#7c4dff)', color:'#00121a', textDecoration:'none', fontWeight:800 }}>View Docs</a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="more" style={{ marginTop:28 }}>
          <h2 style={{ color:'#00eaff', marginBottom:12, fontSize:20, fontWeight:800 }}>More Repositories & Docs</h2>
          <div style={{ display:'grid', gap:10, gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))' }}>
            <div className="glow-card" style={{ padding:12, borderRadius:10 }}>
              <strong>VPC / Networking Docs</strong>
              <div style={{ marginTop:8 }}>
                <a href="https://github.com/nikiimisal/3-tier_Architecture_Related/blob/main/VPC.md" target="_blank" rel="noreferrer" style={{ color:'#9fe8ff', display:'block' }}>VPC</a>
                <a href="https://github.com/nikiimisal/3-tier_Architecture_Related/blob/main/VPC_peering.md" target="_blank" rel="noreferrer" style={{ color:'#9fe8ff', display:'block' }}>VPC Peering</a>
                <a href="https://github.com/nikiimisal/3-tier_Architecture_Related/blob/main/LOAD-BALANCER.md" target="_blank" rel="noreferrer" style={{ color:'#9fe8ff', display:'block' }}>Load Balancer</a>
              </div>
            </div>

            <div className="glow-card" style={{ padding:12, borderRadius:10 }}>
              <strong>CI / CD & DevOps</strong>
              <div style={{ marginTop:8 }}>
                <a href="https://github.com/nikiimisal/Jenkins" target="_blank" rel="noreferrer" style={{ color:'#9fe8ff', display:'block' }}>Jenkins Repo</a>
                <a href="https://github.com/nikiimisal/Jenkins-Freestyle-Project-Flow-For-Beginners-" target="_blank" rel="noreferrer" style={{ color:'#9fe8ff', display:'block' }}>Freestyle Project Flow</a>
                <a href="https://github.com/nikiimisal/node-js-app-CICD" target="_blank" rel="noreferrer" style={{ color:'#9fe8ff', display:'block' }}>Node.js CICD Material</a>
              </div>
            </div>

            <div className="glow-card" style={{ padding:12, borderRadius:10 }}>
              <strong>Git & Mirrors</strong>
              <div style={{ marginTop:8 }}>
                <a href="https://github.com/nikiimisal/Project-GitMirrorSync-GitLab-GitHub-Repository-Mirroring" target="_blank" rel="noreferrer" style={{ color:'#9fe8ff', display:'block' }}>Git Mirror Sync</a>
                <a href="https://github.com/nikiimisal/Git-Branching-and-Merge-Conflict-Practice" target="_blank" rel="noreferrer" style={{ color:'#9fe8ff', display:'block' }}>Branching Practice</a>
              </div>
            </div>
          </div>
        </section>

        <section id="connect" style={{ marginTop:28 }}>
          <h2 style={{ color:'#00eaff', marginBottom:12, fontSize:20, fontWeight:800 }}>🌐 Connect with Me</h2>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            <a href="https://www.linkedin.com/in/nikhilmisal/" target="_blank" rel="noreferrer" style={{ background:'#0077B5', color:'#fff', padding:'8px 12px', borderRadius:8, textDecoration:'none', fontWeight:700 }}>LinkedIn</a>
            <a href="https://github.com/nikiimisal" target="_blank" rel="noreferrer" style={{ background:'#6e40c9', color:'#fff', padding:'8px 12px', borderRadius:8, textDecoration:'none', fontWeight:700 }}>GitHub</a>
            <a href="https://leetcode.com/" target="_blank" rel="noreferrer" style={{ background:'#FCA311', color:'#00121a', padding:'8px 12px', borderRadius:8, textDecoration:'none', fontWeight:700 }}>LeetCode</a>
            <a href="https://medium.com/@nik0misal" target="_blank" rel="noreferrer" style={{ background:'#000', color:'#fff', padding:'8px 12px', borderRadius:8, textDecoration:'none', fontWeight:700 }}>Medium</a>
            <a href="mailto:nik0misal@gmail.com" style={{ background:'linear-gradient(90deg,#ff6b6b,#ffb86b)', color:'#00121a', padding:'8px 12px', borderRadius:8, textDecoration:'none', fontWeight:700 }}>Email</a>
          </div>
        </section>

        <section id="contact" style={{ marginTop:28 }}>
          <h2 style={{ color:'#00eaff', marginBottom:12, fontSize:20, fontWeight:800 }}>Contact</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12 }}>
            <div className="glow-card" style={{ padding:12 }}>
              <strong>Email</strong>
              <p style={{ color:'#9fbfdc', marginTop:6 }}>nik0misal@gmail.com</p>
            </div>
            <div className="glow-card" style={{ padding:12 }}>
              <strong>Portfolio</strong>
              <p style={{ color:'#9fbfdc', marginTop:6 }}><a href="https://nikiimisal.github.io/Portfollio.in/" target="_blank" rel="noreferrer" style={{ color:'#9fe8ff' }}>View full portfolio</a></p>
            </div>
          </div>
        </section>

      </main>

      {/* capsule wave footer */}
      <div style={{ textAlign:'center', paddingBottom:18 }}>
        <img src="https://capsule-render.vercel.app/api?type=waving&color=00ffff,7c4dff&height=100&section=footer" alt="wave-bottom" style={{ maxWidth:'100%' }} />
      </div>

      <footer style={{ textAlign:'center', padding:18, color:'#9fbfdc' }}>Built with ❤️ • Nikhil Misal</footer>
    </div>
  );
}
