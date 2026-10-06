import React, { useEffect, useRef } from 'react';
import ScrollExpand from '../components/ScrollExpand';
import DriftWall from '../components/DriftWall';

const SPIDER_IMAGES = [
  'https://commons.wikimedia.org/wiki/Special:FilePath/Spider-Man%20cosplay.jpg',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Spider-Man%20cosplay%202022.jpg',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Asia%20Comic%20Expo%202023%20-%20Spider-Man%20cosplay%201.jpg',
  'https://commons.wikimedia.org/wiki/Special:FilePath/SDCC%202017%20-%20Spider-Man%20Cosplay%20%2835308459724%29.jpg',
  'https://commons.wikimedia.org/wiki/Special:FilePath/NYCC%202018%20Cosplay%20of%20Spider-Man.jpg',
  'https://commons.wikimedia.org/wiki/Special:FilePath/Spider-Man%20costume.jpg'
];

const driftItems = Array.from({ length: 18 }, (_, i) => ({
  image: SPIDER_IMAGES[i % SPIDER_IMAGES.length],
  title: ['Web', 'Swing', 'Sense', 'Velocity', 'Hero', 'City'][i % 6],
  href: '#'
}));

export default function Home({ theme }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const video = videoRef.current;
    const progress = progressRef.current;
    if (!video) return;
    let target = 0, cur = 0, raf = 0;
    const loop = () => {
      cur += (target - cur) * 0.06;
      const t = cur * (video.duration || 0);
      if (video.duration && !video.seeking && Math.abs(video.currentTime - t) > 0.02) video.currentTime = t;
      if (progress) progress.style.transform = `scaleX(${cur})`;
      document.documentElement.style.setProperty('--scroll-p', cur.toFixed(4));
      raf = requestAnimationFrame(loop);
    };
    loop();
    const onScroll = () => {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const total = Math.max(hero.offsetHeight - window.innerHeight, 1);
      const p = Math.min(1, Math.max(0, -rect.top / total));
      target = p;
    };
    video.pause();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return (
    <main>
      <section id="frame">
        <ScrollExpand src="/spidy-frame.jpg" alt="Spider-Man mid-swing" title="SPIDY" scrollHint="Scroll" mediaZoom={1.12} scrollDistance={1.8} holdDistance={0.5} smoothing={0.3} useWindowScroll>
          <h2>Built different.</h2>
          <p>Meet the hero who never stops moving. Keep scrolling and swing into the city.</p>
          <button className="primary-btn" onClick={() => scrollTo('#top')}>ENTER THE WEB <span>downwards right arrow</span></button>
        </ScrollExpand>
      </section>
      <section className="hero" id="top">
        <div className="hero-video-wrap">
          <video ref={videoRef} className="hero-video" src="/landing-scroll.mp4" muted playsInline preload="auto" />
        </div>
        <div className="hero-vignette" />
        <div className="hero-grid" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> A HERO IN MOTION</p>
          <h1><span>THE</span><strong>SPIDY</strong><em>MOMENT</em></h1>
          <p className="hero-sub">A cinematic interactive tribute built around momentum, instinct and the city between your fingertips.</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => scrollTo('#wall')}>ENTER THE WEB <span>downwards right arrow</span></button>
            <span className="scroll-note">SCROLL TO SWING <b>down arrow</b></span>
          </div>
        </div>
        <div className="hero-meta"><span>NYC / 40.7128 N</span><span>01 / 06</span></div>
        <div className="scroll-progress"><span ref={progressRef} /></div>
      </section>
      <section className="intro section-pad" id="story-intro">
        <div className="section-kicker">01 / ORIGIN</div>
        <div className="intro-grid">
          <div>
            <p className="display-line">EVERY CITY HAS A<br /><span>STORY.</span></p>
            <p className="body-copy">But some stories move differently. They climb, fall, twist, and disappear between buildings before you can look up. This experience turns that feeling into an interface.</p>
          </div>
          <div className="stat-card">
            <span>SPIDER-SENSE</span>
            <strong>ON</strong>
            <small>cursor reactive / live</small>
            <div className="signal"><i /><i /><i /><i /><i /></div>
          </div>
        </div>
      </section>
      <section className="wall-section" id="wall">
        <div className="wall-head">
          <div><span className="section-kicker">02 / THE WALL</span><h2>FRAME THE<br /><span>MOMENT.</span></h2></div>
          <p>Hover the city. Let the images drift past like memories. The wall never really stops moving.</p>
        </div>
        <div className="drift-stage">
          <DriftWall items={driftItems} columns={5} tileWidth={200} tileHeight={132} gap={18} tilt={16} turn={-14} perspective={1200} depth={120} speed={42} direction="up" variance={0.45} parallax={0.9} lift={64} fade={0.6} dim={theme === 'dark' ? 0.55 : 0.3} overlayColor={theme === 'dark' ? '#03040a' : '#e2e5ee'} />
          <div className="stage-center"><span>SPIDER<br />SENSE</span><b>northeast arrow</b></div>
        </div>
      </section>
    </main>
  );
}
