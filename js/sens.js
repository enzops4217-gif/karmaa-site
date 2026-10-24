/* Convertisseur de sensibilité : même rotation par centimètre de souris (cm/360) d'un jeu à l'autre.
   Rotation = sensibilité × lacet (degrés par point de la souris à la sensibilité 1). Mêmes valeurs que l'app. */
(function () {
  var GAMES = [
    { id: 'cs2', name: 'Counter-Strike 2', yaw: 0.022, dec: 2 },
    { id: 'valorant', name: 'Valorant', yaw: 0.07, dec: 3 },
    { id: 'apex', name: 'Apex Legends', yaw: 0.022, dec: 2 },
    { id: 'cod', name: 'Call of Duty', yaw: 0.0066, dec: 2 },
    { id: 'ow2', name: 'Overwatch 2', yaw: 0.0066, dec: 2 },
    { id: 'fortnite', name: 'Fortnite', yaw: 0.005555, dec: 1, unit: '%' }
  ];
  var root = document.getElementById('sens-tool');
  if (!root) return;
  var lang = document.documentElement.lang === 'fr' ? 'fr-FR' : 'en-US';
  var $ = function (s) { return root.querySelector(s); };
  var from = $('#s-game'), sens = $('#s-sens'), dpi = $('#s-dpi'), dpi2 = $('#s-dpi2'), body = $('#s-rows');
  GAMES.forEach(function (g) { var o = document.createElement('option'); o.value = g.id; o.textContent = g.name; from.appendChild(o); });
  var by = function (id) { return GAMES.filter(function (g) { return g.id === id; })[0]; };
  var num = function (el) { return Number(String(el.value).replace(',', '.')); };
  var fmt = function (v, d) { return isFinite(v) && v > 0 ? v.toLocaleString(lang, { minimumFractionDigits: d, maximumFractionDigits: d }) : '—'; };
  try { var saved = JSON.parse(localStorage.getItem('ko-sens') || '{}'); if (saved.from) from.value = saved.from; if (saved.sens) sens.value = saved.sens; if (saved.dpi) dpi.value = saved.dpi; } catch (e) { /* stockage indisponible */ }
  function update() {
    var g = by(from.value), s = num(sens), d = num(dpi), d2 = num(dpi2) || d;
    try { localStorage.setItem('ko-sens', JSON.stringify({ from: from.value, sens: sens.value, dpi: dpi.value })); } catch (e) { /* stockage indisponible */ }
    var ok = g && s > 0 && d > 0;
    var cm = ok ? (360 / (g.yaw * s * d)) * 2.54 : NaN;
    $('#s-cm').textContent = fmt(cm, 1); $('#s-in').textContent = fmt(cm / 2.54, 1); $('#s-edpi').textContent = ok ? fmt(s * d, 0) : '—';
    body.innerHTML = '';
    GAMES.forEach(function (t) {
      if (t.id === from.value) return;
      var out = ok ? (g.yaw * s * d) / (t.yaw * d2) : NaN;
      var tr = document.createElement('tr');
      [t.name, fmt(out, t.dec) + (t.unit && isFinite(out) ? ' ' + t.unit : ''), String(d2 || '—')].forEach(function (v) { var td = document.createElement('td'); td.textContent = v; tr.appendChild(td); });
      body.appendChild(tr);
    });
  }
  [from, sens, dpi, dpi2].forEach(function (el) { el.addEventListener('input', update); });
  update();
})();
