module.exports = {
  id: 'mouse-polling-rate-1000-4000-8000',
  slug: { en: 'mouse-polling-rate-1000-4000-8000', fr: 'polling-rate-souris-1000-4000-8000' },
  related: ['usb-port-gaming-mouse', 'reduce-input-lag-windows-11', 'best-windows-11-settings-gaming'],
  en: {
    title: 'Mouse Polling Rate: 1000 vs 4000 vs 8000 Hz',
    desc: '1000, 4000 or 8000 Hz: what mouse polling rate changes in latency and smoothness, what it costs your CPU, and how to pick and test the right one.',
    short: 'Mouse polling rate: 1000 vs 4000 vs 8000 Hz',
    h1: 'Mouse polling rate: 1000 vs 4000 vs 8000 Hz',
    lede: 'Gaming mice now go up to 8000 Hz. Higher sounds better, but the gain is measured in fractions of a millisecond and it has a cost on your processor. Here is what each value really changes, and how to choose for your PC and your monitor.',
    body: `<h2 id="what">What polling rate means</h2>
<p>The polling rate is how often the mouse reports its position to the PC, in reports per second (Hz). The time between two reports is simply 1 divided by the rate:</p>
<table>
<thead><tr><th>Polling rate</th><th>Interval between reports</th><th>Average extra delay</th></tr></thead>
<tbody>
<tr><td>125 Hz</td><td>8 ms</td><td>about 4 ms</td></tr>
<tr><td>500 Hz</td><td>2 ms</td><td>about 1 ms</td></tr>
<tr><td>1000 Hz</td><td>1 ms</td><td>about 0.5 ms</td></tr>
<tr><td>2000 Hz</td><td>0.5 ms</td><td>about 0.25 ms</td></tr>
<tr><td>4000 Hz</td><td>0.25 ms</td><td>about 0.125 ms</td></tr>
<tr><td>8000 Hz</td><td>0.125 ms</td><td>about 0.06 ms</td></tr>
</tbody>
</table>
<p>The “average extra delay” is half the interval: a movement happens at a random moment and waits on average half a cycle before being sent. Going from 1000 to 8000 Hz therefore saves <strong>under half a millisecond</strong> on average. That is real but small compared to total system latency, which is usually 15 to 40 ms (see our <a href="../reduce-input-lag-windows-11/">input lag guide</a>).</p>

<h2 id="smooth">The real benefit: smoother motion on fast monitors</h2>
<p>The bigger gain is not raw latency but <strong>consistency</strong>. On a 240, 360 or 500 Hz monitor, each frame lasts 2–4 ms. At 1000 Hz, a frame receives a variable number of mouse reports (for example 2 or 3 at 360 Hz), which can cause slight micro-stutter when you track a target. At 4000 or 8000 Hz, every frame gets many reports, so cursor and camera motion look smoother. On a 60 or 144 Hz monitor, you will hardly see a difference above 1000 Hz.</p>

<h2 id="cost">The cost: CPU load and compatibility</h2>
<p>Each report is a USB interrupt that Windows and the game must process. At 8000 Hz, that is eight times more work than at 1000 Hz.</p>
<ul>
<li><strong>CPU usage</strong>: on a recent CPU it is a few percent, but on older or busy CPUs it can lower FPS or cause stutter, especially in CPU-bound games.</li>
<li><strong>Game support</strong>: most modern games using raw input handle 8000 Hz well. Some older games or engines stutter or lose FPS when the mouse moves fast. If a game behaves badly, lower the rate for that game.</li>
<li><strong>USB setup</strong>: high rates are sensitive to hubs, front panel ports and shared controllers. Use a rear motherboard port (see our <a href="../usb-port-gaming-mouse/">USB port guide</a>).</li>
<li><strong>Wireless battery</strong>: at 4000 or 8000 Hz, battery life can drop a lot. Check your mouse maker’s figures.</li>
<li><strong>Sensor movement</strong>: to send 8000 different positions per second, the mouse must move fast enough and at a high enough DPI. At low DPI and slow movement, many reports are identical. Some makers recommend 1600 DPI or more at 8000 Hz.</li>
</ul>

<h2 id="choose">Which one to choose</h2>
<table>
<thead><tr><th>Your setup</th><th>Good choice</th></tr></thead>
<tbody>
<tr><td>60–144 Hz monitor, any CPU</td><td>1000 Hz</td></tr>
<tr><td>240 Hz monitor, mid-range CPU</td><td>1000 or 2000 Hz</td></tr>
<tr><td>240–360 Hz monitor, recent CPU</td><td>2000 or 4000 Hz</td></tr>
<tr><td>360–500 Hz monitor, high-end CPU, competitive shooters</td><td>4000 or 8000 Hz, after testing</td></tr>
<tr><td>Older CPU, CPU-bound games, or stutter at high rates</td><td>1000 Hz</td></tr>
<tr><td>Wireless and battery life matters</td><td>1000 or 2000 Hz</td></tr>
</tbody>
</table>
<p>For many players, <strong>2000 to 4000 Hz</strong> is the sweet spot: most of the smoothness gain without the full CPU cost of 8000 Hz.</p>

<h2 id="change">How to change it</h2>
<ol>
<li>Open your mouse software (Logitech G HUB, Razer Synapse, Pulsar, Lamzu, Zowie, etc.) or the maker’s web driver.</li>
<li>Find the <em>Polling rate</em> or <em>Report rate</em> setting.</li>
<li>For wireless mice, 4000 and 8000 Hz often need a specific dongle (sometimes sold separately). Plug it in a rear USB port.</li>
<li>Some mice save the rate in their memory; others need the software to stay installed. Check after a restart.</li>
</ol>

<h2 id="test">How to test your polling rate</h2>
<p>Do not trust the box: check what your PC actually receives.</p>
<ul>
<li>Use a polling rate tester (online or in an app) and move the mouse quickly in circles. The reading should stay close to the chosen value. Large drops point at a USB, cable, dongle or CPU issue.</li>
<li>Note that browsers can cap or smooth the readings, especially above 1000 Hz. A native Windows tester is more reliable at 4000–8000 Hz.</li>
<li>Then test in-game: same map, same scenario, at 1000 Hz and at your higher rate. Watch the FPS, 1% lows and how tracking feels.</li>
</ul>

<h2 id="windows">Related Windows settings</h2>
<ul>
<li><strong>Enhance pointer precision</strong>: turn it off in Control Panel → Mouse → Pointer Options. It is acceleration, not precision.</li>
<li><strong>Windows pointer speed</strong>: keep the slider on the 6th notch (the default, 1:1). Change sensitivity in your mouse software (DPI) or in the game instead.</li>
<li><strong>Raw input</strong>: turn it on in games that offer it, so the game reads the mouse directly.</li>
<li><strong>USB selective suspend</strong>: on some PCs, setting it to <em>Disabled</em> in the power plan’s advanced settings prevents a sleeping dongle or mouse from waking up late. Its effect is usually small on desktops.</li>
</ul>

<h2 id="myths">Common myths</h2>
<ul>
<li><strong>“Higher is always better.”</strong> Not if your CPU, game or USB port cannot keep up. A stable 2000 Hz beats an 8000 Hz that drops to 3000 Hz every time you flick.</li>
<li><strong>“8000 Hz makes you aim better.”</strong> It makes motion smoother and slightly more responsive. Your aim still depends on sensitivity, practice and a stable frame rate.</li>
<li><strong>“Polling rate and DPI are the same thing.”</strong> DPI is how far the cursor moves per inch of mouse movement. Polling rate is how often the mouse reports that movement. Changing one does not change the other.</li>
<li><strong>“Windows controls it.”</strong> Windows has no polling rate setting for modern gaming mice: it lives in the mouse firmware, set by the maker’s software.</li>
</ul>

<h2 id="summary">In short</h2>
<ul>
<li>1000 → 8000 Hz saves under 0.5 ms on average: real, but small.</li>
<li>The visible benefit is smoother tracking on 240 Hz+ monitors.</li>
<li>The cost is CPU load, game compatibility and battery life.</li>
<li>2000–4000 Hz is a good compromise for most; 8000 Hz only if your CPU and games handle it.</li>
<li>Always test the real rate and your FPS before keeping a setting.</li>
</ul>`,
    cta: `<p>KarmaaOptimizer includes a native polling rate test up to 8000 Hz (outside the browser, so the readings are not capped), a sensitivity converter between games, and checks for the Windows mouse settings above. It also measures USB and driver latency on your PC. It does not change your mouse firmware: you set the polling rate in your mouse software, then use the app to check the result and compare in your games. No promise of a number: you measure it yourself.</p>`,
  },
  fr: {
    title: 'Polling rate souris : 1000, 4000 ou 8000 Hz ?',
    desc: '1000, 4000 ou 8000 Hz : ce que le polling rate change en latence et en fluidité, ce qu’il coûte au processeur, et comment choisir et tester le bon.',
    short: 'Polling rate souris : 1000, 4000 ou 8000 Hz',
    h1: 'Polling rate de souris : 1000, 4000 ou 8000 Hz ?',
    lede: 'Les souris gaming montent maintenant jusqu’à 8000 Hz. Plus haut, ça a l’air mieux, mais le gain se compte en fractions de milliseconde et ça coûte du processeur. Voici ce que chaque valeur change vraiment, et comment choisir selon ton PC et ton écran.',
    body: `<h2 id="definition">Ce que veut dire polling rate</h2>
<p>Le polling rate, c’est le nombre de fois par seconde où la souris envoie sa position au PC, en Hz. Le temps entre deux envois, c’est simplement 1 divisé par cette valeur :</p>
<table>
<thead><tr><th>Polling rate</th><th>Intervalle entre deux envois</th><th>Retard moyen ajouté</th></tr></thead>
<tbody>
<tr><td>125 Hz</td><td>8 ms</td><td>environ 4 ms</td></tr>
<tr><td>500 Hz</td><td>2 ms</td><td>environ 1 ms</td></tr>
<tr><td>1000 Hz</td><td>1 ms</td><td>environ 0,5 ms</td></tr>
<tr><td>2000 Hz</td><td>0,5 ms</td><td>environ 0,25 ms</td></tr>
<tr><td>4000 Hz</td><td>0,25 ms</td><td>environ 0,125 ms</td></tr>
<tr><td>8000 Hz</td><td>0,125 ms</td><td>environ 0,06 ms</td></tr>
</tbody>
</table>
<p>Le « retard moyen » vaut la moitié de l’intervalle : un mouvement arrive à un moment aléatoire et attend en moyenne un demi-cycle avant d’être envoyé. Passer de 1000 à 8000 Hz fait donc gagner <strong>moins d’une demi-milliseconde</strong> en moyenne. C’est réel, mais petit face à la latence totale du système, qui tourne en général entre 15 et 40 ms (voir notre <a href="../reduire-input-lag-windows-11/">guide sur l’input lag</a>).</p>

<h2 id="fluidite">Le vrai gain : un mouvement plus fluide sur les écrans rapides</h2>
<p>Le plus gros avantage n’est pas la latence brute mais la <strong>régularité</strong>. Sur un écran 240, 360 ou 500 Hz, chaque image dure 2 à 4 ms. À 1000 Hz, une image reçoit un nombre variable de positions (par exemple 2 ou 3 à 360 Hz), ce qui peut créer de légères micro-saccades quand tu suis une cible. À 4000 ou 8000 Hz, chaque image en reçoit beaucoup, donc le curseur et la caméra bougent plus régulièrement. Sur un écran 60 ou 144 Hz, tu ne verras presque aucune différence au-dessus de 1000 Hz.</p>

<h2 id="cout">Le prix : charge processeur et compatibilité</h2>
<p>Chaque envoi est une interruption USB que Windows et le jeu doivent traiter. À 8000 Hz, c’est huit fois plus de travail qu’à 1000 Hz.</p>
<ul>
<li><strong>Usage du processeur</strong> : sur un processeur récent, c’est quelques pourcents, mais sur un processeur ancien ou déjà chargé, ça peut baisser les FPS ou créer des saccades, surtout dans les jeux limités par le CPU.</li>
<li><strong>Compatibilité des jeux</strong> : la plupart des jeux récents en raw input gèrent bien 8000 Hz. Certains vieux jeux ou moteurs saccadent ou perdent des FPS quand la souris bouge vite. Si un jeu se comporte mal, baisse la valeur pour ce jeu.</li>
<li><strong>Branchement USB</strong> : les hautes fréquences sont sensibles aux hubs, aux ports en façade et aux contrôleurs partagés. Utilise un port arrière de la carte mère (voir notre <a href="../port-usb-souris-gaming/">guide sur les ports USB</a>).</li>
<li><strong>Batterie en sans fil</strong> : à 4000 ou 8000 Hz, l’autonomie peut fortement baisser. Regarde les chiffres du fabricant.</li>
<li><strong>Mouvement du capteur</strong> : pour envoyer 8000 positions différentes par seconde, la souris doit bouger assez vite et à un DPI assez élevé. À bas DPI et en mouvement lent, beaucoup d’envois sont identiques. Certains fabricants conseillent 1600 DPI ou plus à 8000 Hz.</li>
</ul>

<h2 id="choisir">Lequel choisir</h2>
<table>
<thead><tr><th>Ta config</th><th>Bon choix</th></tr></thead>
<tbody>
<tr><td>Écran 60–144 Hz, n’importe quel processeur</td><td>1000 Hz</td></tr>
<tr><td>Écran 240 Hz, processeur milieu de gamme</td><td>1000 ou 2000 Hz</td></tr>
<tr><td>Écran 240–360 Hz, processeur récent</td><td>2000 ou 4000 Hz</td></tr>
<tr><td>Écran 360–500 Hz, processeur haut de gamme, FPS compétitifs</td><td>4000 ou 8000 Hz, après test</td></tr>
<tr><td>Processeur ancien, jeux limités par le CPU, ou saccades à haute fréquence</td><td>1000 Hz</td></tr>
<tr><td>Sans fil et l’autonomie compte</td><td>1000 ou 2000 Hz</td></tr>
</tbody>
</table>
<p>Pour beaucoup de joueurs, <strong>2000 à 4000 Hz</strong> est le bon compromis : l’essentiel du gain de fluidité sans tout le coût processeur du 8000 Hz.</p>

<h2 id="changer">Comment le changer</h2>
<ol>
<li>Ouvre le logiciel de ta souris (Logitech G HUB, Razer Synapse, Pulsar, Lamzu, Zowie, etc.) ou le driver web du fabricant.</li>
<li>Cherche le réglage <em>Polling rate</em> ou <em>Report rate</em> (taux d’interrogation).</li>
<li>Pour les souris sans fil, 4000 et 8000 Hz demandent souvent un dongle spécifique (parfois vendu à part). Branche-le sur un port USB arrière.</li>
<li>Certaines souris gardent la valeur en mémoire ; d’autres ont besoin que le logiciel reste installé. Vérifie après un redémarrage.</li>
</ol>

<h2 id="tester">Comment tester ton polling rate</h2>
<p>Ne te fie pas à la boîte : vérifie ce que ton PC reçoit vraiment.</p>
<ul>
<li>Utilise un testeur de polling rate (en ligne ou dans une appli) et fais des cercles rapides avec la souris. La valeur doit rester proche de celle choisie. De grosses chutes indiquent un souci d’USB, de câble, de dongle ou de processeur.</li>
<li>Attention : les navigateurs peuvent limiter ou lisser les mesures, surtout au-dessus de 1000 Hz. Un testeur Windows natif est plus fiable à 4000–8000 Hz.</li>
<li>Teste ensuite en jeu : même map, même scénario, à 1000 Hz puis à ta valeur plus haute. Regarde les FPS, les 1 % low et la sensation en tracking.</li>
</ul>

<h2 id="windows">Les réglages Windows liés</h2>
<ul>
<li><strong>Améliorer la précision du pointeur</strong> : désactive-la dans Panneau de configuration → Souris → Options du pointeur. C’est de l’accélération, pas de la précision.</li>
<li><strong>Vitesse du pointeur Windows</strong> : laisse le curseur sur le 6e cran (la valeur par défaut, 1:1). Change plutôt la sensibilité dans le logiciel de la souris (DPI) ou dans le jeu.</li>
<li><strong>Raw input</strong> : active-le dans les jeux qui le proposent, pour que le jeu lise la souris directement.</li>
<li><strong>Suspension sélective USB</strong> : sur certains PC, la mettre sur <em>Désactivé</em> dans les paramètres avancés du mode d’alimentation évite qu’un dongle ou une souris en veille se réveille en retard. L’effet est en général faible sur un PC fixe.</li>
</ul>

<h2 id="idees-recues">Les idées reçues</h2>
<ul>
<li><strong>« Plus c’est haut, mieux c’est. »</strong> Pas si ton processeur, ton jeu ou ton port USB ne suivent pas. Un 2000 Hz stable vaut mieux qu’un 8000 Hz qui tombe à 3000 Hz à chaque flick.</li>
<li><strong>« 8000 Hz fait mieux viser. »</strong> Ça rend le mouvement plus fluide et un peu plus réactif. Ta visée dépend toujours de ta sensibilité, de ton entraînement et de FPS stables.</li>
<li><strong>« Polling rate et DPI, c’est pareil. »</strong> Le DPI, c’est la distance parcourue par le curseur pour un pouce de mouvement. Le polling rate, c’est la fréquence à laquelle la souris envoie ce mouvement. Changer l’un ne change pas l’autre.</li>
<li><strong>« C’est Windows qui le règle. »</strong> Windows n’a pas de réglage de polling rate pour les souris gaming récentes : il est stocké dans le firmware de la souris et se règle dans le logiciel du fabricant.</li>
</ul>

<h2 id="resume">En bref</h2>
<ul>
<li>Passer de 1000 à 8000 Hz fait gagner moins de 0,5 ms en moyenne : réel, mais petit.</li>
<li>Le gain visible, c’est un tracking plus fluide sur les écrans 240 Hz et plus.</li>
<li>Le prix : charge processeur, compatibilité des jeux et autonomie.</li>
<li>2000–4000 Hz est un bon compromis pour la plupart ; 8000 Hz seulement si ton processeur et tes jeux suivent.</li>
<li>Teste toujours la valeur réelle et tes FPS avant de garder un réglage.</li>
</ul>`,
    cta: `<p>KarmaaOptimizer intègre un test de polling rate natif jusqu’à 8000 Hz (hors navigateur, donc sans mesures plafonnées), un convertisseur de sensibilité entre jeux, et vérifie les réglages souris de Windows ci-dessus. Il mesure aussi la latence USB et des pilotes sur ton PC. Il ne modifie pas le firmware de ta souris : tu règles le polling rate dans le logiciel de ta souris, puis tu utilises l’app pour vérifier le résultat et comparer dans tes jeux. Aucun chiffre promis : tu mesures toi-même.</p>`,
  },
};
