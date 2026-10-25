/* Galaxie de l'accueil : canvas 2D léger (pas de 3D). Disque spiral champagne en rotation lente (les étoiles proches
   du cœur tournent plus vite), nébuleuse dessinée une fois puis tournée en bloc, étoiles qui scintillent, rare étoile
   filante, léger décalage avec la souris. 60 images/s au plus, arrêtée hors écran et onglet caché ; image fixe si
   l'utilisateur demande moins d'animations ; moins d'étoiles sur téléphone. */
(function () {
  var canvas = document.getElementById('hero-galaxy');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var hero = document.getElementById('hero');
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var small = matchMedia('(max-width: 833px), (pointer: coarse)').matches;
  var COLORS = ['236,214,171', '212,180,131', '255,250,240', '168,136,90']; // champagne clair, or, blanc chaud, or sombre
  var TILT = 0.42, SPIN = 0.045, ARMS = 3, TWIST = 4.2;
  var stars = [], twinkle = [], bg = null, nebula = null, core = null;
  var W = 0, H = 0, dpr = 1, cx = 0, cy = 0, R = 0;
  var px = 0, py = 0, sx = 0, sy = 0, last = 0, t = 0, visible = true, raf = 0, shoot = null, nextShoot = 4;
  var rnd = Math.random;
  var gauss = function () { return (rnd() + rnd() + rnd() - 1.5) / 1.5; };

  // Étoiles du disque : bras spiraux, plus denses et plus serrées vers le cœur
  function seed() {
    var n = small ? 650 : 1500;
    stars = [];
    for (var i = 0; i < n; i++) {
      var r = Math.pow(rnd(), 0.7);
      var arm = (i % ARMS) * (Math.PI * 2 / ARMS);
      stars.push({
        r: 0.04 + r * 0.96,
        a: arm + r * TWIST + gauss() * (0.25 + 0.35 * (1 - r)),
        s: rnd() < 0.06 ? 2.2 : 0.7 + rnd() * 1.1,
        c: rnd() < 0.5 ? 0 : rnd() < 0.55 ? 1 : rnd() < 0.7 ? 2 : 3,
        o: 0.35 + rnd() * 0.65
      });
    }
  }

  // Dessins faits une fois par taille d'écran : fond d'étoiles fixes, nébuleuse spirale (vue de face), halo du cœur
  function prerender() {
    bg = document.createElement('canvas'); bg.width = W; bg.height = H;
    var b = bg.getContext('2d');
    var count = Math.round(W * H / (small ? 4200 : 3400) / dpr);
    twinkle = [];
    for (var i = 0; i < count; i++) {
      var x = rnd() * W, y = rnd() * H, z = (rnd() < 0.92 ? 0.8 : 1.6) * dpr, o = 0.1 + rnd() * 0.45;
      if (i % 14 === 0) { twinkle.push({ x: x, y: y, z: z * 1.4, o: o + 0.3, p: rnd() * 6.283, f: 0.6 + rnd() * 1.4 }); continue; }
      b.fillStyle = 'rgba(255,248,235,' + o.toFixed(2) + ')'; b.fillRect(x, y, z, z);
    }
    var N = Math.round(R * 2.3); nebula = document.createElement('canvas'); nebula.width = nebula.height = N;
    var n = nebula.getContext('2d'), c = N / 2;
    n.globalCompositeOperation = 'lighter';
    for (var k = 0; k < (small ? 160 : 260); k++) {
      var r = Math.pow(rnd(), 0.8), a = (k % ARMS) * (Math.PI * 2 / ARMS) + r * TWIST + gauss() * 0.3;
      var x2 = c + Math.cos(a) * r * R, y2 = c + Math.sin(a) * r * R, s = R * (0.08 + 0.14 * (1 - r));
      var g = n.createRadialGradient(x2, y2, 0, x2, y2, s);
      g.addColorStop(0, 'rgba(212,180,131,' + (0.022 + 0.026 * (1 - r)).toFixed(3) + ')'); g.addColorStop(1, 'rgba(212,180,131,0)');
      n.fillStyle = g; n.fillRect(x2 - s, y2 - s, s * 2, s * 2);
    }
    var C = Math.round(R * 0.9); core = document.createElement('canvas'); core.width = core.height = C * 2;
    var q = core.getContext('2d'), cg = q.createRadialGradient(C, C, 0, C, C, C);
    cg.addColorStop(0, 'rgba(255,244,222,.6)'); cg.addColorStop(0.07, 'rgba(240,222,186,.32)');
    cg.addColorStop(0.28, 'rgba(212,180,131,.09)'); cg.addColorStop(1, 'rgba(212,180,131,0)');
    q.fillStyle = cg; q.fillRect(0, 0, C * 2, C * 2);
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.5);
    var w = hero.clientWidth, h = hero.clientHeight;
    W = canvas.width = Math.round(w * dpr); H = canvas.height = Math.round(h * dpr);
    // À droite sur ordinateur (à côté du texte), en haut sur téléphone
    cx = (small ? 0.5 : 0.72) * W; cy = (small ? 0.26 : 0.5) * H;
    R = Math.min(small ? w * 0.6 : w * 0.33, h * (small ? 0.42 : 0.66)) * dpr;
    prerender();
  }

  function draw(dt) {
    t += dt;
    var k = Math.min(1, dt * 3); sx += (px - sx) * k; sy += (py - sy) * k;
    var ox = cx + sx * 18 * dpr, oy = cy + sy * 12 * dpr;
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(bg, sx * -6 * dpr, sy * -4 * dpr);
    // Étoiles qui scintillent
    ctx.fillStyle = 'rgb(255,248,235)';
    for (var i = 0; i < twinkle.length; i++) { var s0 = twinkle[i]; ctx.globalAlpha = Math.max(0, s0.o * (0.55 + 0.45 * Math.sin(t * s0.f + s0.p))); ctx.fillRect(s0.x, s0.y, s0.z, s0.z); }
    // Nébuleuse : un seul dessin, tourné et aplati comme le disque
    ctx.globalAlpha = 1;
    ctx.imageSmoothingQuality = 'high'; ctx.save(); ctx.translate(ox, oy); ctx.scale(1, TILT); ctx.rotate(t * SPIN * 0.8);
    ctx.drawImage(nebula, -nebula.width / 2, -nebula.height / 2); ctx.restore();
    ctx.drawImage(core, ox - core.width / 2, oy - core.height / 2 * TILT * 1.5, core.width, core.height * TILT * 1.5);
    // Étoiles du disque, regroupées par couleur
    for (var c = 0; c < COLORS.length; c++) {
      ctx.fillStyle = 'rgb(' + COLORS[c] + ')';
      for (var j = 0; j < stars.length; j++) {
        var s = stars[j]; if (s.c !== c) continue;
        var a = s.a + t * SPIN / Math.sqrt(s.r);
        ctx.globalAlpha = s.o * (0.65 + 0.35 * Math.sin(a)); // côté proche plus lumineux
        var z = s.s * dpr; ctx.fillRect(ox + Math.cos(a) * s.r * R - z / 2, oy + Math.sin(a) * s.r * R * TILT - z / 2, z, z);
      }
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
    seed(); resize(); draw(0); canvas.classList.add('on');
    var rt = 0;
    addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { resize(); draw(0); }, 150); });
    if (reduced) return;
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; if (visible) start(); }).observe(hero);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) start(); });
    if (!small) addEventListener('pointermove', function (e) { px = e.clientX / innerWidth - 0.5; py = e.clientY / innerHeight - 0.5; }, { passive: true });
    start();
  }
  requestAnimationFrame(function () { setTimeout(init, 0); });
})();
