/* Fond étoilé de l'accueil, sans 3D. Deux couches d'étoiles dessinées une fois puis glissées en CSS (carte
   graphique, aucun calcul par image) à des vitesses différentes ; le canvas animé ne dessine que les étoiles qui
   scintillent, une rare étoile filante et le léger décalage avec la souris. 60 images/s au plus, arrêté hors écran
   et onglet caché ; tout est fixe si l'utilisateur demande moins d'animations ; moins d'étoiles sur téléphone. */
(function () {
  var canvas = document.getElementById('hero-galaxy');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var hero = document.getElementById('hero');
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var small = matchMedia('(max-width: 833px), (pointer: coarse)').matches;
  var sky = null, twinkle = [];
  var W = 0, H = 0, dpr = 1;
  var px = 0, py = 0, sx = 0, sy = 0, last = 0, t = 0, visible = true, raf = 0, shoot = null, nextShoot = 4;
  var rnd = Math.random;

  // Couche d'étoiles fixe, deux fois la largeur de l'accueil (motif répété : la glissade CSS boucle sans couture)
  function layer(cls, density, big) {
    var w = hero.clientWidth, h = hero.clientHeight;
    var c = document.createElement('canvas'); c.className = 'hero-stars ' + cls; c.width = w * 2; c.height = h; c.setAttribute('aria-hidden', 'true');
    var b = c.getContext('2d'), count = Math.round(w * h / density);
    for (var i = 0; i < count; i++) {
      var x = rnd() * w, y = rnd() * h, z = big ? 1.2 + rnd() * 0.9 : rnd() < 0.92 ? 0.8 : 1.5, o = (big ? 0.35 : 0.1) + rnd() * 0.45;
      b.fillStyle = rnd() < 0.18 ? 'rgba(236,214,171,' + o.toFixed(2) + ')' : 'rgba(255,248,235,' + o.toFixed(2) + ')';
      b.fillRect(x, y, z, z); b.fillRect(x + w, y, z, z);
    }
    return c;
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.5);
    W = canvas.width = Math.round(hero.clientWidth * dpr); H = canvas.height = Math.round(hero.clientHeight * dpr);
    var s = document.createElement('div'); s.className = 'hero-sky'; s.setAttribute('aria-hidden', 'true');
    s.append(layer('far', small ? 2300 : 1900, false), layer('near', small ? 60000 : 42000, true));
    if (sky) sky.replaceWith(s); else hero.insertBefore(s, canvas);
    sky = s;
    twinkle = [];
    for (var i = 0, n = Math.round(W * H / (small ? 50000 : 40000) / dpr); i < n; i++) twinkle.push({ x: rnd() * W, y: rnd() * H, z: (1.1 + rnd() * 0.9) * dpr, o: 0.45 + rnd() * 0.5, p: rnd() * 6.283, f: 0.6 + rnd() * 1.4 });
  }

  function draw(dt) {
    t += dt;
    var k = Math.min(1, dt * 3); sx += (px - sx) * k; sy += (py - sy) * k;
    if (sky) sky.style.transform = 'translate3d(' + (sx * -10).toFixed(1) + 'px,' + (sy * -6).toFixed(1) + 'px,0)';
    ctx.clearRect(0, 0, W, H);
    // Étoiles qui scintillent
    ctx.fillStyle = 'rgb(255,248,235)';
    for (var i = 0; i < twinkle.length; i++) {
      var s = twinkle[i];
      ctx.globalAlpha = Math.max(0, s.o * (0.5 + 0.5 * Math.sin(t * s.f + s.p)));
      ctx.fillRect(s.x, s.y, s.z, s.z);
    }
    // Étoile filante, de temps en temps, dans le haut de l'écran
    nextShoot -= dt;
    if (!shoot && nextShoot <= 0) { shoot = { x: W * (0.15 + rnd() * 0.6), y: H * (0.05 + rnd() * 0.25), life: 0 }; nextShoot = 7 + rnd() * 9; }
    if (shoot) {
      shoot.life += dt; var p = shoot.life / 0.9;
      if (p >= 1) shoot = null;
      else {
        var hx = shoot.x + p * 260 * dpr, hy = shoot.y + p * 110 * dpr, L = 90 * dpr;
        var g = ctx.createLinearGradient(hx, hy, hx - L, hy - L * 0.42);
        g.addColorStop(0, 'rgba(255,248,235,' + (0.85 * Math.sin(p * Math.PI)).toFixed(2) + ')'); g.addColorStop(1, 'rgba(255,248,235,0)');
        ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 1.2 * dpr;
        ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(hx - L, hy - L * 0.42); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }

  // Boucle : 60 images/s au plus (même sur un écran 144-480 Hz), rien hors écran ni onglet caché
  function frame(now) {
    raf = 0;
    if (!visible || document.hidden) { last = 0; return; }
    raf = requestAnimationFrame(frame);
    if (last && now - last < 15) return;
    var dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016; last = now;
    draw(dt);
  }
  function start() { if (!reduced && !raf) raf = requestAnimationFrame(frame); }

  // Démarrage après le premier affichage de la page
  function init() {
    resize(); draw(0); canvas.classList.add('on'); if (sky) sky.classList.add('on');
    var rt = 0;
    addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { resize(); sky.classList.add('on'); draw(0); }, 150); });
    if (reduced) return;
    // Glissade CSS en pause hors écran, comme le canvas
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; hero.classList.toggle('sky-paused', !visible); if (visible) start(); }).observe(hero);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) start(); });
    if (!small) addEventListener('pointermove', function (e) { px = e.clientX / innerWidth - 0.5; py = e.clientY / innerHeight - 0.5; }, { passive: true });
    start();
  }
  requestAnimationFrame(function () { setTimeout(init, 0); });
})();
