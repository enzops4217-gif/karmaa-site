/* Animations légères du site (accueil, guides, pages légales).
   - Apparition progressive au défilement (opacity + transform seulement, via la classe .rv-in).
   - Barre du haut plus opaque une fois la page défilée ; lien de section actif dans la navigation.
   - Sommaire des guides : titre en cours surligné.
   Rien ne bouge si l'utilisateur réduit les animations ; sans JavaScript tout reste visible.
   Les blocs déjà animés par site.js (GSAP) ne sont pas touchés : .big, .prof, .pil, .faqlist details, .price. */
(function () {
  'use strict';
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;
  var STAGGER_MS = 70;
  var STAGGER_MAX = 6;

  /* --- Survol : élévation des cartes (bordure seule pour celles animées par GSAP) --- */
  $$('.steps li, .feat-col, .guide-card').forEach(function (el) { el.classList.add('lift'); });
  $$('.prof, .pil').forEach(function (el) { el.classList.add('lift-b'); });

  /* --- Barre du haut : fond plein après quelques pixels --- */
  var top = document.querySelector('.top');
  if (top) {
    var scrolled = null;
    var onScroll = function () {
      var v = window.scrollY > 8;
      if (v !== scrolled) { scrolled = v; top.classList.toggle('is-scrolled', v); }
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- Navigation : section visible surlignée (liens #ancre de la page) --- */
  function spy(links, rootMargin) {
    if (!hasIO || !links.length) return;
    var map = {};
    links.forEach(function (a) {
      var id = decodeURIComponent((a.getAttribute('href') || '').split('#')[1] || '');
      var t = id && document.getElementById(id);
      if (t) map[id] = { a: a, t: t };
    });
    var ids = Object.keys(map);
    if (!ids.length) return;
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      var cur = null;
      ids.forEach(function (id) { if (visible[id] && !cur) cur = id; });
      ids.forEach(function (id) { map[id].a.classList.toggle('is-on', id === cur); });
    }, { rootMargin: rootMargin });
    ids.forEach(function (id) { io.observe(map[id].t); });
  }
  spy($$('.top nav a[href^="#"]'), '-45% 0px -50% 0px');
  spy($$('.toc a'), '-15% 0px -70% 0px');

  /* --- Apparition au défilement --- */
  if (reduced || !hasIO) return;
  var GROUPS = [
    '.sec-head > :not(.big)',
    '.steps > li', '.gal', '.scan-copy > p', '.scan-shot',
    '.feat-cols > .feat-col', '.feat-tags', '.cmp', '.cmp-foot', '.note-c',
    '.doc-head > *', '.doc > h2', '.doc > .tip', '.doc > table', '.doc-cta', '.doc-related',
    '.guide-grid > li', '.foot-grid > *'
  ];
  var items = [];
  GROUPS.forEach(function (sel) {
    $$(sel).forEach(function (el) {
      if (el.closest('#hero') || el.classList.contains('rv')) return;
      // Décalage en cascade entre éléments frères d'un même groupe
      var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty('--d', Math.min(idx, STAGGER_MAX) * STAGGER_MS + 'ms');
      el.classList.add('rv');
      items.push(el);
    });
  });
  if (!items.length) return;
  document.documentElement.classList.add('motion');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.add('rv-in');
      io.unobserve(el);
      // Animation finie : le survol redevient immédiat (plus de délai de cascade)
      setTimeout(function () { el.classList.add('rv-done'); }, 1000 + (parseInt(el.style.getPropertyValue('--d'), 10) || 0));
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
  // Filet de sécurité : rien ne reste caché à l'impression
  addEventListener('beforeprint', function () { items.forEach(function (el) { el.classList.add('rv-in'); }); });
})();
