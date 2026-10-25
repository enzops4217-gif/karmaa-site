/* Fond étoilé de l'accueil : canvas 2D léger (pas de 3D). Deux couches d'étoiles qui dérivent lentement à des
   vitesses différentes, étoiles qui scintillent, rare étoile filante, léger décalage avec la souris.
   60 images/s au plus, arrêté hors écran et onglet caché ; image fixe si l'utilisateur demande moins d'animations ;
   moins d'étoiles sur téléphone. */
(function () {
  var canvas = document.getElementById('hero-galaxy');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var hero = document.getElementById('hero');
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var small = matchMedia('(max-width: 833px), (pointer: coarse)').matches;
  var far = null, near = null, twinkle = [];
  var W = 0, H = 0, dpr = 1;
  var px = 0, py = 0, sx = 0, sy = 0, last = 0, t = 0, visible = true, raf = 0, shoot = null, nextShoot = 4;
  var rnd = Math.random;

  // Couches dessinées une fois par taille d'écran : lointaine (petites étoiles) et proche (plus grosses, plus rares)
  function layer(density, big, keepTwinkle) {
    var c = document.createElement('canvas'); c.width = W; c.height = H;
    var b = c.getContext('2d'), count = Math.round(W * H / density / dpr);
    for (var i = 0; i < count; i++) {
      var x = rnd() * W, y = rnd() * H, z = (big ? 1.2 + rnd() * 0.9 : rnd() < 0.92 ? 0.8 : 1.5) * dpr, o = (big ? 0.35 : 0.1) + rnd() * 0.45;
      if (keepTwinkle && i % 14 === 0) { twinkle.push({ x: x, y: y, z: z * 1.4, o: o + 0.3, p: rnd() * 6.283, f: 0.6 + rnd() * 1.4 }); continue; }
      b.fillStyle = rnd() < 0.18 ? 'rgba(236,214,171,' + o.toFixed(2) + ')' : 'rgba(255,248,235,' + o.toFixed(2) + ')';
      b.fillRect(x, y, z, z);
    }
    return c;
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.5);
    W = canvas.width = Math.round(hero.clientWidth * dpr); H = canvas.height = Math.round(hero.clientHeight * dpr);
    twinkle = [];
    far = layer(small ? 4200 : 3400, false, true);
    near = layer(small ? 60000 : 42000, true, false);
  }

  // Couche répétée à l'horizontale : décalage en boucle sans couture
  function tile(img, off, oy) {
    var x = -(((off % W) + W) % W);
    ctx.drawImage(img, x, oy); ctx.drawImage(img, x + W, oy);
  }

  function draw(dt) {
    t += dt;
    var k = Math.min(1, dt * 3); sx += (px - sx) * k; sy += (py - sy) * k;
    ctx.clearRect(0, 0, W, H);
    var farOff = t * 4 * dpr + sx * 6 * dpr, nearOff = t * 10 * dpr + sx * 16 * dpr;
    tile(far, farOff, sy * -4 * dpr);
    tile(near, nearOff, sy * -10 * dpr);
    // Étoiles qui scintillent (suivent la couche lointaine)
    ctx.fillStyle = 'rgb(255,248,235)';
    for (var i = 0; i < twinkle.length; i++) {
      var s = twinkle[i], x = (((s.x - farOff) % W) + W) % W;
      ctx.globalAlpha = Math.max(0, s.o * (0.55 + 0.45 * Math.sin(t * s.f + s.p)));
      ctx.fillRect(x, s.y + sy * -4 * dpr, s.z, s.z);
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
    resize(); draw(0); canvas.classList.add('on');
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
