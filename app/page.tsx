"use client";

import { FormEvent, useMemo, useState } from "react";

type Theme = "earth" | "premium" | "bright";
type ProjectType = "All" | "Garden design" | "Patios" | "Planting";

const projects = [
  { title: "The entertaining garden", type: "Patios", place: "Huntingdon", image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1100&q=85" },
  { title: "A softer family space", type: "Garden design", place: "St Neots", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1100&q=85" },
  { title: "Four-season borders", type: "Planting", place: "Cambridge", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1100&q=85" },
  { title: "Courtyard reset", type: "Garden design", place: "Peterborough", image: "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1100&q=85" },
];

const serviceCopy = [
  ["01", "Garden design", "A considered plan shaped around how you want to use the space, from first sketch to planting palette."],
  ["02", "Patios & paths", "Hard landscaping that feels at home in the garden and stands up to everyday family life."],
  ["03", "Planting", "Layered, low-fuss planting plans designed to look good beyond one short season."],
];

export default function Home() {
  const [theme, setTheme] = useState<Theme>("earth");
  const [improved, setImproved] = useState(true);
  const [filter, setFilter] = useState<ProjectType>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [postcode, setPostcode] = useState("");
  const [areaResult, setAreaResult] = useState<string | null>(null);
  const [quoteStep, setQuoteStep] = useState(1);
  const [quoteSent, setQuoteSent] = useState(false);

  const filteredProjects = useMemo(
    () => filter === "All" ? projects : projects.filter((project) => project.type === filter),
    [filter]
  );

  const checkArea = (event: FormEvent) => {
    event.preventDefault();
    const clean = postcode.trim().toUpperCase();
    if (!clean) return setAreaResult("Pop in the first part of your postcode.");
    setAreaResult(/^(PE|CB|NN)/.test(clean)
      ? "Good news — this is within our usual working area."
      : "You may be just outside our usual area, but send it over and we’ll check.");
  };

  return (
    <main className={`site theme-${theme} ${improved ? "is-improved" : "is-weak"}`}>
      <aside className="demo-bar" aria-label="Website Mill demonstration controls">
        <div className="demo-brand"><span className="demo-dot" /><div><strong>Website Mill Demo Lab</strong><small>Explore the decisions behind the page</small></div></div>
        <div className="demo-controls">
          <div className="theme-switch" aria-label="Choose brand style">
            {(["earth", "premium", "bright"] as Theme[]).map((item) => <button key={item} className={theme === item ? "active" : ""} onClick={() => setTheme(item)}><span className={`swatch ${item}`} />{item}</button>)}
          </div>
          <button className="compare-button" onClick={() => setImproved(!improved)}><span>{improved ? "Optimised site" : "Weak site"}</span><b>{improved ? "View before" : "Show the fix"} →</b></button>
        </div>
      </aside>

      <header className="site-header">
        <a className="logo" href="#top" aria-label="Oak and Stone home"><span className="logo-mark">O<span>&</span>S</span><span><strong>Oak & Stone</strong><small>Landscapes</small></span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}><span /><span /><span /><em>Menu</em></button>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#work" onClick={() => setMenuOpen(false)}>Our work</a><a href="#process" onClick={() => setMenuOpen(false)}>How it works</a><a href="#quote" className="nav-cta" onClick={() => setMenuOpen(false)}>Plan your garden</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Landscaped garden with natural planting" /><div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow improved-only">Thoughtful landscaping across Cambridgeshire</p><p className="eyebrow weak-only">Welcome to our website</p>
          <h1 className="improved-only">A garden that feels like part of your home.</h1><h1 className="weak-only">Quality garden and landscaping services</h1>
          <p className="hero-copy improved-only">Designed around real life. Built with care. Planted to become better with every season.</p><p className="hero-copy weak-only">We offer a range of professional services at competitive prices. Contact us for more information.</p>
          <div className="hero-actions"><a href="#quote" className="primary-button">Start your garden plan <span>→</span></a><a href="#work" className="text-link improved-only">Explore recent work <span>↘</span></a></div>
          <div className="trust-row improved-only"><span><b>15+</b> years shaping gardens</span><span><b>4.9</b> average client rating</span><span><b>Local</b> independent team</span></div>
        </div>
        <div className="hero-note improved-only"><span>01</span><p><b>Designed for how you live</b><br />Not just how it looks on day one.</p></div>
      </section>

      <section className="marquee" aria-label="Key services"><div>Garden design <span>✦</span> Patios & paths <span>✦</span> Planting plans <span>✦</span> Complete transformations <span>✦</span></div></section>

      <section className="intro section" id="services">
        <div className="section-heading"><p className="eyebrow">What we do</p><h2>Good gardens begin with better questions.</h2></div>
        <div className="intro-copy"><p>Before we talk materials or plants, we learn how you want the garden to work. Morning coffee? Football goals? Long summer tables? The plan starts there.</p><a href="#process" className="text-link">See our approach <span>→</span></a></div>
        <div className="services-grid">{serviceCopy.map(([number, title, copy]) => <article className="service-card" key={title}><span>{number}</span><div className="service-icon" aria-hidden="true">⌁</div><h3>{title}</h3><p>{copy}</p><a href="#quote" aria-label={`Ask about ${title}`}>Ask about this <b>↗</b></a></article>)}</div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading split-heading"><div><p className="eyebrow">Selected work</p><h2>Spaces made for living.</h2></div><p>Use the filters to explore a few of the ways we help turn overlooked outdoor space into somewhere worth spending time.</p></div>
        <div className="filters" aria-label="Filter projects">{(["All", "Garden design", "Patios", "Planting"] as ProjectType[]).map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div>
        <div className="project-grid">{filteredProjects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.title}><img src={project.image} alt={`${project.title} landscaping project`} /><div className="project-info"><p>{project.type} · {project.place}</p><h3>{project.title}</h3><button>View story <span>↗</span></button></div></article>)}</div>
      </section>

      <section className="before-after section">
        <div className="before-copy"><p className="eyebrow">The transformation</p><h2>From unused corner to the best seat in the house.</h2><p>A small garden does not need small ideas. This courtyard gained clear zones, layered planting and a reason to step outside.</p><div className="stat"><strong>6</strong><span>weeks from first dig<br />to final planting</span></div></div>
        <div className="comparison-card"><div className="comparison-images"><figure><img src="https://images.unsplash.com/photo-1599685315640-9ceab2f581ca?auto=format&fit=crop&w=900&q=80" alt="Garden before landscaping" /><figcaption>Before</figcaption></figure><figure><img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=85" alt="Garden after landscaping" /><figcaption>After</figcaption></figure></div><p><span>Before and after story</span><b>01 / 02</b></p></div>
      </section>

      <section className="process section" id="process"><div className="section-heading"><p className="eyebrow">A clear process</p><h2>No mystery. No disappearing trades.</h2></div><div className="process-list">{[["01", "Talk", "Tell us what is working, what is not, and what you want the garden to make possible."],["02", "Plan", "We measure, sketch and agree the materials, planting and practical details before work begins."],["03", "Build", "A tidy, respectful team brings the plan to life, with clear updates as the garden changes."],["04", "Grow", "We hand over simple care guidance so the space keeps improving after the tools are packed away."]].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="testimonial section"><div className="quote-mark">“</div><blockquote>They understood that we didn’t want a show garden. We wanted somewhere the children could play, friends could stay late and we could actually look after.</blockquote><div className="client"><span>JM</span><p><b>Jess & Mark</b><br />Family garden, St Neots</p></div></section>

      <section className="area section"><div><p className="eyebrow">Are we local to you?</p><h2>Check your area.</h2><p>We usually work across Cambridgeshire and neighbouring towns.</p></div><form onSubmit={checkArea}><label htmlFor="postcode">First part of your postcode</label><div><input id="postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="e.g. PE28" /><button>Check area →</button></div>{areaResult && <p className="area-result" role="status">{areaResult}</p>}</form></section>

      <section className="quote-section section" id="quote">
        <div className="quote-intro"><p className="eyebrow">Start a conversation</p><h2>What could your garden become?</h2><p>A few details help us understand the scale of your idea. This demo form does not send or store information.</p></div>
        <div className="quote-form">{!quoteSent ? <><div className="step-top"><span>Step {quoteStep} of 2</span><div><i className="done" /><i className={quoteStep === 2 ? "done" : ""} /></div></div>{quoteStep === 1 ? <div className="form-step"><h3>What would you like help with?</h3><div className="choice-grid">{["A full redesign", "Patio or paths", "Planting", "I’m not sure yet"].map((x) => <button key={x} onClick={() => setQuoteStep(2)}>{x}<span>→</span></button>)}</div></div> : <form className="form-step" onSubmit={(e) => { e.preventDefault(); setQuoteSent(true); }}><h3>Where should we send your demo summary?</h3><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><button className="primary-button" type="submit">Complete demo enquiry →</button><button className="back-button" type="button" onClick={() => setQuoteStep(1)}>← Back</button></form>}</> : <div className="success"><span>✓</span><h3>Demo journey complete.</h3><p>In a real project, this is where the business receives a clear, useful enquiry rather than “Hi, how much?”</p><button onClick={() => { setQuoteSent(false); setQuoteStep(1); }}>Run it again</button></div>}</div>
      </section>

      <footer><a className="logo footer-logo" href="#top"><span className="logo-mark">O<span>&</span>S</span><span><strong>Oak & Stone</strong><small>Landscapes</small></span></a><div><p>Cambridgeshire garden design and landscaping</p><a href="mailto:hello@example.com">hello@oakandstone.demo</a><a href="tel:01234567890">01234 567 890</a></div><div><a href="#services">Services</a><a href="#work">Our work</a><a href="#process">Process</a></div><div className="demo-credit"><b>Fictional demo project</b><p>Built by The Website Mill to demonstrate customer journeys, responsive design and conversion thinking.</p><a href="https://thewebsitemill.co.uk">Visit The Website Mill ↗</a></div><p className="copyright">© 2026 Oak & Stone Demo. No real business or customer data.</p></footer>
    </main>
  );
}
