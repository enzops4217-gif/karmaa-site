/* Petits outils de la page (FR / EN selon la page) : recherche, retour en haut, menu mobile, etc.
   Chaque bloc est indépendant : sans JavaScript, la page reste complète. */
(function () {
  var en = document.documentElement.lang === 'en';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ICON = {
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'
  };
  // Défilement vers un élément (garde le défilement doux du site)
  function goTo(el) {
    if (window.lenis && window.lenis.scrollTo) return window.lenis.scrollTo(el, { offset: -64 });
    var y = el.getBoundingClientRect().top + scrollY - 64;
    scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  }

  /* --- 3. Recherche dans la page : sections, fonctionnalités et questions de la FAQ --- */
  (function () {
    var top = $('.top'); if (!top || !window.HTMLDialogElement) return;
    var T = en ? { open: 'Search the page', ph: 'Search: FPS, profiles, controller…', none: 'No result', close: 'Close', faq: 'FAQ' }
               : { open: 'Rechercher dans la page', ph: 'Rechercher : FPS, profils, manette…', none: 'Aucun résultat', close: 'Fermer', faq: 'FAQ' };
    var norm = function (s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim(); };
    // Index : titres de sections, éléments de listes et questions (avec le texte de la réponse)
    var items = [];
    $$('main section').forEach(function (sec) {
      var h2 = $('h2', sec); var where = h2 ? h2.textContent.replace(/\s+/g, ' ').trim() : '';
      if (h2) items.push({ label: where, ctx: '', text: norm(where + ' ' + sec.textContent).slice(0, 4000), el: sec });
      $$('details', sec).forEach(function (d) {
        var q = $('summary', d).textContent.replace(/\s+/g, ' ').trim();
        items.push({ label: q, ctx: T.faq, text: norm(d.textContent), el: d, open: d });
      });
      $$('h3, li', sec).forEach(function (n) {
        if (n.closest('details') || n.closest('[hidden]')) return;
        var t = n.textContent.replace(/\s+/g, ' ').trim(); if (t.length < 4 || t.length > 140) return;
        items.push({ label: t, ctx: where, text: norm(t), el: n });
      });
    });
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'x-icon x-search-btn'; btn.innerHTML = ICON.search;
    btn.setAttribute('aria-label', T.open); btn.title = T.open + ' (Ctrl+K)';
    top.insertBefore(btn, $('.lang', top));

    var dlg = document.createElement('dialog'); dlg.className = 'x-search'; dlg.setAttribute('aria-label', T.open);
    dlg.innerHTML = '<div class="x-search-box">' + ICON.search +
      '<input type="search" autocomplete="off" spellcheck="false" role="combobox" aria-expanded="true" aria-controls="x-res" aria-autocomplete="list">' +
      '<button type="button" class="x-search-x">Esc</button></div><ul id="x-res" role="listbox"></ul><p class="x-search-none" hidden></p>';
    document.body.appendChild(dlg);
    var input = $('input', dlg); var list = $('ul', dlg); var none = $('.x-search-none', dlg);
    input.placeholder = T.ph; input.setAttribute('aria-label', T.open);
    $('.x-search-x', dlg).setAttribute('aria-label', T.close); none.textContent = T.none;
    var shown = []; var cur = 0;
    function render() {
      var q = norm(input.value); var words = q.split(' ').filter(Boolean);
      shown = !words.length ? [] : items.filter(function (it) { return words.every(function (w) { return it.text.indexOf(w) >= 0; }); })
        .sort(function (a, b) { return (norm(b.label).indexOf(words[0]) >= 0) - (norm(a.label).indexOf(words[0]) >= 0); }).slice(0, 8);
      cur = 0;
      list.innerHTML = '';
      shown.forEach(function (it, i) {
        var li = document.createElement('li'); li.id = 'x-r' + i; li.setAttribute('role', 'option');
        var b = document.createElement('b'); b.textContent = it.label; li.appendChild(b);
        if (it.ctx) { var s = document.createElement('span'); s.textContent = it.ctx; li.appendChild(s); }
        li.addEventListener('click', function () { pick(i); });
        li.addEventListener('mousemove', function () { if (cur !== i) { cur = i; mark(); } });
        list.appendChild(li);
      });
      none.hidden = !(words.length && !shown.length);
      mark();
    }
    function mark() {
      $$('li', list).forEach(function (li, i) { li.setAttribute('aria-selected', i === cur ? 'true' : 'false'); });
      if (shown.length) input.setAttribute('aria-activedescendant', 'x-r' + cur); else input.removeAttribute('aria-activedescendant');
    }
    function pick(i) {
      var it = shown[i]; if (!it) return;
      dlg.close();
      if (it.open) it.open.open = true;
      goTo(it.el);
      var f = it.open ? $('summary', it.open) : it.el;
      if (f) { if (!f.matches('a,button,summary,input,[tabindex]')) f.setAttribute('tabindex', '-1'); setTimeout(function () { f.focus({ preventScroll: true }); }, reduce ? 0 : 700); }
    }
    function open() { if (dlg.open) return; input.value = ''; render(); dlg.showModal(); input.focus(); }
    btn.addEventListener('click', open);
    $('.x-search-x', dlg).addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', function () { btn.focus({ preventScroll: true }); });
    input.addEventListener('input', render);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); if (shown.length) { cur = (cur + (e.key === 'ArrowDown' ? 1 : -1) + shown.length) % shown.length; mark(); } }
      else if (e.key === 'Enter') { e.preventDefault(); pick(cur); }
    });
    addEventListener('keydown', function (e) {
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement || {}).tagName || '');
      if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !typing)) { e.preventDefault(); open(); }
    });
  })();
})();
