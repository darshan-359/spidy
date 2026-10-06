import React, { useState } from 'react';

const VILLAINS = [
  {
    name: 'Green Goblin',
    alias: 'Norman Osborn',
    threat: 98,
    desc: 'The original arch-nemesis. A twisted industrialist empowered by his own experimental formula. Responsible for one of the most devastating moments in Spider-Man history.',
    weakness: 'Sanity / personal ties',
    debut: 'Amazing Spider-Man #14 (1964)',
    color: '#22aa44',
  },
  {
    name: 'Doctor Octopus',
    alias: 'Otto Octavius',
    threat: 92,
    desc: 'Four mechanical arms fused to his spine. A genius physicist whose accident turned him into one of Marvel\'s most persistent and brilliant criminal minds.',
    weakness: 'Arrogance',
    debut: 'Amazing Spider-Man #3 (1963)',
    color: '#e5a022',
  },
  {
    name: 'Venom',
    alias: 'Eddie Brock',
    threat: 95,
    desc: 'The alien symbiote that once bonded with Peter — now seeks vengeance. Shares Spider-Man\'s memories, knows his identity, and is completely invisible to Spider-Sense.',
    weakness: 'Sound / fire',
    debut: 'Amazing Spider-Man #300 (1988)',
    color: '#555',
  },
  {
    name: 'Carnage',
    alias: 'Cletus Kasady',
    threat: 99,
    desc: 'A serial killer bonded with Venom\'s offspring symbiote. No code. No mercy. Carnage exists only to create chaos — and does it with terrifying efficiency.',
    weakness: 'Extreme sound / intense heat',
    debut: 'Amazing Spider-Man #361 (1992)',
    color: '#cc1122',
  },
  {
    name: 'Electro',
    alias: 'Maxwell Dillon',
    threat: 85,
    desc: 'A living lightning bolt with the ability to absorb, channel and release enormous amounts of electrical energy. Fast, lethal, and nearly untouchable.',
    weakness: 'Water / overload',
    debut: 'Amazing Spider-Man #9 (1964)',
    color: '#22aaee',
  },
  {
    name: 'Mysterio',
    alias: 'Quentin Beck',
    threat: 78,
    desc: 'The master of illusion. A disgraced Hollywood special effects artist who turned his craft into weaponized deception. Nothing you see is real.',
    weakness: 'Logic / clear-thinking',
    debut: 'Amazing Spider-Man #13 (1964)',
    color: '#9944cc',
  },
];

export default function Villains() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="page-main">
      <div className="page-hero villains-hero">
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(180deg, rgba(180,0,0,0.18) 0%, rgba(3,4,10,0.97) 60%)' }} />
        <div className="page-hero-content">
          <div className="section-kicker">06 / ROGUES GALLERY</div>
          <h1 className="page-title">THE<br /><span>VILLAINS</span></h1>
          <p className="page-subtitle">Every hero is defined by the enemies they face. Spider-Man's rogues gallery is among the most iconic in all of comics.</p>
        </div>
      </div>

      <section className="villains-section section-pad">
        <div className="section-kicker">THREAT INDEX</div>
        <div className="villains-grid">
          {VILLAINS.map((v) => (
            <div
              className={`villain-card ${selected === v.name ? 'villain-card--open' : ''}`}
              key={v.name}
              style={{ '--v-color': v.color }}
              onClick={() => setSelected(selected === v.name ? null : v.name)}
            >
              <div className="villain-glow" />
              <div className="villain-header">
                <div>
                  <div className="villain-alias">{v.alias}</div>
                  <h3 className="villain-name">{v.name}</h3>
                </div>
                <div className="villain-threat">
                  <span>THREAT</span>
                  <strong>{v.threat}</strong>
                </div>
              </div>
              <div className="villain-bar-wrap">
                <div className="villain-bar" style={{ width: `${v.threat}%` }} />
              </div>
              {selected === v.name && (
                <div className="villain-detail">
                  <p>{v.desc}</p>
                  <div className="villain-meta-row">
                    <div className="villain-meta-item">
                      <span>WEAKNESS</span>
                      <strong>{v.weakness}</strong>
                    </div>
                    <div className="villain-meta-item">
                      <span>DEBUT</span>
                      <strong>{v.debut}</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
