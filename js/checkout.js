/* Fenêtre d'achat : récapitulatif avant le paiement Stripe (FR / EN selon la page).
   Sans JavaScript, les boutons restent de simples liens vers le paiement. */
(function () {
  var STRIPE = 'https://buy.stripe.com/28EcN5eMxgVM5wy5SP53O06';
  var en = document.documentElement.lang === 'en';
  var T = en ? {
    title: 'KarmaaOptimizer', sub: 'Lifetime license · 1 PC', price: '€50', once: 'paid once',
    steps: ['Pay by card, Apple Pay or Google Pay', 'Get your license and the setup by email within minutes', 'Install the app and paste your license'],
    incl: ['181 tweaks and 3 profiles', 'Automatic updates', 'KarmaaAI assistant', 'Help on Discord'],
    go: 'Continue to secure payment', opening: 'Opening secure payment…', secure: 'Secure payment by Stripe · We never see your card', close: 'Close'
  } : {
    title: 'KarmaaOptimizer', sub: 'Licence à vie · 1 PC', price: '50 €', once: 'payé une fois',
    steps: ['Paie par carte, Apple Pay ou Google Pay', 'Reçois ta licence et le setup par e-mail en quelques minutes', 'Installe l’app et colle ta licence'],
    incl: ['181 réglages et 3 profils', 'Mises à jour automatiques', 'Assistant KarmaaAI', 'Aide sur Discord'],
    go: 'Continuer vers le paiement sécurisé', opening: 'Ouverture du paiement sécurisé…', secure: 'Paiement sécurisé par Stripe · Ta carte n’est jamais visible pour nous', close: 'Fermer'
  };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var check = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7"/></svg>';
  var lock = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';

  var el = document.createElement('div');
  el.className = 'co';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-labelledby', 'co-t');
  el.hidden = true;
  el.innerHTML =
    '<div class="co-bg" data-close></div>' +
    '<div class="co-card">' +
      '<button class="co-x" type="button" data-close aria-label="' + esc(T.close) + '">×</button>' +
      '<div class="co-head"><img src="' + (en ? '' : '../') + 'assets/logo.png?v=2" alt="" width="56" height="56">' +
        '<div><p class="co-t" id="co-t">' + esc(T.title) + '</p><p class="co-sub">' + esc(T.sub) + '</p></div>' +
        '<p class="co-price"><b>' + esc(T.price) + '</b><span>' + esc(T.once) + '</span></p></div>' +
      '<ul class="co-incl">' + T.incl.map(function (x) { return '<li>' + check + esc(x) + '</li>'; }).join('') + '</ul>' +
      '<ol class="co-steps">' + T.steps.map(function (x, i) { return '<li><span>' + (i + 1) + '</span>' + esc(x) + '</li>'; }).join('') + '</ol>' +
      '<a class="btn co-go" href="' + STRIPE + '"><span>' + esc(T.go) + '</span></a>' +
      '<p class="co-secure">' + lock + esc(T.secure) + '</p>' +
    '</div>';
  document.body.appendChild(el);

  var go = el.querySelector('.co-go');
  var last = null;
  function open(e) {
    e.preventDefault();
    last = document.activeElement;
    el.hidden = false;
    document.documentElement.classList.add('co-lock');
    void el.offsetWidth; // l'animation d'ouverture part de l'état caché
    el.classList.add('on');
    go.focus();
  }
  function close() {
    el.classList.remove('on');
    document.documentElement.classList.remove('co-lock');
    setTimeout(function () { el.hidden = true; }, 250);
    if (last) last.focus();
  }
  // Paiement dans le même onglet, avec un retour visuel pendant l'ouverture de Stripe
  go.addEventListener('click', function () {
    go.classList.add('busy');
    go.querySelector('span').textContent = T.opening;
  });
  // Revenir avec « Précédent » depuis Stripe : la fenêtre se rouvre propre
  addEventListener('pageshow', function () { go.classList.remove('busy'); go.querySelector('span').textContent = T.go; });
  el.addEventListener('click', function (e) { if (e.target.hasAttribute('data-close')) close(); });
  addEventListener('keydown', function (e) { if (e.key === 'Escape' && !el.hidden) close(); });
  document.querySelectorAll('a[href^="' + STRIPE + '"]').forEach(function (a) { if (a !== go) a.addEventListener('click', open); });
})();
