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
            <svg className="hero-art__map" viewBox="0 0 260 420" fill="none">
              <title>Portugal, with Aveiro marked on the coast</title>
              <g transform="translate(20 6) scale(0.78)">
                <path
                  className="hero-art__map-outline"
                  d="M70 17c-13-2-24 5-33 15-9 9-12 20-9 33l16 62c3 12 2 22-1 35l-15 74c-3 15-12 26-20 38-6 10-9 26-11 43-2 15 2 25 12 34l14 17c7 8 15 11 28 10 8 0 11 4 12 15l2 31c1 15-5 31-8 43-3 11-1 17 9 18l19-1c14 0 27 6 39 8 12 2 24-3 34-8 12-6 16-13 15-25-2-12 2-24 12-35l21-22c9-10 13-19 8-28-5-9-13-15-19-24-7-10-8-17-1-29l20-36c6-11 7-19 1-28l-36-47c-8-10-8-18 1-23l18-8c10-5 14-14 15-26l-2-30c0-11 3-19 10-27l20-20c11-11 19-25 21-36 2-9-4-17-13-24l-6-18c-3-9-10-13-22-15l-26-2c-13-1-23 3-34 10-11 7-20 9-32 9l-25 2c-12 1-15-4-15-14v-15c0-10-5-15-15-15l-10 1Z"
                />
                <path className="hero-art__route" d="M76 128c42-18 85-14 125 5 20 10 34 24 45 41" />
                <path className="hero-art__route hero-art__route--soft" d="M76 128c49 2 95 19 135 49 15 11 26 24 35 39" />
                <circle className="hero-art__pin-ring" cx="76" cy="128" r="17" />
                <circle className="hero-art__pin-ring hero-art__pin-ring--outer" cx="76" cy="128" r="27" />
                <circle className="hero-art__pin" cx="76" cy="128" r="5" />
                <path className="hero-art__sun" d="M187 71v-12M187 95V83M163 83h12M198 83h12M170 66l8 8M196 92l8 8M204 66l-8 8M178 92l-8 8" />
                <text className="hero-art__label" x="96" y="125">AVEIRO</text>
                <text className="hero-art__sub-label" x="96" y="137">where it begins</text>
              </g>
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
