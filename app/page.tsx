"use client";

const menu = [
  {
    number: "01",
    name: "Caldo verde",
    note: "A warming Portuguese classic",
    mark: "leaf",
  },
  {
    number: "02",
    name: "Piri-piri chicken",
    note: "Seasonal vegetables · fries",
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
        <span className="screen-bar__hint">A one-night table, held close.</span>
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
            <p className="event-kicker">A Portuguese supper by guest chef</p>
            <h1 id="event-title">
              Jaden cooks
              <em>Portugal.</em>
            </h1>
            <p className="hero-panel__dek">
              Three courses, local ingredients, and a seat at the farm table.
            </p>
          </div>

          <div className="hero-art" aria-hidden="true">
            <svg className="hero-art__map" viewBox="0 0 260 300" fill="none">
              <title>Portugal, with Aveiro marked on the coast</title>
              <path
                className="hero-art__map-outline"
                d="M48 10c-8 14-9 27-5 41-8 16-8 29-2 43-10 14-8 29-2 40 7 13 7 23 2 37 9 14 8 28 14 41 9 14 11 24 18 31l22 1c14-3 24-9 34-20 10-10 14-23 22-34 7-11 15-22 10-33-6-13 2-25 7-37 4-14 0-27 6-38-9-10-9-23-16-33-10-11-15-23-20-34-12-1-22-6-34-12C74 2 59 3 48 10Z"
              />
              <path className="hero-art__map-detail" d="M44 94c14 8 27 14 42 14 14 0 26 5 39 15M53 173c11 5 22 5 32 2 13-4 25-2 36 6M44 42c16 9 29 13 45 12 12-1 24 4 35 10" />
              <path className="hero-art__route" d="M82 103c48-13 89-12 134 12 18 10 28 25 37 41" />
              <path className="hero-art__route hero-art__route--soft" d="M82 103c57 5 104 27 145 62 13 11 22 23 28 35" />
              <circle className="hero-art__pin-ring" cx="82" cy="103" r="17" />
              <circle className="hero-art__pin-ring hero-art__pin-ring--outer" cx="82" cy="103" r="27" />
              <circle className="hero-art__pin" cx="82" cy="103" r="5" />
              <path className="hero-art__sun" d="M191 61v-12M191 85V73M167 73h12M202 73h12M174 56l8 8M200 82l8 8M208 56l-8 8M182 82l-8 8" />
              <text className="hero-art__label" x="101" y="100">AVEIRO</text>
              <text className="hero-art__sub-label" x="101" y="112">where it begins</text>
            </svg>
            <div className="hero-art__caption">from the coast of Portugal</div>
          </div>

          <div className="hero-panel__date">
            <span className="hero-panel__date-label">SAVE THE DATE</span>
            <strong>November 1</strong>
            <span className="hero-panel__date-rule" />
            <span className="hero-panel__date-sub">Farm To Go · Slate Hill</span>
          </div>
        </section>

        <section className="menu-panel" id="details">
          <div className="menu-panel__intro">
            <div>
              <p className="section-label">THE MENU</p>
              <h2>From our fields<br />to your plate.</h2>
            </div>
            <p className="menu-panel__copy">
              A family-style evening built around the flavors Jaden grew up with — and the produce Farm To Go grows close to home.
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

      <p className="screen-note">
        Designed as a letter-size portrait flyer · use your browser&apos;s print dialog to save a PDF.
      </p>
    </main>
  );
}
