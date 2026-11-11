module.exports = {
  id: 'best-windows-11-settings-gaming',
  slug: { en: 'best-windows-11-settings-gaming', fr: 'meilleurs-reglages-windows-11-gaming' },
  related: ['reduce-input-lag-windows-11', 'ryzen-x3d-windows-settings', 'boost-fps-cs2-fortnite-warzone-apex'],
  en: {
    title: 'Best Windows 11 Settings for Gaming (Step by Step)',
    desc: 'The Windows 11 settings that matter for gaming: Game Mode, graphics, power, captures, startup apps, VBS and drivers. What to change and what to leave.',
    short: 'Best Windows 11 settings for gaming',
    h1: 'The best Windows 11 settings for gaming',
    lede: 'Windows 11 is a good gaming OS out of the box, but a few defaults hold it back: wrong refresh rate, balanced power, background recording, startup apps. Here are the settings worth changing, where to find them, and the ones you should leave alone.',
    howto: {
      name: 'Set up Windows 11 for gaming', time: 'PT40M',
      steps: [
        ['Update Windows and drivers', 'Install Windows updates, the chipset driver and the latest graphics driver.', 'drivers'],
        ['Turn on Game Mode', 'Settings → Gaming → Game Mode → On.', 'game-mode'],
        ['Set up graphics', 'Set the real refresh rate, turn on Optimizations for windowed games and choose the high performance GPU per game.', 'graphics'],
        ['Use a performance power mode', 'Settings → System → Power → Best performance.', 'power'],
        ['Turn off background captures', 'Settings → Gaming → Captures → turn off Record what happened.', 'captures'],
        ['Trim startup apps and notifications', 'Disable unneeded startup apps and turn on Do not disturb while playing.', 'startup'],
        ['Decide on Memory integrity (VBS)', 'Understand the security trade-off before turning it off, and measure.', 'vbs'],
      ],
    },
    body: `<h2 id="before">Before you start</h2>
<p>Create a <strong>restore point</strong>: search “Create a restore point” in the Start menu, select your system drive, click <em>Configure</em> to turn protection on if needed, then <em>Create</em>. Then pick a test scene in one of your games and note your average FPS and 1% lows. Change settings in small groups and measure again. A setting that helps one PC can do nothing on another.</p>

<h2 id="drivers">1. Update Windows and your drivers</h2>
<ul>
<li><strong>Windows Update</strong>: install pending updates, including optional driver updates only if you know what they are.</li>
<li><strong>Chipset driver</strong>: download it from AMD or Intel (or your motherboard’s support page). On AMD Ryzen it also installs the power management pieces the CPU needs.</li>
<li><strong>Graphics driver</strong>: get it from NVIDIA, AMD or Intel directly. The driver offered by Windows Update is often older.</li>
<li><strong>BIOS</strong>: check for updates on your motherboard’s support page, and turn on <strong>XMP</strong> (Intel) or <strong>EXPO</strong> (AMD) so your RAM runs at its rated speed. Without it, many kits run far slower than what you paid for.</li>
</ul>

<h2 id="game-mode">2. Turn on Game Mode</h2>
<p>Go to <strong>Settings → Gaming → Game Mode</strong> and turn it on. It is on by default on most PCs. Game Mode gives priority to the game, stops Windows Update from installing drivers or showing restart notifications while you play. Old advice to turn it off dates back to early Windows 10 bugs that are long fixed. On AMD Ryzen 7900X3D, 7950X3D, 9900X3D and 9950X3D, Game Mode is even required for the CPU to pick the right cores (see our <a href="../ryzen-x3d-windows-settings/">Ryzen X3D guide</a>).</p>

<h2 id="graphics">3. Set up graphics correctly</h2>
<h3>Refresh rate</h3>
<p><strong>Settings → System → Display → Advanced display → Choose a refresh rate</strong>: pick the highest value. <strong>Dynamic refresh rate</strong> is only useful on laptops; on a desktop, keep your fixed maximum.</p>
<h3>Optimizations for windowed games and GPU scheduling</h3>
<p><strong>Settings → System → Display → Graphics → Advanced graphics settings</strong>:</p>
<ul>
<li><strong>Optimizations for windowed games</strong>: turn it on. It lets older DirectX 10/11 games running in borderless mode use the lower-latency flip model.</li>
<li><strong>Hardware-accelerated GPU scheduling (HAGS)</strong>: required for NVIDIA Frame Generation (DLSS 3 and later). Outside of that, its effect varies; measure with it on and off (restart each time).</li>
<li><strong>Variable refresh rate</strong>: turn it on if you have a G-Sync or FreeSync monitor.</li>
</ul>
<h3>GPU preference per game (laptops and PCs with two GPUs)</h3>
<p>On the same Graphics page, add your game’s .exe and set it to <strong>High performance</strong>. On a laptop, this makes sure the game runs on the dedicated GPU, not the integrated one.</p>

<h2 id="power">4. Use a performance power mode</h2>
<p>Go to <strong>Settings → System → Power &amp; battery → Power mode</strong> and choose <strong>Best performance</strong>. On a desktop, you can also open the classic <em>Control Panel → Power Options</em> and select <em>High performance</em>. The hidden <em>Ultimate Performance</em> plan exists, but on most gaming PCs it brings no measurable gain over High performance and keeps the CPU from resting.</p>
<p><strong>Exception</strong>: on dual-CCD Ryzen X3D chips, AMD recommends the <em>Balanced</em> plan, because the core parking that sends the game to the right cores relies on it.</p>

<h2 id="captures">5. Turn off background captures</h2>
<p>Go to <strong>Settings → Gaming → Captures</strong> and turn off <strong>Record what happened</strong>. Background recording keeps encoding video while you play. If you use the NVIDIA App or AMD Software to record clips, choose one tool and turn off instant replay in the others.</p>
<p>You do not need to uninstall the Xbox Game Bar: some features (Game Mode detection, the X3D driver on AMD) depend on it.</p>

<h2 id="startup">6. Trim startup apps and notifications</h2>
<ul>
<li><strong>Task Manager → Startup apps</strong>: disable launchers, updaters, RGB and cloud tools you do not need at every boot. Keep your audio, graphics and antivirus entries.</li>
<li><strong>Settings → Apps → Installed apps</strong>: uninstall trial software and toolbars that came with the PC.</li>
<li><strong>Settings → System → Notifications</strong>: turn on <em>Do not disturb</em> automatically “When playing a game”.</li>
<li><strong>Settings → Windows Update → Advanced options → Active hours</strong>: set them to the hours you play, so Windows never restarts in the middle of a session.</li>
</ul>

<h2 id="vbs">7. Memory integrity and VBS: know the trade-off</h2>
<p>Windows 11 enables <strong>Virtualization-Based Security (VBS)</strong> and <strong>Memory integrity (HVCI)</strong> on many new PCs. Microsoft itself has said they can lower performance in some games, and gives the option to turn them off for gaming. But they also protect you against kernel-level malware.</p>
<ul>
<li>To check: open <strong>Windows Security → Device security → Core isolation details</strong>.</li>
<li>If you turn Memory integrity off, restart and measure. If the gain is not clear on your PC, turn it back on.</li>
<li>Some anti-cheats (for example FACEIT or Vanguard) may ask for these features to be on. Follow what your games require.</li>
</ul>
<p>This is your choice to make with the facts in hand. We do not recommend turning security off blindly.</p>

<h2 id="mouse">8. Mouse and keyboard</h2>
<ul>
<li><strong>Control Panel → Mouse → Pointer Options</strong>: uncheck <em>Enhance pointer precision</em>.</li>
<li><strong>Settings → Accessibility → Keyboard</strong>: make sure Sticky Keys and Filter Keys shortcuts are off, so pressing Shift five times never opens a pop-up mid-game.</li>
<li>Set your mouse to 1000 Hz or more and plug it into a rear USB port. More in our guides on <a href="../mouse-polling-rate-1000-4000-8000/">polling rate</a> and <a href="../usb-port-gaming-mouse/">USB ports</a>.</li>
</ul>

<h2 id="storage">9. Storage and free space</h2>
<p>Install your games on an <strong>SSD</strong> (NVMe if possible). Keep at least 15–20% free space on it. Turn on <strong>Storage Sense</strong> (Settings → System → Storage) to clean temporary files automatically. Do not disable TRIM or the scheduled optimization of drives: on SSDs, Windows runs TRIM, not a defragmentation.</p>

<h2 id="leave">What to leave alone</h2>
<ul>
<li><strong>Do not disable Windows Defender</strong> for performance. If a scan runs while you play, schedule it instead.</li>
<li><strong>Do not disable services in bulk</strong> with scripts you have not read. You can break updates, audio, Bluetooth or your anti-cheat.</li>
<li><strong>Do not turn off the page file</strong>, even with lots of RAM: some games crash without it.</li>
<li><strong>Do not use “RAM cleaner” apps</strong>: Windows manages memory better on its own.</li>
</ul>

<h2 id="checklist">Summary</h2>
<table>
<thead><tr><th>Setting</th><th>Where</th><th>Value</th></tr></thead>
<tbody>
<tr><td>Game Mode</td><td>Settings → Gaming</td><td>On</td></tr>
<tr><td>Refresh rate</td><td>Display → Advanced display</td><td>Maximum</td></tr>
<tr><td>Windowed game optimizations</td><td>Display → Graphics</td><td>On</td></tr>
<tr><td>HAGS</td><td>Display → Graphics</td><td>Test both</td></tr>
<tr><td>Power mode</td><td>System → Power</td><td>Best performance (Balanced on dual-CCD X3D)</td></tr>
<tr><td>Record what happened</td><td>Gaming → Captures</td><td>Off</td></tr>
<tr><td>Startup apps</td><td>Task Manager</td><td>Only what you need</td></tr>
<tr><td>Memory integrity</td><td>Windows Security</td><td>Your choice, measure</td></tr>
<tr><td>XMP / EXPO</td><td>BIOS</td><td>On</td></tr>
</tbody>
</table>`,
    cta: `<p>You can apply everything above by hand in under an hour. KarmaaOptimizer does it for you if you prefer: its Scan runs 24 checks (Game Mode, power plan, refresh rate, captures, graphics driver…), gives your PC a score from A+ to F and fixes what is wrong in one click. Each tweak is explained, applied only if you choose it, and can be undone in one click. It never touches your games’ files and injects nothing, so it stays anti-cheat friendly. How much it helps depends on your PC: you measure it yourself with the Before / After test.</p>`,
  },
  fr: {
    title: 'Meilleurs réglages Windows 11 pour jouer (pas à pas)',
    desc: 'Les réglages Windows 11 qui comptent pour jouer : Mode Jeu, graphismes, alimentation, captures, démarrage, VBS, pilotes. Quoi changer, quoi laisser.',
    short: 'Meilleurs réglages Windows 11 pour le gaming',
    h1: 'Les meilleurs réglages Windows 11 pour le gaming',
    lede: 'Windows 11 est un bon système pour jouer dès l’installation, mais quelques réglages par défaut le freinent : mauvais taux de rafraîchissement, alimentation équilibrée, enregistrement en arrière-plan, applis au démarrage. Voici ceux qui valent le coup, où les trouver, et ceux qu’il vaut mieux ne pas toucher.',
    howto: {
      name: 'Régler Windows 11 pour jouer', time: 'PT40M',
      steps: [
        ['Mets à jour Windows et les pilotes', 'Installe les mises à jour Windows, le pilote chipset et le dernier pilote graphique.', 'pilotes'],
        ['Active le Mode Jeu', 'Paramètres → Jeux → Mode Jeu → Activé.', 'mode-jeu'],
        ['Règle les graphismes', 'Choisis le vrai taux de rafraîchissement, active Optimisations pour les jeux fenêtrés et le GPU hautes performances par jeu.', 'graphismes'],
        ['Passe en mode performances', 'Paramètres → Système → Alimentation → Performances optimales.', 'alimentation'],
        ['Coupe les captures en arrière-plan', 'Paramètres → Jeux → Captures → désactive Enregistrer ce qui s’est passé.', 'captures'],
        ['Allège le démarrage et les notifications', 'Désactive les applis inutiles au démarrage et active Ne pas déranger en jeu.', 'demarrage'],
        ['Décide pour l’intégrité de la mémoire (VBS)', 'Comprends le compromis sécurité avant de la couper, et mesure.', 'vbs'],
      ],
    },
    body: `<h2 id="avant">Avant de commencer</h2>
<p>Crée un <strong>point de restauration</strong> : tape « Créer un point de restauration » dans le menu Démarrer, sélectionne ton disque système, clique sur <em>Configurer</em> pour activer la protection si besoin, puis sur <em>Créer</em>. Ensuite, choisis une scène de test dans un de tes jeux et note tes FPS moyens et tes 1 % low. Change les réglages par petits groupes et remesure. Un réglage qui aide un PC peut ne rien faire sur un autre.</p>

<h2 id="pilotes">1. Mets à jour Windows et tes pilotes</h2>
<ul>
<li><strong>Windows Update</strong> : installe les mises à jour en attente. Les mises à jour de pilotes facultatives, seulement si tu sais ce que c’est.</li>
<li><strong>Pilote chipset</strong> : télécharge-le chez AMD ou Intel (ou sur la page support de ta carte mère). Sur AMD Ryzen, il installe aussi la gestion d’énergie dont le processeur a besoin.</li>
<li><strong>Pilote graphique</strong> : prends-le directement chez NVIDIA, AMD ou Intel. Celui proposé par Windows Update est souvent plus ancien.</li>
<li><strong>BIOS</strong> : regarde s’il y a une mise à jour sur la page support de ta carte mère, et active <strong>XMP</strong> (Intel) ou <strong>EXPO</strong> (AMD) pour que ta RAM tourne à sa vitesse prévue. Sans ça, beaucoup de kits tournent bien plus lentement que ce que tu as payé.</li>
</ul>

<h2 id="mode-jeu">2. Active le Mode Jeu</h2>
<p>Va dans <strong>Paramètres → Jeux → Mode Jeu</strong> et active-le. Il l’est déjà sur la plupart des PC. Le Mode Jeu donne la priorité au jeu et empêche Windows Update d’installer des pilotes ou d’afficher des notifications de redémarrage pendant que tu joues. Les vieux conseils de le couper datent des bugs du début de Windows 10, corrigés depuis longtemps. Sur les AMD Ryzen 7900X3D, 7950X3D, 9900X3D et 9950X3D, le Mode Jeu est même nécessaire pour que le processeur choisisse les bons cœurs (voir notre <a href="../ryzen-x3d-reglages-windows/">guide Ryzen X3D</a>).</p>

<h2 id="graphismes">3. Règle correctement les graphismes</h2>
<h3>Taux de rafraîchissement</h3>
<p><strong>Paramètres → Système → Écran → Affichage avancé → Choisir une fréquence d’actualisation</strong> : prends la valeur la plus haute. La <strong>fréquence d’actualisation dynamique</strong> n’a d’intérêt que sur portable ; sur un PC fixe, garde ton maximum fixe.</p>
<h3>Optimisations pour les jeux fenêtrés et planification GPU</h3>
<p><strong>Paramètres → Système → Écran → Graphiques → Paramètres graphiques avancés</strong> :</p>
<ul>
<li><strong>Optimisations pour les jeux fenêtrés</strong> : active-les. Elles permettent aux vieux jeux DirectX 10/11 en mode sans bordure d’utiliser le mode « flip », à plus faible latence.</li>
<li><strong>Planification GPU à accélération matérielle (HAGS)</strong> : obligatoire pour la Frame Generation de NVIDIA (DLSS 3 et après). En dehors de ça, l’effet varie : mesure avec et sans (redémarrage à chaque fois).</li>
<li><strong>Fréquence d’actualisation variable</strong> : active-la si tu as un écran G-Sync ou FreeSync.</li>
</ul>
<h3>GPU par jeu (portables et PC à deux cartes graphiques)</h3>
<p>Sur la même page Graphiques, ajoute le .exe de ton jeu et choisis <strong>Hautes performances</strong>. Sur un portable, ça garantit que le jeu tourne sur la carte graphique dédiée et pas sur l’intégrée.</p>

<h2 id="alimentation">4. Passe en mode performances</h2>
<p>Va dans <strong>Paramètres → Système → Alimentation et batterie → Mode d’alimentation</strong> et choisis <strong>Performances optimales</strong>. Sur un PC fixe, tu peux aussi ouvrir l’ancien <em>Panneau de configuration → Options d’alimentation</em> et choisir <em>Performances élevées</em>. Le mode caché <em>Performances ultimes</em> existe, mais sur la plupart des PC gamer il n’apporte rien de mesurable par rapport à Performances élevées et empêche le processeur de se reposer.</p>
<p><strong>Exception</strong> : sur les Ryzen X3D à deux CCD, AMD recommande le mode <em>Équilibré</em>, parce que la mise en veille des cœurs qui envoie le jeu sur les bons cœurs en dépend.</p>

<h2 id="captures">5. Coupe les captures en arrière-plan</h2>
<p>Va dans <strong>Paramètres → Jeux → Captures</strong> et désactive <strong>Enregistrer ce qui s’est passé</strong>. L’enregistrement en arrière-plan encode de la vidéo en continu pendant que tu joues. Si tu utilises l’app NVIDIA ou AMD Software pour tes clips, choisis un seul outil et coupe le replay instantané dans les autres.</p>
<p>Inutile de désinstaller la Xbox Game Bar : certaines fonctions (détection du Mode Jeu, pilote X3D chez AMD) en dépendent.</p>

<h2 id="demarrage">6. Allège le démarrage et les notifications</h2>
<ul>
<li><strong>Gestionnaire des tâches → Applications de démarrage</strong> : désactive les launchers, outils de mise à jour, logiciels RGB et cloud qui n’ont pas besoin de se lancer à chaque démarrage. Garde le son, la carte graphique et l’antivirus.</li>
<li><strong>Paramètres → Applications → Applications installées</strong> : désinstalle les logiciels d’essai et barres d’outils livrés avec le PC.</li>
<li><strong>Paramètres → Système → Notifications</strong> : active <em>Ne pas déranger</em> automatiquement « Lorsque vous jouez à un jeu ».</li>
<li><strong>Paramètres → Windows Update → Options avancées → Heures d’activité</strong> : mets les heures où tu joues, pour que Windows ne redémarre jamais en pleine session.</li>
</ul>

<h2 id="vbs">7. Intégrité de la mémoire et VBS : connais le compromis</h2>
<p>Windows 11 active la <strong>sécurité basée sur la virtualisation (VBS)</strong> et l’<strong>intégrité de la mémoire (HVCI)</strong> sur beaucoup de PC récents. Microsoft a lui-même indiqué qu’elles peuvent baisser les performances dans certains jeux, et laisse la possibilité de les couper pour jouer. Mais elles te protègent aussi contre des malwares qui s’attaquent au noyau.</p>
<ul>
<li>Pour vérifier : ouvre <strong>Sécurité Windows → Sécurité de l’appareil → Détails de l’isolation du noyau</strong>.</li>
<li>Si tu coupes l’intégrité de la mémoire, redémarre et mesure. Si le gain n’est pas net sur ton PC, réactive-la.</li>
<li>Certains anti-triche (par exemple FACEIT ou Vanguard) peuvent demander que ces fonctions soient activées. Suis ce que tes jeux exigent.</li>
</ul>
<p>C’est ton choix, à faire en connaissance de cause. On ne te conseille pas de couper la sécurité à l’aveugle.</p>

<h2 id="souris">8. Souris et clavier</h2>
<ul>
<li><strong>Panneau de configuration → Souris → Options du pointeur</strong> : décoche <em>Améliorer la précision du pointeur</em>.</li>
<li><strong>Paramètres → Accessibilité → Clavier</strong> : vérifie que les raccourcis des touches rémanentes et des touches filtres sont coupés, pour que 5 appuis sur Maj n’ouvrent jamais une fenêtre en pleine partie.</li>
<li>Règle ta souris sur 1000 Hz ou plus et branche-la sur un port USB arrière. Plus de détails dans nos guides sur le <a href="../polling-rate-souris-1000-4000-8000/">polling rate</a> et les <a href="../port-usb-souris-gaming/">ports USB</a>.</li>
</ul>

<h2 id="stockage">9. Stockage et espace libre</h2>
<p>Installe tes jeux sur un <strong>SSD</strong> (NVMe si possible). Garde au moins 15 à 20 % d’espace libre dessus. Active l’<strong>Assistant de stockage</strong> (Paramètres → Système → Stockage) pour nettoyer les fichiers temporaires tout seul. Ne coupe pas le TRIM ni l’optimisation planifiée des lecteurs : sur un SSD, Windows fait un TRIM, pas une défragmentation.</p>

<h2 id="a-eviter">Ce qu’il vaut mieux ne pas toucher</h2>
<ul>
<li><strong>Ne coupe pas Windows Defender</strong> pour gagner des perfs. Si une analyse tombe pendant que tu joues, planifie-la plutôt.</li>
<li><strong>Ne désactive pas des services en masse</strong> avec des scripts que tu n’as pas lus. Tu peux casser les mises à jour, le son, le Bluetooth ou ton anti-triche.</li>
<li><strong>Ne supprime pas le fichier d’échange</strong>, même avec beaucoup de RAM : certains jeux plantent sans.</li>
<li><strong>N’utilise pas d’applis « nettoyeur de RAM »</strong> : Windows gère la mémoire mieux tout seul.</li>
</ul>

<h2 id="resume">Récap</h2>
<table>
<thead><tr><th>Réglage</th><th>Où</th><th>Valeur</th></tr></thead>
<tbody>
<tr><td>Mode Jeu</td><td>Paramètres → Jeux</td><td>Activé</td></tr>
<tr><td>Taux de rafraîchissement</td><td>Écran → Affichage avancé</td><td>Maximum</td></tr>
<tr><td>Optimisations jeux fenêtrés</td><td>Écran → Graphiques</td><td>Activé</td></tr>
<tr><td>HAGS</td><td>Écran → Graphiques</td><td>Tester les deux</td></tr>
<tr><td>Mode d’alimentation</td><td>Système → Alimentation</td><td>Performances optimales (Équilibré sur X3D à deux CCD)</td></tr>
<tr><td>Enregistrer ce qui s’est passé</td><td>Jeux → Captures</td><td>Désactivé</td></tr>
<tr><td>Applis au démarrage</td><td>Gestionnaire des tâches</td><td>Le strict nécessaire</td></tr>
<tr><td>Intégrité de la mémoire</td><td>Sécurité Windows</td><td>Ton choix, mesure</td></tr>
<tr><td>XMP / EXPO</td><td>BIOS</td><td>Activé</td></tr>
</tbody>
</table>`,
    cta: `<p>Tu peux tout appliquer à la main en moins d’une heure. Si tu préfères, KarmaaOptimizer le fait pour toi : son Scan lance 24 vérifications (Mode Jeu, alimentation, taux de rafraîchissement, captures, pilote graphique…), donne une note de A+ à F à ton PC et corrige ce qui ne va pas en un clic. Chaque réglage est expliqué, appliqué seulement si tu le choisis, et s’annule en un clic. L’app ne touche pas aux fichiers de tes jeux et n’injecte rien : elle reste compatible anti-triche. Le gain dépend de ton PC : tu le mesures toi-même avec le test Avant / Après.</p>`,
  },
};
