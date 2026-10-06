import React, { useState } from 'react';

const POWERS = [
  {
    category: 'PHYSICAL',
    items: [
      { name: 'Wall-Crawling', level: 100, desc: 'Can adhere to nearly any surface at a molecular level. Fingers, palms, even feet — all fully functional on glass skyscrapers.' },
      { name: 'Super Strength', level: 92, desc: 'Capable of lifting 10 tons at peak. Can stop a speeding train with bare hands and pull apart reinforced steel.' },
      { name: 'Enhanced Agility', level: 98, desc: 'Reflexes and agility are 15x above Olympic-level human performance. Near-acrobatic perfection in mid-air.' },
      { name: 'Durability', level: 78, desc: 'Can withstand physical blows, falls from extreme heights and survive impacts that would kill ordinary humans.' },
    ]
  },
  {
    category: 'SENSORY',
    items: [
      { name: 'Spider-Sense', level: 97, desc: 'A precognitive danger sense that warns of incoming threats — before they happen. Almost impossible to sneak up on him.' },
      { name: 'Enhanced Vision', level: 80, desc: 'Enhanced peripheral vision and reaction time. Can track fast-moving objects with precision.' },
    ]
  },
  {
    category: 'EQUIPMENT',
    items: [
      { name: 'Web-Shooters', level: 95, desc: 'Custom-built mechanical wrist-mounted devices that fire a specially formulated web fluid. Tensile strength rivals steel cable.' },
      { name: 'Web Formula', level: 90, desc: 'Peter\'s own chemical invention. Dissipates after ~1 hour. Used for swinging, restraints, shields and more.' },
      { name: 'Spider-Suit', level: 85, desc: 'Self-designed suit with built-in camera lenses, web cartridge storage and reinforced impact protection.' },
    ]
  },
];

export default function Powers() {
  const [active, setActive] = useState(null);

  return (
    <main className="page-main">
      <div className="page-hero powers-hero">
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(160deg, rgba(229,34,47,0.22) 0%, rgba(3,4,10,0.97) 55%)' }} />
        <div className="page-hero-content">
          <div className="section-kicker">05 / ABILITIES</div>
          <h1 className="page-title">POWER<br /><span>PROFILE</span></h1>
          <p className="page-subtitle">The proportional strength of a spider. A danger sense beyond human comprehension. And a mind sharp enough to build every gadget himself.</p>
        </div>
      </div>

      <section className="powers-section section-pad">
        {POWERS.map((group) => (
          <div className="power-group" key={group.category}>
            <div className="section-kicker">{group.category}</div>
            <div className="power-list">
              {group.items.map((p) => (
                <div
                  className={`power-item ${active === p.name ? 'power-item--open' : ''}`}
                  key={p.name}
                  onClick={() => setActive(active === p.name ? null : p.name)}
                >
                  <div className="power-row">
                    <span className="power-name">{p.name}</span>
                    <div className="power-bar-wrap">
                      <div className="power-bar" style={{ width: `${p.level}%` }} />
                    </div>
                    <span className="power-level">{p.level}</span>
                    <span className="power-toggle">{active === p.name ? '−' : '+'}</span>
                  </div>
                  {active === p.name && (
                    <div className="power-desc">{p.desc}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="powers-quote section-pad">
        <div className="quote-block">
          <blockquote>"I am Spider-Man. And I always find a way."</blockquote>
          <cite>— Peter Parker</cite>
        </div>
      </section>
    </main>
  );
}
