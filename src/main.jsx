import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Story from './pages/Story';
import Sense from './pages/Sense';
import Universe from './pages/Universe';
import Powers from './pages/Powers';
import Villains from './pages/Villains';
import './styles.css';

const STAR = 'M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z';

function ThemeToggle({ theme, onToggle }) {
  const next = theme === 'dark' ? 'Light' : 'Dark';
  return (
    <button className="star-btn" onClick={onToggle} aria-label={`Switch to ${next.toLowerCase()} theme`}>
      <span>{next}</span>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <i key={n} className={`star-${n}`} aria-hidden="true"><svg viewBox="0 0 784.11 815.53"><path d={STAR} /></svg></i>
      ))}
    </button>
  );
}

function LiveBackground() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w, h, raf, nodes = [], m = { x: -999, y: -999 };
    const size = () => { const d = Math.min(devicePixelRatio || 1, 2); w = c.width = innerWidth * d; h = c.height = innerHeight * d; c.style.width = innerWidth + 'px'; c.style.height = innerHeight + 'px'; ctx.setTransform(d, 0, 0, d, 0, 0);
      nodes = Array.from({ length: Math.round(Math.min(110, innerWidth / 14)) }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 })); };
    const move = (e) => { m.x = e.clientX; m.y = e.clientY; };
    const tick = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      const ink = document.documentElement.dataset.theme === 'light' ? '10,12,20' : '255,255,255';
      for (const n of nodes) {
        const dx = m.x - n.x, dy = m.y - n.y, d = Math.hypot(dx, dy);
        if (d < 220) { n.vx += dx / d * .012; n.vy += dy / d * .012; }
        n.vx *= .985; n.vy *= .985; n.x += n.vx; n.y += n.vy;
        if (n.x < 0) n.x = innerWidth; if (n.x > innerWidth) n.x = 0; if (n.y < 0) n.y = innerHeight; if (n.y > innerHeight) n.y = 0;
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) { ctx.strokeStyle = `rgba(229,34,47,${(1 - d / 130) * .35})`; ctx.lineWidth = .8; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const dm = Math.hypot(a.x - m.x, a.y - m.y);
        if (dm < 190) { ctx.strokeStyle = `rgba(${ink},${(1 - dm / 190) * .5})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(m.x, m.y); ctx.stroke(); }
        ctx.fillStyle = `rgba(${ink},.55)`; ctx.fillRect(a.x - 1, a.y - 1, 2, 2);
      }
      if (!reduce) raf = requestAnimationFrame(tick);
    };
    size(); tick();
    addEventListener('resize', size); addEventListener('pointermove', move, { passive: true });
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); removeEventListener('pointermove', move); };
  }, []);
  return <canvas ref={ref} className="live-bg" aria-hidden="true" />;
}

function LoginPage({ onClose }) {
  const [mode, setMode] = useState('login');
  const [msg, setMsg] = useState('');
  const first = useRef(null);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    first.current?.focus();
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const submit = (e) => {
    e.preventDefault();
    const user = String(new FormData(e.currentTarget).get('username') || '').trim();
    setMsg(mode === 'login' ? `Swinging in as ${user}. Demo only: connect your own auth backend.` : `Welcome to the web, ${user}. Demo only: no account was created.`);
  };
  const login = mode === 'login';
  return (
    <div className="login" role="dialog" aria-modal="true" aria-labelledby="login-title">
      <button className="login-close" onClick={onClose} aria-label="Close login">X</button>
      <div className="login-card">
        <aside className="login-art">
          <img src="/spidy-frame.jpg" alt="" />
          <svg className="login-web" viewBox="0 0 300 300" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5].map((k) => <line key={k} x1="300" y1="0" x2={300 - Math.cos(k * 0.31) * 330} y2={Math.sin(k * 0.31) * 330} />)}
            {[50, 100, 150, 210].map((r) => <circle key={r} cx="300" cy="0" r={r} />)}
          </svg>
          <p>With great power<br />comes great <b>responsibility.</b></p>
        </aside>
        <form className="form" onSubmit={submit}>
          <p id="login-title" className="form-title">{login ? 'Login' : 'Sign up'}</p>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" /></svg>
            <input ref={first} name="username" autoComplete="off" placeholder="Username" className="input-field" type="text" required />
          </div>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" /></svg>
            <input name="password" placeholder="Password" className="input-field" type="password" autoComplete={login ? 'current-password' : 'new-password'} required />
          </div>
          <div className="btn">
            <button type="submit" className="button1">{login ? 'Login' : 'Create account'}</button>
            <button type="button" className="button2" onClick={() => { setMode(login ? 'signup' : 'login'); setMsg(''); }}>{login ? 'Sign Up' : 'Back to Login'}</button>
          </div>
          <button type="button" className="button3" onClick={() => setMsg('Password reset is not connected yet.')}>Forgot Password</button>
          <p className="form-msg" role="status" aria-live="polite">{msg}</p>
        </form>
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/story', label: 'STORY' },
  { to: '/sense', label: 'SENSE' },
  { to: '/universe', label: 'VERSE' },
  { to: '/powers', label: 'POWERS' },
  { to: '/villains', label: 'VILLAINS' },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('spidy-theme') || 'dark'; } catch { return 'dark'; } });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('spidy-theme', theme); } catch { /* storage unavailable */ }
  }, [theme]);

  const [loginOpen, setLoginOpen] = useState(false);
  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);
      document.documentElement.style.setProperty('--px', (e.clientX / innerWidth * 2 - 1).toFixed(3));
      document.documentElement.style.setProperty('--py', (e.clientY / innerHeight * 2 - 1).toFixed(3));
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(() => {
    const els = [...document.querySelectorAll('.primary-btn,.outline-btn,.nav-cta')];
    const off = els.map((el) => {
      const mv = (e) => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .22}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`; };
      const lv = () => { el.style.transform = ''; };
      el.addEventListener('pointermove', mv); el.addEventListener('pointerleave', lv);
      return () => { el.removeEventListener('pointermove', mv); el.removeEventListener('pointerleave', lv); };
    });
    return () => off.forEach((f) => f());
  }, []);

  return (
    <div className="app-shell">
      <LiveBackground />
      {loginOpen && <LoginPage onClose={closeLogin} />}
      <div ref={glowRef} className="cursor-glow" />
      <div ref={cursorRef} className="cursor-dot" />
      <div className="grain" />
      <div className="web-lines" aria-hidden="true" />

      <header className="nav">
        <NavLink to="/" className="brand" aria-label="Spidy home">
          <span className="brand-mark">S</span>
          <span>SPIDY</span>
        </NavLink>
        <nav>
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'nav-active' : ''}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-right">
          <button className="nav-login" onClick={openLogin}>LOGIN</button>
          <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
          <NavLink to="/villains" className="nav-cta"><span>EXPLORE</span><i>northeast arrow</i></NavLink>
        </div>
      </header>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/story" element={<Story />} />
        <Route path="/sense" element={<Sense />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/powers" element={<Powers />} />
        <Route path="/villains" element={<Villains />} />
      </Routes>

      <footer className="footer">
        <span>2026 / SPIDY</span>
        <span>BUILT DIFFERENT / MOVE YOUR CURSOR</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
