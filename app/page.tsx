"use client";

import PortugalMap from "@/components/PortugalMap";

const menu = [
  {
    number: "01",
    name: "Caldo verde",
    note: "A warming potato and leek soup",
    mark: "leaf",
  },
  {
    number: "02",
    name: "Piri-piri chicken",
    note: "Served with seasonal vegetables and fries",
    mark: "pepper",
  },
  {
    number: "03",
    name: "Arroz doce",
    note: "Soft, fragrant rice pudding",
    mark: "sun",
  },
];

export default function Home() {
  const printFlyer = () => window.print();

  return (
    <main className="site-shell">
      <div className="screen-bar" aria-label="Flyer actions">
        <span className="screen-bar__hint">A one night, one table experience.</span>
        <button className="print-button" type="button" onClick={printFlyer}>
          Print / save flyer <span aria-hidden="true">↗</span>
        </button>
      </div>

      <article className="flyer" aria-labelledby="event-title">
        <section className="hero-panel">
          <div className="hero-panel__topline">
            <div className="farm-mark" aria-label="Farm To Go">
              <span>FARM</span>
              <span className="farm-mark__slash">/</span>
              <span>TO GO</span>
            </div>
            <div className="hero-panel__place">
              <span>SLATE HILL, NY</span>
              <span className="place-dot" aria-hidden="true" />
              <span>ONE NIGHT ONLY</span>
            </div>
          </div>

          <div className="hero-panel__body">
            <h1 id="event-title">
              Jaden cooks
              <em>Portugal.</em>
            </h1>
            <p className="hero-panel__dek">
              Three courses, local ingredients, and a seat at the farm table.
            </p>
          </div>

          <div className="hero-art" aria-hidden="true">
            <PortugalMap className="hero-art__map-source" aria-hidden="true" />
            <svg className="hero-art__accents" viewBox="0 0 260 420" fill="none">
              <circle className="hero-art__pin-ring" cx="76" cy="128" r="17" />
              <circle className="hero-art__pin-ring hero-art__pin-ring--outer" cx="76" cy="128" r="27" />
              <circle className="hero-art__pin" cx="76" cy="128" r="5" />
            </svg>
          </div>

          <div className="hero-panel__date">
            <span className="hero-panel__date-label">SAVE THE DATE</span>
            <strong>November 1</strong>
            <span className="hero-panel__date-rule" />
          </div>
        </section>

        <section className="menu-panel" id="details">
          <div className="menu-panel__intro">
            <div>
              <p className="section-label">THE MENU</p>
              <h2>From our fields<br />to your plate.</h2>
            </div>
            <p className="menu-panel__copy">
              A family-style evening built around the flavors Jaden's grandmother taught him to love. Each course is made with local ingredients, and paired with sangria for guests 21+.
            </p>
          </div>

          <div className="menu-list">
            {menu.map((course) => (
              <div className="course" key={course.number}>
                <span className={`course__mark course__mark--${course.mark}`} aria-hidden="true" />
                <span className="course__number">{course.number}</span>
                <div className="course__words">
                  <h3>{course.name}</h3>
                  <p>{course.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-panel__footnote">
            <span>LOCAL INGREDIENTS</span>
            <span className="footnote-line" />
            <span>SANGRIA FOR GUESTS 21+</span>
          </div>
        </section>

        <section className="invite-panel" aria-label="Event details">
          <div className="invite-panel__price">
            <span className="invite-panel__price-label">DINNER + SANGRIA</span>
            <strong><sup>$</sup>119</strong>
            <span className="invite-panel__price-sub">per seat</span>
          </div>
          <div className="invite-panel__details">
            <div>
              <span className="detail-label">THE TABLE</span>
              <strong>12 seats only</strong>
            </div>
            <div>
              <span className="detail-label">THE PLACE</span>
              <strong>Farm To Go</strong>
            </div>
            <div>
              <span className="detail-label">THE NIGHT</span>
              <strong>November 1</strong>
            </div>
          </div>
          <div className="invite-panel__stamp" aria-hidden="true">
            <span>CHEERS</span>
            <span>À MESA</span>
          </div>
        </section>
      </article>
    </main>
  );
}
