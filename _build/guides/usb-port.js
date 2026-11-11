module.exports = {
  id: 'usb-port-gaming-mouse',
  slug: { en: 'usb-port-gaming-mouse', fr: 'port-usb-souris-gaming' },
  related: ['mouse-polling-rate-1000-4000-8000', 'reduce-input-lag-windows-11', 'best-windows-11-settings-gaming'],
  en: {
    title: 'Which USB Port for Your Gaming Mouse? (Guide)',
    desc: 'Rear or front, USB 2.0 or 3.0, CPU or chipset port: where to plug your gaming mouse or wireless dongle, and how to check it in Windows.',
    short: 'Which USB port for your gaming mouse',
    h1: 'Which USB port to plug your gaming mouse into',
    lede: 'At 1000 Hz almost any port works. At 4000 or 8000 Hz, or with a wireless dongle, the port you choose can make the difference between a stable signal and random drops. Here is how to pick the right one and check it in Windows.',
    howto: {
      name: 'Choose the best USB port for a gaming mouse', time: 'PT15M',
      steps: [
        ['Use a rear motherboard port', 'Plug the mouse or dongle into a USB port on the motherboard’s rear panel, not a front panel, hub or monitor.', 'rear'],
        ['Check the motherboard manual', 'Find which rear ports come from the CPU and which from the chipset, and prefer a CPU port on AMD boards.', 'manual'],
        ['Look at the controller in Windows', 'In Device Manager, use View → Devices by connection to see which USB controller the mouse is on.', 'device-manager'],
        ['Keep the mouse away from busy devices', 'Avoid sharing the controller with webcams, capture cards or audio interfaces at high polling rates.', 'share'],
        ['Place the wireless dongle well', 'Use the extension cable to bring the dongle close to the mouse, away from USB 3 ports and drives.', 'wireless'],
        ['Test the result', 'Check the real polling rate and look for drops with a polling rate test.', 'test'],
      ],
    },
    body: `<h2 id="why">Why the port matters at all</h2>
<p>A mouse needs very little bandwidth: even at 8000 Hz it sends tiny packets. What matters is not speed but <strong>regularity</strong>: each report must reach Windows on time. Hubs, long internal cables, shared controllers and radio interference can delay or drop some reports. At 1000 Hz you rarely notice. At 4000–8000 Hz, these issues show up as an unstable polling rate, and sometimes as stutter when you move fast (see our <a href="../mouse-polling-rate-1000-4000-8000/">polling rate guide</a>).</p>

<h2 id="rear">1. Use a rear motherboard port</h2>
<p>The ports on the back of the PC, soldered on the motherboard, have the shortest and cleanest path to the USB controller. Avoid, in this order:</p>
<ul>
<li><strong>Monitor USB ports</strong> and <strong>keyboard pass-through ports</strong>: they are hubs, with an extra chip and cable in the path.</li>
<li><strong>External USB hubs and docks</strong>, especially unpowered ones.</li>
<li><strong>Front panel ports</strong>: they go through a long internal cable and sometimes an internal hub. Fine for a USB stick, not ideal at 8000 Hz.</li>
<li><strong>KVM switches</strong>: many add their own polling or delay.</li>
</ul>

<h2 id="usb-version">2. USB 2.0 or USB 3.x?</h2>
<p>For a wired mouse, the USB version does not change latency: mice use the same low-speed or full-speed/high-speed protocols on any port. There is no need to look for a blue or red port. The only real difference is for <strong>wireless dongles</strong>, covered below. If your mouse maker recommends a specific port type for 8000 Hz, follow it.</p>

<h2 id="manual">3. CPU ports vs chipset ports</h2>
<p>On a motherboard, some USB ports are wired to the <strong>processor</strong>, others to the <strong>chipset</strong> (which is itself linked to the processor).</p>
<ul>
<li><strong>AMD (AM4, AM5)</strong>: the processor provides a few USB ports directly. The motherboard manual shows which rear ports they are (often in the block-diagram or rear I/O page). These are a good choice for the mouse and keyboard.</li>
<li><strong>Intel desktop</strong>: on most boards, standard USB ports come from the chipset. Any rear port is then equivalent; just avoid sharing with heavy devices.</li>
</ul>
<p>The difference between a CPU port and a chipset port is very small in practice. Do not rebuild your desk around it, but if you have the choice, prefer the CPU ports on AMD.</p>

<h2 id="device-manager">4. See which controller your mouse uses</h2>
<ol>
<li>Right-click the Start button and open <strong>Device Manager</strong>.</li>
<li>Click <strong>View → Devices by connection</strong>.</li>
<li>Expand the tree: <em>ACPI → PCI bus → … → USB host controller (xHCI) → USB root hub → your devices</em>. Your mouse shows up as an <em>HID-compliant mouse</em> under a <em>USB input device</em>.</li>
<li>Note which controller it is under, and what else is on the same controller.</li>
</ol>
<p>Many PCs have several xHCI controllers (CPU, chipset, extra ASMedia or similar chips). Moving the mouse to another rear port can move it to another controller.</p>

<h2 id="share">5. Keep the mouse away from busy devices</h2>
<p>At high polling rates, avoid putting the mouse on the same controller or hub as devices that send a lot of data or interrupts:</p>
<ul>
<li>webcams and capture cards;</li>
<li>USB audio interfaces and DACs (they can also crackle if the controller is busy);</li>
<li>external SSDs during transfers;</li>
<li>VR headsets.</li>
</ul>
<p>A simple layout that works on most PCs: mouse and keyboard on the rear CPU or chipset ports, heavy devices on another group of ports or an add-in USB card.</p>

<h2 id="wireless">6. Wireless dongle: placement matters more than the port</h2>
<p>Wireless gaming mice use the 2.4 GHz band. USB 3.x ports and cables, and some external drives, are known to create radio noise in this same band (Intel documented it years ago). So:</p>
<ul>
<li><strong>Use the extension cable or dock</strong> that came with the mouse and put the receiver on the desk, 20–30 cm from the mouse, in direct line of sight.</li>
<li>Keep it <strong>away from USB 3 ports, external SSDs and Wi-Fi routers</strong>.</li>
<li>Do not plug the dongle directly into the back of a PC hidden under the desk behind a metal case.</li>
<li>For 4000–8000 Hz wireless, use the maker’s high-rate dongle and follow their port advice.</li>
</ul>

<h2 id="power">7. USB power saving</h2>
<p>Windows can put USB devices to sleep to save power. On desktops it rarely causes trouble, but if your mouse or dongle sometimes “wakes up” late after a pause:</p>
<ul>
<li><strong>Control Panel → Power Options → Change plan settings → Change advanced power settings → USB settings → USB selective suspend setting → Disabled</strong>.</li>
<li>In Device Manager, on each <em>USB Root Hub</em>, the <em>Power Management</em> tab: uncheck <em>Allow the computer to turn off this device to save power</em>.</li>
</ul>
<p>On laptops, these settings cost a bit of battery life.</p>

<h2 id="test">8. Test the result</h2>
<p>Run a polling rate test and move the mouse in fast circles for a few seconds. The rate should stay close to your setting, without big drops. Try two or three rear ports and keep the most stable one. Then check in game that tracking feels smooth and that FPS has not dropped. If you see problems only at 8000 Hz, try 4000 Hz: on some PCs it is the most stable high rate.</p>

<h2 id="summary">In short</h2>
<ul>
<li>Rear motherboard port, no hub, no monitor port, no front panel.</li>
<li>USB 2.0 or 3.x does not matter for a wired mouse.</li>
<li>On AMD, CPU ports are a small plus; check the manual.</li>
<li>Do not share the controller with webcams, capture cards or audio interfaces at high rates.</li>
<li>Wireless: dongle on the desk with the extension, away from USB 3 and drives.</li>
<li>Test the real polling rate before and after.</li>
</ul>`,
    cta: `<p>KarmaaOptimizer can help with the checking part: it measures the real polling rate natively up to 8000 Hz, measures USB and driver latency on your PC, and can apply the USB power settings above in one click (reversible). It does not move your cables for you: choosing the port stays a manual step. You compare the results yourself.</p>`,
  },
  fr: {
    title: 'Sur quel port USB brancher sa souris gaming ?',
    desc: 'Arrière ou façade, USB 2.0 ou 3.0, port CPU ou chipset : où brancher ta souris gaming ou ton dongle sans fil, et comment le vérifier dans Windows.',
    short: 'Quel port USB pour ta souris gaming',
    h1: 'Sur quel port USB brancher ta souris gaming',
    lede: 'À 1000 Hz, presque n’importe quel port fait l’affaire. À 4000 ou 8000 Hz, ou avec un dongle sans fil, le port choisi peut faire la différence entre un signal stable et des chutes au hasard. Voici comment choisir le bon et le vérifier dans Windows.',
    howto: {
      name: 'Choisir le meilleur port USB pour une souris gaming', time: 'PT15M',
      steps: [
        ['Utilise un port arrière de la carte mère', 'Branche la souris ou le dongle sur un port USB à l’arrière de la carte mère, pas en façade, sur un hub ou sur l’écran.', 'arriere'],
        ['Regarde le manuel de la carte mère', 'Repère quels ports arrière viennent du processeur et lesquels du chipset, et préfère un port CPU sur les cartes AMD.', 'manuel'],
        ['Regarde le contrôleur dans Windows', 'Dans le Gestionnaire de périphériques, utilise Affichage → Périphériques par connexion pour voir sur quel contrôleur USB est la souris.', 'gestionnaire'],
        ['Éloigne la souris des appareils gourmands', 'Évite de partager le contrôleur avec une webcam, une carte d’acquisition ou une interface audio à haut polling rate.', 'partage'],
        ['Place bien le dongle sans fil', 'Utilise la rallonge pour rapprocher le dongle de la souris, loin des ports USB 3 et des disques.', 'sans-fil'],
        ['Teste le résultat', 'Vérifie le polling rate réel et repère les chutes avec un test de polling rate.', 'tester'],
      ],
    },
    body: `<h2 id="pourquoi">Pourquoi le port compte</h2>
<p>Une souris a besoin de très peu de bande passante : même à 8000 Hz, elle envoie de tout petits paquets. Ce qui compte n’est pas la vitesse mais la <strong>régularité</strong> : chaque envoi doit arriver à Windows à l’heure. Les hubs, les longs câbles internes, les contrôleurs partagés et les interférences radio peuvent retarder ou perdre des envois. À 1000 Hz, tu le remarques rarement. À 4000–8000 Hz, ça se voit sous forme de polling rate instable, et parfois de saccades quand tu bouges vite (voir notre <a href="../polling-rate-souris-1000-4000-8000/">guide sur le polling rate</a>).</p>

<h2 id="arriere">1. Utilise un port arrière de la carte mère</h2>
<p>Les ports à l’arrière du PC, soudés sur la carte mère, ont le chemin le plus court et le plus propre jusqu’au contrôleur USB. Évite, dans cet ordre :</p>
<ul>
<li>Les <strong>ports USB de l’écran</strong> et les <strong>ports intégrés au clavier</strong> : ce sont des hubs, avec une puce et un câble en plus sur le trajet.</li>
<li>Les <strong>hubs et docks USB externes</strong>, surtout non alimentés.</li>
<li>Les <strong>ports en façade</strong> : ils passent par un long câble interne et parfois un hub interne. Très bien pour une clé USB, pas idéal à 8000 Hz.</li>
<li>Les <strong>switchs KVM</strong> : beaucoup ajoutent leur propre polling ou du retard.</li>
</ul>

<h2 id="version-usb">2. USB 2.0 ou USB 3.x ?</h2>
<p>Pour une souris filaire, la version USB ne change pas la latence : les souris utilisent les mêmes protocoles basse vitesse ou pleine vitesse/haute vitesse sur n’importe quel port. Inutile de chercher un port bleu ou rouge. La seule vraie différence concerne les <strong>dongles sans fil</strong>, voir plus bas. Si le fabricant de ta souris conseille un type de port précis pour le 8000 Hz, suis son conseil.</p>

<h2 id="manuel">3. Ports CPU ou ports chipset</h2>
<p>Sur une carte mère, certains ports USB sont reliés au <strong>processeur</strong>, d’autres au <strong>chipset</strong> (lui-même relié au processeur).</p>
<ul>
<li><strong>AMD (AM4, AM5)</strong> : le processeur fournit directement quelques ports USB. Le manuel de la carte mère indique lesquels à l’arrière (souvent sur le schéma de principe ou la page des ports arrière). C’est un bon choix pour la souris et le clavier.</li>
<li><strong>Intel (PC fixe)</strong> : sur la plupart des cartes, les ports USB classiques viennent du chipset. Tous les ports arrière se valent alors ; évite juste de les partager avec des appareils gourmands.</li>
</ul>
<p>En pratique, la différence entre un port CPU et un port chipset est très faible. Pas la peine de réorganiser ton bureau pour ça, mais si tu as le choix, privilégie les ports CPU sur AMD.</p>

<h2 id="gestionnaire">4. Vois sur quel contrôleur est ta souris</h2>
<ol>
<li>Fais un clic droit sur le bouton Démarrer et ouvre le <strong>Gestionnaire de périphériques</strong>.</li>
<li>Clique sur <strong>Affichage → Périphériques par connexion</strong>.</li>
<li>Déroule l’arbre : <em>ACPI → Bus PCI → … → Contrôleur hôte USB (xHCI) → Concentrateur USB racine → tes appareils</em>. Ta souris apparaît comme <em>Souris HID</em> sous un <em>Périphérique d’entrée USB</em>.</li>
<li>Note sous quel contrôleur elle se trouve, et ce qu’il y a d’autre sur ce même contrôleur.</li>
</ol>
<p>Beaucoup de PC ont plusieurs contrôleurs xHCI (processeur, chipset, puces ASMedia ou équivalentes en plus). Changer la souris de port arrière peut la changer de contrôleur.</p>

<h2 id="partage">5. Éloigne la souris des appareils gourmands</h2>
<p>À haut polling rate, évite de mettre la souris sur le même contrôleur ou hub que des appareils qui envoient beaucoup de données ou d’interruptions :</p>
<ul>
<li>webcams et cartes d’acquisition ;</li>
<li>interfaces audio USB et DAC (qui peuvent aussi grésiller si le contrôleur est chargé) ;</li>
<li>SSD externes pendant les transferts ;</li>
<li>casques VR.</li>
</ul>
<p>Une organisation simple qui marche sur la plupart des PC : souris et clavier sur les ports arrière CPU ou chipset, appareils gourmands sur un autre groupe de ports ou une carte USB additionnelle.</p>

<h2 id="sans-fil">6. Dongle sans fil : la position compte plus que le port</h2>
<p>Les souris gaming sans fil utilisent la bande 2,4 GHz. Les ports et câbles USB 3.x, ainsi que certains disques externes, sont connus pour créer du bruit radio dans cette même bande (Intel l’a documenté il y a des années). Donc :</p>
<ul>
<li><strong>Utilise la rallonge ou le dock</strong> fourni avec la souris et pose le récepteur sur le bureau, à 20–30 cm de la souris, sans obstacle.</li>
<li>Garde-le <strong>loin des ports USB 3, des SSD externes et de la box Wi-Fi</strong>.</li>
<li>Ne branche pas le dongle directement à l’arrière d’un PC caché sous le bureau derrière un boîtier en métal.</li>
<li>Pour le 4000–8000 Hz sans fil, utilise le dongle haute fréquence du fabricant et suis ses conseils de port.</li>
</ul>

<h2 id="energie">7. Économie d’énergie USB</h2>
<p>Windows peut mettre en veille les appareils USB pour économiser l’énergie. Sur un PC fixe, ça pose rarement problème, mais si ta souris ou ton dongle « se réveille » parfois en retard après une pause :</p>
<ul>
<li><strong>Panneau de configuration → Options d’alimentation → Modifier les paramètres du mode → Modifier les paramètres d’alimentation avancés → Paramètres USB → Paramètre de la suspension sélective USB → Désactivé</strong>.</li>
<li>Dans le Gestionnaire de périphériques, sur chaque <em>Concentrateur USB racine</em>, onglet <em>Gestion de l’alimentation</em> : décoche <em>Autoriser l’ordinateur à éteindre ce périphérique pour économiser l’énergie</em>.</li>
</ul>
<p>Sur un portable, ces réglages coûtent un peu d’autonomie.</p>

<h2 id="tester">8. Teste le résultat</h2>
<p>Lance un test de polling rate et fais des cercles rapides avec la souris pendant quelques secondes. La valeur doit rester proche de ton réglage, sans grosses chutes. Essaie deux ou trois ports arrière et garde le plus stable. Vérifie ensuite en jeu que le tracking est fluide et que les FPS n’ont pas baissé. Si les problèmes n’apparaissent qu’à 8000 Hz, essaie 4000 Hz : sur certains PC, c’est la fréquence élevée la plus stable.</p>

<h2 id="resume">En bref</h2>
<ul>
<li>Port arrière de la carte mère, pas de hub, pas de port d’écran, pas de façade.</li>
<li>USB 2.0 ou 3.x, peu importe pour une souris filaire.</li>
<li>Sur AMD, les ports CPU sont un petit plus ; regarde le manuel.</li>
<li>Ne partage pas le contrôleur avec une webcam, une carte d’acquisition ou une interface audio à haut polling rate.</li>
<li>Sans fil : dongle sur le bureau avec la rallonge, loin de l’USB 3 et des disques.</li>
<li>Teste le polling rate réel avant et après.</li>
</ul>`,
    cta: `<p>KarmaaOptimizer peut t’aider pour la partie vérification : il mesure le polling rate réel en natif jusqu’à 8000 Hz, mesure la latence USB et des pilotes sur ton PC, et peut appliquer les réglages d’alimentation USB ci-dessus en un clic (réversible). Il ne déplace pas tes câbles à ta place : le choix du port reste une étape manuelle. Tu compares les résultats toi-même.</p>`,
  },
};
