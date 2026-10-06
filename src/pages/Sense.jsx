import React from 'react';

export default function Sense() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main className="page-main">
      <div className="page-hero sense-hero">
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(229,34,47,0.18) 0%, rgba(3,4,10,0.96) 60%)' }} />
        <div className="page-hero-content">
          <div className="section-kicker">03 / INSTINCT</div>
          <h1 className="page-title">SPIDER<br /><span>SENSE</span></h1>
          <p className="page-subtitle">Move your cursor. Feel the web. Every element on this page reacts to your presence — just like the hero himself.</p>
        </div>
      </div>

      <section className="sense section-pad" id="sense">
        <div className="sense-layout">
          <div className="sense-copy">
            <h2>MOVE<br /><span>WITH</span><br />THE WEB.</h2>
            <p>Every layer responds to your pointer — the light, the perspective, the wall and the signal around the hero. It should feel less like browsing and more like entering the frame.</p>
            <button className="outline-btn" onClick={() => scrollTo('#sense')}>REPLAY THE MOMENT <span>northeast arrow</span></button>
          </div>
          <div className="poster-card">
            <div className="poster-img" />
            <div className="poster-overlay">
              <span>WITH GREAT<br /><b>POWER</b></span>
              <small>COMES GREAT RESPONSIBILITY</small>
            </div>
          </div>
        </div>
      </section>

      <section className="sense-features section-pad">
        <div className="section-kicker">REACTIVE LAYERS</div>
        <div className="features-grid">
          {[
            { icon: '◎', title: 'Cursor Tracking', desc: 'Your cursor position influences the lighting, web patterns and particle nodes across the entire experience.' },
            { icon: '◈', title: 'Parallax Motion', desc: 'Hero imagery and text layers shift independently as you move, creating a deep 3D illusion without a headset.' },
            { icon: '◇', title: 'Scroll Scrub', desc: 'The hero video is tied directly to your scroll position — no playback, just pure interaction.' },
            { icon: '◉', title: 'Spider Nodes', desc: 'The background particle web responds to your mouse — nodes get pulled toward you like a real web.' },
            { icon: '◆', title: 'Magnetic Buttons', desc: 'Primary CTAs subtly follow your cursor when nearby, giving them a magnetic, alive feel.' },
            { icon: '◐', title: 'Sense Signal', desc: 'The stat card pulse and signal bars react to indicate active spider-sense — always watching.' },
          ].map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
