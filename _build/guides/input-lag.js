module.exports = {
  id: 'reduce-input-lag-windows-11',
  slug: { en: 'reduce-input-lag-windows-11', fr: 'reduire-input-lag-windows-11' },
  related: ['best-windows-11-settings-gaming', 'mouse-polling-rate-1000-4000-8000', 'usb-port-gaming-mouse'],
  en: {
    title: 'How to Reduce Input Lag on Windows 11 (2026 Guide)',
    desc: 'Cut input lag on Windows 11 step by step: Reflex, V-Sync, frame caps, display mode, power plan, mouse and drivers. Free guide with manual steps.',
    short: 'Reduce input lag on Windows 11',
    h1: 'How to reduce input lag on Windows 11',
    lede: 'Input lag is the delay between your click and the moment the result shows up on screen. On Windows 11 most of it comes from a handful of settings in your game, your graphics driver and Windows itself. Here is how to fix them by hand, in the order that matters most.',
    howto: {
      name: 'Reduce input lag on Windows 11', time: 'PT30M',
      steps: [
        ['Measure your starting point', 'Note your FPS and latency in a repeatable scene before changing anything.', 'measure'],
        ['Turn on NVIDIA Reflex or AMD Anti-Lag', 'Enable Reflex (On or On + Boost) in games that support it, or Anti-Lag in AMD Software.', 'reflex'],
        ['Fix V-Sync and cap your frame rate', 'Turn off in-game V-Sync and cap FPS a few frames below your refresh rate with G-Sync/FreeSync, or leave it uncapped without VRR.', 'vsync'],
        ['Use the right display mode', 'Use fullscreen or borderless with “Optimizations for windowed games” turned on.', 'display'],
        ['Check refresh rate and power plan', 'Set the real refresh rate of your monitor and a high performance power mode.', 'refresh'],
        ['Fix the mouse side', 'Turn off Enhance pointer precision, use 1000 Hz or more and a rear USB port.', 'mouse'],
        ['Clean up background load', 'Close overlays and recording, and check driver latency with LatencyMon.', 'background'],
      ],
    },
    body: `<h2 id="what">What input lag really is</h2>
<p>When you click, the signal goes through a chain: the mouse sends it over USB, Windows passes it to the game, the game simulates the frame, the graphics card renders it, then the monitor scans it out. Total latency (often called <strong>system latency</strong> or click-to-photon) is the sum of all these steps. On a decent gaming PC it is usually between 15 and 40 ms. Most of it comes from the <strong>render queue</strong> (frames waiting for the GPU) and from <strong>V-Sync</strong>, not from the mouse or Windows.</p>
<p>That is why the order below matters: fix the big contributors first, then the small ones.</p>

<h2 id="measure">1. Measure before you change anything</h2>
<p>Without a measurement, you are guessing. Pick a scene you can repeat (a training map, a replay, an empty custom match) and note:</p>
<ul>
<li>your average FPS and your <strong>1% lows</strong> (they show stutter better than the average);</li>
<li>the latency number if your game shows one: many games with NVIDIA Reflex have a “Render latency” or “PC latency” stat in their performance overlay;</li>
<li>on NVIDIA, the free <strong>FrameView</strong> tool logs PC latency in Reflex games.</li>
</ul>
<p>Change <strong>one setting at a time</strong> and measure again in the same scene. Results vary a lot from one PC to another.</p>

<h2 id="reflex">2. Turn on NVIDIA Reflex or AMD Anti-Lag</h2>
<p>This is the single biggest win in most competitive games, because it keeps the render queue empty when your GPU is the bottleneck.</p>
<ul>
<li><strong>NVIDIA Reflex</strong>: in the game’s graphics settings, set it to <em>On</em>. <em>On + Boost</em> also keeps the GPU clocks high; it helps a little when you are CPU-limited, at the cost of power use.</li>
<li><strong>Games without Reflex</strong> (NVIDIA): open NVIDIA Control Panel → Manage 3D settings → <em>Low Latency Mode</em> → <em>Ultra</em> (DirectX 11 and older only; it does nothing in DirectX 12 or Vulkan games).</li>
<li><strong>AMD</strong>: open AMD Software → Gaming → Graphics → turn on <em>Radeon Anti-Lag</em>. In supported games, <em>Anti-Lag 2</em> is set in the game itself.</li>
</ul>

<h2 id="vsync">3. Fix V-Sync and cap your frame rate properly</h2>
<p>Classic V-Sync can add a full frame or more of delay. What to do depends on your monitor:</p>
<h3>With G-Sync or FreeSync (variable refresh rate)</h3>
<ol>
<li>Turn on G-Sync / FreeSync in the driver and on the monitor.</li>
<li>Turn <strong>off</strong> V-Sync in the game.</li>
<li>Turn <strong>on</strong> V-Sync in NVIDIA Control Panel (Manage 3D settings → Vertical sync → On). With G-Sync this does not add the usual V-Sync lag; it only prevents tearing at the top of the range.</li>
<li>Cap your FPS a few frames below your refresh rate (for example 237 on a 240 Hz screen, 141 on 144 Hz). Reflex does this cap automatically when G-Sync and V-Sync are both on.</li>
</ol>
<h3>Without variable refresh rate</h3>
<p>Leave V-Sync off everywhere. A higher frame rate than your refresh rate still lowers latency, at the cost of some tearing. If your FPS swings a lot, a stable cap (set in-game or in the driver) that your PC can hold most of the time often feels better than an unstable uncapped frame rate.</p>

<h2 id="display">4. Use the right display mode</h2>
<p>On Windows 11, borderless windowed is no longer the latency trap it used to be, as long as the game uses the modern “flip” presentation model:</p>
<ol>
<li>Open <strong>Settings → System → Display → Graphics</strong>.</li>
<li>Click <em>Advanced graphics settings</em> (or <em>Change default graphics settings</em> on older builds).</li>
<li>Turn on <strong>Optimizations for windowed games</strong>.</li>
<li>On the same page, try <strong>Hardware-accelerated GPU scheduling</strong>. It needs a restart. It helps on some PCs and does nothing on others, so measure both ways.</li>
</ol>
<p>If a game offers true <em>Fullscreen (exclusive)</em>, it is still a safe choice. Avoid running the game in a regular window with the taskbar visible.</p>

<h2 id="refresh">5. Check your refresh rate and power plan</h2>
<p>A surprising number of players run a 144 or 240 Hz monitor at 60 Hz without knowing it.</p>
<ol>
<li>Go to <strong>Settings → System → Display → Advanced display</strong>.</li>
<li>Under <em>Choose a refresh rate</em>, pick the highest value. If it is missing, check your cable (use DisplayPort or a recent HDMI cable) and the port on the GPU, not on the motherboard.</li>
<li>Go to <strong>Settings → System → Power &amp; battery</strong> and set <em>Power mode</em> to <strong>Best performance</strong>. On desktops you can also pick the <em>High performance</em> plan in the classic Control Panel → Power Options.</li>
</ol>

<h2 id="mouse">6. Fix the mouse side</h2>
<ul>
<li><strong>Enhance pointer precision</strong>: Control Panel → Mouse → Pointer Options → uncheck it. It is mouse acceleration; most games using raw input ignore it, but it affects menus and some older games.</li>
<li><strong>Polling rate</strong>: use at least 1000 Hz in your mouse software. Higher rates (2000 to 8000 Hz) shave off fractions of a millisecond but cost CPU time. Read our <a href="../mouse-polling-rate-1000-4000-8000/">polling rate guide</a> before going to 8000 Hz.</li>
<li><strong>USB port</strong>: plug the mouse (or its wireless dongle) into a rear port on the motherboard, not a front panel, hub or monitor port. Details in our <a href="../usb-port-gaming-mouse/">USB port guide</a>.</li>
</ul>

<h2 id="background">7. Clean up background load</h2>
<p>Background programs rarely add direct input lag, but they cause frame time spikes that feel like lag.</p>
<ul>
<li>Turn off background recording: <strong>Settings → Gaming → Captures</strong> → turn off <em>Record what happened</em>. Turn off instant replay in the NVIDIA or AMD overlay if you do not use it.</li>
<li>Close overlays you do not need (Discord, launchers, RGB tools, monitoring apps).</li>
<li>Check <strong>Task Manager → Startup apps</strong> and disable what you do not need at boot.</li>
<li>If you feel random micro-stutters, run the free <strong>LatencyMon</strong> for a few minutes. If it points at a driver (network, audio, storage), update that driver from the manufacturer’s site first.</li>
</ul>
<div class="tip"><p><strong>Keep your graphics driver up to date</strong>, but use a clean install only when something is broken. A new driver can change latency in a game, so measure again after updating.</p></div>

<h2 id="myths">Settings that do not help (or can hurt)</h2>
<ul>
<li><strong>Random registry “latency tweaks”</strong> found in videos: many do nothing on Windows 11, and some (timer or interrupt changes) can make the PC unstable. If you try one, write down the original value first.</li>
<li><strong>Disabling every Windows service</strong>: it can break updates, the Microsoft Store, audio or anti-cheat services, for no measurable gain.</li>
<li><strong>Max pre-rendered frames tweaks in DirectX 12 games</strong>: the driver setting does not apply there. Use Reflex or Anti-Lag 2 instead.</li>
</ul>

<h2 id="checklist">Quick checklist</h2>
<ol>
<li>Reflex On (or Low Latency Mode Ultra / Anti-Lag).</li>
<li>In-game V-Sync off; with G-Sync/FreeSync: driver V-Sync on and FPS cap a few frames under the refresh rate.</li>
<li>Fullscreen, or borderless with Optimizations for windowed games on.</li>
<li>Real refresh rate selected, power mode on Best performance.</li>
<li>Pointer precision off, 1000 Hz or more, rear USB port.</li>
<li>Recording and useless overlays off.</li>
<li>Measure again in the same scene.</li>
</ol>`,
    cta: `<p>Every step above can be done by hand. KarmaaOptimizer simply automates the Windows part: the Scan checks your refresh rate, power plan, Game Mode, background recording and graphics driver, then fixes what is wrong in one click. It also measures driver latency core by core and lets you compare Before / After in your own games. Every change can be undone in one click. We do not promise a number of FPS or milliseconds: you measure the result yourself.</p>`,
  },
  fr: {
    title: 'Réduire l’input lag sur Windows 11 : le guide complet',
    desc: 'Réduis l’input lag sur Windows 11 pas à pas : Reflex, V-Sync, limite de FPS, mode d’affichage, alimentation, souris. Guide gratuit et manuel.',
    short: 'Réduire l’input lag sur Windows 11',
    h1: 'Comment réduire l’input lag sur Windows 11',
    lede: 'L’input lag, c’est le délai entre ton clic et le moment où le résultat s’affiche. Sur Windows 11, l’essentiel vient de quelques réglages dans ton jeu, ton pilote graphique et Windows. Voici comment les corriger à la main, dans l’ordre qui compte le plus.',
    howto: {
      name: 'Réduire l’input lag sur Windows 11', time: 'PT30M',
      steps: [
        ['Mesure ton point de départ', 'Note tes FPS et ta latence dans une scène reproductible avant de toucher à quoi que ce soit.', 'mesurer'],
        ['Active NVIDIA Reflex ou AMD Anti-Lag', 'Active Reflex (Activé ou Activé + Boost) dans les jeux compatibles, ou Anti-Lag dans AMD Software.', 'reflex'],
        ['Règle la V-Sync et limite tes FPS', 'Coupe la V-Sync du jeu et limite les FPS quelques images sous ton taux de rafraîchissement avec G-Sync/FreeSync, ou ne limite pas sans VRR.', 'vsync'],
        ['Choisis le bon mode d’affichage', 'Plein écran, ou fenêtré sans bordure avec « Optimisations pour les jeux fenêtrés » activé.', 'affichage'],
        ['Vérifie le rafraîchissement et l’alimentation', 'Choisis le vrai taux de rafraîchissement de ton écran et le mode d’alimentation le plus performant.', 'rafraichissement'],
        ['Règle la souris', 'Désactive « Améliorer la précision du pointeur », passe à 1000 Hz ou plus, branche-la à l’arrière.', 'souris'],
        ['Allège l’arrière-plan', 'Ferme les overlays et l’enregistrement, et vérifie la latence des pilotes avec LatencyMon.', 'arriere-plan'],
      ],
    },
    body: `<h2 id="definition">Ce qu’est vraiment l’input lag</h2>
<p>Quand tu cliques, le signal traverse une chaîne : la souris l’envoie en USB, Windows le passe au jeu, le jeu calcule l’image, la carte graphique la rend, puis l’écran l’affiche. La latence totale (souvent appelée <strong>latence système</strong> ou « click-to-photon ») est la somme de tout ça. Sur un PC gamer correct, elle tourne en général entre 15 et 40 ms. L’essentiel vient de la <strong>file de rendu</strong> (les images qui attendent la carte graphique) et de la <strong>V-Sync</strong>, pas de la souris ni de Windows.</p>
<p>C’est pour ça que l’ordre ci-dessous compte : corrige d’abord les gros postes, ensuite les petits.</p>

<h2 id="mesurer">1. Mesure avant de changer quoi que ce soit</h2>
<p>Sans mesure, tu devines. Choisis une scène que tu peux refaire à l’identique (map d’entraînement, replay, partie perso vide) et note :</p>
<ul>
<li>tes FPS moyens et tes <strong>1 % low</strong> (ils montrent mieux les saccades que la moyenne) ;</li>
<li>la latence si ton jeu l’affiche : beaucoup de jeux avec NVIDIA Reflex ont une stat « Latence de rendu » ou « Latence PC » dans leur overlay de performance ;</li>
<li>sur NVIDIA, l’outil gratuit <strong>FrameView</strong> enregistre la latence PC dans les jeux Reflex.</li>
</ul>
<p>Change <strong>un seul réglage à la fois</strong> et remesure dans la même scène. Les résultats varient beaucoup d’un PC à l’autre.</p>

<h2 id="reflex">2. Active NVIDIA Reflex ou AMD Anti-Lag</h2>
<p>C’est le plus gros gain dans la plupart des jeux compétitifs, parce que ça garde la file de rendu vide quand ta carte graphique est le facteur limitant.</p>
<ul>
<li><strong>NVIDIA Reflex</strong> : dans les options graphiques du jeu, mets-le sur <em>Activé</em>. <em>Activé + Boost</em> garde en plus les fréquences du GPU au maximum ; ça aide un peu quand tu es limité par le processeur, au prix d’une consommation plus élevée.</li>
<li><strong>Jeux sans Reflex</strong> (NVIDIA) : ouvre le Panneau de configuration NVIDIA → Gérer les paramètres 3D → <em>Mode de faible latence</em> → <em>Ultra</em> (DirectX 11 et plus ancien seulement ; aucun effet en DirectX 12 ou Vulkan).</li>
<li><strong>AMD</strong> : ouvre AMD Software → Jeux → Graphismes → active <em>Radeon Anti-Lag</em>. Dans les jeux compatibles, <em>Anti-Lag 2</em> se règle directement dans le jeu.</li>
</ul>

<h2 id="vsync">3. Règle la V-Sync et limite tes FPS correctement</h2>
<p>La V-Sync classique peut ajouter une image complète de retard, voire plus. Ce qu’il faut faire dépend de ton écran :</p>
<h3>Avec G-Sync ou FreeSync (fréquence variable)</h3>
<ol>
<li>Active G-Sync / FreeSync dans le pilote et sur l’écran.</li>
<li><strong>Coupe</strong> la V-Sync dans le jeu.</li>
<li><strong>Active</strong> la V-Sync dans le Panneau NVIDIA (Gérer les paramètres 3D → Synchronisation verticale → Activé). Avec G-Sync, ça n’ajoute pas le retard habituel de la V-Sync : ça évite juste le tearing en haut de la plage.</li>
<li>Limite tes FPS quelques images sous ton taux de rafraîchissement (par exemple 237 sur un écran 240 Hz, 141 sur 144 Hz). Reflex applique cette limite tout seul quand G-Sync et V-Sync sont activés.</li>
</ol>
<h3>Sans fréquence variable</h3>
<p>Laisse la V-Sync coupée partout. Des FPS au-dessus du taux de rafraîchissement baissent quand même la latence, au prix d’un peu de tearing. Si tes FPS varient beaucoup, une limite stable (dans le jeu ou le pilote) que ton PC tient presque tout le temps est souvent plus agréable que des FPS libres mais instables.</p>

<h2 id="affichage">4. Choisis le bon mode d’affichage</h2>
<p>Sur Windows 11, le mode fenêtré sans bordure n’est plus le piège à latence qu’il était, tant que le jeu utilise le mode de présentation moderne (« flip ») :</p>
<ol>
<li>Ouvre <strong>Paramètres → Système → Écran → Graphiques</strong>.</li>
<li>Clique sur <em>Paramètres graphiques avancés</em> (ou <em>Modifier les paramètres graphiques par défaut</em> sur les anciennes versions).</li>
<li>Active <strong>Optimisations pour les jeux fenêtrés</strong>.</li>
<li>Sur la même page, essaie la <strong>Planification de processeur graphique à accélération matérielle</strong>. Il faut redémarrer. Ça aide sur certains PC et rien sur d’autres : mesure dans les deux cas.</li>
</ol>
<p>Si le jeu propose un vrai <em>Plein écran (exclusif)</em>, ça reste un choix sûr. Évite de jouer dans une fenêtre classique avec la barre des tâches visible.</p>

<h2 id="rafraichissement">5. Vérifie ton taux de rafraîchissement et ton alimentation</h2>
<p>Beaucoup de joueurs ont un écran 144 ou 240 Hz qui tourne à 60 Hz sans le savoir.</p>
<ol>
<li>Va dans <strong>Paramètres → Système → Écran → Affichage avancé</strong>.</li>
<li>Sous <em>Choisir une fréquence d’actualisation</em>, prends la valeur la plus haute. Si elle n’apparaît pas, vérifie ton câble (DisplayPort ou HDMI récent) et que tu es branché sur la carte graphique, pas sur la carte mère.</li>
<li>Va dans <strong>Paramètres → Système → Alimentation et batterie</strong> et mets le <em>Mode d’alimentation</em> sur <strong>Performances optimales</strong>. Sur un PC fixe, tu peux aussi choisir le mode <em>Performances élevées</em> dans l’ancien Panneau de configuration → Options d’alimentation.</li>
</ol>

<h2 id="souris">6. Règle la souris</h2>
<ul>
<li><strong>Améliorer la précision du pointeur</strong> : Panneau de configuration → Souris → Options du pointeur → décoche-la. C’est de l’accélération ; la plupart des jeux en raw input l’ignorent, mais elle joue sur les menus et certains vieux jeux.</li>
<li><strong>Polling rate</strong> : au moins 1000 Hz dans le logiciel de ta souris. Plus haut (2000 à 8000 Hz), tu gagnes des fractions de milliseconde mais ça coûte du processeur. Lis notre <a href="../polling-rate-souris-1000-4000-8000/">guide sur le polling rate</a> avant de passer à 8000 Hz.</li>
<li><strong>Port USB</strong> : branche la souris (ou son dongle sans fil) sur un port arrière de la carte mère, pas en façade, sur un hub ou sur l’écran. Détails dans notre <a href="../port-usb-souris-gaming/">guide sur les ports USB</a>.</li>
</ul>

<h2 id="arriere-plan">7. Allège l’arrière-plan</h2>
<p>Les programmes en arrière-plan ajoutent rarement de l’input lag direct, mais ils créent des pics de frametime qui donnent une sensation de lag.</p>
<ul>
<li>Coupe l’enregistrement en arrière-plan : <strong>Paramètres → Jeux → Captures</strong> → désactive <em>Enregistrer ce qui s’est passé</em>. Coupe aussi le replay instantané de l’overlay NVIDIA ou AMD si tu ne t’en sers pas.</li>
<li>Ferme les overlays inutiles (Discord, launchers, logiciels RGB, outils de monitoring).</li>
<li>Regarde <strong>Gestionnaire des tâches → Applications de démarrage</strong> et désactive ce qui n’a pas besoin de se lancer.</li>
<li>Si tu as des micro-saccades au hasard, lance le logiciel gratuit <strong>LatencyMon</strong> quelques minutes. S’il pointe un pilote (réseau, audio, stockage), mets d’abord ce pilote à jour depuis le site du fabricant.</li>
</ul>
<div class="tip"><p><strong>Garde ton pilote graphique à jour</strong>, mais ne fais une installation propre que si quelque chose ne va pas. Un nouveau pilote peut changer la latence dans un jeu : remesure après chaque mise à jour.</p></div>

<h2 id="mythes">Les réglages qui n’aident pas (ou qui font du mal)</h2>
<ul>
<li><strong>Les « tweaks latence » du registre</strong> vus en vidéo : beaucoup ne font rien sur Windows 11, et certains (timers, interruptions) peuvent rendre le PC instable. Si tu en testes un, note la valeur d’origine avant.</li>
<li><strong>Désactiver tous les services Windows</strong> : ça peut casser les mises à jour, le Microsoft Store, le son ou les services anti-triche, sans gain mesurable.</li>
<li><strong>Le réglage « images pré-rendues » dans les jeux DirectX 12</strong> : le réglage du pilote ne s’y applique pas. Utilise Reflex ou Anti-Lag 2.</li>
</ul>

<h2 id="recap">Check-list rapide</h2>
<ol>
<li>Reflex activé (ou Mode faible latence Ultra / Anti-Lag).</li>
<li>V-Sync du jeu coupée ; avec G-Sync/FreeSync : V-Sync du pilote activée et FPS limités quelques images sous le rafraîchissement.</li>
<li>Plein écran, ou sans bordure avec Optimisations pour les jeux fenêtrés.</li>
<li>Bon taux de rafraîchissement, alimentation sur Performances optimales.</li>
<li>Précision du pointeur désactivée, 1000 Hz ou plus, port USB arrière.</li>
<li>Enregistrement et overlays inutiles coupés.</li>
<li>Remesure dans la même scène.</li>
</ol>`,
    cta: `<p>Toutes les étapes ci-dessus se font à la main. KarmaaOptimizer automatise simplement la partie Windows : le Scan vérifie ton taux de rafraîchissement, ton mode d’alimentation, le Mode Jeu, l’enregistrement en arrière-plan et ton pilote graphique, puis corrige ce qui ne va pas en un clic. Il mesure aussi la latence des pilotes cœur par cœur et te laisse comparer Avant / Après dans tes propres jeux. Chaque changement s’annule en un clic. On ne promet aucun chiffre de FPS ou de millisecondes : tu mesures toi-même.</p>`,
  },
};
