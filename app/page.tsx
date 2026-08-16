"use client";
import { useState } from "react";

type Key =
  | "reiki"
  | "landscape"
  | "gallery"
  | "cleaning"
  | "shop"
  | "nails"
  | "members"
  | "prestige";
const brands: Record<Key, { name: string; type: string }> = {
  reiki: { name: "LuxeBeorn", type: "Distance Reiki" },
  landscape: { name: "Andrew Thorn", type: "Landscaping" },
  gallery: { name: "Morrow Studio", type: "Art & Editions" },
  cleaning: { name: "Neat & Kind", type: "Home Cleaning" },
  shop: { name: "Field Supply", type: "Outdoor Store" },
  nails: { name: "Afterglow", type: "Nail Studio" },
  members: { name: "The Good Work Club", type: "Membership" },
  prestige: { name: "Prestige Cleans", type: "Premium Cleaning" },
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
            <small>Eight businesses. Eight real design systems.</small>
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
  if (active === "members") return <Members />;
  return <Prestige />;
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
      ["Generic booking language", "Collector enquiry and provenance journey"],
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
      ["Flat product cards", "Variants, product detail and staged checkout"],
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
    prestige: [
      ["Generic cleaning brochure", "Premium transformation-led landing page"],
      ["One-size-fits-all contact form", "Photo-led tailored quote journey"],
      ["No social continuity", "Editorial work grid and mobile-first enquiry"],
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
        This site-specific baseline is a reconstructed comparison—not an
        archived screenshot. It remains available through <b>Before</b>. The
        rebuilt version changes the structure, not only the colour.
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
  prestige: {
    eyebrow: "PREMIUM CLEANING SERVICES",
    title: "Professional cleaning for every property",
    copy: "We offer reliable cleaning services at competitive prices. Contact us today for a free quote.",
    cta: "Get a quote",
    story: "A cleaner home without the stress",
    services: ["Home cleaning", "Deep cleaning", "Moving cleans"],
    quote: "Great service and a lovely clean home.",
    image:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1800&q=75",
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
          {active === "gallery"
            ? "About　 Gallery　 Contact　 "
            : active === "shop"
              ? "About　 Products　 Delivery　 "
              : "About　 Services　 Stories　 "}
          <button>
            {active === "shop"
              ? "Cart (0)"
              : active === "gallery"
                ? "View gallery"
                : "Book now"}
          </button>
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
          {active === "gallery"
            ? "A simple online portfolio with limited artwork detail and no clear collector journey."
            : active === "shop"
              ? "A flat product catalogue with no filtering, product variants or clear delivery information."
              : "We pride ourselves on offering a professional, friendly service tailored to every customer. Get in touch to find out more."}
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
                {active === "gallery"
                  ? "Basic title and price only. Contact the artist for availability."
                  : active === "shop"
                    ? "A basic category with no stock, size or material filters."
                    : "Professional quality and friendly support. Contact us for more information."}
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
  const sessions = [
    {
      name: "30-minute session",
      time: "30 minutes",
      price: "£35",
      note: "A simple first session or a pause in a busy week.",
    },
    {
      name: "60-minute session",
      time: "60 minutes",
      price: "£60",
      note: "More time to settle, rest and check in afterwards.",
    },
    {
      name: "Four-session plan",
      time: "4 × 60 minutes",
      price: "£210",
      note: "Regular support through a demanding period.",
    },
  ];
  const [selected, setSelected] = useState(0);
  const [faq, setFaq] = useState(-1);
  const [confirmation, setConfirmation] = useState("");
  const session = sessions[selected];
  return (
    <div className="reiki-site reiki-v2">
      <header className="rv-nav">
        <a href="#rv-top" className="rv-logo">
          <b>LuxeBeorn</b>
          <span>Distance Reiki · Online</span>
        </a>
        <nav>
          <a href="#rv-sessions">Sessions</a>
          <a href="#rv-how">How it works</a>
          <a className="rv-nav-cta" href="#rv-book">
            Book a session
          </a>
        </nav>
      </header>

      <section className="rv-hero" id="rv-top">
        <div>
          <small>DISTANCE REIKI · FROM HOME</small>
          <h1>
            Time to pause.
            <br />
            Space to reset.
          </h1>
          <p>
            Calm, clearly explained distance Reiki from the comfort of your own
            space.
          </p>
          <a href="#rv-sessions">Choose a session →</a>
        </div>
        <figure className="rv-film">
          <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=88">
            <source src="https://cdn.coverr.co/videos/coverr-premium-close-up-shot-of-a-man-focusing-during-meditation/1080p.mp4" type="video/mp4" />
          </video>
          <span>PRESS PLAY ON YOUR PAUSE</span>
        </figure>
      </section>

      <section className="rv-sessions" id="rv-sessions">
        <header>
          <small>SESSIONS</small>
          <h2>Choose the time you need.</h2>
        </header>
        <div>
          {sessions.map((item, index) => (
            <button
              key={item.name}
              className={selected === index ? "on" : ""}
              onClick={() => setSelected(index)}
            >
              <span>{item.time}</span>
              <h3>{item.name}</h3>
              <p>{item.note}</p>
              <strong>{item.price}</strong>
              <em>{selected === index ? "Selected ✓" : "Select session"}</em>
            </button>
          ))}
        </div>
        <a href="#rv-book">Continue with {session.name} →</a>
      </section>

      <section className="rv-how" id="rv-how">
        <header>
          <small>HOW IT WORKS</small>
          <h2>Simple from start to finish.</h2>
        </header>
        <ol>
          <li>
            <span>01</span>
            <div>
              <b>Choose a session</b>
              <p>Select a length and request a suitable time.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <b>Get comfortable</b>
              <p>Stay at home. You do not need to prepare anything special.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <b>Receive your check-in</b>
              <p>Your session is followed by a short private message.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="rv-trust">
        <div>
          <small>YOUR PRACTITIONER</small>
          <h2>A personal, down-to-earth approach.</h2>
          <p>
            Hayley offers distance Reiki in plain English, with time for
            questions and no expectation to feel anything particular.
          </p>
        </div>
        <aside>
          <small>IS THIS RIGHT FOR ME?</small>
          <p>
            Reiki may suit you if you want intentional time to rest and reflect
            at home.
          </p>
          <p>
            It is complementary wellbeing support and does not replace medical
            or mental-health care.
          </p>
        </aside>
      </section>

      <section className="rv-faq">
        <header>
          <small>QUICK QUESTIONS</small>
          <h2>Before you book.</h2>
        </header>
        {[
          [
            "Do I need experience with Reiki?",
            "No. Your first session is explained clearly and you can ask questions beforehand.",
          ],
          [
            "What might I feel?",
            "Everyone is different. You may feel relaxed, warm, emotional—or simply enjoy a quiet hour.",
          ],
          [
            "Can I change my appointment?",
            "Your confirmation includes the rescheduling policy and agreed UK time.",
          ],
        ].map((item, index) => (
          <article key={item[0]}>
            <button onClick={() => setFaq(faq === index ? -1 : index)}>
              <b>{item[0]}</b>
              <span>{faq === index ? "−" : "+"}</span>
            </button>
            {faq === index ? <p>{item[1]}</p> : null}
          </article>
        ))}
      </section>

      <section className="rv-book" id="rv-book">
        <div>
          <small>REQUEST A SESSION</small>
          <h2>{session.name}</h2>
          <p>
            {session.time} · {session.price}. Choose a preferred UK time and
            Hayley will confirm availability.
          </p>
        </div>
        {confirmation ? (
          <div className="rv-confirm">
            <b>Your request is ready.</b>
            <p>
              {confirmation}. Hayley will confirm availability and next steps.
            </p>
            <button onClick={() => setConfirmation("")}>
              Make another request
            </button>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              setConfirmation(
                session.name +
                  " requested for " +
                  data.get("date") +
                  " at " +
                  data.get("time"),
              );
            }}
          >
            <label>
              Name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" required type="email" autoComplete="email" />
            </label>
            <label>
              Preferred date
              <input name="date" required type="date" />
            </label>
            <label>
              Preferred UK time
              <select name="time" required defaultValue="">
                <option value="" disabled>
                  Choose a time
                </option>
                <option>10:00</option>
                <option>13:00</option>
                <option>19:30</option>
              </select>
            </label>
            <button>Request availability →</button>
          </form>
        )}
      </section>
      <footer className="rv-footer">
        <b>LuxeBeorn</b>
        <span>Distance Reiki · Online</span>
        <a href="#rv-book">Book a session ↑</a>
      </footer>
    </div>
  );
}
function Landscape() {
  const [filter, setFilter] = useState("All"),
    [sent, setSent] = useState(false);
  const projects = [
    [
      "Patios",
      "Patio project",
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85",
      "Porcelain paving · preparation · drainage",
    ],
    [
      "Fencing",
      "Fencing project",
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=85",
      "Close-board fencing · posts · gate",
    ],
    [
      "Full gardens",
      "Complete garden project",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=85",
      "Groundworks · turf · planting",
    ],
  ];
  return (
    <div className="land-site">
      <header className="l-top">
        <span>Andrew Thorn Landscaping</span>
        <p>Cambridgeshire & surrounding villages</p>
        <a href="#l-quote">Request a callback</a>
      </header>
      <nav className="l-nav">
        <b>
          AT<span>/</span>LANDSCAPING
        </b>
        <div>
          <a href="#l-services">Services</a>　<a href="#l-work">Work</a>　
          <a href="#l-about">About</a>
        </div>
        <a href="#l-quote">Request a site visit</a>
      </nav>
      <section className="l-hero">
        <div>
          <small>EXPERIENCED, OWNER-LED LANDSCAPING</small>
          <h1>Landscaping built properly.</h1>
          <p>
            Patios, fencing and complete gardens from one experienced local
            landscaper.
          </p>
          <a href="#l-quote">Request a free visit →</a>
          <ul>
            <li>Credentials and insurance confirmed before work</li>
            <li>Clear written quotes</li>
            <li>Tidy, respectful work</li>
          </ul>
        </div>
        <figure className="l-hero-film">
          <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=88">
            <source src="https://cdn.coverr.co/videos/coverr-watering-flowers-with-a-hosepipe-3213/1080p.mp4" type="video/mp4" />
          </video>
          <figcaption><span>WORK THAT</span><b>GROWS WITH THE GARDEN</b></figcaption>
        </figure>
      </section>
      <section className="l-services" id="l-services">
        <header>
          <span>01 / WHAT I DO</span>
          <h2>Patios, fencing and complete gardens.</h2>
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
            <a
              href="#l-work"
              onClick={() =>
                setFilter(
                  i === 0 ? "Patios" : i === 1 ? "Fencing" : "Full gardens",
                )
              }
            >
              See example work →
            </a>
          </article>
        ))}
      </section>
      <section className="l-work" id="l-work">
        <header>
          <div>
            <small>PROJECTS BY SERVICE</small>
            <h2>Project gallery.</h2>
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
      <section className="l-about" id="l-about">
        <div>
          <small>OWNER-LED FROM FIRST VISIT TO FINISH</small>
          <h2>You deal with Andrew.</h2>
        </div>
        <p>
          Andrew brings a practical, hands-on approach to patios, fencing,
          ground preparation and complete garden builds. One point of contact, a
          clear scope and straight answers from the first visit.
        </p>
        <ul>
          <li>Clear scope before work begins</li>
          <li>One point of contact</li>
          <li>Site left safe and tidy</li>
        </ul>
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
              Thank you. The next step is to confirm the enquiry, preferred
              contact method and a suitable time to visit.
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
              <select required defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option>Patio or paving</option>
                <option>Fencing</option>
                <option>Full garden</option>
              </select>
            </label>
            <label>
              Postcode
              <input required placeholder="PE28" />
            </label>
            <label>
              Approximate size
              <input required placeholder="e.g. 8 × 5 metres" />
            </label>
            <label>
              Access
              <select required defaultValue="">
                <option value="" disabled>
                  Choose access
                </option>
                <option>Direct side access</option>
                <option>Access through home</option>
                <option>Unsure</option>
              </select>
            </label>
            <label>
              Preferred reply
              <select required>
                <option>Phone call</option>
                <option>Text message</option>
                <option>Email</option>
              </select>
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
            <label className="l-upload">
              Project photos (optional)
              <input type="file" accept="image/*" multiple />
            </label>
            <button>Request my visit →</button>
          </form>
        )}
      </section>
    </div>
  );
}

const art = [
  {
    name: "Salt Air I",
    kind: "Original",
    price: "£640",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=88",
    medium: "Oil, wax and ground pigment on linen",
    size: "76 × 102 cm",
    year: "2026",
    edition: "Unique work",
    frame: "Unframed",
    dispatch: "5–7 working days",
  },
  {
    name: "Held Light",
    kind: "Edition",
    price: "£145",
    image:
      "https://images.unsplash.com/photo-1578301978162-7aae4d755744?auto=format&fit=crop&w=900&q=88",
    medium: "Archival pigment print on cotton rag",
    size: "50 × 70 cm",
    year: "2025",
    edition: "Edition of 30",
    frame: "Unframed; framing available",
    dispatch: "3–5 working days",
  },
  {
    name: "Soft Ground",
    kind: "Photography",
    price: "£95",
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=900&q=88",
    medium: "Giclée photographic print",
    size: "40 × 50 cm",
    year: "2026",
    edition: "Edition of 50",
    frame: "Print only",
    dispatch: "3–5 working days",
  },
  {
    name: "After Rain",
    kind: "Original",
    price: "£780",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?auto=format&fit=crop&w=900&q=88",
    medium: "Oil and cold wax on birch panel",
    size: "80 × 80 cm",
    year: "2026",
    edition: "Unique work",
    frame: "Tray framed in oak",
    dispatch: "7–10 working days",
  },
];
function Gallery() {
  const [view, setView] = useState<number | null>(null),
    [kind, setKind] = useState("All"),
    [enquired, setEnquired] = useState(false),
    [reference, setReference] = useState("");
  const shown = art.filter((x) => kind === "All" || x.kind === kind);
  const openWork = (index: number) => {
    setView(index);
    setEnquired(false);
    setReference("");
  };
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
        <h1>Original art for considered spaces.</h1>
        <aside>
          Original paintings, archival editions and quiet photographic studies
          made in a small British studio.
        </aside>
      </section>
      <section className="a-feature">
        <div className="a-feature-media">
          <video autoPlay muted loop playsInline poster={art[0].image}>
            <source src="https://cdn.coverr.co/videos/coverr-artist-rinsing-a-paintbrush-7377/1080p.mp4" type="video/mp4" />
          </video>
          <span>PROCESS / PIGMENT / PATIENCE</span>
        </div>
        <div>
          <small>NEW ORIGINAL · 01</small>
          <h2>Salt Air I</h2>
          <p>
            Oil, wax and ground pigment on linen.
            <br />
            76 × 102 cm · Signed · Unique
          </p>
          <strong>£640</strong>
          <button onClick={() => openWork(0)}>View the work →</button>
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
          {shown.map((x) => (
            <button
              className="a-work"
              key={x.name}
              onClick={() => openWork(art.indexOf(x))}
            >
              <figure>
                <img src={x.image} alt={x.name} />
                <figcaption>
                  <div>
                    <b>{x.name}</b>
                    <small>
                      {x.kind} · {x.edition}
                    </small>
                  </div>
                  <span>{x.price}</span>
                </figcaption>
              </figure>
            </button>
          ))}
        </div>
      </section>
      <section className="a-trust" id="a-artist">
        <div>
          <small>FROM STUDIO TO YOUR WALL</small>
          <h2>Made slowly. Collected confidently.</h2>
        </div>
        <p>
          Every work includes a signed certificate or edition record. Insured UK
          delivery, framing options and international quotes are confirmed
          personally before payment.
        </p>
        <a href="#a-collection">View available work →</a>
      </section>
      <footer className="a-footer">
        MORROW STUDIO{" "}
        <span>Original work · Archival editions · Commissions</span>
      </footer>
      {view !== null && (
        <div
          className="a-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Details for ${art[view].name}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setView(null);
          }}
        >
          <button className="a-close" autoFocus onClick={() => setView(null)}>
            Close ×
          </button>
          <img src={art[view].image} alt={art[view].name} />
          <div>
            <small>
              {art[view].kind} · {art[view].year}
            </small>
            <h2>{art[view].name}</h2>
            <p>
              {art[view].medium}
              <br />
              {art[view].size} · {art[view].edition}
              <br />
              {art[view].frame} · Dispatch {art[view].dispatch}
              <br />
              Signed certificate or edition record included.
            </p>
            <strong>{art[view].price}</strong>
            {enquired ? (
              <div className="a-confirm">
                <b>Collector enquiry {reference} prepared.</b>
                <p>
                  {art[view].name} is referenced in your request. Nothing was
                  sent in this demonstration.
                </p>
              </div>
            ) : (
              <form
                className="a-enquiry"
                onSubmit={(e) => {
                  e.preventDefault();
                  setReference(`MS-${String(view + 1).padStart(3, "0")}`);
                  setEnquired(true);
                }}
              >
                <label>
                  Name
                  <input required autoComplete="name" />
                </label>
                <label>
                  Email
                  <input required type="email" autoComplete="email" />
                </label>
                <label>
                  Delivery country / postcode
                  <input required />
                </label>
                <label>
                  Framing interest
                  <select>
                    <option>Please advise me</option>
                    <option>Print/work only</option>
                    <option>I would like framing options</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea
                    rows={2}
                    placeholder="Anything you would like the studio to know"
                  />
                </label>
                <button>Prepare collector enquiry →</button>
              </form>
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
    [condition, setCondition] = useState("Maintained"),
    [extras, setExtras] = useState<string[]>([]),
    [submitted, setSubmitted] = useState(false);
  const base = 22 + beds * 6 + baths * 8;
  const price = Math.round(
    base * (freq === "Weekly" ? 0.88 : freq === "One-off" ? 1.5 : 1) +
      extras.length * 12 +
      (condition === "Needs attention" ? 18 : 0),
  );
  const hours = Math.max(
    2,
    Math.round((beds * 0.5 + baths * 0.6 + extras.length * 0.4) * 2) / 2,
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
        </div>
        <aside>
          <small>QUICK ESTIMATE</small>
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
          <label>
            Current condition
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option>Maintained</option>
              <option>Needs attention</option>
            </select>
          </label>
          <fieldset className="c-extras">
            <legend>Optional extras</legend>
            {["Oven", "Inside fridge", "Inside windows"].map((x) => (
              <label key={x}>
                <input
                  type="checkbox"
                  checked={extras.includes(x)}
                  onChange={() =>
                    setExtras(
                      extras.includes(x)
                        ? extras.filter((y) => y !== x)
                        : [...extras, x],
                    )
                  }
                />{" "}
                {x}
              </label>
            ))}
          </fieldset>
          <footer>
            <span>Indicative estimate · approx. {hours} hours</span>
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
        <div className="c-team-film">
          <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85">
            <source src="https://cdn.coverr.co/videos/coverr-premium-a-woman-purifies-a-rug-on-the-balcony-1207/1080p.mp4" type="video/mp4" />
          </video>
          <span>REAL WORK · CLEAR STANDARDS</span>
        </div>
        <div>
          <small>PEOPLE YOU CAN TRUST</small>
          <h2>Know who is coming into your home.</h2>
          <p>
            Before any first clean, customers can receive the cleaner’s name,
            key-handling process and a clear visit plan.
          </p>
          <div>
            <b>✓ Cleaner confirmed in advance</b>
            <b>✓ Supplies policy made clear</b>
            <b>✓ Satisfaction process explained</b>
            <b>✓ Cancellation terms confirmed before booking</b>
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
              {beds} bedroom · {baths} bathroom · {freq.toLowerCase()} · approx.{" "}
              {hours} hours · indicative estimate from £{price}.
            </p>
            <p>
              The next step is to confirm the cleaner, visit time and final
              price for the property.
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
            <label>
              Your name
              <input required autoComplete="name" />
            </label>
            <label>
              Postcode
              <input required autoComplete="postal-code" />
            </label>
            <label>
              Email
              <input required type="email" autoComplete="email" />
            </label>
            <label>
              Phone
              <input required type="tel" autoComplete="tel" />
            </label>
            <label>
              Preferred day
              <select>
                <option>Flexible</option>
                <option>Monday–Wednesday</option>
                <option>Thursday–Friday</option>
              </select>
            </label>
            <label className="c-consent">
              <input required type="checkbox" /> I agree to be contacted about
              this request and have read the privacy note.
            </label>
            <button>Request availability →</button>
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
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=85",
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
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",
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
    [open, setOpen] = useState(false),
    [detail, setDetail] = useState<number | null>(null),
    [filtersOpen, setFiltersOpen] = useState(false),
    [checkout, setCheckout] = useState(false),
    [variant, setVariant] = useState("Slate");
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
        <button
          onClick={() => {
            setFiltersOpen(true);
            document
              .getElementById("s-store")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          ☰ SHOP
        </button>
        <b>FIELD/SUPPLY</b>
        <div>
          <a href="#s-store">⌕ Search</a>
          <button onClick={() => setOpen(true)}>Bag [{bag.length}]</button>
        </div>
      </header>
      <section className="s-hero">
        <video className="s-hero-film" autoPlay muted loop playsInline>
          <source src="https://cdn.coverr.co/videos/coverr-hiking-in-the-hills-1431/1080p.mp4" type="video/mp4" />
        </video>
        <div>
          <small>FIELD NOTE / 026</small>
          <h1>
            Built to go.
            <br />
            Made to stay.
          </h1>
          <p>
            Considered outdoor goods for slower weekends and longer trails.
            Durable materials, useful details and a repair-first point of view.
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
        <aside className={filtersOpen ? "open" : ""}>
          <button
            className="s-filter-close"
            onClick={() => setFiltersOpen(false)}
          >
            Close filters ×
          </button>
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
            Maximum £{max} <small>£25—£120</small>
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
            <button
              className="s-mobile-filter"
              onClick={() => setFiltersOpen(true)}
            >
              Filter ({cat === "All" ? 0 : 1})
            </button>
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
                  <button
                    className="s-product-open"
                    onClick={() => setDetail(goods.indexOf(x))}
                  >
                    <img src={x[3]} alt={x[0]} />
                  </button>
                  <button onClick={() => add(x[0])}>Quick add +</button>
                </figure>
                <small>{x[1]} · Choose options</small>
                <button
                  className="s-product-title"
                  onClick={() => setDetail(goods.indexOf(x))}
                >
                  <h3>{x[0]}</h3>
                </button>
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
            UK delivery from £4.95 · 30-day returns · repair and material
            guidance on every product
          </p>
        </main>
      </section>
      {detail !== null && (
        <div
          className="s-detail"
          role="dialog"
          aria-modal="true"
          aria-label={`Product details for ${goods[detail][0]}`}
        >
          <button
            className="s-detail-close"
            autoFocus
            onClick={() => setDetail(null)}
          >
            Close ×
          </button>
          <img src={goods[detail][3]} alt={goods[detail][0]} />
          <div>
            <small>{goods[detail][1]} · Choose your finish</small>
            <h2>{goods[detail][0]}</h2>
            <strong>{goods[detail][2]}</strong>
            <p>
              Hard-wearing construction, considered storage and field-repairable
              details. Material and care instructions included.
            </p>
            <label>
              Colour
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
              >
                <option>Slate</option>
                <option>Moss</option>
                <option>Clay</option>
              </select>
            </label>
            <ul>
              <li>Dispatch in 1–2 working days</li>
              <li>30-day returns in original condition</li>
              <li>Repair guidance included</li>
            </ul>
            <button
              onClick={() => {
                add(goods[detail][0]);
                setDetail(null);
                setOpen(true);
              }}
            >
              Add {variant} to bag →
            </button>
          </div>
        </div>
      )}
      {open && (
        <aside className="s-bag">
          <header>
            <h2>Your field bag</h2>
            <button onClick={() => setOpen(false)}>Close ×</button>
          </header>
          {bag.length ? (
            [...new Set(bag)].map((name) => (
              <article key={name}>
                <img src={goods.find((x) => x[0] === name)?.[3]} alt="" />
                <div>
                  <b>{name}</b>
                  <small>{goods.find((x) => x[0] === name)?.[2]} each</small>
                  <small>Quantity {bag.filter((x) => x === name).length}</small>
                </div>
                <div>
                  <button onClick={() => remove(name)}>−</button>
                  <button onClick={() => add(name)}>＋</button>
                  <button onClick={() => setBag(bag.filter((x) => x !== name))}>
                    Remove
                  </button>
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
            <button disabled={!bag.length} onClick={() => setCheckout(true)}>
              Review order →
            </button>
            {checkout && (
              <div className="s-checkout">
                <b>Order review ready</b>
                <p>
                  Order subtotal £{total}. Delivery and contact details would be
                  confirmed next. No payment is collected.
                </p>
                <button onClick={() => setCheckout(false)}>Back to bag</button>
              </div>
            )}
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
    [booking, setBooking] = useState(false),
    [booked, setBooked] = useState("");
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
          <video className="n0" autoPlay muted loop playsInline poster={nailImgs[0].src}>
            <source src="https://cdn.coverr.co/videos/coverr-girl-painting-her-nails-8350/1080p.mp4" type="video/mp4" />
          </video>
          {nailImgs.slice(1, 3).map((x, i) => (
            <img key={x.src} className={"n" + (i + 1)} src={x.src} alt="Afterglow nail art" />
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
              ? "BIAB base with one colour, glazed finish or simple French. Short-to-medium natural length."
              : tier === 1
                ? "BIAB base with chrome, aura, cuffs or art across up to five nails."
                : "BIAB base with detailed art across every nail, layered effects or character work."}
          </p>
          <small>
            Removal, repair and deposit policies are confirmed before the
            appointment is finalised.
          </small>
          <footer>
            <b>{tiers[tier][1]}</b>
            <span>{tiers[tier][2]}</span>
            <button onClick={() => setBooking(true)}>Book this tier →</button>
          </footer>
          {booking && (
            <div className="n-confirm">
              {booked ? (
                <>
                  <b>Your appointment request is ready.</b>
                  <p>{booked}. The studio will confirm any required deposit.</p>
                  <button
                    onClick={() => {
                      setBooked("");
                      setBooking(false);
                    }}
                  >
                    Start again
                  </button>
                </>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    setBooked(
                      `${tiers[tier][0]} · ${data.get("date")} at ${data.get("time")} · ${data.get("removal")}`,
                    );
                  }}
                >
                  <b>
                    {tiers[tier][0]} · {tiers[tier][1]} · {tiers[tier][2]}
                  </b>
                  <label>
                    Removal / infill
                    <select name="removal">
                      <option>No removal</option>
                      <option>Afterglow infill</option>
                      <option>Removal from another studio</option>
                    </select>
                  </label>
                  <label>
                    Preferred date
                    <input required name="date" type="date" />
                  </label>
                  <label>
                    Available time
                    <select required name="time" defaultValue="">
                      <option value="" disabled>
                        Choose a time
                      </option>
                      <option>10:00</option>
                      <option>13:30</option>
                      <option>17:30</option>
                    </select>
                  </label>
                  <label>
                    Name
                    <input required autoComplete="name" />
                  </label>
                  <label>
                    Mobile
                    <input required type="tel" autoComplete="tel" />
                  </label>
                  <p>
                    Any required deposit is confirmed before the appointment is
                    finalised.
                  </p>
                  <button>Request this appointment →</button>
                </form>
              )}
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
    [registered, setRegistered] = useState(false),
    [preview, setPreview] = useState<string | null>(null),
    [joinOpen, setJoinOpen] = useState(false),
    [joined, setJoined] = useState(false);
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
          <div className="m-orbit" aria-hidden="true"><i /><span>DO</span></div>
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
              <h1>{tab === "Overview" ? "Welcome back, demo member." : tab}</h1>
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
                  {["All", "Visibility", "Sales", "Planning", "Mindset"].map(
                    (x) => (
                      <button
                        className={topic === x ? "on" : ""}
                        onClick={() => setTopic(x)}
                        key={x}
                      >
                        {x}
                      </button>
                    ),
                  )}
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
                      <button onClick={() => setPreview(x[2])}>Preview</button>
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
          {preview && (
            <section
              className="p-preview"
              role="dialog"
              aria-label={`Resource preview: ${preview}`}
            >
              <button onClick={() => setPreview(null)}>Close ×</button>
              <small>RESOURCE PREVIEW · 12 MINUTES</small>
              <h2>{preview}</h2>
              <p>
                A focused sample with one short explanation, a practical prompt
                and a next action you can finish today.
              </p>
              <ol>
                <li>Notice the current friction</li>
                <li>Choose one realistic action</li>
                <li>Save the next step</li>
              </ol>
              <button
                onClick={() => {
                  setDone(done.includes(preview) ? done : [...done, preview]);
                  setPreview(null);
                }}
              >
                Mark complete and return →
              </button>
            </section>
          )}
        </main>
      </div>
    );
  const join = () => setJoinOpen(true);
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
            in one focused member space.
          </p>
          <button onClick={() => setInside(true)}>
            See inside the member space →
          </button>
        </div>
        <div className="m-ui">
          <span>August focus　 50% complete</span>
          <b>Build a referral rhythm</b>
          <i></i>
          <small>Next: Quiet co-working · Wednesday</small>
        </div>
      </section>
      <section className="m-fit">
        <div>
          <small>BUILT FOR REAL WORK</small>
          <h2>Who the club is for.</h2>
          <p>
            One monthly focus, one live working session and practical resources
            for independent business owners.
          </p>
        </div>
        <div>
          <h3>This is for you if…</h3>
          <p>
            You run an independent business and want calm structure, useful
            tools and company while doing the work.
          </p>
          <h3>Probably not if…</h3>
          <p>
            You want daily content, instant-growth promises or a high-pressure
            accountability programme.
          </p>
        </div>
      </section>
      <footer className="m-footer">
        <div>
          <h2>Make good work easier to do.</h2>
          <p>£29 monthly · cancel before your next renewal</p>
        </div>
        <button onClick={join}>Join the club →</button>
      </footer>
      {joinOpen && (
        <div
          className="m-checkout"
          role="dialog"
          aria-modal="true"
          aria-label="Membership demo checkout"
        >
          <button onClick={() => setJoinOpen(false)}>Close ×</button>
          {joined ? (
            <div>
              <small>DEMO COMPLETE</small>
              <h2>Your place is ready.</h2>
              <p>
                No payment was taken. A live member would now receive sign-in
                details and the next-session invitation.
              </p>
              <button
                onClick={() => {
                  setJoined(false);
                  setJoinOpen(false);
                }}
              >
                Finish demo
              </button>
            </div>
          ) : (
            <div>
              <small>PLAN SUMMARY</small>
              <h2>The Good Work Club</h2>
              <strong>£29 / month</strong>
              <ul>
                <li>Monthly playbook and templates</li>
                <li>One live working session</li>
                <li>Full member library</li>
                <li>Cancel before the next renewal</li>
              </ul>
              <p>
                Demonstration checkout only. No payment details are requested or
                stored.
              </p>
              <button onClick={() => setJoined(true)}>
                Confirm demo membership →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Prestige() {
  const [service, setService] = useState("Signature deep clean"),
    [step, setStep] = useState(1),
    [sent, setSent] = useState(false);
  const services = [
    [
      "Signature deep clean",
      "A detailed one-off reset, tailored after photos or a property check.",
    ],
    [
      "Regular care",
      "A consistent maintenance clean built around the rooms you use most.",
    ],
    [
      "Moving clean",
      "A thorough clean around a move, subject to confirmed business availability.",
    ],
  ];
  return (
    <div className="prestige-site">
      <header className="pc-nav">
        <a href="#pc-top">
          <b>PRESTIGE</b>
          <span>CLEANS</span>
        </a>
        <nav>
          <a href="#pc-services">Services</a>
          <a href="#pc-standard">The standard</a>
          <a href="#pc-quote">Request a quote</a>
        </nav>
      </header>

      <section className="pc-hero" id="pc-top">
        <div>
          <small>DETAIL-LED CLEANING · TAILORED QUOTES</small>
          <h1>
            A prestige finish.
            <br />
            <i>Without the fuss.</i>
          </h1>
          <p>
            Professional cleaning shaped around your property, priorities and
            preferred date.
          </p>
          <a href="#pc-quote">Request a tailored quote →</a>
        </div>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1400&q=90"
            alt="A bright, carefully finished kitchen"
          />
          <figcaption>
            <b>01</b>
            <span>
              Clean lines.
              <br />
              Careful detail.
            </span>
          </figcaption>
          <span className="pc-shine" aria-hidden="true" />
        </figure>
      </section>

      <section className="pc-proof">
        <span>SHARE PROPERTY DETAILS</span>
        <span>RECEIVE CLEAR INCLUSIONS</span>
        <span>CONFIRM YOUR PLAN</span>
      </section>

      <section className="pc-services" id="pc-services">
        <header>
          <small>CHOOSE YOUR CLEAN</small>
          <h2>Start with the result you need.</h2>
        </header>
        <div>
          {services.map((item, index) => (
            <button
              key={item[0]}
              className={service === item[0] ? "on" : ""}
              onClick={() => setService(item[0])}
            >
              <span>0{index + 1}</span>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
              <em>{service === item[0] ? "Selected ✓" : "Select"}</em>
            </button>
          ))}
        </div>
      </section>

      <section className="pc-standard" id="pc-standard">
        <div>
          <small>THE PRESTIGE STANDARD</small>
          <h2>The details make the difference.</h2>
          <p>
            Tell us what matters most, share the property details and receive a
            clear plan shaped around the finish you want.
          </p>
        </div>
        <div className="pc-gallery">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=88"
              alt="Polished kitchen detail"
            />
            <figcaption>KITCHENS</figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=88"
              alt="Bright finished interior"
            />
            <figcaption>LIVING SPACES</figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=88"
              alt="Clean bathroom detail"
            />
            <figcaption>BATHROOMS</figcaption>
          </figure>
        </div>
      </section>

      <section className="pc-quote" id="pc-quote">
        <div className="pc-quote-intro">
          <small>TAILORED QUOTE</small>
          <h2>Show us what needs attention.</h2>
          <p>Three short steps. No instant price guesswork.</p>
          <ol>
            <li className={step >= 1 ? "on" : ""}>1 · Property</li>
            <li className={step >= 2 ? "on" : ""}>2 · Timing & photos</li>
            <li className={step >= 3 ? "on" : ""}>3 · Contact</li>
          </ol>
        </div>
        {sent ? (
          <div className="pc-confirm">
            <small>REQUEST PREPARED</small>
            <h3>Thank you.</h3>
            <p>
              Your {service.toLowerCase()} request is ready. The next step is to
              confirm the details and arrange your tailored quote.
            </p>
            <button
              onClick={() => {
                setSent(false);
                setStep(1);
              }}
            >
              Start another request
            </button>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            {step === 1 ? (
              <>
                <label>
                  Selected service
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    {services.map((item) => (
                      <option key={item[0]}>{item[0]}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Postcode
                  <input
                    required
                    autoComplete="postal-code"
                    placeholder="Your postcode"
                  />
                </label>
                <label>
                  Property size
                  <select required defaultValue="">
                    <option value="" disabled>
                      Choose a size
                    </option>
                    <option>1–2 bedrooms</option>
                    <option>3–4 bedrooms</option>
                    <option>5+ bedrooms / larger property</option>
                    <option>Workspace</option>
                  </select>
                </label>
                <button type="button" onClick={() => setStep(2)}>
                  Continue →
                </button>
              </>
            ) : null}
            {step === 2 ? (
              <>
                <label>
                  Preferred date
                  <input required type="date" />
                </label>
                <label>
                  Current condition
                  <select>
                    <option>Maintained</option>
                    <option>Needs extra attention</option>
                    <option>Moving / empty property</option>
                  </select>
                </label>
                <label className="pc-upload">
                  Photos help us quote accurately
                  <input type="file" accept="image/*" multiple />
                </label>
                <div className="pc-form-actions">
                  <button type="button" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <button type="button" onClick={() => setStep(3)}>
                    Continue →
                  </button>
                </div>
              </>
            ) : null}
            {step === 3 ? (
              <>
                <label>
                  Name
                  <input required autoComplete="name" />
                </label>
                <label>
                  Email
                  <input required type="email" autoComplete="email" />
                </label>
                <label>
                  Phone
                  <input required type="tel" autoComplete="tel" />
                </label>
                <label>
                  Preferred reply
                  <select>
                    <option>WhatsApp</option>
                    <option>Phone call</option>
                    <option>Email</option>
                  </select>
                </label>
                <label className="pc-notes">
                  Anything else?
                  <textarea
                    rows={3}
                    placeholder="Access, priorities or timing"
                  />
                </label>
                <div className="pc-form-actions">
                  <button type="button" onClick={() => setStep(2)}>
                    ← Back
                  </button>
                  <button>Prepare quote request →</button>
                </div>
              </>
            ) : null}
          </form>
        )}
      </section>
      <footer className="pc-footer">
        <div>
          <b>PRESTIGE CLEANS</b>
          <span>Tailored cleaning</span>
        </div>
        <p>Detailed cleans. Clear communication. A finish you can see.</p>
        <a href="#pc-quote">Get a quote ↑</a>
      </footer>
      <a className="pc-mobile-cta" href="#pc-quote">
        REQUEST A QUOTE
      </a>
    </div>
  );
}
