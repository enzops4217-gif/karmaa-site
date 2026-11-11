module.exports = {
  id: 'boost-fps-cs2-fortnite-warzone-apex',
  slug: { en: 'boost-fps-cs2-fortnite-warzone-apex', fr: 'augmenter-fps-cs2-fortnite-warzone-apex' },
  related: ['best-windows-11-settings-gaming', 'reduce-input-lag-windows-11', 'ryzen-x3d-windows-settings'],
  en: {
    title: 'Boost FPS in CS2, Fortnite, Warzone and Apex',
    desc: 'How to get more stable FPS in CS2, Fortnite, Warzone and Apex Legends: find your bottleneck, then the in-game settings that cost the most.',
    short: 'Boost FPS in CS2, Fortnite, Warzone and Apex',
    h1: 'How to boost FPS in CS2, Fortnite, Warzone and Apex Legends',
    lede: 'Before touching any setting, find out what limits your FPS: the graphics card or the processor. The answer decides which settings help and which do nothing. Then here are, game by game, the options that cost the most for the least visible benefit.',
    body: `<h2 id="bottleneck">Step 1: find out what limits your FPS</h2>
<p>Open a performance overlay while playing (NVIDIA App overlay with <kbd>Alt</kbd> + <kbd>R</kbd>, AMD Software overlay with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd>, or MSI Afterburner) and watch <strong>GPU usage</strong>:</p>
<ul>
<li><strong>GPU at 95–100%</strong>: you are <strong>GPU-limited</strong>. Lowering resolution, upscaling (DLSS, FSR, XeSS) and heavy graphics settings will raise FPS.</li>
<li><strong>GPU well under 90%</strong> while FPS is not capped: you are <strong>CPU-limited</strong>. Lowering graphics barely helps. What helps: closing background apps, a performance power plan, RAM at its rated speed (XMP/EXPO), and lowering CPU-heavy settings (view distance, physics, player count effects).</li>
</ul>
<p>Esports games like CS2 and Fortnite in Performance mode are very often CPU-limited on good GPUs. Battle royales like Warzone are often GPU-limited at 1440p.</p>
<p>Always compare the same scene, and look at <strong>1% lows</strong>, not just the average: they show stutter.</p>

<h2 id="windows">Step 2: the Windows basics (all games)</h2>
<ul>
<li>Latest graphics driver from NVIDIA, AMD or Intel.</li>
<li>Correct refresh rate selected in Windows, Game Mode on, power mode on Best performance.</li>
<li>Background recording off (Settings → Gaming → Captures), useless overlays closed.</li>
<li>RAM running at its rated speed (XMP/EXPO in the BIOS).</li>
<li>Game installed on an SSD.</li>
</ul>
<p>Details in our <a href="../best-windows-11-settings-gaming/">Windows 11 settings guide</a>. For latency, also turn on <strong>NVIDIA Reflex</strong> (or AMD Anti-Lag 2) in every game below that offers it: see our <a href="../reduce-input-lag-windows-11/">input lag guide</a>.</p>
<div class="tip"><p>Game menus change with updates. Option names below may move or be renamed; the logic stays the same.</p></div>

<h2 id="cs2">Counter-Strike 2</h2>
<p>CS2 is mostly CPU-limited on good GPUs. Settings worth checking in <strong>Settings → Video → Advanced Video</strong>:</p>
<ul>
<li><strong>Boost Player Contrast</strong>: Enabled. Small cost, makes players easier to see.</li>
<li><strong>Wait for Vertical Sync</strong>: Disabled.</li>
<li><strong>NVIDIA Reflex Low Latency</strong>: Enabled.</li>
<li><strong>Multisampling Anti-Aliasing Mode</strong>: CMAA2 or 2x MSAA is a good balance; 8x MSAA costs a lot.</li>
<li><strong>Global Shadow Quality</strong>: Medium or High lets you see player shadows better; Low gives the most FPS. Test what you prefer.</li>
<li><strong>Model / Texture Detail, Shader Detail, Particle Detail</strong>: Low to Medium. Texture detail depends mostly on VRAM, not FPS.</li>
<li><strong>Ambient Occlusion</strong>: Disabled. <strong>High Dynamic Range</strong>: Performance.</li>
<li><strong>FidelityFX Super Resolution</strong>: Disabled unless you are really GPU-limited; it makes the image softer.</li>
</ul>
<p>Launch options: many old ones (<code>-novid</code>, <code>-high</code>, <code>-threads</code>) do nothing useful in CS2 or can hurt. You can leave launch options empty. To cap your frame rate, use the in-game max FPS setting or the console command <code>fps_max</code>.</p>

<h2 id="fortnite">Fortnite</h2>
<p>In <strong>Settings → Graphics</strong>, the first choice is the <strong>Rendering Mode</strong>:</p>
<ul>
<li><strong>Performance – Lower Graphical Fidelity</strong>: the lightest mode, designed for high FPS. It is the usual choice for competitive play and for modest PCs.</li>
<li><strong>DirectX 12</strong>: needed for the newest visual features (Nanite, Lumen). On a strong PC, it can run well if you turn those features off.</li>
</ul>
<p>In DirectX 11 / DirectX 12 modes, the most expensive settings are:</p>
<ul>
<li><strong>Nanite virtualized geometry</strong>: Off.</li>
<li><strong>Global Illumination</strong> and <strong>Reflections</strong> (Lumen): Off.</li>
<li><strong>Hardware Ray Tracing</strong>: Off.</li>
<li><strong>Shadows</strong>: Off or Low.</li>
<li><strong>Effects</strong> and <strong>Post Processing</strong>: Low.</li>
<li><strong>View Distance</strong>: Medium or Far (too low hides players far away).</li>
<li><strong>Textures</strong>: depends on your VRAM, not your FPS, as long as you have enough memory.</li>
</ul>
<p>Also set <strong>NVIDIA Reflex Low Latency</strong> to On (or On + Boost), <strong>V-Sync</strong> off and <strong>Frame Rate Limit</strong> to your refresh rate or slightly below with G-Sync/FreeSync. Fortnite also recompiles its shaders after updates: the first matches after a patch can stutter, then it settles.</p>

<h2 id="warzone">Call of Duty: Warzone</h2>
<p>Warzone is heavy on the GPU and on VRAM. In <strong>Settings → Graphics</strong>:</p>
<ul>
<li><strong>Display Mode</strong>: Fullscreen Exclusive.</li>
<li><strong>NVIDIA Reflex Low Latency</strong>: On + Boost, or On.</li>
<li><strong>Upscaling / Sharpening</strong>: DLSS, FSR or XeSS in Quality or Balanced mode if you are GPU-limited. It is often the biggest FPS gain at 1440p.</li>
<li><strong>VRAM Scale Target</strong>: around 80–90%. Too high can cause stutter when VRAM runs out.</li>
<li><strong>Texture Resolution</strong>: Normal or Low on 8 GB cards.</li>
<li><strong>Shadow Quality</strong>, <strong>Screen Space Reflections</strong>, <strong>Ambient Occlusion</strong>, <strong>Volumetric Quality</strong>: Low or Off.</li>
<li><strong>Particle Quality</strong>: Low. <strong>Depth of Field</strong>, <strong>Motion Blur</strong>, <strong>Film Grain</strong>: Off.</li>
<li><strong>On-Demand Texture Streaming</strong>: turning it off avoids downloading textures during matches; it can reduce stutter on slow connections, with slightly blurrier textures.</li>
</ul>
<p>Let <strong>shader preloading</strong> finish in the menu before your first match after an update or driver change. Playing while it compiles causes stutter.</p>

<h2 id="apex">Apex Legends</h2>
<p>Apex can be CPU-limited in fights with many effects. In <strong>Settings → Video</strong>:</p>
<ul>
<li><strong>Display Mode</strong>: Full Screen. <strong>V-Sync</strong>: Disabled.</li>
<li><strong>NVIDIA Reflex</strong>: Enabled or Enabled + Boost.</li>
<li><strong>Adaptive Resolution FPS Target</strong>: 0 (off), to keep a sharp image.</li>
<li><strong>Anti-aliasing</strong>: None or TSAA.</li>
<li><strong>Texture Streaming Budget</strong>: match your VRAM (it does not cost FPS while it fits).</li>
<li><strong>Ambient Occlusion Quality</strong>: Disabled. <strong>Sun Shadow Coverage</strong> and <strong>Sun Shadow Detail</strong>: Low. <strong>Spot Shadow Detail</strong>: Disabled. <strong>Volumetric Lighting</strong> and <strong>Dynamic Spot Shadows</strong>: Disabled.</li>
<li><strong>Model Detail</strong>, <strong>Effects Detail</strong>, <strong>Ragdolls</strong>: Low. <strong>Impact Marks</strong>: Disabled.</li>
</ul>
<p>Apex caps FPS by default in some setups. To change the cap, add the launch option <code>+fps_max 0</code> (unlimited) or a value like <code>+fps_max 237</code> in Steam or the EA app (game properties → advanced launch options).</p>

<h2 id="measure">Step 3: measure, then stop</h2>
<ol>
<li>Pick one repeatable scene per game (a practice range, a replay, a custom match).</li>
<li>Note average FPS and 1% lows before changing anything.</li>
<li>Change a group of settings, play the same scene, note again.</li>
<li>Keep what helps, revert what does nothing visible.</li>
</ol>
<p>Past a certain point, more FPS does not help if your monitor cannot show it and your latency is already low. A stable frame rate with good 1% lows feels better than a high but unstable average.</p>

<h2 id="myths">Common myths</h2>
<ul>
<li><strong>“This launch option gives +100 FPS”</strong>: most viral launch options are outdated or do nothing.</li>
<li><strong>Setting the game to “Realtime” priority</strong> in Task Manager: it can freeze input and audio. “High” at most, and usually not needed.</li>
<li><strong>Disabling all Windows services</strong>: no measurable FPS gain, real risk of breaking anti-cheat or updates.</li>
</ul>`,
    cta: `<p>KarmaaOptimizer has a dedicated section for Call of Duty, Fortnite, Apex Legends, Counter-Strike 2 and Rocket League: it applies optimized in-game settings in one click, shows you a preview before writing anything and keeps a backup of your original config. It also handles the Windows side covered above, and its Before / After comparison lets you measure the result in your own matches. It injects nothing into the games, so it stays anti-cheat friendly. We do not promise a set number of FPS: it depends on your PC, and you measure it yourself.</p>`,
  },
  fr: {
    title: 'Plus de FPS sur CS2, Fortnite, Warzone et Apex',
    desc: 'Comment avoir des FPS plus stables sur CS2, Fortnite, Warzone et Apex Legends : trouve ce qui te limite, puis les options qui coûtent le plus.',
    short: 'Plus de FPS sur CS2, Fortnite, Warzone et Apex',
    h1: 'Comment augmenter tes FPS sur CS2, Fortnite, Warzone et Apex Legends',
    lede: 'Avant de toucher au moindre réglage, trouve ce qui limite tes FPS : la carte graphique ou le processeur. La réponse décide quels réglages aident et lesquels ne servent à rien. Ensuite, voici jeu par jeu les options qui coûtent le plus pour le moins de gain visible.',
    body: `<h2 id="limite">Étape 1 : trouve ce qui limite tes FPS</h2>
<p>Ouvre un overlay de performance en jeu (overlay de l’app NVIDIA avec <kbd>Alt</kbd> + <kbd>R</kbd>, overlay AMD Software avec <kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>O</kbd>, ou MSI Afterburner) et regarde l’<strong>utilisation du GPU</strong> :</p>
<ul>
<li><strong>GPU à 95–100 %</strong> : tu es <strong>limité par la carte graphique</strong>. Baisser la résolution, l’upscaling (DLSS, FSR, XeSS) et les réglages graphiques lourds feront monter les FPS.</li>
<li><strong>GPU bien en dessous de 90 %</strong> alors que tes FPS ne sont pas limités : tu es <strong>limité par le processeur</strong>. Baisser les graphismes n’aide presque pas. Ce qui aide : fermer les applis en arrière-plan, un mode d’alimentation performances, la RAM à sa vitesse prévue (XMP/EXPO), et baisser les réglages qui chargent le CPU (distance d’affichage, physique, effets liés au nombre de joueurs).</li>
</ul>
<p>Les jeux esport comme CS2 et Fortnite en mode Performance sont très souvent limités par le processeur sur une bonne carte graphique. Les battle royale comme Warzone sont souvent limités par le GPU en 1440p.</p>
<p>Compare toujours la même scène, et regarde les <strong>1 % low</strong>, pas seulement la moyenne : ce sont eux qui montrent les saccades.</p>

<h2 id="windows">Étape 2 : les bases Windows (tous les jeux)</h2>
<ul>
<li>Dernier pilote graphique de NVIDIA, AMD ou Intel.</li>
<li>Bon taux de rafraîchissement choisi dans Windows, Mode Jeu activé, alimentation sur Performances optimales.</li>
<li>Enregistrement en arrière-plan coupé (Paramètres → Jeux → Captures), overlays inutiles fermés.</li>
<li>RAM à sa vitesse prévue (XMP/EXPO dans le BIOS).</li>
<li>Jeu installé sur un SSD.</li>
</ul>
<p>Détails dans notre <a href="../meilleurs-reglages-windows-11-gaming/">guide des réglages Windows 11</a>. Pour la latence, active aussi <strong>NVIDIA Reflex</strong> (ou AMD Anti-Lag 2) dans chaque jeu ci-dessous qui le propose : voir notre <a href="../reduire-input-lag-windows-11/">guide sur l’input lag</a>.</p>
<div class="tip"><p>Les menus des jeux changent avec les mises à jour. Les noms d’options ci-dessous peuvent bouger ou être renommés ; la logique reste la même. Selon la langue de ton jeu, les noms peuvent aussi être traduits.</p></div>

<h2 id="cs2">Counter-Strike 2</h2>
<p>CS2 est surtout limité par le processeur sur une bonne carte graphique. Les réglages à vérifier dans <strong>Paramètres → Vidéo → Vidéo avancée</strong> :</p>
<ul>
<li><strong>Boost Player Contrast</strong> (contraste des joueurs) : Activé. Petit coût, les joueurs se voient mieux.</li>
<li><strong>Attendre la synchronisation verticale</strong> : Désactivé.</li>
<li><strong>NVIDIA Reflex Low Latency</strong> : Activé.</li>
<li><strong>Mode d’anticrénelage multi-échantillons</strong> : CMAA2 ou MSAA 2x est un bon équilibre ; MSAA 8x coûte cher.</li>
<li><strong>Qualité globale des ombres</strong> : Moyenne ou Élevée permet de mieux voir l’ombre des joueurs ; Basse donne le plus de FPS. Teste ce que tu préfères.</li>
<li><strong>Détails des modèles / textures, des shaders, des particules</strong> : Bas à Moyen. Les textures dépendent surtout de la VRAM, pas des FPS.</li>
<li><strong>Occlusion ambiante</strong> : Désactivée. <strong>Plage dynamique élevée</strong> : Performances.</li>
<li><strong>FidelityFX Super Resolution</strong> : Désactivé sauf si tu es vraiment limité par le GPU ; l’image devient plus floue.</li>
</ul>
<p>Options de lancement : beaucoup d’anciennes (<code>-novid</code>, <code>-high</code>, <code>-threads</code>) ne servent à rien dans CS2 ou peuvent gêner. Tu peux laisser les options de lancement vides. Pour limiter tes FPS, utilise le réglage de FPS max du jeu ou la commande console <code>fps_max</code>.</p>

<h2 id="fortnite">Fortnite</h2>
<p>Dans <strong>Paramètres → Graphismes</strong>, le premier choix est le <strong>Mode de rendu</strong> :</p>
<ul>
<li><strong>Performance – Fidélité graphique réduite</strong> : le mode le plus léger, pensé pour les FPS élevés. C’est le choix habituel en compétitif et sur les PC modestes.</li>
<li><strong>DirectX 12</strong> : nécessaire pour les fonctions visuelles récentes (Nanite, Lumen). Sur un PC puissant, il peut bien tourner si tu coupes ces fonctions.</li>
</ul>
<p>En modes DirectX 11 / DirectX 12, les réglages les plus coûteux sont :</p>
<ul>
<li><strong>Géométrie virtualisée Nanite</strong> : Désactivé.</li>
<li><strong>Illumination globale</strong> et <strong>Réflexions</strong> (Lumen) : Désactivé.</li>
<li><strong>Ray tracing matériel</strong> : Désactivé.</li>
<li><strong>Ombres</strong> : Désactivé ou Bas.</li>
<li><strong>Effets</strong> et <strong>Post-traitement</strong> : Bas.</li>
<li><strong>Distance d’affichage</strong> : Moyenne ou Lointaine (trop bas, tu ne vois plus les joueurs au loin).</li>
<li><strong>Textures</strong> : dépend de ta VRAM, pas de tes FPS, tant que tu as assez de mémoire.</li>
</ul>
<p>Mets aussi <strong>NVIDIA Reflex</strong> sur Activé (ou Activé + Boost), la <strong>V-Sync</strong> sur Désactivé et la <strong>Limite de FPS</strong> sur ton taux de rafraîchissement, ou un peu en dessous avec G-Sync/FreeSync. Fortnite recompile aussi ses shaders après les mises à jour : les premières parties après un patch peuvent saccader, puis ça se stabilise.</p>

<h2 id="warzone">Call of Duty: Warzone</h2>
<p>Warzone charge beaucoup le GPU et la VRAM. Dans <strong>Paramètres → Graphismes</strong> :</p>
<ul>
<li><strong>Mode d’affichage</strong> : Plein écran exclusif.</li>
<li><strong>NVIDIA Reflex Low Latency</strong> : Activé + Boost, ou Activé.</li>
<li><strong>Upscaling / Netteté</strong> : DLSS, FSR ou XeSS en mode Qualité ou Équilibré si tu es limité par le GPU. C’est souvent le plus gros gain de FPS en 1440p.</li>
<li><strong>Cible d’utilisation de la VRAM</strong> : autour de 80–90 %. Trop haut peut créer des saccades quand la VRAM est pleine.</li>
<li><strong>Résolution des textures</strong> : Normale ou Basse sur les cartes 8 Go.</li>
<li><strong>Qualité des ombres</strong>, <strong>Réflexions en espace écran</strong>, <strong>Occlusion ambiante</strong>, <strong>Qualité volumétrique</strong> : Basse ou Désactivé.</li>
<li><strong>Qualité des particules</strong> : Basse. <strong>Profondeur de champ</strong>, <strong>Flou de mouvement</strong>, <strong>Grain de pellicule</strong> : Désactivé.</li>
<li><strong>Streaming de textures à la demande</strong> : le couper évite de télécharger des textures pendant les parties ; ça peut réduire les saccades avec une connexion lente, avec des textures un peu moins nettes.</li>
</ul>
<p>Laisse le <strong>préchargement des shaders</strong> se terminer dans le menu avant ta première partie après une mise à jour ou un changement de pilote. Jouer pendant la compilation crée des saccades.</p>

<h2 id="apex">Apex Legends</h2>
<p>Apex peut être limité par le processeur dans les combats chargés en effets. Dans <strong>Paramètres → Vidéo</strong> :</p>
<ul>
<li><strong>Mode d’affichage</strong> : Plein écran. <strong>V-Sync</strong> : Désactivé.</li>
<li><strong>NVIDIA Reflex</strong> : Activé ou Activé + Boost.</li>
<li><strong>Cible FPS de la résolution adaptative</strong> : 0 (désactivé), pour garder une image nette.</li>
<li><strong>Anticrénelage</strong> : Aucun ou TSAA.</li>
<li><strong>Budget de streaming des textures</strong> : selon ta VRAM (ça ne coûte pas de FPS tant que ça rentre).</li>
<li><strong>Qualité de l’occlusion ambiante</strong> : Désactivée. <strong>Couverture des ombres du soleil</strong> et <strong>Détail des ombres du soleil</strong> : Bas. <strong>Détail des ombres ponctuelles</strong> : Désactivé. <strong>Éclairage volumétrique</strong> et <strong>Ombres ponctuelles dynamiques</strong> : Désactivé.</li>
<li><strong>Détail des modèles</strong>, <strong>Détail des effets</strong>, <strong>Ragdolls</strong> : Bas. <strong>Marques d’impact</strong> : Désactivé.</li>
</ul>
<p>Apex limite les FPS par défaut dans certaines configurations. Pour changer la limite, ajoute l’option de lancement <code>+fps_max 0</code> (illimité) ou une valeur comme <code>+fps_max 237</code> dans Steam ou l’app EA (propriétés du jeu → options de lancement avancées).</p>

<h2 id="mesurer">Étape 3 : mesure, puis arrête-toi</h2>
<ol>
<li>Choisis une scène reproductible par jeu (champ de tir, replay, partie perso).</li>
<li>Note les FPS moyens et les 1 % low avant de changer quoi que ce soit.</li>
<li>Change un groupe de réglages, rejoue la même scène, note à nouveau.</li>
<li>Garde ce qui aide, remets ce qui ne change rien de visible.</li>
</ol>
<p>Passé un certain point, plus de FPS ne sert à rien si ton écran ne peut pas les afficher et que ta latence est déjà basse. Des FPS stables avec de bons 1 % low sont plus agréables qu’une moyenne haute mais instable.</p>

<h2 id="mythes">Les mythes courants</h2>
<ul>
<li><strong>« Cette option de lancement donne +100 FPS »</strong> : la plupart des options virales sont dépassées ou ne font rien.</li>
<li><strong>Mettre le jeu en priorité « Temps réel »</strong> dans le Gestionnaire des tâches : ça peut figer les entrées et le son. « Haute » au maximum, et en général inutile.</li>
<li><strong>Couper tous les services Windows</strong> : aucun gain de FPS mesurable, vrai risque de casser l’anti-triche ou les mises à jour.</li>
</ul>`,
    cta: `<p>KarmaaOptimizer a une section dédiée à Call of Duty, Fortnite, Apex Legends, Counter-Strike 2 et Rocket League : il applique des réglages de jeu optimisés en un clic, te montre un aperçu avant d’écrire quoi que ce soit et garde une sauvegarde de ta config d’origine. Il s’occupe aussi de la partie Windows vue plus haut, et sa comparaison Avant / Après te permet de mesurer le résultat dans tes propres parties. Il n’injecte rien dans les jeux : il reste compatible anti-triche. On ne promet aucun chiffre de FPS : ça dépend de ton PC, et tu mesures toi-même.</p>`,
  },
};
