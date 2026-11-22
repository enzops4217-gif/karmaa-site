/* Générateur des pages Guides et pages légales (EN + FR).
   Le dossier _build/ n'est pas publié par GitHub Pages (Jekyll ignore les dossiers en "_").
   Lancer : node _build/build.js   (depuis la racine du site)
   Les pages produites sont du HTML statique : on peut les relire et les modifier à la main,
   mais une nouvelle génération les écrase. */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://karmaaoptimizer.com';
const STRIPE = 'https://buy.stripe.com/28EcN5eMxgVM5wy5SP53O06';
const DISCORD = 'https://discord.gg/6hES7Hn3u7';
const TODAY = '2026-11-22';
const DATE = { en: 'November 22, 2026', fr: '22 novembre 2026' };
const CSSV = 25;

const GUIDES = [
  require('./guides/input-lag'),
  require('./guides/windows-11-settings'),
  require('./guides/ryzen-x3d'),
  require('./guides/polling-rate'),
  require('./guides/usb-port'),
  require('./guides/boost-fps'),
];
const LEGAL = require('./legal');

const T = {
  en: {
    locale: 'en_US', altLocale: 'fr_FR', home: '/', guides: '/guides/', og: '/assets/og-en.jpg?v=50',
    skip: 'Skip to content', mainNav: 'Main navigation', footNav: 'Footer navigation', legalNav: 'Legal',
    nav: [['Guides', '/guides/'], ['Features', '/#features'], ['Price', '/#offre'], ['FAQ', '/#faq']],
    buyTop: 'Buy · €50', buy: 'Buy for €50', seeApp: 'See the app',
    footP: 'A Windows optimizer for gamers. 250 reversible tweaks, nothing injected.',
    footHelp: 'Help on Discord, 7 days a week', other: 'Version française', otherShort: 'FR', otherTitle: 'Version française',
    crumbHome: 'Home', crumbGuides: 'Guides', updated: 'Updated', read: 'min read', related: 'Related guides',
    legal: [['Legal notice', 'legal-notice'], ['Terms of sale', 'terms'], ['Privacy policy', 'privacy'], ['Refund policy', 'refund'], ['Contact', 'contact']],
    ctaTitle: 'Do it in one click with KarmaaOptimizer',
    toc: 'On this page', guide: 'Free guide', legalTag: 'Legal', readGuide: 'Read the guide', guidesCount: 'guides',
  },
  fr: {
    locale: 'fr_FR', altLocale: 'en_US', home: '/fr/', guides: '/fr/guides/', og: '/assets/og-fr.jpg?v=50',
    skip: 'Aller au contenu', mainNav: 'Navigation principale', footNav: 'Navigation du pied de page', legalNav: 'Informations légales',
    nav: [['Guides', '/fr/guides/'], ['Fonctionnalités', '/fr/#features'], ['Prix', '/fr/#offre'], ['FAQ', '/fr/#faq']],
    buyTop: 'Acheter · 50 €', buy: 'Acheter pour 50 €', seeApp: 'Voir l’app',
    footP: 'Un optimiseur Windows pour les joueurs. 250 réglages réversibles, rien d’injecté.',
    footHelp: 'De l’aide sur Discord, 7 jours sur 7', other: 'English version', otherShort: 'EN', otherTitle: 'English version',
    crumbHome: 'Accueil', crumbGuides: 'Guides', updated: 'Mis à jour le', read: 'min de lecture', related: 'Guides liés',
    legal: [['Mentions légales', 'mentions-legales'], ['CGV', 'cgv'], ['Confidentialité', 'confidentialite'], ['Remboursement', 'remboursement'], ['Contact', 'contact']],
    ctaTitle: 'Le faire en un clic avec KarmaaOptimizer',
    toc: 'Sur cette page', guide: 'Guide gratuit', legalTag: 'Informations légales', readGuide: 'Lire le guide', guidesCount: 'guides',
  },
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const other = (l) => (l === 'en' ? 'fr' : 'en');
const legalPath = (l, slug) => (l === 'en' ? `/legal/${slug}/` : `/fr/legal/${slug}/`);

function header(l, altHref, section) {
  const t = T[l];
  return `<header class="top">
  <a href="${t.home}" class="logo" aria-label="KarmaaOptimizer"><img src="/assets/logo.png?v=3" alt="" width="30" height="30">Karmaa<b>Optimizer</b></a>
  <nav aria-label="${t.mainNav}">${t.nav.map(([n, h]) => `<a href="${h}"${section && h === t.guides ? ' class="is-on"' : ''}>${n}</a>`).join('')}</nav>
  <a class="lang" href="${altHref}" hreflang="${other(l)}" lang="${other(l)}" title="${t.otherTitle}">${t.otherShort}</a>
  <a class="btn hide-sm" href="${STRIPE}" target="_blank" rel="noopener noreferrer"><span>${t.buyTop}</span></a>
</header>`;
}

function footer(l, altHref) {
  const t = T[l];
  return `<footer id="footer">
  <div class="foot-grid">
    <div class="foot-brand">
      <a href="${t.home}" class="logo"><img src="/assets/logo.png?v=3" alt="" width="30" height="30" loading="lazy">Karmaa<b>Optimizer</b></a>
      <p>${t.footP}</p>
    </div>
    <nav class="foot-nav" aria-label="${t.footNav}">${t.nav.map(([n, h]) => `<a href="${h}">${n}</a>`).join('')}</nav>
    <nav class="foot-nav" aria-label="${t.legalNav}">${t.legal.map(([n, s]) => `<a href="${legalPath(l, s)}">${n}</a>`).join('')}</nav>
    <div class="foot-side">
      <a href="${DISCORD}" target="_blank" rel="noopener noreferrer">Discord</a>
      <span>${t.footHelp}</span>
      <a href="${altHref}" hreflang="${other(l)}" lang="${other(l)}">${t.other}</a>
    </div>
  </div>
  <div class="foot"><span>© 2026 KarmaaOptimizer</span><span><time datetime="${TODAY}">${t.updated} ${DATE[l]}</time></span></div>
</footer>`;
}

function layout(p) {
  const t = T[p.lang];
  const url = SITE + p.path;
  const alt = SITE + p.altPath;
  const en = p.lang === 'en' ? url : alt;
  const fr = p.lang === 'fr' ? url : alt;
  const robots = p.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  const ld = p.jsonld ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': p.jsonld })}</script>\n` : '';
  return `<!doctype html>
<html lang="${p.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<script>document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[hreflang]');if(a)try{localStorage.setItem('ko-lang',a.getAttribute('hreflang'))}catch(_){}});</script>
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<meta name="robots" content="${robots}">
<meta name="theme-color" content="#000000">
<meta name="color-scheme" content="dark">
<meta name="author" content="KarmaaOptimizer">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="fr" href="${fr}">
<link rel="alternate" hreflang="en" href="${en}">
<link rel="alternate" hreflang="x-default" href="${en}">
<meta property="og:type" content="${p.ogType || 'website'}"><meta property="og:site_name" content="KarmaaOptimizer">
<meta property="og:title" content="${esc(p.title)}"><meta property="og:description" content="${esc(p.desc)}">
<meta property="og:url" content="${url}"><meta property="og:image" content="${SITE}${t.og}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:alt" content="KarmaaOptimizer">
<meta property="og:locale" content="${t.locale}"><meta property="og:locale:alternate" content="${t.altLocale}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(p.title)}"><meta name="twitter:description" content="${esc(p.desc)}"><meta name="twitter:image" content="${SITE}${t.og}">
<link rel="apple-touch-icon" href="/assets/logo.png?v=3">
<link rel="icon" href="/assets/logo.png?v=3">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css?v=${CSSV}">
${ld}</head>
<body>
<a class="skip" href="#main">${t.skip}</a>
${header(p.lang, p.altPath, p.section)}

<main id="main" class="doc-main">
${p.body}
</main>

${footer(p.lang, p.altPath)}
<script defer src="/js/checkout.js?v=2"></script>
<script defer src="/js/extras.js?v=3"></script>
<script defer src="/js/motion.js?v=1"></script>
</body>
</html>
`;
}

function crumbs(l, items) {
  // items : [[nom, chemin|null]]
  const html = `<nav class="crumbs" aria-label="Breadcrumb"><ol>${items.map(([n, h]) => (h ? `<li><a href="${h}">${n}</a></li>` : `<li aria-current="page">${n}</li>`)).join('')}</ol></nav>`;
  const ld = { '@type': 'BreadcrumbList', itemListElement: items.map(([n, h], i) => ({ '@type': 'ListItem', position: i + 1, name: n, ...(h ? { item: SITE + h } : {}) })) };
  return { html, ld };
}

function words(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').split(/\s+/).filter(Boolean).length;
}

function cta(l, text) {
  const t = T[l];
  return `<aside class="doc-cta glass" aria-labelledby="cta-h">
  <h2 id="cta-h">${t.ctaTitle}</h2>
  ${text}
  <div class="cta"><a class="btn" href="${STRIPE}" target="_blank" rel="noopener noreferrer"><span>${t.buy}</span></a><a class="btn ghost" href="${t.home}"><span>${t.seeApp}</span></a></div>
</aside>`;
}

const out = [];
function write(rel, html) {
  const file = path.join(ROOT, rel, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  out.push(rel);
}

/* ---------- Guides ---------- */
const byId = Object.fromEntries(GUIDES.map((g) => [g.id, g]));
const gPath = (l, g) => `${T[l].guides}${g.slug[l]}/`;
const stats = [];
const readMins = {};
// Sommaire : les titres <h2 id="…"> du corps du guide, texte sans balises
const tocItems = (html) => [...html.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)].map((m) => [m[1], m[2].replace(/<[^>]+>/g, '').trim()]);

for (const g of GUIDES) {
  for (const l of ['en', 'fr']) {
    const c = g[l];
    const t = T[l];
    const p = gPath(l, g);
    const cr = crumbs(l, [[t.crumbHome, t.home], [t.crumbGuides, t.guides], [c.short, null]]);
    const n = words(c.lede + " " + c.body + " " + c.cta);
    const mins = Math.max(4, Math.round(n / 220));
    const related = g.related.map((s) => `<li><a href="${gPath(l, byId[s])}">${byId[s][l].short}</a></li>`).join('');
    const toc = tocItems(c.body);
    const tocList = toc.map(([id, txt]) => `<li><a href="#${id}">${txt}</a></li>`).join('');
    const body = `<div class="doc-layout">
<article class="doc">
<header class="doc-head">
${cr.html}
<h1>${c.h1}</h1>
<p class="doc-meta"><span class="badge ac">${t.guide}</span><span class="badge">${t.updated} <time datetime="${TODAY}">${DATE[l]}</time></span><span class="badge">${mins} ${t.read}</span></p>
<p class="doc-lede">${c.lede}</p>
</header>
<details class="toc-m"><summary>${t.toc}</summary><ol>${tocList}</ol></details>
${c.body}
${cta(l, c.cta)}
<section class="doc-related" aria-labelledby="rel-h"><h2 id="rel-h">${t.related}</h2><ul>${related}</ul></section>
</article>
<nav class="toc" aria-label="${t.toc}"><p class="toc-t">${t.toc}</p><ol>${tocList}</ol></nav>
</div>`;
    readMins[g.id + l] = mins;
    const article = {
      '@type': 'Article', '@id': SITE + p + '#article', headline: c.h1, description: c.desc, inLanguage: l,
      datePublished: TODAY, dateModified: TODAY, mainEntityOfPage: SITE + p, image: SITE + t.og,
      author: { '@id': SITE + '/#org' }, publisher: { '@id': SITE + '/#org' }, wordCount: n,
    };
    const ld = [{ '@type': 'Organization', '@id': SITE + '/#org', name: 'KarmaaOptimizer', url: SITE + '/', logo: { '@type': 'ImageObject', url: SITE + '/assets/logo.png?v=3', width: 512, height: 512 } }, article, cr.ld];
    if (c.howto) ld.push({ '@type': 'HowTo', name: c.howto.name, inLanguage: l, totalTime: c.howto.time, step: c.howto.steps.map(([name, text, id], i) => ({ '@type': 'HowToStep', position: i + 1, name, text, url: `${SITE}${p}#${id}` })) });
    write(p.slice(1, -1), layout({ lang: l, path: p, altPath: gPath(other(l), g), title: c.title, desc: c.desc, ogType: 'article', jsonld: ld, body, section: 'guides' }));
    stats.push([p, n, c.title.length, c.desc.length]);
  }
}

/* ---------- Index des guides ---------- */
const IDX = {
  en: { title: 'Windows Gaming Optimization Guides | KarmaaOptimizer', desc: 'Free, step-by-step guides to cut input lag and get smoother FPS on Windows 11: settings, Ryzen X3D, mouse polling rate, USB ports and games.', h1: 'Windows gaming optimization guides', lede: 'Step-by-step guides you can follow by hand, for free. Each one explains what a setting does, how to change it and how to check the result on your own PC.' },
  fr: { title: 'Guides pour optimiser Windows en jeu | KarmaaOptimizer', desc: 'Guides gratuits pas à pas pour réduire l’input lag et stabiliser tes FPS sous Windows 11 : réglages, Ryzen X3D, polling rate, ports USB, jeux.', h1: 'Guides pour optimiser Windows pour le gaming', lede: 'Des guides pas à pas que tu peux suivre à la main, gratuitement. Chacun explique ce que fait un réglage, comment le changer et comment vérifier le résultat sur ton PC.' },
};
for (const l of ['en', 'fr']) {
  const t = T[l];
  const i = IDX[l];
  const cr = crumbs(l, [[t.crumbHome, t.home], [t.crumbGuides, null]]);
  const cards = GUIDES.map((g, n) => `<li><a class="glass guide-card" href="${gPath(l, g)}"><span class="gc-i" aria-hidden="true">${String(n + 1).padStart(2, '0')}</span><h2>${g[l].short}</h2><p>${g[l].desc}</p><span class="gc-f"><span>${readMins[g.id + l]} ${t.read}</span><b>${t.readGuide} <span aria-hidden="true">→</span></b></span></a></li>`).join('');
  const body = `<div class="doc doc-wide">
<header class="doc-head">
${cr.html}
<h1>${i.h1}</h1>
<p class="doc-meta"><span class="badge ac">${GUIDES.length} ${t.guidesCount}</span><span class="badge">Windows 10 · 11</span></p>
<p class="doc-lede">${i.lede}</p>
</header>
<ul class="guide-grid">${cards}</ul>
</div>`;
  const ld = [{ '@type': 'CollectionPage', '@id': SITE + t.guides, url: SITE + t.guides, name: i.h1, description: i.desc, inLanguage: l, hasPart: GUIDES.map((g) => ({ '@type': 'Article', headline: g[l].h1, url: SITE + gPath(l, g) })) }, cr.ld];
  write(t.guides.slice(1, -1), layout({ lang: l, path: t.guides, altPath: T[other(l)].guides, title: i.title, desc: i.desc, jsonld: ld, body, section: 'guides' }));
  stats.push([t.guides, 0, i.title.length, i.desc.length]);
}

/* ---------- Pages légales ---------- */
for (const page of LEGAL) {
  for (const l of ['en', 'fr']) {
    const c = page[l];
    const t = T[l];
    const p = legalPath(l, page.slug[l]);
    const cr = crumbs(l, [[t.crumbHome, t.home], [c.h1, null]]);
    const body = `<article class="doc">
<header class="doc-head">
${cr.html}
<h1>${c.h1}</h1>
<p class="doc-meta"><span class="badge">${t.legalTag}</span><span class="badge">${t.updated} <time datetime="${TODAY}">${DATE[l]}</time></span></p>
</header>
${c.body}
</article>`;
    write(p.slice(1, -1), layout({ lang: l, path: p, altPath: legalPath(other(l), page.slug[other(l)]), title: c.title, desc: c.desc, jsonld: [cr.ld], body }));
    stats.push([p, 0, c.title.length, c.desc.length]);
  }
}

/* ---------- Sitemap ---------- */
const pairs = [['/', '/fr/', 1.0, 0.9]];
pairs.push(['/guides/', '/fr/guides/', 0.8, 0.8]);
for (const g of GUIDES) pairs.push([gPath('en', g), gPath('fr', g), 0.7, 0.7]);
for (const pg of LEGAL) pairs.push([legalPath('en', pg.slug.en), legalPath('fr', pg.slug.fr), 0.3, 0.3]);
const img = (l) => ['01-overview', '02-scan-score', '03-profiles', '05-hud-overlay', '10-games'].map((n) => `<image:image><image:loc>${SITE}/assets/img/app/${l}/${n}.webp</image:loc></image:image>`).join('');
const alts = (en, fr) => `<xhtml:link rel="alternate" hreflang="en" href="${SITE}${en}"/><xhtml:link rel="alternate" hreflang="fr" href="${SITE}${fr}"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${en}"/>`;
let sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
for (const [en, fr, pe, pf] of pairs) {
  const home = en === '/';
  sm += `<url><loc>${SITE}${en}</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>${pe.toFixed(1)}</priority>${alts(en, fr)}${home ? img('en') : ''}</url>\n`;
  sm += `<url><loc>${SITE}${fr}</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>${pf.toFixed(1)}</priority>${alts(en, fr)}${home ? img('fr') : ''}</url>\n`;
}
sm += '</urlset>\n';
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sm);

console.log(`${out.length} pages écrites + sitemap.xml`);
for (const [p, n, tl, dl] of stats) console.log(`${p.padEnd(52)} mots:${String(n).padStart(5)}  title:${tl}${tl >= 60 ? '!!' : ''}  desc:${dl}${dl >= 155 ? '!!' : ''}`);
