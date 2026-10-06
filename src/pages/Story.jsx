import React from 'react';

const TIMELINE = [
  { year: '1962', title: 'The Bite', desc: 'Peter Parker, a shy teenager from Queens, is bitten by a radioactive spider during a school field trip. In that single moment, everything changes.' },
  { year: '1963', title: 'First Appearance', desc: 'Spider-Man swings into action for the first time, protecting New York City from crime and learning the true cost of power and responsibility.' },
  { year: '1973', title: 'The Death of Gwen Stacy', desc: 'A defining moment in comic history. The Green Goblin takes Gwen Stacy, and Peter is unable to save her. The weight of loss becomes part of the hero.' },
  { year: '1984', title: 'The Black Suit', desc: 'Peter discovers a symbiote that bonds with him, creating a sleek black costume that amplifies his powers — but at a dangerous cost.' },
  { year: '2018', title: 'Into the Spider-Verse', desc: 'Miles Morales takes up the mantle, proving that anyone from anywhere can wear the mask. A new era of Spider-Man begins.' },
];

export default function Story() {
  return (
    <main className="page-main">
      <div className="page-hero story-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://commons.wikimedia.org/wiki/Special:FilePath/Spider-Man%20cosplay.jpg')" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="section-kicker">01 / STORY</div>
          <h1 className="page-title">THE ORIGIN<br /><span>OF A HERO</span></h1>
          <p className="page-subtitle">From a radioactive bite to a legacy that spans generations. This is the story of Spider-Man — told through moments that defined a myth.</p>
        </div>
      </div>

      <section className="story-timeline section-pad">
        <div className="section-kicker">TIMELINE</div>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-line"><span /></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="quote-section section-pad">
        <div className="quote-block">
          <blockquote>"With great power comes great responsibility."</blockquote>
          <cite>— Uncle Ben Parker</cite>
        </div>
      </section>

      <section className="story-cards section-pad">
        <div className="section-kicker">PETER PARKER</div>
        <div className="cards-grid">
          {[
            { label: 'Real Name', val: 'Peter Benjamin Parker' },
            { label: 'Alias', val: 'Spider-Man' },
            { label: 'First Appeared', val: 'Amazing Fantasy #15 (1962)' },
            { label: 'Base', val: 'New York City, Queens' },
            { label: 'Affiliation', val: 'Avengers, Fantastic Four' },
            { label: 'Creator', val: 'Stan Lee & Steve Ditko' },
          ].map((c, i) => (
            <div className="info-card" key={i}>
              <span className="info-label">{c.label}</span>
              <strong className="info-val">{c.val}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
