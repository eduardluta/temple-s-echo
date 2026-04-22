// Generate a standalone HTML replica of the Hebrew site.
// Single self-contained file — opens in any browser offline.
// Run with: npx tsx scripts/generate-he-html.ts

import * as fs from "fs";
import storyContentHE from "../src/data/story-content-he";
import { privacyContent } from "../src/data/privacy-content";
import heJson from "../src/i18n/locales/he.json";

const he = heJson as any;
const privacy = privacyContent.he;

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const p = (text: string) => `      <p>${escape(text)}</p>`;

const sceneHtml = storyContentHE.scenes
  .map((scene) => {
    const body = scene.body.map((b) => p(b)).join("\n");
    const measurements =
      scene.measurements && scene.measurements.length
        ? `<div class="measurements">${scene.measurements
            .map((m) => `<div>${escape(m)}</div>`)
            .join("")}</div>`
        : "";
    const quote = scene.quote
      ? `<blockquote><p>${escape(scene.quote)}</p>${
          scene.quoteCite
            ? `<cite>— ${escape(scene.quoteCite)}</cite>`
            : ""
        }</blockquote>`
      : "";
    return `
    <article class="scene" id="${scene.id}">
      <div class="scene-header">
        <span class="scene-num">${escape(scene.num)}</span>
        <h2>${escape(scene.title)}</h2>
        ${scene.subtitle ? `<span class="subtitle">${escape(scene.subtitle)}</span>` : ""}
      </div>
${body}
${measurements}
${quote}
    </article>`;
  })
  .join("\n    <div class=\"scene-divider\">✦</div>");

const sourcesHtml = storyContentHE.sources.groups
  .map(
    (g) => `
      <div class="source-group">
        <h3>${escape(g.heading)}</h3>
        <ul>
          ${g.items.map((item) => `<li>${escape(item)}</li>`).join("\n          ")}
        </ul>
      </div>`,
  )
  .join("\n");

const html = `<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escape(he.meta.title)}</title>
  <meta name="description" content="${escape(he.meta.description)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;700;900&family=Heebo:wght@300;400;500;700&display=swap"
  />
  <style>
    :root {
      --bg: hsl(38, 30%, 96%);
      --card: hsl(38, 25%, 98%);
      --ink: hsl(222, 35%, 12%);
      --muted: hsl(222, 20%, 42%);
      --gold: hsl(45, 85%, 48%);
      --gold-light: hsl(45, 85%, 62%);
      --gold-dark: hsl(41, 72%, 30%);
      --midnight: hsl(222, 40%, 10%);
      --parchment-dark: hsl(35, 25%, 88%);
      --border: hsl(38, 20%, 82%);
      --text-on-dark: hsl(38, 40%, 92%);
      --radius: 0.375rem;
      --shadow: 0 4px 24px -4px hsla(45, 85%, 48%, 0.35);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Frank Ruhl Libre', 'David', Georgia, serif;
      color: var(--ink);
      background: var(--bg);
      line-height: 1.75;
      font-size: 17px;
    }

    .font-ui { font-family: 'Heebo', system-ui, sans-serif; }

    /* Nav */
    nav {
      position: sticky;
      top: 0;
      z-index: 50;
      background: hsla(222, 40%, 10%, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid hsla(45, 85%, 48%, 0.2);
    }
    nav .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }
    nav .brand {
      color: var(--text-on-dark);
      font-family: 'Heebo', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0.05em;
    }
    nav ul {
      display: flex;
      gap: 24px;
      list-style: none;
      font-family: 'Heebo', sans-serif;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    nav a {
      color: hsla(38, 40%, 92%, 0.7);
      text-decoration: none;
      transition: color 0.2s;
    }
    nav a:hover { color: var(--gold); }

    /* Containers */
    .container { max-width: 860px; margin: 0 auto; padding: 0 24px; }

    /* Hero */
    .hero {
      background: linear-gradient(180deg, hsl(222, 40%, 7%) 0%, hsl(222, 38%, 14%) 60%, hsl(222, 35%, 18%) 100%);
      color: var(--text-on-dark);
      padding: 120px 24px 80px;
      text-align: center;
    }
    .hero .eyebrow {
      font-family: 'Heebo', sans-serif;
      color: var(--gold);
      text-transform: uppercase;
      letter-spacing: 0.35em;
      font-size: 11px;
      margin-bottom: 24px;
    }
    .hero h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 900;
      line-height: 1.15;
      margin-bottom: 16px;
    }
    .hero .hebrew {
      font-size: clamp(1.75rem, 4vw, 3rem);
      color: var(--gold);
      margin-bottom: 24px;
    }
    .hero .ornament {
      color: hsla(45, 85%, 62%, 0.4);
      letter-spacing: 0.3em;
      margin-bottom: 20px;
    }
    .hero .subtitle {
      font-style: italic;
      max-width: 640px;
      margin: 0 auto 32px;
      color: hsla(38, 40%, 92%, 0.8);
      font-size: 1.1rem;
    }
    .hero .description {
      max-width: 640px;
      margin: 0 auto 24px;
      color: hsla(38, 40%, 92%, 0.7);
    }
    .hero .credit {
      font-style: italic;
      max-width: 560px;
      margin: 0 auto;
      color: hsla(38, 40%, 92%, 0.5);
      font-size: 0.9rem;
    }

    /* Section */
    section { padding: 80px 24px; }
    section.alt { background: var(--card); border-block: 1px solid hsla(45, 85%, 48%, 0.15); }

    .section-label {
      font-family: 'Heebo', sans-serif;
      color: var(--gold);
      text-transform: uppercase;
      letter-spacing: 0.3em;
      font-size: 11px;
      text-align: center;
      margin-bottom: 12px;
    }
    .section-title {
      text-align: center;
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 700;
      margin-bottom: 24px;
    }
    .gold-divider {
      width: 64px;
      height: 2px;
      background: linear-gradient(90deg, hsl(45, 85%, 42%), hsl(40, 90%, 55%), hsl(45, 85%, 48%));
      margin: 0 auto 40px;
      border-radius: 1px;
    }

    .intro-text {
      max-width: 720px;
      margin: 0 auto;
      font-size: 1.1rem;
      text-align: center;
    }

    /* Feature cards */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 32px;
      margin-top: 56px;
    }
    .feature-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 24px;
      transition: border-color 0.2s;
    }
    .feature-card:hover { border-color: hsla(45, 85%, 48%, 0.5); }
    .feature-card .cat {
      color: var(--gold);
      font-family: 'Heebo', sans-serif;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 8px;
    }
    .feature-card h3 {
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 12px;
      color: var(--midnight);
    }
    .feature-card p {
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.75;
    }

    /* Quote banner */
    .quote-banner {
      background: var(--midnight);
      color: var(--text-on-dark);
      padding: 80px 24px;
      text-align: center;
    }
    .quote-banner blockquote {
      font-size: 1.4rem;
      font-style: italic;
      max-width: 720px;
      margin: 0 auto;
      color: var(--text-on-dark);
    }

    /* Story page */
    .story-hero {
      background: linear-gradient(180deg, hsl(222, 40%, 7%), hsl(222, 38%, 12%));
      color: var(--text-on-dark);
      padding: 100px 24px 60px;
      text-align: center;
    }
    .story-hero .eyebrow { color: var(--gold); text-transform: uppercase; letter-spacing: 0.35em; font-size: 11px; margin-bottom: 16px; }
    .story-hero h1 { font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 16px; }
    .story-hero .hebrew { color: var(--gold); font-size: clamp(1.5rem, 3.5vw, 2.5rem); margin-bottom: 24px; }
    .story-hero .subtitle { font-style: italic; color: hsla(38, 40%, 92%, 0.6); max-width: 600px; margin: 0 auto; }

    .story-body { max-width: 860px; margin: 0 auto; padding: 0 24px 80px; }

    .scene { margin-top: 72px; }
    .scene-header {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 16px;
      padding-bottom: 12px;
      margin-bottom: 20px;
      border-bottom: 1px solid var(--border);
    }
    .scene-num {
      font-family: 'Heebo', sans-serif;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.3em;
      color: var(--gold);
    }
    .scene-header h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--ink);
    }
    .scene-header .subtitle {
      font-style: italic;
      color: var(--gold);
      margin-inline-start: auto;
    }

    .scene p { margin: 0 0 16px; font-size: 1.05rem; line-height: 1.85; color: hsla(222, 35%, 12%, 0.85); }

    .measurements {
      background: hsla(45, 85%, 48%, 0.06);
      border-inline-start: 3px solid var(--gold);
      padding: 12px 20px;
      margin: 20px 0;
      font-size: 0.9rem;
      color: hsla(222, 35%, 12%, 0.7);
      line-height: 1.8;
    }

    blockquote {
      border-block: 1px solid var(--border);
      padding: 18px 24px;
      margin: 20px 0;
      font-style: italic;
      color: hsla(222, 35%, 12%, 0.75);
      font-size: 1rem;
    }
    blockquote cite {
      display: block;
      margin-top: 8px;
      font-family: 'Heebo', sans-serif;
      font-size: 11px;
      font-style: normal;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--gold);
    }

    .scene-divider {
      text-align: center;
      color: hsla(45, 85%, 62%, 0.5);
      margin: 64px 0 0;
    }

    /* Sources */
    .sources {
      max-width: 1000px;
      margin: 96px auto 0;
      padding: 48px 24px 0;
      border-top: 1px solid var(--border);
    }
    .sources .star { text-align: center; color: var(--gold); font-size: 1.25rem; margin-bottom: 8px; }
    .sources-grid {
      columns: 1;
      column-gap: 24px;
      margin-top: 40px;
    }
    @media (min-width: 640px) { .sources-grid { columns: 2; } }
    @media (min-width: 1024px) { .sources-grid { columns: 3; } }

    .source-group {
      break-inside: avoid;
      background: hsla(45, 85%, 48%, 0.04);
      border: 1px solid hsla(45, 85%, 48%, 0.2);
      border-radius: var(--radius);
      padding: 16px 20px;
      margin-bottom: 24px;
    }
    .source-group h3 {
      font-family: 'Heebo', sans-serif;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--gold);
      padding-bottom: 8px;
      border-bottom: 1px solid hsla(45, 85%, 48%, 0.2);
      margin-bottom: 12px;
    }
    .source-group ul {
      list-style: none;
      font-size: 0.9rem;
      color: hsla(222, 35%, 12%, 0.8);
    }
    .source-group li { margin-bottom: 6px; line-height: 1.4; }

    .sources-total {
      text-align: center;
      color: var(--muted);
      font-style: italic;
      margin-top: 40px;
      font-size: 0.9rem;
    }

    /* Closing */
    .closing {
      margin: 80px auto 0;
      max-width: 860px;
      padding: 48px;
      background: var(--midnight);
      color: var(--text-on-dark);
      border: 1px solid hsla(45, 85%, 48%, 0.2);
      border-radius: var(--radius);
      text-align: center;
    }
    .closing .star { color: var(--gold); font-size: 1.6rem; margin-bottom: 16px; }
    .closing p { font-size: 1.1rem; line-height: 1.75; color: var(--text-on-dark); }
    .closing .he { color: var(--gold); font-style: italic; }
    .closing .divider { height: 2px; width: 64px; background: linear-gradient(90deg, hsl(45, 85%, 42%), hsl(40, 90%, 55%)); margin: 24px auto 0; border-radius: 1px; }

    /* Contact */
    .contact-block {
      max-width: 640px;
      margin: 0 auto;
    }
    .form-preview { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 32px; margin-top: 24px; }
    .field { margin-bottom: 20px; }
    .field-label { font-family: 'Heebo', sans-serif; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 6px; }
    .field-input {
      display: block;
      padding: 10px 14px;
      background: white;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      color: var(--muted);
      font-style: italic;
    }
    .btn {
      display: inline-block;
      padding: 14px 32px;
      background: linear-gradient(135deg, hsl(45, 85%, 42%), hsl(40, 90%, 55%));
      color: var(--midnight);
      font-family: 'Heebo', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.9rem;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      text-decoration: none;
      border: none;
      cursor: pointer;
    }

    /* Legal pages */
    .legal-section { max-width: 720px; margin: 0 auto; padding: 80px 24px; }
    .legal-section h1 { font-size: 2rem; margin-bottom: 32px; }
    .legal-section h2 { font-size: 1.4rem; margin: 32px 0 12px; color: var(--midnight); }
    .legal-section h3 { font-size: 1.1rem; margin: 24px 0 8px; font-weight: 700; }
    .legal-section p { margin-bottom: 16px; color: hsla(222, 35%, 12%, 0.8); }
    .legal-section ul { margin: 16px 0; padding-inline-start: 24px; }
    .legal-section li { margin-bottom: 10px; color: hsla(222, 35%, 12%, 0.8); }
    .company-block {
      padding-inline-start: 16px;
      border-inline-start: 2px solid var(--gold);
      margin: 12px 0 24px;
    }
    .company-block p { margin-bottom: 4px; }

    /* Footer */
    footer {
      background: var(--midnight);
      color: var(--text-on-dark);
      padding: 40px 24px;
      border-top: 1px solid hsla(45, 85%, 48%, 0.2);
    }
    footer .container { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px; max-width: 1200px; }
    footer .brand { color: var(--gold); font-weight: 700; }
    footer p { font-family: 'Heebo', sans-serif; font-size: 0.75rem; color: hsla(38, 40%, 92%, 0.4); }
    footer nav.legal { display: flex; gap: 32px; }
    footer nav.legal a {
      font-family: 'Heebo', sans-serif;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: hsla(38, 40%, 92%, 0.6);
      text-decoration: none;
    }
    footer nav.legal a:hover { color: var(--gold); }

    /* Page separator for different sections */
    .page-break {
      height: 8px;
      background: linear-gradient(90deg, transparent, var(--gold) 50%, transparent);
      opacity: 0.4;
      margin: 0;
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav>
    <div class="container">
      <a href="#home" class="brand">${escape(he.meta.siteName)}</a>
      <ul>
        <li><a href="#home">${escape(he.nav.home)}</a></li>
        <li><a href="#story">${escape(he.nav.theStory)}</a></li>
        <li><a href="#contact">${escape(he.nav.contact)}</a></li>
        <li><a href="#impressum">${escape(he.footer.impressum)}</a></li>
        <li><a href="#privacy">${escape(he.footer.privacy)}</a></li>
      </ul>
    </div>
  </nav>

  <!-- HOMEPAGE -->
  <section id="home" class="hero" style="padding-top:64px">
    <p class="eyebrow">${escape(he.hero.tagline)}</p>
    <h1>${escape(he.hero.title)}</h1>
    <div class="hebrew">${escape(he.hero.hebrew)}</div>
    <div class="ornament">✦ ✦ ✦</div>
    <p class="subtitle">${escape(he.hero.subtitle)}</p>
    <p class="description">${escape(he.hero.description)}</p>
    <p class="credit">${escape(he.hero.credit)}</p>
  </section>

  <section id="intro" class="alt">
    <div class="container">
      <p class="section-label">${escape(he.video.label)}</p>
      <h2 class="section-title">${escape(he.intro.title)}</h2>
      <div class="gold-divider"></div>
      <p class="intro-text">${escape(he.intro.text)}</p>
    </div>
  </section>

  <section id="features">
    <div class="container" style="max-width:1100px">
      <p class="section-label">${escape(he.features.label)}</p>
      <h2 class="section-title">${escape(he.features.title)}</h2>
      <div class="gold-divider"></div>
      <div class="features">
        ${[he.features.card1, he.features.card2, he.features.card3]
          .map(
            (c: any) => `
        <div class="feature-card">
          <div class="cat">${escape(c.category)}</div>
          <h3>${escape(c.title)}</h3>
          <p>${escape(c.text)}</p>
        </div>`,
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="quote-banner">
    <blockquote>${escape(he.quoteBanner.quote)}</blockquote>
  </section>

  <div class="page-break"></div>

  <!-- STORY -->
  <section id="story" style="padding:0">
    <header class="story-hero">
      <p class="eyebrow">${escape(he.blog.label)}</p>
      <h1>${escape(storyContentHE.title)}</h1>
      <div class="hebrew">${escape(storyContentHE.hebrew)}</div>
      <p class="subtitle">${escape(storyContentHE.subtitle)}</p>
    </header>

    <main class="story-body">
${sceneHtml}

      <!-- Sources -->
      <div class="sources">
        <div class="star">✦</div>
        <h2 class="section-title">${escape(storyContentHE.sources.title)}</h2>
        <div class="gold-divider"></div>
        <p style="text-align:center; color:var(--muted); font-style:italic;">${escape(storyContentHE.sources.intro)}</p>
        <div class="sources-grid">
${sourcesHtml}
        </div>
        <p class="sources-total">${escape(storyContentHE.sources.total)}</p>
      </div>

      <!-- Closing -->
      <div class="closing">
        <div class="star">✦</div>
        <p>${escape(storyContentHE.closing)} <em class="he">${escape(storyContentHE.closingHebrew)}</em> — ${escape(storyContentHE.closingTranslation)}</p>
        <div class="divider"></div>
      </div>
    </main>
  </section>

  <div class="page-break"></div>

  <!-- CONTACT -->
  <section id="contact" class="alt">
    <div class="container">
      <p class="section-label">${escape(he.contact.label)}</p>
      <h2 class="section-title">${escape(he.contact.title)}</h2>
      <div class="gold-divider"></div>
      <p class="intro-text">${escape(he.contact.subtitle)}</p>

      <div class="contact-block">
        <div class="form-preview">
          <div class="field">
            <div class="field-label">${escape(he.contact.name)}</div>
            <div class="field-input">${escape(he.contact.namePlaceholder)}</div>
          </div>
          <div class="field">
            <div class="field-label">${escape(he.contact.email)}</div>
            <div class="field-input">${escape(he.contact.emailPlaceholder)}</div>
          </div>
          <div class="field">
            <div class="field-label">${escape(he.contact.message)}</div>
            <div class="field-input" style="min-height:120px">${escape(he.contact.messagePlaceholder)}</div>
          </div>
          <button class="btn">${escape(he.contact.send)}</button>
          <p style="margin-top:16px; text-align:center; font-size:0.8rem; color:var(--muted)">${escape(he.contact.privacy)}</p>
        </div>
      </div>
    </div>
  </section>

  <div class="page-break"></div>

  <!-- IMPRESSUM -->
  <section id="impressum" class="legal-section">
    <h1>${escape(he.impressum.title)}</h1>
    <p>${escape(he.impressum.companyLabel)} <strong>${escape(he.impressum.company)}</strong></p>
    <div class="company-block">
      <p>${escape(he.impressum.address)}</p>
      <p>${escape(he.impressum.city)}</p>
      <p>${escape(he.impressum.country)}</p>
      <p style="margin-top:12px">${escape(he.impressum.phone)} · ${escape(he.impressum.email)}</p>
      <p>${escape(he.impressum.website)}</p>
    </div>
    <h2>${escape(he.impressum.liability.title)}</h2>
    <p>${escape(he.impressum.liability.text)}</p>
    <h2>${escape(he.impressum.copyright.title)}</h2>
    <p>${escape(he.impressum.copyright.text)}</p>
    <h2>${escape(he.impressum.email_comm.title)}</h2>
    <p>${escape(he.impressum.email_comm.text)}</p>
  </section>

  <div class="page-break"></div>

  <!-- PRIVACY POLICY -->
  <section id="privacy" class="legal-section">
    <h1>${escape(privacy.title)}</h1>

    <h2>${escape(privacy.s1_title)}</h2>
    <h3>${escape(privacy.s1_general_title)}</h3>
    <p>${escape(privacy.s1_general_text)}</p>
    <p><strong>${escape(privacy.s1_data_label)}</strong></p>

    <h3>${escape(privacy.s1_who_title)}</h3>
    <p>${escape(privacy.s1_who_text)}</p>
    <h3>${escape(privacy.s1_how_title)}</h3>
    <p>${escape(privacy.s1_how_text)}</p>
    <h3>${escape(privacy.s1_purpose_title)}</h3>
    <p>${escape(privacy.s1_purpose_text)}</p>
    <h3>${escape(privacy.s1_rights_title)}</h3>
    <p>${escape(privacy.s1_rights_text1)}</p>
    <p>${escape(privacy.s1_rights_text2)}</p>

    <h2>${escape(privacy.s2_title)}</h2>
    <h3>${escape(privacy.s2_privacy_title)}</h3>
    <p>${escape(privacy.s2_privacy_text1)}</p>
    <p>${escape(privacy.s2_privacy_text2)}</p>
    <p>${escape(privacy.s2_privacy_text3)}</p>

    <h3>${escape(privacy.s2_responsible_title)}</h3>
    <p>${escape(privacy.s2_responsible_intro)}</p>
    <div class="company-block">
      <p>Becker Innovation</p>
      <p>Mutschellenstrasse 163</p>
      <p>8038 Zürich</p>
      <p>${escape(privacy.s2_responsible_country)}</p>
      <p>${escape(privacy.s2_responsible_phone)}</p>
      <p>${escape(privacy.s2_responsible_email)}</p>
    </div>
    <p>${escape(privacy.s2_responsible_note)}</p>

    <h3>${escape(privacy.s2_revocation_title)}</h3>
    <p>${escape(privacy.s2_revocation_text)}</p>
    <h3>${escape(privacy.s2_objection_title)}</h3>
    <p>${escape(privacy.s2_objection_text1)}</p>
    <p>${escape(privacy.s2_objection_text2)}</p>
    <h3>${escape(privacy.s2_complaint_title)}</h3>
    <p>${escape(privacy.s2_complaint_text)}</p>
    <h3>${escape(privacy.s2_portability_title)}</h3>
    <p>${escape(privacy.s2_portability_text)}</p>
    <h3>${escape(privacy.s2_ssl_title)}</h3>
    <p>${escape(privacy.s2_ssl_text1)}</p>
    <p>${escape(privacy.s2_ssl_text2)}</p>
    <h3>${escape(privacy.s2_access_title)}</h3>
    <p>${escape(privacy.s2_access_text)}</p>
    <h3>${escape(privacy.s2_restriction_title)}</h3>
    <p>${escape(privacy.s2_restriction_intro)}</p>
    <ul>
      <li>${escape(privacy.s2_restriction_li1)}</li>
      <li>${escape(privacy.s2_restriction_li2)}</li>
      <li>${escape(privacy.s2_restriction_li3)}</li>
      <li>${escape(privacy.s2_restriction_li4)}</li>
    </ul>
    <p>${escape(privacy.s2_restriction_closing)}</p>

    <h2>${escape(privacy.s3_title)}</h2>
    <h3>${escape(privacy.s3_cookies_title)}</h3>
    <p>${escape(privacy.s3_cookies_text1)}</p>
    <p>${escape(privacy.s3_cookies_text2)}</p>
    <p>${escape(privacy.s3_cookies_text3)}</p>
    <p>${escape(privacy.s3_cookies_text4)}</p>
    <h3>${escape(privacy.s3_logs_title)}</h3>
    <p>${escape(privacy.s3_logs_intro)}</p>
    <ul>
      ${privacy.s3_logs_items.map((i: string) => `<li>${escape(i)}</li>`).join("\n      ")}
    </ul>
    <p>${escape(privacy.s3_logs_closing)}</p>
    <h3>${escape(privacy.s3_contact_title)}</h3>
    <p>${escape(privacy.s3_contact_text1)}</p>
    <p>${escape(privacy.s3_contact_text2)}</p>
    <p>${escape(privacy.s3_contact_text3)}</p>
  </section>

  <footer>
    <div class="container">
      <div class="brand">${escape(he.meta.siteName)}</div>
      <p>© ${new Date().getFullYear()} Becker Innovation</p>
      <nav class="legal">
        <a href="#impressum">${escape(he.footer.impressum)}</a>
        <a href="#privacy">${escape(he.footer.privacy)}</a>
      </nav>
    </div>
  </footer>
</body>
</html>
`;

const outputPath = "public/Salomon_Tempel_HE.html";
fs.writeFileSync(outputPath, html);
console.log(`✓ Generated ${outputPath} (${(html.length / 1024).toFixed(1)} KB)`);
