import React from 'react';

const UNIVERSES = [
  {
    id: 'earth-616',
    name: 'Earth-616',
    hero: 'Peter Parker',
    desc: 'The primary Marvel universe. The original Spider-Man whose story began in 1962 and defined the modern superhero.',
    color: '#e5222f',
    suit: 'Classic Red & Blue',
  },
  {
    id: 'earth-1610',
    name: 'Earth-1610',
    hero: 'Miles Morales',
    desc: 'The Ultimate Universe. Miles inherits the mantle after the death of his world\'s Peter Parker. Half-Black, half-Puerto Rican — a hero for a new generation.',
    color: '#2255e5',
    suit: 'Black & Red',
  },
  {
    id: 'earth-65',
    name: 'Earth-65',
    hero: 'Gwen Stacy',
    desc: 'Spider-Woman. In this universe, Gwen Stacy was bitten instead of Peter. She fights crime in a band by night and swings through NYC by day.',
    color: '#e522b5',
    suit: 'White & Pink',
  },
  {
    id: 'earth-928',
    name: 'Earth-928',
    hero: 'Miguel O\'Hara',
    desc: 'Spider-Man 2099. Set in a dystopian future New York, Miguel is a geneticist who accidentally splices his DNA with a spider — in the year 2099.',
    color: '#22e5c2',
    suit: 'Blue & Red Future',
  },
  {
    id: 'earth-90214',
    name: 'Earth-90214',
    hero: 'Peter Parker (Noir)',
    desc: 'Spider-Man Noir. A dark, Depression-era version of Spider-Man who operates in 1930s New York, wearing all black and fighting gangsters.',
    color: '#888',
    suit: 'All Black (Noir)',
  },
  {
    id: 'earth-71004',
    name: 'Earth-71004',
    hero: 'Spider-Ham',
    desc: 'Peter Porker. The most unexpected Spider-Man — a cartoon pig in a universe of anthropomorphic animals. Don\'t underestimate him.',
    color: '#e5a022',
    suit: 'Classic Cartoon',
  },
];

export default function Universe() {
  return (
    <main className="page-main">
      <div className="page-hero universe-hero">
        <div className="page-hero-overlay" style={{ background: 'radial-gradient(circle at 60% 50%, rgba(34,85,229,0.2), rgba(229,34,47,0.18), rgba(3,4,10,0.97))' }} />
        <div className="page-hero-content">
          <div className="section-kicker">04 / SPIDER-VERSE</div>
          <h1 className="page-title">THE MULTI<br /><span>VERSE</span></h1>
          <p className="page-subtitle">Across dimensions, timelines and realities — one name echoes. But the mask hides many faces. Explore the Spider-Verse.</p>
        </div>
      </div>

      <section className="universe-grid-section section-pad">
        <div className="section-kicker">KNOWN UNIVERSES</div>
        <div className="universe-grid">
          {UNIVERSES.map((u) => (
            <div className="universe-card" key={u.id} style={{ '--u-color': u.color }}>
              <div className="universe-card-accent" />
              <div className="universe-id">{u.id}</div>
              <h3 className="universe-hero-name">{u.hero}</h3>
              <p className="universe-desc">{u.desc}</p>
              <div className="universe-suit">
                <span>SUIT</span>
                <strong>{u.suit}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="verse-quote section-pad">
        <div className="quote-block">
          <blockquote>"Anyone can wear the mask."</blockquote>
          <cite>— Miles Morales</cite>
        </div>
      </section>
    </main>
  );
}
