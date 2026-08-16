"use client";
import { useMemo, useState } from "react";

type Key =
  | "reiki"
  | "landscape"
  | "gallery"
  | "cleaning"
  | "shop"
  | "nails"
  | "members";
const brands: Record<Key, { name: string; type: string }> = {
  reiki: { name: "LuxeBeorn", type: "Distance Reiki" },
  landscape: { name: "Andrew Thorn", type: "Landscaping" },
  gallery: { name: "Morrow Studio", type: "Art & Editions" },
  cleaning: { name: "Neat & Kind", type: "Home Cleaning" },
  shop: { name: "Field Supply", type: "Outdoor Store" },
  nails: { name: "Afterglow", type: "Nail Studio" },
  members: { name: "The Good Work Club", type: "Membership" },
};
const keys = Object.keys(brands) as Key[];

export default function Home() {
  const [active, setActive] = useState<Key>("reiki"),
    [picker, setPicker] = useState(false),
    [before, setBefore] = useState(false),
    [evidence, setEvidence] = useState(false);
  const choose = (k: Key) => {
    setActive(k);
    setPicker(false);
    setBefore(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="showcase">
      <aside className="wm-toolbar">
        <button className="wm-brand" onClick={() => setPicker(!picker)}>
          <i>W</i>
          <span>
            <b>The Website Mill</b>
            <small>Seven businesses. Seven real design systems.</small>
          </span>
        </button>
        <div className="wm-compare">
          <button
            className={before ? "on" : ""}
            onClick={() => setBefore(true)}
          >
            Before
          </button>
          <button
            className={!before ? "on" : ""}
            onClick={() => setBefore(false)}
          >
            Rebuilt
          </button>
        </div>
        <button className="wm-evidence" onClick={() => setEvidence(!evidence)}>
          What changed <span>↗</span>
        </button>
        <button className="wm-switch" onClick={() => setPicker(!picker)}>
          <small>Viewing</small>
          <b>{brands[active].name}</b>
          <span>⌄</span>
        </button>
        <div className={`wm-picker ${picker ? "open" : ""}`}>
          <header>
            <div>
              <small>The Website Mill showcase</small>
              <h2>Choose a business</h2>
            </div>
            <button onClick={() => setPicker(false)}>Close ×</button>
          </header>
          {keys.map((k, i) => (
            <button
              key={k}
              className={active === k ? "on" : ""}
              onClick={() => choose(k)}
            >
              <span>0{i + 1}</span>
              <div>
                <b>{brands[k].name}</b>
                <small>{brands[k].type}</small>
              </div>
              <em>↗</em>
            </button>
          ))}
        </div>
      </aside>
      {evidence && (
        <Evidence active={active} close={() => setEvidence(false)} />
      )}
      {before ? <LegacyBefore active={active} /> : <Site active={active} />}
    </main>
  );
}

function Site({ active }: { active: Key }) {
  if (active === "reiki") return <Reiki />;
  if (active === "landscape") return <Landscape />;
  if (active === "gallery") return <Gallery />;
  if (active === "cleaning") return <Cleaning />;
  if (active === "shop") return <Shop />;
  if (active === "nails") return <Nails />;
  return <Members />;
}

function Evidence({ active, close }: { active: Key; close: () => void }) {
  const changes: Record<Key, string[][]> = {
    reiki: [
      ["Generic spa language", "Grounded session selector"],
      ["Repeated service cards", "Editorial treatment journey"],
      ["No practical reassurance", "Clear distance-Reiki process"],
    ],
    landscape: [
      ["Brochure-style hero", "Project-led trade layout"],
      ["Decorative services", "Workmanship and coverage detail"],
      ["Generic enquiry", "Structured site-visit request"],
    ],
    gallery: [
      ["Service-business template", "Image-first digital gallery"],
      ["Cards competing with artwork", "Catalogue labels and masonry"],
      ["No buying context", "Edition and availability detail"],
    ],
    cleaning: [
      ["Vague contact journey", "Instant interactive estimate"],
      ["Luxury visual language", "Bright, scannable service UI"],
      ["No inclusions", "Room-by-room checklist"],
    ],
    shop: [
      ["Six products in service cards", "Scalable commerce catalogue"],
      ["Basic category buttons", "Search, sorting and filter rail"],
      ["No basket feedback", "Functional bag and delivery target"],
    ],
    nails: [
      ["Muted salon template", "Social-first portfolio collage"],
      ["Generic booking button", "Art-tier price selector"],
      ["No nail-health detail", "Duration, removal and care cues"],
    ],
    members: [
      ["Static coaching brochure", "Public site plus real portal"],
      ["Fake locked cards", "Filterable resource library"],
      ["No retention value", "Progress and upcoming sessions"],
    ],
  };
  return (
    <div className="wm-drawer">
      <header>
        <div>
          <small>Build evidence · {brands[active].name}</small>
          <h2>Before → rebuilt</h2>
        </div>
        <button onClick={close}>Close ×</button>
      </header>
      <p>
        The previous shared-template version remains available through{" "}
        <b>Before</b>. The rebuilt version changes the structure, not only the
        colour.
      </p>
      {changes[active].map((x, i) => (
        <article key={x[0]}>
          <span>0{i + 1}</span>
          <div>
            <small>Before</small>
            <b>{x[0]}</b>
          </div>
          <i>→</i>
          <div>
            <small>Rebuilt</small>
            <b>{x[1]}</b>
          </div>
        </article>
      ))}
    </div>
  );
}

const beforeData: Record<
  Key,
  {
    eyebrow: string;
    title: string;
    copy: string;
    cta: string;
    story: string;
    services: string[];
    quote: string;
    image: string;
  }
> = {
  reiki: {
    eyebrow: "HOLISTIC HEALING",
    title: "Welcome to LuxeBeorn Reiki",
    copy: "Balance your chakras and discover the healing power of universal energy.",
    cta: "Contact me",
    story: "Healing mind, body and soul",
    services: ["Reiki healing", "Energy cleansing", "Wellness package"],
    quote: "A lovely relaxing experience.",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1800&q=75",
  },
  landscape: {
    eyebrow: "LOCAL LANDSCAPING SERVICES",
    title: "Quality landscaping at competitive prices",
    copy: "We undertake all types of landscaping work. No job too big or small. Call today for a free quote.",
    cta: "Get a quote",
    story: "Transforming gardens for our customers",
    services: ["Patios", "Fencing", "Garden work"],
    quote: "Good job, would recommend.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1800&q=75",
  },
  gallery: {
    eyebrow: "WELCOME TO MY ART WEBSITE",
    title: "Beautiful artwork for your home",
    copy: "Browse my selection of original art and prints. Please contact me for more information.",
    cta: "View products",
    story: "Art inspired by the world around us",
    services: ["Original art", "Prints", "Commissions"],
    quote: "The picture looks lovely in our house.",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1800&q=75",
  },
  cleaning: {
    eyebrow: "PROFESSIONAL CLEANERS",
    title: "Quality cleaning services you can trust",
    copy: "We offer domestic and commercial cleaning at affordable prices. Contact us for a quote.",
    cta: "Contact us",
    story: "Keeping homes clean and tidy",
    services: ["Regular cleaning", "Deep cleaning", "End of tenancy"],
    quote: "Very clean and professional.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1800&q=75",
  },
  shop: {
    eyebrow: "WELCOME TO OUR ONLINE SHOP",
    title: "Great products at great prices",
    copy: "Browse our latest products and contact us if you have any questions about your order.",
    cta: "Shop now",
    story: "Quality products for every adventure",
    services: ["Camping", "Clothing", "Accessories"],
    quote: "Fast delivery and a good product.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1800&q=75",
  },
  nails: {
    eyebrow: "NAILS · BEAUTY · BIAB",
    title: "Beautiful nails for every occasion",
    copy: "Offering a range of professional nail treatments in a friendly and relaxing environment.",
    cta: "Book now",
    story: "Professional nail treatments",
    services: ["Gel nails", "BIAB", "Nail art"],
    quote: "Loved my nails, thank you.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1800&q=75",
  },
  members: {
    eyebrow: "ONLINE BUSINESS COMMUNITY",
    title: "Grow your business with our membership",
    copy: "Access useful resources, training and a supportive community to help your business succeed.",
    cta: "Learn more",
    story: "Everything you need to grow",
    services: ["Resources", "Training", "Community"],
    quote: "A really helpful membership.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=75",
  },
};
function LegacyBefore({ active }: { active: Key }) {
  const brand = brands[active],
    d = beforeData[active];
  return (
    <div
      className={`legacy legacy-${active}`}
      style={{ "--legacy-image": `url(${d.image})` } as React.CSSProperties}
    >
      <div className="legacy-label">
        <b>Original shared-template concept · {brand.name}</b>
        <span>Recreated from the first design system for comparison</span>
      </div>
      <header>
        <b>{brand.name}</b>
        <nav>
          About　 Services　 Stories　{" "}
          <button>{active === "shop" ? "Cart (0)" : "Book now"}</button>
        </nav>
      </header>
      <section className="legacy-hero">
        <small>{d.eyebrow}</small>
        <h1>{d.title}</h1>
        <p>{d.copy}</p>
        <button>{d.cta} →</button>
      </section>
      <section className="legacy-story">
        <div>
          <small>ABOUT {brand.name.toUpperCase()}</small>
          <h2>{d.story}.</h2>
        </div>
        <p>
          We pride ourselves on offering a professional, friendly service
          tailored to every customer. Get in touch to find out more.
        </p>
      </section>
      <section className="legacy-cards">
        <h2>{active === "shop" ? "Shop categories." : "Our services."}</h2>
        <div>
          {d.services.map((x) => (
            <article key={x}>
              <span>⌁</span>
              <h3>{x}</h3>
              <p>
                Professional quality and friendly support. Contact us for more
                information.
              </p>
              <a>{active === "shop" ? "View products" : "Explore & book"} ↗</a>
            </article>
          ))}
        </div>
      </section>
      <section className="legacy-quote">“{d.quote}”</section>
      <footer>
        © 2026 {brand.name} · Recreated site-specific comparison state
      </footer>
    </div>
  );
}

function Reiki() {
  const [session, setSession] = useState("reset"),
    [faq, setFaq] = useState(0),
    [requested, setRequested] = useState(false);
  const options = {
    reset: ["The Reset", "30 minutes", "£35", "For a busy mind or heavy day."],
    restore: [
      "Deep Restore",
      "60 minutes",
      "£60",
      "For space, reflection and deeper rest.",
    ],
    path: [
      "Lightkeeper Path",
      "4 sessions",
      "£210",
      "For steady support through a season of change.",
    ],
  };
  const s = options[session as keyof typeof options];
  return (
    <div className="reiki-site">
      <header className="r-nav">
        <a>
          <i>✦</i>
          <b>LuxeBeorn</b>
          <small>Light · Warrior · Reiki</small>
        </a>
        <nav>
          <a href="#r-story">Our story</a>
          <a href="#r-how">How it works</a>
          <a href="#r-sessions">Sessions</a>
          <a className="r-book-link" href="#r-book">
            Book gently →
          </a>
        </nav>
      </header>
      <section className="r-hero">
        <div className="r-copy">
          <small>DISTANCE REIKI · FROM YOUR OWN SPACE</small>
          <h1>Come home to your own energy.</h1>
          <p>
            Grounded, personal Reiki for busy minds and heavy weeks. No
            performance. No pressure. Just a little room to breathe.
          </p>
          <div>
            <a className="r-primary" href="#r-sessions">
              Find your session →
            </a>
            <a href="#r-how">What actually happens?</a>
          </div>
        </div>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=88"
            alt="A calm, sunlit space for rest"
          />
          <figcaption>You can arrive exactly as you are.</figcaption>
        </figure>
      </section>
      <section className="r-story" id="r-story">
        <aside>
          Lucy <i>means</i> light.
          <br />
          Finley <i>means</i> warrior.
        </aside>
        <div>
          <small>THE HEART OF LUXEBEORN</small>
          <h2>Softness and strength belong together.</h2>
          <p>
            LuxeBeorn was named for our children and built around a simple
            belief: rest does not make you less strong. Sessions are calm,
            confidential and explained in plain English.
          </p>
        </div>
      </section>
      <section className="r-how" id="r-how">
        <header>
          <small>DISTANCE REIKI, MADE CLEAR</small>
          <h2>Rest where you feel safest.</h2>
        </header>
        <div>
          {[
            [
              "01",
              "We talk",
              "A short message or call about what you need—without having to over-explain.",
            ],
            [
              "02",
              "You settle",
              "Stay at home, get comfortable and switch off notifications. Nothing special required.",
            ],
            [
              "03",
              "Your session begins",
              "I hold your Reiki session at our agreed time, followed by a gentle written check-in.",
            ],
          ].map((x) => (
            <article key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="r-sessions" id="r-sessions">
        <div>
          <small>CHOOSE BY WHAT YOU NEED</small>
          <h2>How much space would feel helpful?</h2>
          <div className="r-tabs">
            {Object.entries(options).map(([k, v]) => (
              <button
                key={k}
                className={session === k ? "on" : ""}
                onClick={() => setSession(k)}
              >
                {v[0]}
              </button>
            ))}
          </div>
        </div>
        <article>
          <small>{s[1]}</small>
          <h3>{s[0]}</h3>
          <p>{s[3]}</p>
          <strong>{s[2]}</strong>
          <a className="r-primary" href="#r-book">
            Choose this session →
          </a>
        </article>
      </section>
      <section className="r-founder">
        <div>
          <small>YOUR PRACTITIONER</small>
          <h2>Held by a real person, not a wellness script.</h2>
        </div>
        <p>
          Hayley created LuxeBeorn as a gentle distance-Reiki practice rooted in
          family, calm and plain English. This area is ready for her real
          portrait, training details and personal introduction before launch.
        </p>
      </section>
      <section className="r-faq">
        <header>
          <small>NO MYSTERY</small>
          <h2>Practical questions.</h2>
        </header>
        {[
          "Do I need to believe in Reiki?",
          "What will I feel?",
          "Can Reiki replace medical care?",
        ].map((q, i) => (
          <article key={q}>
            <button onClick={() => setFaq(faq === i ? -1 : i)}>
              <b>{q}</b>
              <span>{faq === i ? "−" : "+"}</span>
            </button>
            {faq === i && (
              <p>
                {i === 0
                  ? "No. Curiosity is enough. You do not need to visualise, meditate or feel anything specific."
                  : i === 1
                    ? "Everyone is different. You may feel warmth, calm, emotion—or simply have a quiet hour. There is no correct response."
                    : "No. Reiki is complementary wellbeing support and never a replacement for qualified medical advice or treatment."}
              </p>
            )}
          </article>
        ))}
      </section>
      <section className="r-book" id="r-book">
        <div>
          <small>FIRST SESSION</small>
          <h2>Begin with a quiet conversation.</h2>
          <p>
            Choose a session above, then leave your email. A real build would
            send a private confirmation with the agreed UK time and simple
            preparation notes.
          </p>
        </div>
        {requested ? (
          <div className="r-confirm">
            <b>Thank you—your demo request is ready.</b>
            <p>
              In the live service, the private booking link and UK-time
              preparation notes would now be emailed.
            </p>
            <button onClick={() => setRequested(false)}>Start again</button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setRequested(true);
            }}
          >
            <label>
              Selected session
              <input readOnly value={`${s[0]} · ${s[1]} · ${s[2]}`} />
            </label>
            <label>
              Email address
              <input required type="email" placeholder="you@example.com" />
            </label>
            <button>Request a private booking link →</button>
          </form>
        )}
      </section>
      <footer className="r-footer">
        <h2>A little room for you.</h2>
        <a href="#r-book">Book your first session →</a>
        <small>LuxeBeorn · Distance Reiki · Demonstration website</small>
      </footer>
    </div>
  );
}

function Landscape() {
  const [filter, setFilter] = useState("All"),
    [slide, setSlide] = useState(55),
    [sent, setSent] = useState(false);
  const projects = [
    [
      "Patios",
      "The family terrace",
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85",
      "Huntingdon · porcelain patio · example presentation",
    ],
    [
      "Fencing",
      "A stronger boundary",
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=85",
      "St Neots · close-board fencing · example presentation",
    ],
    [
      "Full gardens",
      "Garden built for living",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=85",
      "Cambridgeshire · full garden · example presentation",
    ],
  ];
  return (
    <div className="land-site">
      <header className="l-top">
        <span>Andrew Thorn Landscaping</span>
        <p>Cambridgeshire & surrounding villages</p>
        <a href="tel:07700900246">Call 07700 900 246</a>
      </header>
      <nav className="l-nav">
        <b>
          AT<span>/</span>LANDSCAPING
        </b>
        <div>Services　 Work　 About</div>
        <a href="#l-quote">Request a site visit</a>
      </nav>
      <section className="l-hero">
        <div>
          <small>EXPERIENCED, OWNER-LED LANDSCAPING</small>
          <h1>
            Built properly.
            <br />
            Finished with care.
          </h1>
          <p>
            Patios, fencing and complete gardens from one experienced local
            landscaper.
          </p>
          <a href="#l-quote">Request a free visit →</a>
          <ul>
            <li>Insurance details supplied with quote</li>
            <li>Clear written quotes</li>
            <li>Tidy, respectful work</li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=88"
          alt="Landscaper building a timber garden structure"
        />
      </section>
      <section className="l-services">
        <header>
          <span>01 / WHAT I DO</span>
          <h2>
            Solid work.
            <br />
            Straight answers.
          </h2>
        </header>
        {[
          [
            "Patios & paving",
            "Preparation, drainage and a finish that stays level.",
          ],
          [
            "Fencing & gates",
            "Strong boundaries, straight lines and dependable timber.",
          ],
          [
            "Full garden builds",
            "Groundworks, turf, sleepers and planting managed properly.",
          ],
        ].map((x, i) => (
          <article key={x[0]}>
            <span>0{i + 1}</span>
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
            <a href="#l-work">See example work →</a>
          </article>
        ))}
      </section>
      <section className="l-ba">
        <div>
          <small>INTERACTIVE CASE-STUDY FORMAT</small>
          <h2>Show the change, not just the finish.</h2>
          <p>
            This stock-image demonstration shows how a genuine matched project
            can be explored once Andrew’s own before-and-after photography is
            supplied.
          </p>
        </div>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85"
            alt="Example finished landscaped garden"
          />
          <div style={{ width: `${slide}%` }}>
            <img
              src="https://images.unsplash.com/photo-1599685315640-9ceab2f581ca?auto=format&fit=crop&w=1200&q=80"
              alt="Example garden before landscaping"
            />
          </div>
          <input
            aria-label="Explore the before and after demonstration"
            type="range"
            min="5"
            max="95"
            value={slide}
            onChange={(e) => setSlide(Number(e.target.value))}
          />
        </figure>
      </section>
      <section className="l-work" id="l-work">
        <header>
          <div>
            <small>SELECTED LOCAL WORK</small>
            <h2>Judge the finish.</h2>
          </div>
          <div>
            {["All", "Patios", "Fencing", "Full gardens"].map((x) => (
              <button
                className={filter === x ? "on" : ""}
                onClick={() => setFilter(x)}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>
        </header>
        <div>
          {projects
            .filter((x) => filter === "All" || x[0] === filter)
            .map((x) => (
              <figure key={x[1]}>
                <img src={x[2]} alt={x[1]} />
                <figcaption>
                  <small>{x[0]}</small>
                  <b>{x[1]}</b>
                  <em>{x[3]}</em>
                </figcaption>
              </figure>
            ))}
        </div>
      </section>
      <section className="l-quote" id="l-quote">
        <div>
          <small>SITE VISIT REQUEST</small>
          <h2>Tell me what needs doing.</h2>
          <p>
            I’ll arrange a convenient visit, look at the ground properly and
            provide a clear written quote.
          </p>
        </div>
        {sent ? (
          <div className="l-confirm">
            <b>Site-visit request prepared.</b>
            <p>
              This demo does not send data. A live site would now confirm the
              enquiry and preferred contact method.
            </p>
            <button onClick={() => setSent(false)}>Start another</button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label>
              Your name
              <input required placeholder="Name" />
            </label>
            <label>
              Phone or email
              <input required placeholder="Best contact detail" />
            </label>
            <label>
              Job type
              <select>
                <option>Choose one</option>
                <option>Patio or paving</option>
                <option>Fencing</option>
                <option>Full garden</option>
              </select>
            </label>
            <label>
              Postcode
              <input placeholder="PE28" />
            </label>
            <label>
              Ideal timing
              <select>
                <option>Flexible</option>
                <option>Within 1–3 months</option>
                <option>Within 3–6 months</option>
              </select>
            </label>
            <label>
              Project outline
              <input placeholder="What would you like changed?" />
            </label>
            <button>Request my visit →</button>
          </form>
        )}
      </section>
    </div>
  );
}

const art = [
  [
    "Salt Air I",
    "Original",
    "£640",
    "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=88",
  ],
  [
    "Held Light",
    "Edition of 30",
    "£145",
    "https://images.unsplash.com/photo-1578301978162-7aae4d755744?auto=format&fit=crop&w=900&q=88",
  ],
  [
    "Soft Ground",
    "Photography",
    "£95",
    "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=900&q=88",
  ],
  [
    "After Rain",
    "Original",
    "£780",
    "https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?auto=format&fit=crop&w=900&q=88",
  ],
];
function Gallery() {
  const [view, setView] = useState<number | null>(null),
    [kind, setKind] = useState("All"),
    [enquired, setEnquired] = useState(false);
  const shown = art.filter((x) => kind === "All" || x[1].includes(kind));
  return (
    <div className="art-site">
      <header className="a-nav">
        <b>
          MORROW<span>STUDIO</span>
        </b>
        <nav>COLLECTION　 ARTIST　 COMMISSIONS</nav>
        <a href="#a-collection">Available work</a>
      </header>
      <section className="a-intro">
        <p>BRITISH ARTIST · ORIGINALS & SMALL EDITIONS</p>
        <h1>
          Work for rooms
          <br />
          with a point of view.
        </h1>
        <aside>
          Original paintings, archival editions and quiet photographic studies
          made in a small British studio.
        </aside>
      </section>
      <section className="a-feature">
        <img src={art[0][3]} alt="Featured abstract artwork" />
        <div>
          <small>NEW ORIGINAL · 01</small>
          <h2>Salt Air I</h2>
          <p>
            Oil, wax and ground pigment on linen.
            <br />
            76 × 102 cm · Signed · Unique
          </p>
          <strong>£640</strong>
          <button onClick={() => setView(0)}>View the work →</button>
        </div>
      </section>
      <section className="a-collection" id="a-collection">
        <header>
          <h2>Available work</h2>
          <div>
            {["All", "Original", "Edition", "Photography"].map((x) => (
              <button
                className={kind === x ? "on" : ""}
                onClick={() => setKind(x)}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>
        </header>
        <div className="a-grid">
          {shown.map((x, i) => (
            <figure key={x[0]} onClick={() => setView(art.indexOf(x))}>
              <img src={x[3]} alt={x[0]} />
              <figcaption>
                <div>
                  <b>{x[0]}</b>
                  <small>{x[1]}</small>
                </div>
                <span>{x[2]}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="a-statement">
        <span>“</span>
        <h2>I paint the memory of a place, not the map of it.</h2>
        <p>Studio notes · August 2026</p>
      </section>
      <footer className="a-footer">
        MORROW STUDIO{" "}
        <span>Original work · Archival editions · Commissions</span>
      </footer>
      {view !== null && (
        <div className="a-modal">
          <button onClick={() => setView(null)}>Close ×</button>
          <img src={art[view][3]} alt={art[view][0]} />
          <div>
            <small>{art[view][1]}</small>
            <h2>{art[view][0]}</h2>
            <p>
              76 × 102 cm · Archival materials ·{" "}
              {art[view][1] === "Original" ? "Unique work" : "Signed edition"}
              <br />
              Certificate of authenticity included · Dispatch example: 5–7 days
            </p>
            <strong>{art[view][2]}</strong>
            {enquired ? (
              <div className="a-confirm">
                <b>Enquiry prepared.</b>
                <p>
                  A real gallery would now send availability, framing and
                  delivery details.
                </p>
              </div>
            ) : (
              <button onClick={() => setEnquired(true)}>
                Enquire about this work →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Cleaning() {
  const [beds, setBeds] = useState(3),
    [baths, setBaths] = useState(1),
    [freq, setFreq] = useState("Fortnightly"),
    [room, setRoom] = useState("Kitchen"),
    [submitted, setSubmitted] = useState(false);
  const base = 22 + beds * 6 + baths * 8;
  const price = Math.round(
    base * (freq === "Weekly" ? 0.88 : freq === "One-off" ? 1.5 : 1),
  );
  const lists: Record<string, string[]> = {
    Kitchen: [
      "Worktops and splashbacks cleaned",
      "Sink and taps polished",
      "Hob exterior cleaned",
      "Cupboard fronts wiped",
      "Floor vacuumed and mopped",
    ],
    Bathroom: [
      "Bath and shower cleaned",
      "Toilet and basin cleaned",
      "Mirrors polished",
      "External fittings wiped",
      "Floor vacuumed and mopped",
    ],
    Bedroom: [
      "Accessible surfaces dusted",
      "Bed made with linen provided",
      "Mirrors and sills wiped",
      "Floor vacuumed",
      "Bin emptied",
    ],
    "Living space": [
      "Accessible surfaces dusted",
      "Furniture vacuumed where requested",
      "Sills and mirrors wiped",
      "Floor vacuumed or mopped",
      "Room reset neatly",
    ],
  };
  return (
    <div className="clean-site">
      <header className="c-nav">
        <b>
          neat<span>&</span>kind.
        </b>
        <nav>What’s included　 Our team　 Reviews</nav>
        <a href="#c-book">Book a clean</a>
      </header>
      <section className="c-hero">
        <div>
          <span className="c-pill">
            ✓ Insurance and cleaner details confirmed before booking
          </span>
          <h1>
            Come home
            <br />
            to <i>done.</i>
          </h1>
          <p>
            Friendly, reliable home cleaning with familiar faces, clear prices
            and absolutely no judgement.
          </p>
          <div className="c-trust">
            <b>Example review presentation</b>
            <span>“The house feels brilliant—and I get Saturday back.”</span>
          </div>
        </div>
        <aside>
          <small>QUICK DEMO ESTIMATE</small>
          <h2>What might your clean cost?</h2>
          <label>
            Bedrooms{" "}
            <div>
              <button
                aria-label="Remove a bedroom"
                onClick={() => setBeds(Math.max(1, beds - 1))}
              >
                −
              </button>
              <b>{beds}</b>
              <button
                aria-label="Add a bedroom"
                onClick={() => setBeds(beds + 1)}
              >
                +
              </button>
            </div>
          </label>
          <label>
            Bathrooms{" "}
            <div>
              <button
                aria-label="Remove a bathroom"
                onClick={() => setBaths(Math.max(1, baths - 1))}
              >
                −
              </button>
              <b>{baths}</b>
              <button
                aria-label="Add a bathroom"
                onClick={() => setBaths(baths + 1)}
              >
                +
              </button>
            </div>
          </label>
          <div className="c-frequency">
            {["Weekly", "Fortnightly", "One-off"].map((x) => (
              <button
                className={freq === x ? "on" : ""}
                onClick={() => setFreq(x)}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>
          <footer>
            <span>Illustrative estimate from</span>
            <strong>£{price}</strong>
            <a href="#c-book">Check availability →</a>
          </footer>
        </aside>
      </section>
      <section className="c-included">
        <header>
          <small>NO VAGUE PROMISES</small>
          <h2>See exactly what’s included.</h2>
        </header>
        <div className="c-rooms">
          {["Kitchen", "Bathroom", "Bedroom", "Living space"].map((x) => (
            <button
              className={room === x ? "on" : ""}
              onClick={() => setRoom(x)}
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
        <article>
          <div>
            <span>
              {room === "Kitchen"
                ? "✦"
                : room === "Bathroom"
                  ? "◉"
                  : room === "Bedroom"
                    ? "☁"
                    : "⌂"}
            </span>
            <h3>{room}</h3>
          </div>
          <ul>
            {lists[room].map((x) => (
              <li key={x}>✓ {x}</li>
            ))}
          </ul>
        </article>
      </section>
      <section className="c-team">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85"
          alt="Friendly professional cleaner at work"
        />
        <div>
          <small>PEOPLE YOU CAN TRUST</small>
          <h2>Know who is coming into your home.</h2>
          <p>
            This demo shows where a real founder introduction, insurance details
            and familiar-cleaner policy create confidence before a customer
            books.
          </p>
          <div>
            <b>✓ Cleaner confirmed in advance</b>
            <b>✓ Supplies policy made clear</b>
            <b>✓ Satisfaction process explained</b>
          </div>
        </div>
      </section>
      <section className="c-book" id="c-book">
        <div>
          <small>YOUR ESTIMATE IS READY</small>
          <h2>
            From £{price} · {freq.toLowerCase()}
          </h2>
          <p>
            {beds} bedroom, {baths} bathroom home. Final price confirmed after
            postcode and property details.
          </p>
        </div>
        {submitted ? (
          <div className="c-confirm">
            <b>Availability request prepared.</b>
            <p>
              {beds} bedroom · {baths} bathroom · {freq.toLowerCase()} ·
              illustrative estimate from £{price}.
            </p>
            <p>
              This is a demonstration, so nothing was sent. A live customer
              would now receive their cleaner and timing options.
            </p>
            <button onClick={() => setSubmitted(false)}>
              Check another home
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input required placeholder="Your postcode" />
            <input required type="email" placeholder="Your email" />
            <button>Check real availability →</button>
          </form>
        )}
      </section>
      <footer className="c-footer">
        <h2>Your weekend has better plans.</h2>
        <a href="#c-book">Get my estimate →</a>
      </footer>
    </div>
  );
}

const goods = [
  [
    "Kestrel Rolltop",
    "Packs",
    "£84",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
  ],
  [
    "Ridgeline Overshirt",
    "Wear",
    "£68",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=85",
  ],
  [
    "Ember Brew Kit",
    "Camp",
    "£42",
    "https://images.unsplash.com/photo-1526401485004-2aa7d95f6df6?auto=format&fit=crop&w=800&q=85",
  ],
  [
    "Daybreak Pack",
    "Packs",
    "£110",
    "https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&w=800&q=85",
  ],
  [
    "Trail Blanket",
    "Camp",
    "£76",
    "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=800&q=85",
  ],
  [
    "All-Weather Cap",
    "Wear",
    "£28",
    "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=85",
  ],
];
function Shop() {
  const [q, setQ] = useState(""),
    [cat, setCat] = useState("All"),
    [max, setMax] = useState(120),
    [sort, setSort] = useState("Featured"),
    [bag, setBag] = useState<string[]>([]),
    [open, setOpen] = useState(false);
  let shown = goods.filter(
    (x) =>
      (cat === "All" || x[1] === cat) &&
      Number(x[2].slice(1)) <= max &&
      x[0].toLowerCase().includes(q.toLowerCase()),
  );
  if (sort === "Price low")
    shown = [...shown].sort(
      (a, b) => Number(a[2].slice(1)) - Number(b[2].slice(1)),
    );
  if (sort === "Price high")
    shown = [...shown].sort(
      (a, b) => Number(b[2].slice(1)) - Number(a[2].slice(1)),
    );
  if (sort === "Name")
    shown = [...shown].sort((a, b) => a[0].localeCompare(b[0]));
  const total = bag.reduce(
    (n, name) =>
      n + Number(goods.find((x) => x[0] === name)?.[2].slice(1) || 0),
    0,
  );
  const add = (name: string) => setBag([...bag, name]);
  const remove = (name: string) => {
    const i = bag.indexOf(name);
    setBag(bag.filter((_, j) => j !== i));
  };
  const categories = ["Camp", "Packs", "Wear"];
  const chooseCat = (x: string) => {
    setCat(x);
    setTimeout(
      () =>
        document
          .getElementById("s-store")
          ?.scrollIntoView({ behavior: "smooth" }),
      0,
    );
  };
  return (
    <div className="shop-site">
      <header className="s-nav">
        <a href="#s-store">☰ SHOP</a>
        <b>FIELD/SUPPLY</b>
        <div>
          <a href="#s-store">⌕ Search</a>
          <button onClick={() => setOpen(true)}>Bag [{bag.length}]</button>
        </div>
      </header>
      <section className="s-hero">
        <div>
          <small>FIELD NOTE / 026</small>
          <h1>
            Built to go.
            <br />
            Made to stay.
          </h1>
          <p>
            Considered outdoor goods for slower weekends and longer trails.
            Product testing and repair guarantees shown here are demo
            presentation examples.
          </p>
          <a href="#s-store">Shop the field edit →</a>
        </div>
        <aside>
          <span>FIELD-READY EDIT</span>
          <b>01 / KESTREL SERIES</b>
        </aside>
      </section>
      <section className="s-cats">
        {categories.map((x, i) => (
          <button key={x} onClick={() => chooseCat(x)}>
            <span>0{i + 1}</span>
            <b>{x}</b>
            <em>Explore →</em>
          </button>
        ))}
      </section>
      <section className="s-store" id="s-store">
        <aside>
          <h2>Filter field</h2>
          <label>
            Search
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products"
            />
          </label>
          <div>
            <b>Category</b>
            {["All", ...categories].map((x) => (
              <button
                className={cat === x ? "on" : ""}
                onClick={() => setCat(x)}
                key={x}
              >
                □ {x}
              </button>
            ))}
          </div>
          <label>
            Maximum £{max}
            <input
              type="range"
              min="25"
              max="120"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
            />
          </label>
          <button
            onClick={() => {
              setQ("");
              setCat("All");
              setMax(120);
            }}
          >
            Clear all
          </button>
        </aside>
        <main>
          <header>
            <span>{shown.length} products</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option>Featured</option>
              <option>Price low</option>
              <option>Price high</option>
              <option>Name</option>
            </select>
          </header>
          <div>
            {shown.map((x) => (
              <article key={x[0]}>
                <figure>
                  <img src={x[3]} alt={x[0]} />
                  <button onClick={() => add(x[0])}>Quick add +</button>
                </figure>
                <small>{x[1]} · In stock</small>
                <h3>{x[0]}</h3>
                <b>{x[2]}</b>
              </article>
            ))}
          </div>
          {!shown.length && (
            <div className="s-empty">
              <b>No field gear matches those filters.</b>
              <p>Try another search, category or maximum price.</p>
              <button
                onClick={() => {
                  setQ("");
                  setCat("All");
                  setMax(120);
                }}
              >
                Reset filters
              </button>
            </div>
          )}
          <p className="s-trust">
            Example commerce reassurance: UK delivery · 30-day returns ·
            material and care details shown before purchase
          </p>
        </main>
      </section>
      {open && (
        <aside className="s-bag">
          <header>
            <h2>Your field bag</h2>
            <button onClick={() => setOpen(false)}>Close ×</button>
          </header>
          {bag.length ? (
            [...new Set(bag)].map((name) => (
              <article key={name}>
                <div>
                  <b>{name}</b>
                  <small>Quantity {bag.filter((x) => x === name).length}</small>
                </div>
                <div>
                  <button onClick={() => remove(name)}>−</button>
                  <button onClick={() => add(name)}>＋</button>
                </div>
              </article>
            ))
          ) : (
            <p>Your bag is ready for an adventure.</p>
          )}
          <footer>
            <p>
              {total >= 75
                ? "Free delivery unlocked"
                : `£${75 - total} away from free delivery`}
            </p>
            <strong>Subtotal £{total}</strong>
            <button
              disabled={!bag.length}
              onClick={() => alert("Demo checkout journey complete")}
            >
              Continue to demo checkout →
            </button>
          </footer>
        </aside>
      )}
    </div>
  );
}

const nailImgs = [
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=88",
    name: "Cherry chrome",
    tags: ["Chrome", "Art"],
  },
  {
    src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=800&q=88",
    name: "Aura French",
    tags: ["French", "BIAB"],
  },
  {
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=88",
    name: "Miniature art",
    tags: ["Art", "BIAB"],
  },
  {
    src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=88",
    name: "Milky details",
    tags: ["BIAB", "French"],
  },
];
function Nails() {
  const [tier, setTier] = useState(1),
    [style, setStyle] = useState("All"),
    [booking, setBooking] = useState(false);
  const tiers = [
    ["Clean girl", "£38", "60 min"],
    ["Statement", "£48", "75 min"],
    ["Main character", "£62", "105 min"],
  ];
  return (
    <div className="nail-site">
      <header className="n-nav">
        <b>
          AFTERGLOW<span>NAIL STUDIO</span>
        </b>
        <nav>SETS　 MENU　 STUDIO</nav>
        <a href="#n-book">BOOK NOW ↗</a>
      </header>
      <section className="n-hero">
        <div>
          <span>BIAB · NAIL ART · CAMBRIDGE</span>
          <h1>
            Tiny canvases.
            <br />
            <i>Main-character</i> energy.
          </h1>
          <p>
            Healthy natural nails and detailed art in a relaxed private studio.
          </p>
          <a href="#n-book">Book your set ↗</a>
        </div>
        <div className="n-collage">
          {nailImgs.slice(0, 3).map((x, i) => (
            <img
              key={x.src}
              className={"n" + i}
              src={x.src}
              alt="Afterglow nail art"
            />
          ))}
        </div>
        <b className="n-sticker">
          NAIL
          <br />
          OBSESSED
        </b>
      </section>
      <section className="n-feed">
        <header>
          <small>FRESH FROM THE STUDIO</small>
          <h2>Saved it? Let’s make it yours.</h2>
          <div>
            {["All", "BIAB", "French", "Chrome", "Art"].map((x) => (
              <button
                className={style === x ? "on" : ""}
                onClick={() => setStyle(x)}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>
        </header>
        <div className={style === "All" ? "" : "filtered"}>
          {nailImgs
            .filter((x) => style === "All" || x.tags.includes(style))
            .map((x, i) => (
              <figure key={x.src}>
                <img
                  src={x.src}
                  alt={`Recent ${style === "All" ? "nail" : style} set ${i + 1}`}
                />
                <figcaption>{x.name}</figcaption>
              </figure>
            ))}
        </div>
      </section>
      <section className="n-menu" id="n-book">
        <div>
          <small>CHOOSE YOUR ART LEVEL</small>
          <h2>
            Your idea.
            <br />
            The right appointment.
          </h2>
          <p>
            Pick the closest tier now—we can confirm the details before your
            visit.
          </p>
        </div>
        <article>
          <div>
            {tiers.map((x, i) => (
              <button
                className={tier === i ? "on" : ""}
                onClick={() => setTier(i)}
                key={x[0]}
              >
                <b>{x[0]}</b>
                <span>{x[1]}</span>
              </button>
            ))}
          </div>
          <h3>{tiers[tier][0]}</h3>
          <p>
            {tier === 0
              ? "One colour, glazed finish or simple French."
              : tier === 1
                ? "Chrome, aura, cuffs or art across up to five nails."
                : "Detailed art across every nail, layered effects or character work."}
          </p>
          <footer>
            <b>{tiers[tier][1]}</b>
            <span>{tiers[tier][2]}</span>
            <button onClick={() => setBooking(true)}>Book this tier →</button>
          </footer>
          {booking && (
            <div className="n-confirm">
              <b>
                {tiers[tier][0]} selected · {tiers[tier][1]} · {tiers[tier][2]}
              </b>
              <p>
                BIAB base included. Removal, repairs and extra length would be
                confirmed before the deposit is taken.
              </p>
              <button onClick={() => setBooking(false)}>
                Change selection
              </button>
            </div>
          )}
        </article>
      </section>
      <section className="n-care">
        <div>
          <small>PRETTY, BUT PROPER</small>
          <h2>Nail health is part of the look.</h2>
        </div>
        <ul>
          <li>✓ Detailed prep and hygiene</li>
          <li>✓ Safe removal—never picked or peeled</li>
          <li>✓ Transparent timing and deposits</li>
        </ul>
      </section>
      <a href="#n-book" className="n-mobile-book">
        BOOK YOUR SET ↗
      </a>
    </div>
  );
}

function Members() {
  const [inside, setInside] = useState(false),
    [topic, setTopic] = useState("All"),
    [done, setDone] = useState<string[]>([]),
    [tab, setTab] = useState("Overview"),
    [registered, setRegistered] = useState(false);
  const resources = [
    ["Visibility", "Workshop", "The one-page visibility plan"],
    ["Sales", "Template", "Warm follow-up messages"],
    ["Planning", "Playbook", "Build a referral rhythm"],
    ["Mindset", "Audio", "A calmer working week"],
  ];
  if (inside)
    return (
      <div className="portal">
        <aside>
          <b>
            GOOD/W<span>MEMBER SPACE</span>
          </b>
          <nav>
            {[
              ["⌂", "Overview"],
              ["▣", "Library"],
              ["◷", "Sessions"],
              ["✓", "Progress"],
            ].map((x) => (
              <button
                className={tab === x[1] ? "on" : ""}
                onClick={() => setTab(x[1])}
                key={x[1]}
              >
                {x[0]} {x[1]}
              </button>
            ))}
          </nav>
          <button onClick={() => setInside(false)}>← View public site</button>
        </aside>
        <main>
          <header>
            <div>
              <small>DEMO MEMBER SPACE</small>
              <h1>{tab === "Overview" ? "Good evening, Joe." : tab}</h1>
            </div>
            <span>{done.length} of 4 complete</span>
          </header>
          {(tab === "Overview" || tab === "Progress") && (
            <section className="p-progress">
              <div>
                <small>AUGUST FOCUS</small>
                <h2>Build a referral rhythm that feels human.</h2>
                <p>{done.length}/4 resources complete</p>
              </div>
              <i
                style={{ "--p": `${done.length * 25}%` } as React.CSSProperties}
              ></i>
            </section>
          )}
          {(tab === "Overview" || tab === "Library") && (
            <section className="p-library">
              <header>
                <h2>Your library</h2>
                <div>
                  {["All", "Visibility", "Sales", "Planning"].map((x) => (
                    <button
                      className={topic === x ? "on" : ""}
                      onClick={() => setTopic(x)}
                      key={x}
                    >
                      {x}
                    </button>
                  ))}
                </div>
              </header>
              <div>
                {resources
                  .filter((x) => topic === "All" || x[0] === topic)
                  .map((x) => (
                    <article
                      className={done.includes(x[2]) ? "done" : ""}
                      key={x[2]}
                    >
                      <small>
                        {x[0]} · {x[1]}
                      </small>
                      <h3>{x[2]}</h3>
                      <button
                        onClick={() => alert(`Opening demo resource: ${x[2]}`)}
                      >
                        Preview
                      </button>
                      <button
                        onClick={() =>
                          setDone(
                            done.includes(x[2])
                              ? done.filter((y) => y !== x[2])
                              : [...done, x[2]],
                          )
                        }
                      >
                        {done.includes(x[2]) ? "✓ Completed" : "Mark complete"}
                      </button>
                    </article>
                  ))}
              </div>
            </section>
          )}
          {(tab === "Overview" || tab === "Sessions") && (
            <section className="p-event">
              <div>
                <small>NEXT LIVE SESSION</small>
                <h2>Quiet co-working</h2>
                <p>Wednesday · 10:00–11:30</p>
              </div>
              <button onClick={() => setRegistered(!registered)}>
                {registered ? "✓ Place saved" : "Save my place →"}
              </button>
            </section>
          )}
        </main>
      </div>
    );
  const join = () =>
    alert(
      "Demo joining journey: £29/month, cancel anytime. No payment is taken.",
    );
  return (
    <div className="member-site">
      <header className="m-nav">
        <b>THE GOOD WORK CLUB</b>
        <nav>What’s inside　 This month　 £29/month</nav>
        <button onClick={() => setInside(true)}>View member demo ↗</button>
      </header>
      <section className="m-hero">
        <div>
          <span>FOR INDEPENDENT BUSINESS OWNERS</span>
          <h1>
            Less noise.
            <br />
            More <i>useful</i> progress.
          </h1>
          <p>
            A practical monthly membership for choosing the right work—and
            actually finishing it.
          </p>
          <div>
            <button onClick={join}>Join for £29/month →</button>
            <button onClick={() => setInside(true)}>
              Explore the member demo
            </button>
          </div>
        </div>
        <aside>
          <small>THIS MONTH INSIDE</small>
          <h2>Build a referral rhythm that feels human.</h2>
          <ul>
            <li>01 · 45-minute playbook</li>
            <li>02 · Live working session</li>
            <li>03 · Follow-up templates</li>
          </ul>
          <button onClick={() => setInside(true)}>Open member preview →</button>
        </aside>
      </section>
      <section className="m-strip">
        <b>No hustle theatre.</b>
        <b>No 47-hour course.</b>
        <b>No falling behind.</b>
      </section>
      <section className="m-month">
        <header>
          <small>A REAL MONTH, NOT A CONTENT DUMP</small>
          <h2>A simple rhythm that keeps moving.</h2>
        </header>
        <div>
          {[
            [
              "WEEK 01",
              "Choose",
              "One clear playbook and a realistic priority.",
            ],
            ["WEEK 02", "Work", "A live room to make progress with support."],
            ["WEEK 03", "Apply", "Templates that turn the idea into action."],
            [
              "WEEK 04",
              "Review",
              "Notice what worked and choose what is next.",
            ],
          ].map((x) => (
            <article key={x[0]}>
              <small>{x[0]}</small>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="m-portal">
        <div>
          <small>THE DIFFERENCE IS INSIDE</small>
          <h2>A member area built for doing—not browsing.</h2>
          <p>
            Filter resources, track progress and register for working sessions
            in a real interactive demo.
          </p>
          <button onClick={() => setInside(true)}>
            Enter as a demo member →
          </button>
        </div>
        <div className="m-ui">
          <span>August focus　 50% complete</span>
          <b>Build a referral rhythm</b>
          <i></i>
          <small>Next: Quiet co-working · Wednesday</small>
        </div>
      </section>
      <footer className="m-footer">
        <div>
          <h2>Make good work easier to do.</h2>
          <p>£29 monthly · cancel anytime · demonstration checkout only</p>
        </div>
        <button onClick={join}>Join the club →</button>
      </footer>
    </div>
  );
}
