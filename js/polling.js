/* Test de polling rate dans le navigateur : intervalle médian entre les événements de la souris (pointerrawupdate
   quand le navigateur le permet, sinon événements regroupés). Le navigateur arrondit et plafonne au-delà de ~1000 Hz :
   la mesure native de l'app KarmaaOptimizer compte chaque rapport, jusqu'à 8000 Hz. */
(function () {
  var root = document.getElementById('poll-tool');
  if (!root) return;
  var fr = document.documentElement.lang === 'fr';
  var pad = root.querySelector('.pad'), cur = root.querySelector('#p-cur'), avg = root.querySelector('#p-avg'), max = root.querySelector('#p-max'), nom = root.querySelector('#p-nom');
  var raw = 'onpointerrawupdate' in window;
  var times = [], seen = 0, best = 0, all = [];
  var RATES = [125, 250, 500, 1000, 2000, 4000, 8000];
  var fmt = function (v) { return v ? Math.round(v).toLocaleString(fr ? 'fr-FR' : 'en-US') : '—'; };
  function push(t) { times.push(t); seen = performance.now(); }
  pad.addEventListener(raw ? 'pointerrawupdate' : 'pointermove', function (e) {
    var list = e.getCoalescedEvents ? e.getCoalescedEvents() : [];
    if (list.length > 1) list.forEach(function (x) { push(x.timeStamp); }); else push(e.timeStamp);
  });
  setInterval(function () {
    if (performance.now() - seen > 600) { times = []; pad.classList.remove('is-live'); cur.textContent = '—'; return; }
    var last = times[times.length - 1];
    times = times.filter(function (t) { return last - t < 1000; });
    var iv = [];
    for (var i = 1; i < times.length; i++) { var d = times[i] - times[i - 1]; if (d > 0 && d < 25) iv.push(d); }
    if (iv.length < 15) return;
    iv.sort(function (a, b) { return a - b; });
    var hz = 1000 / iv[Math.floor(iv.length / 2)];
    pad.classList.add('is-live');
    best = Math.max(best, hz); all.push(hz); if (all.length > 240) all.shift();
    cur.textContent = fmt(hz); max.textContent = fmt(best);
    avg.textContent = fmt(all.reduce(function (a, b) { return a + b; }, 0) / all.length);
    var r = RATES.reduce(function (a, b) { return Math.abs(b - best) < Math.abs(a - best) ? b : a; });
    nom.textContent = Math.abs(best - r) / r <= 0.15 ? fmt(r) : '—';
  }, 250);
  root.querySelector('#p-reset').addEventListener('click', function () { times = []; all = []; best = 0; [cur, avg, max, nom].forEach(function (x) { x.textContent = '—'; }); });
})();
