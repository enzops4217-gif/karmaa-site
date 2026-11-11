module.exports = {
  id: 'ryzen-x3d-windows-settings',
  slug: { en: 'ryzen-x3d-windows-settings', fr: 'ryzen-x3d-reglages-windows' },
  related: ['best-windows-11-settings-gaming', 'reduce-input-lag-windows-11', 'boost-fps-cs2-fortnite-warzone-apex'],
  en: {
    title: 'Ryzen X3D: Best Windows Settings for Gaming',
    desc: 'Set up a Ryzen 7800X3D, 9800X3D, 7950X3D or 9950X3D for gaming: chipset driver, Game Bar, power plan, BIOS, EXPO and how to check the right cores.',
    short: 'Ryzen X3D: best Windows settings',
    h1: 'Ryzen X3D: the best Windows settings for gaming',
    lede: 'AMD’s X3D processors owe their gaming speed to an extra layer of cache. To get it, the game must run on the cores that have that cache, and your RAM and BIOS must be set right. Here is how to set up Windows and the BIOS for a 5800X3D, 7800X3D, 9800X3D or a dual-CCD 7900X3D, 7950X3D, 9900X3D or 9950X3D.',
    howto: {
      name: 'Set up Windows for a Ryzen X3D processor', time: 'PT45M',
      steps: [
        ['Update the BIOS', 'Install the latest BIOS from your motherboard’s support page.', 'bios'],
        ['Install the AMD chipset driver', 'Download the latest chipset driver from AMD and install it, then restart.', 'chipset'],
        ['Turn on EXPO or XMP', 'Enable the memory profile in the BIOS so RAM runs at its rated speed.', 'ram'],
        ['Check Game Mode and Xbox Game Bar', 'Keep Game Mode on and the Xbox Game Bar app up to date (dual-CCD models).', 'gamebar'],
        ['Use the Balanced power plan on dual-CCD models', 'Keep Windows on Balanced so core parking can move the game to the V-Cache cores.', 'power'],
        ['Check which cores the game uses', 'Open Task Manager or HWiNFO while playing and confirm the load is on the V-Cache CCD.', 'check'],
      ],
    },
    body: `<h2 id="which">First: which X3D do you have?</h2>
<p>There are two families, and they do not need the same setup:</p>
<table>
<thead><tr><th>Type</th><th>Models</th><th>What it means</th></tr></thead>
<tbody>
<tr><td><strong>Single CCD</strong></td><td>5600X3D, 5700X3D, 5800X3D, 7600X3D, 7800X3D, 9800X3D</td><td>All cores have the extra cache. No core selection problem.</td></tr>
<tr><td><strong>Dual CCD</strong></td><td>7900X3D, 7950X3D, 9900X3D, 9950X3D</td><td>Only one of the two core groups (CCD) has the extra cache. Games must be sent to that group.</td></tr>
</tbody>
</table>
<p>On dual-CCD chips, if a game lands on the CCD without V-Cache, it can lose a big part of the X3D advantage. Most of this guide is about avoiding that. Single-CCD owners can skip to the <a href="#ram">RAM</a> and <a href="#bios">BIOS</a> sections.</p>

<h2 id="bios">1. Update the BIOS</h2>
<p>Go to your motherboard’s support page (ASUS, MSI, Gigabyte, ASRock…), find your exact model and install the latest stable BIOS, following the maker’s method (usually a USB stick and the BIOS flash tool). Recent BIOS versions bring AGESA updates that improve memory compatibility, fix bugs and, on AM5, apply AMD’s safe voltage limits for X3D chips. Do not flash during a storm or on an unstable power supply.</p>
<p>After updating, the BIOS resets to defaults: you will need to turn EXPO back on.</p>

<h2 id="chipset">2. Install the AMD chipset driver</h2>
<ol>
<li>Go to AMD’s drivers page, choose <em>Chipsets</em>, then your socket (AM4 or AM5) and your chipset.</li>
<li>Download and install the latest version. Keep all components checked.</li>
<li>Restart.</li>
</ol>
<p>On dual-CCD X3D processors, this package installs the <strong>AMD 3D V-Cache Performance Optimizer</strong> driver. You can check it in <em>Device Manager → System devices</em>, and in <em>Services</em> (look for “AMD 3D V-Cache Performance Optimizer Service”). Without it, Windows does not know which CCD to prefer for games.</p>
<div class="tip"><p><strong>Changed your CPU without reinstalling Windows?</strong> AMD recommends reinstalling the chipset driver after a CPU swap, and ideally a clean Windows install when moving to a dual-CCD X3D. At the very least, uninstall the old chipset driver, restart and install the new one.</p></div>

<h2 id="gamebar">3. Keep Game Mode on and the Xbox Game Bar up to date</h2>
<p>On dual-CCD models, AMD’s driver uses the <strong>Xbox Game Bar</strong> to know when a game is running. So, contrary to many “debloat” guides:</p>
<ul>
<li>Keep <strong>Settings → Gaming → Game Mode</strong> on.</li>
<li>Do <strong>not</strong> uninstall the Xbox Game Bar. Update it in the Microsoft Store (Library → Get updates).</li>
<li>If a game is not detected as a game, open the Game Bar (<kbd>Win</kbd> + <kbd>G</kbd>) while it runs, go to Settings and check <em>Remember this is a game</em>.</li>
</ul>
<p>You can still turn off background recording (Settings → Gaming → Captures) without breaking detection.</p>

<h2 id="power">4. Power plan: Balanced on dual-CCD models</h2>
<p>On 7900X3D, 7950X3D, 9900X3D and 9950X3D, the driver moves games to the V-Cache CCD by <strong>parking</strong> the other CCD’s cores while you play. Core parking depends on the power plan, and AMD’s guidance is to keep Windows on <strong>Balanced</strong>. Plans like High performance or Ultimate Performance turn core parking off, and the game can spread over both CCDs.</p>
<p>On single-CCD chips (7800X3D, 9800X3D, 5800X3D…), you can use Balanced or a performance plan; the difference is usually small. Measure in your games.</p>

<h2 id="ram">5. Turn on EXPO or XMP and pick the right memory speed</h2>
<p>X3D chips are less sensitive to RAM speed than other CPUs thanks to their large cache, but leaving your RAM at default speed still costs performance.</p>
<ul>
<li><strong>AM5 (7000 and 9000 series, DDR5)</strong>: enable <strong>EXPO</strong> in the BIOS. The usual sweet spot is <strong>DDR5-6000 CL30</strong>, with the memory controller in <strong>1:1</strong> mode (UCLK = MEMCLK). Most BIOS set this automatically with a 6000 kit.</li>
<li><strong>AM4 (5000 series, DDR4)</strong>: enable XMP/DOCP. The common sweet spot is <strong>DDR4-3600 CL16</strong> with Infinity Fabric at 1800 MHz (1:1).</li>
<li>Check in Windows: Task Manager → Performance → Memory shows the speed. CPU-Z (Memory tab) shows the DRAM frequency, which is half the rated speed (3000 MHz = DDR5-6000).</li>
</ul>
<p>After enabling EXPO, test stability: play for a few hours or run a memory test. If the PC crashes or does not boot, go back to the default profile or a slightly lower speed.</p>

<h2 id="bios-options">6. Useful BIOS options</h2>
<ul>
<li><strong>CPPC</strong> and <strong>CPPC Preferred Cores</strong>: leave on <em>Auto</em> or <em>Enabled</em>.</li>
<li><strong>CPPC Dynamic Preferred Cores</strong> (dual-CCD AM5 boards): the default (<em>Auto</em> / <em>Driver</em>) lets AMD’s driver decide. Setting it to <em>Cache</em> always prefers the V-Cache CCD, which can help if detection fails, but can slow down non-gaming tasks that prefer high clocks. Change it only if you have a reason.</li>
<li><strong>PBO and Curve Optimizer</strong>: on 7000X3D and 9000X3D chips, PBO with a negative Curve Optimizer (undervolt) can lower temperatures and raise boost clocks. It is optional, and every chip is different: start small (for example −10), test stability for a long time, and go back to default at the first crash. The 9800X3D also allows real overclocking; the 5800X3D does not.</li>
<li><strong>SVM / virtualization</strong>: only turn it off if you never use virtual machines, WSL or apps that need it, and if your anti-cheat does not require it. It is not a performance setting on its own.</li>
</ul>

<h2 id="check">7. Check that the game runs on the right cores</h2>
<p>On dual-CCD models:</p>
<ol>
<li>Open <strong>Task Manager → Performance → CPU</strong>, right-click the graph and choose <em>Change graph to → Logical processors</em>.</li>
<li>Launch your game and play for a minute.</li>
<li>On a 7950X3D or 9950X3D, the V-Cache CCD is usually the first one (cores 0–7, logical processors 0–15). These should be busy, while the second half should show as <strong>parked</strong> or nearly idle.</li>
</ol>
<p>If both halves are busy, check in order: chipset driver installed, Balanced plan, Game Bar up to date, game marked as a game in the Game Bar. Tools like HWiNFO also show per-core usage and clocks.</p>
<p>Some players force the game onto the V-Cache cores with tools like Process Lasso. It can work, but it can also conflict with AMD’s driver. Try the official setup first.</p>

<h2 id="windows">8. The usual Windows settings still apply</h2>
<p>The rest of your Windows setup is the same as for any gaming PC: correct refresh rate, background recording off, startup apps trimmed, up-to-date graphics driver. See our <a href="../best-windows-11-settings-gaming/">Windows 11 settings guide</a> and our <a href="../reduce-input-lag-windows-11/">input lag guide</a>.</p>

<h2 id="summary">Summary</h2>
<ul>
<li>Latest BIOS and AMD chipset driver, reinstalled after a CPU swap.</li>
<li>EXPO on (DDR5-6000 CL30, 1:1 is the usual target on AM5).</li>
<li>Dual-CCD: Game Mode on, Game Bar up to date, <strong>Balanced</strong> power plan, check core usage in Task Manager.</li>
<li>Single-CCD: nothing special on the core side, just the usual Windows settings.</li>
<li>Undervolting is optional and needs proper stability testing.</li>
</ul>`,
    cta: `<p>KarmaaOptimizer does not replace the BIOS or AMD’s driver, and it does not overclock anything. What it does is the Windows side: its Scan checks your power plan, Game Mode, graphics driver and the settings above, and its BIOS guide tells you which options to look for on your board. It also has a Before / After test bench so you can check the result in your own games. Every change can be undone in one click, and we make no promise of a set number of FPS: you measure it yourself.</p>`,
  },
  fr: {
    title: 'Ryzen X3D : les meilleurs réglages Windows pour jouer',
    desc: 'Règle ton Ryzen 7800X3D, 9800X3D, 7950X3D ou 9950X3D pour jouer : pilote chipset, Game Bar, alimentation, BIOS, EXPO et vérification des cœurs.',
    short: 'Ryzen X3D : meilleurs réglages Windows',
    h1: 'Ryzen X3D : les meilleurs réglages Windows pour le gaming',
    lede: 'Les processeurs X3D d’AMD doivent leur vitesse en jeu à une couche de cache en plus. Pour en profiter, le jeu doit tourner sur les cœurs qui ont ce cache, et ta RAM et ton BIOS doivent être bien réglés. Voici comment configurer Windows et le BIOS pour un 5800X3D, 7800X3D, 9800X3D ou un 7900X3D, 7950X3D, 9900X3D ou 9950X3D à deux CCD.',
    howto: {
      name: 'Configurer Windows pour un processeur Ryzen X3D', time: 'PT45M',
      steps: [
        ['Mets à jour le BIOS', 'Installe le dernier BIOS depuis la page support de ta carte mère.', 'bios'],
        ['Installe le pilote chipset AMD', 'Télécharge le dernier pilote chipset sur le site d’AMD, installe-le et redémarre.', 'chipset'],
        ['Active EXPO ou XMP', 'Active le profil mémoire dans le BIOS pour que la RAM tourne à sa vitesse prévue.', 'ram'],
        ['Vérifie le Mode Jeu et la Xbox Game Bar', 'Garde le Mode Jeu activé et la Xbox Game Bar à jour (modèles à deux CCD).', 'gamebar'],
        ['Mode Équilibré sur les modèles à deux CCD', 'Laisse Windows en Équilibré pour que la mise en veille des cœurs envoie le jeu sur les cœurs V-Cache.', 'alimentation'],
        ['Vérifie les cœurs utilisés par le jeu', 'Ouvre le Gestionnaire des tâches ou HWiNFO en jeu et vérifie que la charge est sur le CCD V-Cache.', 'verifier'],
      ],
    },
    body: `<h2 id="lequel">D’abord : quel X3D as-tu ?</h2>
<p>Il y a deux familles, et elles ne se règlent pas pareil :</p>
<table>
<thead><tr><th>Type</th><th>Modèles</th><th>Ce que ça veut dire</th></tr></thead>
<tbody>
<tr><td><strong>Un seul CCD</strong></td><td>5600X3D, 5700X3D, 5800X3D, 7600X3D, 7800X3D, 9800X3D</td><td>Tous les cœurs ont le cache en plus. Aucun problème de choix des cœurs.</td></tr>
<tr><td><strong>Deux CCD</strong></td><td>7900X3D, 7950X3D, 9900X3D, 9950X3D</td><td>Un seul des deux groupes de cœurs (CCD) a le cache en plus. Il faut que les jeux tournent sur ce groupe.</td></tr>
</tbody>
</table>
<p>Sur les puces à deux CCD, si un jeu atterrit sur le CCD sans V-Cache, il peut perdre une grosse partie de l’avantage X3D. L’essentiel de ce guide sert à éviter ça. Si ton processeur n’a qu’un CCD, tu peux aller directement aux parties <a href="#ram">RAM</a> et <a href="#bios">BIOS</a>.</p>

<h2 id="bios">1. Mets à jour le BIOS</h2>
<p>Va sur la page support de ta carte mère (ASUS, MSI, Gigabyte, ASRock…), trouve ton modèle exact et installe le dernier BIOS stable, avec la méthode du fabricant (en général une clé USB et l’outil de flash du BIOS). Les BIOS récents apportent des mises à jour AGESA qui améliorent la compatibilité mémoire, corrigent des bugs et, sur AM5, appliquent les limites de tension sûres d’AMD pour les X3D. Ne flashe pas pendant un orage ou avec une alimentation instable.</p>
<p>Après la mise à jour, le BIOS revient aux réglages par défaut : il faudra réactiver EXPO.</p>

<h2 id="chipset">2. Installe le pilote chipset AMD</h2>
<ol>
<li>Va sur la page des pilotes AMD, choisis <em>Chipsets</em>, puis ton socket (AM4 ou AM5) et ton chipset.</li>
<li>Télécharge et installe la dernière version. Laisse tous les composants cochés.</li>
<li>Redémarre.</li>
</ol>
<p>Sur les X3D à deux CCD, ce paquet installe le pilote <strong>AMD 3D V-Cache Performance Optimizer</strong>. Tu peux le vérifier dans <em>Gestionnaire de périphériques → Périphériques système</em>, et dans <em>Services</em> (cherche « AMD 3D V-Cache Performance Optimizer Service »). Sans lui, Windows ne sait pas quel CCD privilégier pour les jeux.</p>
<div class="tip"><p><strong>Tu as changé de processeur sans réinstaller Windows ?</strong> AMD conseille de réinstaller le pilote chipset après un changement de CPU, et idéalement une installation propre de Windows quand on passe à un X3D à deux CCD. Au minimum, désinstalle l’ancien pilote chipset, redémarre et installe le nouveau.</p></div>

<h2 id="gamebar">3. Garde le Mode Jeu et la Xbox Game Bar à jour</h2>
<p>Sur les modèles à deux CCD, le pilote AMD se sert de la <strong>Xbox Game Bar</strong> pour savoir quand un jeu tourne. Donc, contrairement à beaucoup de guides de « débloat » :</p>
<ul>
<li>Laisse <strong>Paramètres → Jeux → Mode Jeu</strong> activé.</li>
<li><strong>Ne désinstalle pas</strong> la Xbox Game Bar. Mets-la à jour dans le Microsoft Store (Bibliothèque → Obtenir les mises à jour).</li>
<li>Si un jeu n’est pas reconnu comme jeu, ouvre la Game Bar (<kbd>Win</kbd> + <kbd>G</kbd>) pendant qu’il tourne, va dans les paramètres et coche <em>Se souvenir qu’il s’agit d’un jeu</em>.</li>
</ul>
<p>Tu peux quand même couper l’enregistrement en arrière-plan (Paramètres → Jeux → Captures) sans casser la détection.</p>

<h2 id="alimentation">4. Alimentation : Équilibré sur les modèles à deux CCD</h2>
<p>Sur les 7900X3D, 7950X3D, 9900X3D et 9950X3D, le pilote envoie les jeux sur le CCD V-Cache en <strong>mettant en veille</strong> (« parking ») les cœurs de l’autre CCD pendant que tu joues. Cette mise en veille dépend du mode d’alimentation, et AMD conseille de laisser Windows en <strong>Équilibré</strong>. Les modes Performances élevées ou Performances ultimes coupent le parking des cœurs, et le jeu peut s’étaler sur les deux CCD.</p>
<p>Sur les puces à un seul CCD (7800X3D, 9800X3D, 5800X3D…), tu peux utiliser Équilibré ou un mode performances ; la différence est en général faible. Mesure dans tes jeux.</p>

<h2 id="ram">5. Active EXPO ou XMP et choisis la bonne vitesse mémoire</h2>
<p>Grâce à leur gros cache, les X3D sont moins sensibles à la vitesse de la RAM que les autres processeurs, mais laisser ta RAM à sa vitesse par défaut coûte quand même des performances.</p>
<ul>
<li><strong>AM5 (séries 7000 et 9000, DDR5)</strong> : active <strong>EXPO</strong> dans le BIOS. Le point idéal habituel est la <strong>DDR5-6000 CL30</strong>, avec le contrôleur mémoire en mode <strong>1:1</strong> (UCLK = MEMCLK). La plupart des BIOS le règlent tout seuls avec un kit 6000.</li>
<li><strong>AM4 (série 5000, DDR4)</strong> : active XMP/DOCP. Le point idéal courant est la <strong>DDR4-3600 CL16</strong> avec l’Infinity Fabric à 1800 MHz (1:1).</li>
<li>Pour vérifier dans Windows : Gestionnaire des tâches → Performance → Mémoire affiche la vitesse. CPU-Z (onglet Memory) affiche la fréquence DRAM, qui est la moitié de la vitesse annoncée (3000 MHz = DDR5-6000).</li>
</ul>
<p>Après avoir activé EXPO, teste la stabilité : joue quelques heures ou lance un test mémoire. Si le PC plante ou ne démarre pas, reviens au profil par défaut ou à une vitesse un peu plus basse.</p>

<h2 id="options-bios">6. Options utiles du BIOS</h2>
<ul>
<li><strong>CPPC</strong> et <strong>CPPC Preferred Cores</strong> : laisse sur <em>Auto</em> ou <em>Enabled</em>.</li>
<li><strong>CPPC Dynamic Preferred Cores</strong> (cartes AM5 avec X3D à deux CCD) : le réglage par défaut (<em>Auto</em> / <em>Driver</em>) laisse le pilote AMD décider. Le mettre sur <em>Cache</em> privilégie toujours le CCD V-Cache, ce qui peut aider si la détection échoue, mais peut ralentir des tâches hors jeu qui aiment les hautes fréquences. Ne le change que si tu as une raison.</li>
<li><strong>PBO et Curve Optimizer</strong> : sur les 7000X3D et 9000X3D, le PBO avec un Curve Optimizer négatif (undervolt) peut baisser les températures et monter les fréquences boost. C’est facultatif et chaque puce est différente : commence petit (par exemple −10), teste la stabilité longtemps, et reviens par défaut au premier plantage. Le 9800X3D permet aussi un vrai overclocking ; pas le 5800X3D.</li>
<li><strong>SVM / virtualisation</strong> : ne la coupe que si tu n’utilises jamais de machines virtuelles, WSL ou des applis qui en ont besoin, et si ton anti-triche ne l’exige pas. Ce n’est pas un réglage de performance en soi.</li>
</ul>

<h2 id="verifier">7. Vérifie que le jeu tourne sur les bons cœurs</h2>
<p>Sur les modèles à deux CCD :</p>
<ol>
<li>Ouvre <strong>Gestionnaire des tâches → Performance → Processeur</strong>, fais un clic droit sur le graphique et choisis <em>Modifier le graphique en → Processeurs logiques</em>.</li>
<li>Lance ton jeu et joue une minute.</li>
<li>Sur un 7950X3D ou 9950X3D, le CCD V-Cache est en général le premier (cœurs 0 à 7, processeurs logiques 0 à 15). Ceux-là doivent être chargés, et la deuxième moitié doit apparaître <strong>en veille</strong> (« parked ») ou presque inactive.</li>
</ol>
<p>Si les deux moitiés travaillent, vérifie dans l’ordre : pilote chipset installé, mode Équilibré, Game Bar à jour, jeu reconnu comme jeu dans la Game Bar. Des outils comme HWiNFO affichent aussi l’usage et la fréquence de chaque cœur.</p>
<p>Certains joueurs forcent le jeu sur les cœurs V-Cache avec des outils comme Process Lasso. Ça peut marcher, mais ça peut aussi entrer en conflit avec le pilote AMD. Essaie d’abord la configuration officielle.</p>

<h2 id="windows">8. Les réglages Windows habituels s’appliquent toujours</h2>
<p>Le reste de ta config Windows est le même que pour n’importe quel PC gamer : bon taux de rafraîchissement, enregistrement en arrière-plan coupé, applis au démarrage allégées, pilote graphique à jour. Voir notre <a href="../meilleurs-reglages-windows-11-gaming/">guide des réglages Windows 11</a> et notre <a href="../reduire-input-lag-windows-11/">guide sur l’input lag</a>.</p>

<h2 id="resume">Récap</h2>
<ul>
<li>Dernier BIOS et pilote chipset AMD, réinstallé après un changement de processeur.</li>
<li>EXPO activé (DDR5-6000 CL30 en 1:1, la cible habituelle sur AM5).</li>
<li>Deux CCD : Mode Jeu activé, Game Bar à jour, mode d’alimentation <strong>Équilibré</strong>, vérification des cœurs dans le Gestionnaire des tâches.</li>
<li>Un seul CCD : rien de spécial côté cœurs, juste les réglages Windows habituels.</li>
<li>L’undervolt est facultatif et demande de vrais tests de stabilité.</li>
</ul>`,
    cta: `<p>KarmaaOptimizer ne remplace ni le BIOS ni le pilote AMD, et il n’overclocke rien. Ce qu’il fait, c’est la partie Windows : son Scan vérifie ton mode d’alimentation, le Mode Jeu, ton pilote graphique et les réglages ci-dessus, et son guide BIOS t’indique quelles options chercher sur ta carte mère. Il a aussi un banc de test Avant / Après pour vérifier le résultat dans tes propres jeux. Chaque changement s’annule en un clic, et on ne promet aucun chiffre de FPS : tu mesures toi-même.</p>`,
  },
};
