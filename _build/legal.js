/* Pages légales EN + FR.
   Les champs <span class="todo">[À COMPLÉTER : …]</span> / [TO COMPLETE: …] doivent être remplis par l'éditeur.
   Aucune information légale n'est inventée ici. */
const DISCORD = 'https://discord.gg/6hES7Hn3u7';
const fr = (s) => `<span class="todo">[À COMPLÉTER : ${s}]</span>`;
const en = (s) => `<span class="todo">[TO COMPLETE: ${s}]</span>`;

module.exports = [
  /* ---------------- Mentions légales ---------------- */
  {
    slug: { en: 'legal-notice', fr: 'mentions-legales' },
    en: {
      title: 'Legal Notice | KarmaaOptimizer',
      desc: 'Legal notice of karmaaoptimizer.com: publisher, publication director, hosting provider and intellectual property.',
      h1: 'Legal notice',
      body: `<p>In accordance with article 6 of French law no. 2004-575 of 21 June 2004 on confidence in the digital economy (LCEN), here is the information about the publisher and host of karmaaoptimizer.com.</p>
<h2>Publisher</h2>
<ul>
<li>Name or company name: ${en('full name or company name')}</li>
<li>Legal status: ${en('e.g. sole trader / micro-entrepreneur, company type')}</li>
<li>Address: ${en('postal address')}</li>
<li>SIREN / SIRET: ${en('SIRET')}</li>
<li>Registration: ${en('RNE / RCS registration, city')}</li>
<li>VAT: ${en('intra-EU VAT number, or the VAT exemption mention that applies')}</li>
<li>Email: ${en('contact email')}</li>
<li>Phone: ${en('phone number')}</li>
</ul>
<h2>Publication director</h2>
<p>${en('name of the publication director')}</p>
<h2>Hosting provider</h2>
<p>The site is hosted by GitHub Pages, a service of GitHub, Inc. ${en('check and add GitHub, Inc. postal address and phone number from GitHub’s official terms')}</p>
<h2>Payment</h2>
<p>Payments are processed by Stripe. KarmaaOptimizer never receives or stores your card details.</p>
<h2>Intellectual property</h2>
<p>The KarmaaOptimizer name, logo, software, texts, screenshots and graphics on this site are protected by intellectual property law. Any reproduction or use without prior written permission is prohibited, except for short quotations with a link to the source.</p>
<p>Third-party trademarks mentioned on this site (Windows, NVIDIA, AMD, Intel, game names…) belong to their owners. KarmaaOptimizer is not affiliated with or endorsed by them.</p>
<h2>Liability</h2>
<p>The guides on this site are provided for information. We do our best to keep them accurate, but settings and software change. Apply changes to your PC at your own pace, create a restore point first and measure the result.</p>
<h2>Contact</h2>
<p>See the <a href="../contact/">contact page</a>.</p>`,
    },
    fr: {
      title: 'Mentions légales | KarmaaOptimizer',
      desc: 'Mentions légales de karmaaoptimizer.com : éditeur, directeur de la publication, hébergeur et propriété intellectuelle.',
      h1: 'Mentions légales',
      body: `<p>Conformément à l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN), voici les informations sur l’éditeur et l’hébergeur du site karmaaoptimizer.com.</p>
<h2>Éditeur du site</h2>
<ul>
<li>Nom ou dénomination : ${fr('nom et prénom ou dénomination sociale')}</li>
<li>Statut juridique : ${fr('ex. entrepreneur individuel / micro-entrepreneur, forme de société')}</li>
<li>Adresse : ${fr('adresse postale')}</li>
<li>SIREN / SIRET : ${fr('SIRET')}</li>
<li>Immatriculation : ${fr('RNE / RCS, ville')}</li>
<li>TVA : ${fr('numéro de TVA intracommunautaire, ou mention « TVA non applicable, art. 293 B du CGI » si c’est ton cas')}</li>
<li>E-mail : ${fr('e-mail de contact')}</li>
<li>Téléphone : ${fr('numéro de téléphone')}</li>
</ul>
<h2>Directeur de la publication</h2>
<p>${fr('nom du directeur de la publication')}</p>
<h2>Hébergeur</h2>
<p>Le site est hébergé par GitHub Pages, un service de GitHub, Inc. ${fr('vérifier et ajouter l’adresse postale et le téléphone de GitHub, Inc. depuis leurs conditions officielles')}</p>
<h2>Paiement</h2>
<p>Les paiements sont traités par Stripe. KarmaaOptimizer ne reçoit et ne stocke jamais tes données de carte bancaire.</p>
<h2>Propriété intellectuelle</h2>
<p>Le nom KarmaaOptimizer, le logo, le logiciel, les textes, captures d’écran et visuels de ce site sont protégés par le droit de la propriété intellectuelle. Toute reproduction ou utilisation sans autorisation écrite préalable est interdite, sauf courte citation avec un lien vers la source.</p>
<p>Les marques tierces citées sur ce site (Windows, NVIDIA, AMD, Intel, noms de jeux…) appartiennent à leurs propriétaires. KarmaaOptimizer n’est ni affilié ni approuvé par eux.</p>
<h2>Responsabilité</h2>
<p>Les guides de ce site sont fournis à titre d’information. On fait au mieux pour qu’ils restent exacts, mais les réglages et les logiciels évoluent. Applique les changements à ton rythme, crée un point de restauration avant et mesure le résultat.</p>
<h2>Contact</h2>
<p>Voir la <a href="../contact/">page contact</a>.</p>`,
    },
  },

  /* ---------------- CGV ---------------- */
  {
    slug: { en: 'terms', fr: 'cgv' },
    en: {
      title: 'Terms of Sale | KarmaaOptimizer',
      desc: 'Terms of sale for the KarmaaOptimizer lifetime software license: price, payment by Stripe, delivery by email, withdrawal right and warranties.',
      h1: 'Terms of sale',
      body: `<p>These terms of sale apply to every purchase of a KarmaaOptimizer license on karmaaoptimizer.com. By placing an order, you accept them. ${en('decide whether you sell to consumers only, or also to businesses, and adjust this paragraph')}</p>
<h2>1. Seller</h2>
<p>${en('name or company name')}, ${en('legal status')}, ${en('address')}, SIRET ${en('SIRET')}, email ${en('contact email')}. Full details in the <a href="../legal-notice/">legal notice</a>.</p>
<h2>2. Product</h2>
<p>KarmaaOptimizer is a Windows 10 and Windows 11 software that helps optimize the PC for gaming. The purchase gives you a <strong>non-exclusive, personal license</strong> to use the software on <strong>one PC</strong>, for the lifetime of the product. ${en('define “lifetime”: e.g. as long as the software is published and the license server runs, and what happens if it stops')}</p>
<p>The license does not transfer ownership of the software. You may not resell, share, rent, decompile or modify it, except where the law allows it. ${en('say whether the license can be moved to another PC, and how')}</p>
<p>The main features are described on the <a href="/">home page</a>. Minimum requirements: Windows 10 or Windows 11, an internet connection for activation. ${en('add any other requirement')}</p>
<h2>3. Price</h2>
<p>The price is <strong>€50</strong>, paid once. ${en('state whether the price includes VAT, or the VAT exemption mention')} The price shown at the time of order applies.</p>
<h2>4. Order and payment</h2>
<p>You order by clicking the buy button, which opens Stripe’s secure payment page. Payment is made by card or the other methods offered by Stripe (such as Apple Pay or Google Pay). The order is final once the payment is accepted. Stripe processes your payment details; we never see your card number.</p>
<h2>5. Delivery</h2>
<p>The license key and the download link are sent to the email address given at payment, usually within minutes. If you have not received them within ${en('delay, e.g. 24 hours')}, check your spam folder, then contact us (see the <a href="../contact/">contact page</a>).</p>
<h2>6. Right of withdrawal</h2>
<p>Under EU consumer law, you normally have 14 days to withdraw from a distance purchase. For digital content not supplied on a physical medium, this right can be lost once the supply has started, <strong>only if</strong> you gave your prior express consent to start right away and acknowledged that you lose your right of withdrawal (French Consumer Code, article L221-28 13°). ${en('describe how this consent is collected at checkout, e.g. a mandatory checkbox in Stripe; without it, the 14-day withdrawal right applies')}</p>
<p>Independently of the law, see our <a href="../refund/">refund policy</a>.</p>
<h2>7. Updates and support</h2>
<p>${en('describe which updates are included (e.g. all updates of version 1.x) and for how long')} Help is provided on our <a href="${DISCORD}" target="_blank" rel="noopener noreferrer">Discord</a>. ${en('support hours / response time, if you commit to any')}</p>
<h2>8. Legal guarantee of conformity</h2>
<p>As a consumer, you benefit from the legal guarantee of conformity for digital content (French Consumer Code, articles L224-25-1 and following). If the software does not work as described, contact us: we will bring it into conformity, or, if that is impossible, offer a price reduction or a refund under the conditions set by law.</p>
<h2>9. Use and liability</h2>
<p>KarmaaOptimizer changes Windows settings that you choose. Each change can be undone in the app. We recommend creating a Windows restore point before applying changes. Performance gains depend on your hardware and are not guaranteed. Our liability is limited to direct damages proven, within the limits allowed by law. Nothing in these terms limits your rights as a consumer.</p>
<p>The software does not inject code into games. Each game’s rules and anti-cheat remain the responsibility of their publishers.</p>
<h2>10. Personal data</h2>
<p>See our <a href="../privacy/">privacy policy</a>.</p>
<h2>11. Disputes and mediation</h2>
<p>In case of a dispute, contact us first: we will look for an amicable solution. As a consumer, you can also use a consumer mediator free of charge: ${en('name, website and address of your consumer mediator (mandatory in France)')}.</p>
<h2>12. Applicable law</h2>
<p>These terms are governed by French law. If you are a consumer living in another EU country, you keep the protection of the mandatory rules of your country of residence. ${en('competent court, if you want to state one')}</p>`,
    },
    fr: {
      title: 'Conditions générales de vente (CGV) | KarmaaOptimizer',
      desc: 'CGV de la licence à vie KarmaaOptimizer : prix, paiement Stripe, livraison par e-mail, droit de rétractation et garanties légales.',
      h1: 'Conditions générales de vente',
      body: `<p>Ces conditions générales de vente (CGV) s’appliquent à tout achat d’une licence KarmaaOptimizer sur karmaaoptimizer.com. En passant commande, tu les acceptes. ${fr('vente aux particuliers uniquement, ou aussi aux professionnels ? Adapter ce paragraphe')}</p>
<h2>1. Vendeur</h2>
<p>${fr('nom ou dénomination')}, ${fr('statut juridique')}, ${fr('adresse')}, SIRET ${fr('SIRET')}, e-mail ${fr('e-mail de contact')}. Détails complets dans les <a href="../mentions-legales/">mentions légales</a>.</p>
<h2>2. Produit</h2>
<p>KarmaaOptimizer est un logiciel pour Windows 10 et Windows 11 qui aide à optimiser le PC pour le jeu. L’achat te donne une <strong>licence personnelle et non exclusive</strong> d’utilisation du logiciel sur <strong>un PC</strong>, pour la durée de vie du produit. ${fr('définir « à vie » : par ex. tant que le logiciel est publié et que le serveur de licences fonctionne, et ce qui se passe s’il s’arrête')}</p>
<p>La licence ne te transfère pas la propriété du logiciel. Tu ne peux pas le revendre, le partager, le louer, le décompiler ou le modifier, sauf dans les cas prévus par la loi. ${fr('préciser si la licence peut être déplacée sur un autre PC, et comment')}</p>
<p>Les principales fonctions sont décrites sur la <a href="/fr/">page d’accueil</a>. Configuration minimale : Windows 10 ou Windows 11, une connexion internet pour l’activation. ${fr('autre prérequis éventuel')}</p>
<h2>3. Prix</h2>
<p>Le prix est de <strong>50 €</strong>, payé une seule fois. ${fr('préciser TTC, ou la mention « TVA non applicable, art. 293 B du CGI »')} Le prix applicable est celui affiché au moment de la commande.</p>
<h2>4. Commande et paiement</h2>
<p>Tu commandes en cliquant sur le bouton d’achat, qui ouvre la page de paiement sécurisée de Stripe. Le paiement se fait par carte ou par les autres moyens proposés par Stripe (comme Apple Pay ou Google Pay). La commande est ferme une fois le paiement accepté. Stripe traite tes données de paiement ; on ne voit jamais ton numéro de carte.</p>
<h2>5. Livraison</h2>
<p>La clé de licence et le lien de téléchargement sont envoyés à l’adresse e-mail donnée lors du paiement, en général en quelques minutes. Si tu ne les as pas reçus sous ${fr('délai, ex. 24 heures')}, regarde dans tes spams, puis contacte-nous (voir la <a href="../contact/">page contact</a>).</p>
<h2>6. Droit de rétractation</h2>
<p>Pour un achat à distance, tu disposes en principe de 14 jours pour te rétracter. Pour un contenu numérique non fourni sur un support matériel, ce droit peut être perdu une fois la fourniture commencée, <strong>seulement si</strong> tu as donné ton accord préalable et exprès pour qu’elle commence tout de suite et reconnu perdre ton droit de rétractation (article L221-28 13° du Code de la consommation). ${fr('décrire comment ce consentement est recueilli au paiement, ex. case à cocher obligatoire dans Stripe ; sans ça, le droit de rétractation de 14 jours s’applique')}</p>
<p>En plus de la loi, voir notre <a href="../remboursement/">politique de remboursement</a>.</p>
<h2>7. Mises à jour et assistance</h2>
<p>${fr('préciser quelles mises à jour sont incluses (ex. toutes les mises à jour de la version 1.x) et pendant combien de temps')} L’aide se fait sur notre <a href="${DISCORD}" target="_blank" rel="noopener noreferrer">Discord</a>. ${fr('horaires / délai de réponse, si tu t’engages dessus')}</p>
<h2>8. Garantie légale de conformité</h2>
<p>En tant que consommateur, tu bénéficies de la garantie légale de conformité des contenus numériques (articles L224-25-1 et suivants du Code de la consommation). Si le logiciel ne fonctionne pas comme décrit, contacte-nous : on le mettra en conformité ou, si c’est impossible, on te proposera une réduction du prix ou un remboursement dans les conditions prévues par la loi.</p>
<h2>9. Utilisation et responsabilité</h2>
<p>KarmaaOptimizer modifie des réglages Windows que tu choisis. Chaque changement peut être annulé dans l’app. On te conseille de créer un point de restauration Windows avant d’appliquer des changements. Les gains de performance dépendent de ton matériel et ne sont pas garantis. Notre responsabilité est limitée aux dommages directs prouvés, dans les limites permises par la loi. Rien dans ces CGV ne limite tes droits de consommateur.</p>
<p>Le logiciel n’injecte aucun code dans les jeux. Les règles et l’anti-triche de chaque jeu restent de la responsabilité de leurs éditeurs.</p>
<h2>10. Données personnelles</h2>
<p>Voir notre <a href="../confidentialite/">politique de confidentialité</a>.</p>
<h2>11. Litiges et médiation</h2>
<p>En cas de litige, contacte-nous d’abord : on cherchera une solution à l’amiable. En tant que consommateur, tu peux aussi recourir gratuitement à un médiateur de la consommation : ${fr('nom, site et adresse de ton médiateur de la consommation (obligatoire en France)')}.</p>
<h2>12. Droit applicable</h2>
<p>Ces CGV sont soumises au droit français. Si tu es un consommateur résidant dans un autre pays de l’UE, tu gardes la protection des règles impératives de ton pays de résidence. ${fr('tribunal compétent, si tu veux l’indiquer')}</p>`,
    },
  },

  /* ---------------- Confidentialité ---------------- */
  {
    slug: { en: 'privacy', fr: 'confidentialite' },
    en: {
      title: 'Privacy Policy | KarmaaOptimizer',
      desc: 'What personal data KarmaaOptimizer and karmaaoptimizer.com process, why, with which providers, for how long, and how to exercise your GDPR rights.',
      h1: 'Privacy policy',
      body: `<p>This policy explains which personal data we process when you visit karmaaoptimizer.com, buy a license and use the KarmaaOptimizer app, in line with the EU General Data Protection Regulation (GDPR).</p>
<h2>Data controller</h2>
<p>${en('name or company name')}, ${en('address')}, ${en('contact email for privacy requests')}.</p>
<h2>On this website</h2>
<ul>
<li><strong>No analytics and no advertising cookies.</strong> The site does not use tracking or ad cookies.</li>
<li><strong>Language choice</strong>: when you click the EN / FR link, your choice is saved in your browser’s local storage (key <code>ko-lang</code>). It never leaves your device.</li>
<li><strong>Hosting</strong>: the site is hosted on GitHub Pages. Like any web host, GitHub may log technical data such as your IP address for security. See GitHub’s privacy statement.</li>
<li><strong>Third-party resources</strong>: the home page loads fonts from Google Fonts and scripts from public CDNs (cdnjs, jsDelivr). These providers receive your IP address when they serve these files. ${en('decide whether to self-host fonts and scripts to avoid this')}</li>
</ul>
<h2>When you buy a license</h2>
<ul>
<li><strong>Payment</strong>: handled by Stripe. Stripe collects your email, name, country and payment details. We receive your email, name, country and the order status, never your full card number. Purpose: performing the sale. Legal basis: contract. Accounting records are kept for the period required by law (10 years in France).</li>
<li><strong>License delivery</strong>: your license and download link are sent by email. ${en('name of the email / delivery provider used, if any')}</li>
<li><strong>License management</strong>: licenses are managed with Keygen (keygen.sh). It stores your license key and the technical data needed to activate it. ${en('check exactly what is sent at activation, e.g. a device identifier, and list it here')}</li>
</ul>
<h2>When you use the app</h2>
<p>KarmaaOptimizer works locally on your PC. Your settings, scan results and backups stay on your computer. The app only connects to the internet for:</p>
<ul>
<li><strong>License activation and checks</strong> (Keygen), see above.</li>
<li><strong>Update checks</strong>: the app reads a version file on karmaaoptimizer.com.</li>
<li><strong>Driver checks</strong>: the app can query NVIDIA’s servers to find the latest graphics driver for your card.</li>
<li><strong>Network test</strong>: if you run it, the speed test uses Cloudflare’s speed test servers.</li>
<li><strong>KarmaaAI assistant</strong>: the messages you send to the assistant, and the PC information you choose to share with it, are sent to our server hosted on Cloudflare Workers to generate an answer. ${en('name the AI provider used behind it, what is logged and for how long')}</li>
</ul>
<p>${en('confirm that the app sends no other data (telemetry, crash reports), or list it')}</p>
<h2>Discord</h2>
<p>If you ask for help on our Discord server, Discord’s own privacy policy applies to your messages there.</p>
<h2>Retention</h2>
<p>${en('retention period for customer data, e.g. for the duration of the license, then archived for legal obligations')}</p>
<h2>Transfers outside the EU</h2>
<p>Some providers (Stripe, GitHub, Cloudflare, Keygen, Google) may process data outside the European Union, notably in the United States. These transfers rely on the safeguards provided by the GDPR, such as the EU–US Data Privacy Framework or the European Commission’s standard contractual clauses. ${en('check each provider’s safeguard')}</p>
<h2>Your rights</h2>
<p>You have the right to access, correct and delete your data, to restrict or object to its processing, and to data portability. To exercise them, write to ${en('privacy contact email')}. You can also file a complaint with your data protection authority (in France: the CNIL, cnil.fr).</p>
<h2>Changes</h2>
<p>We may update this policy. The date at the top of the page shows the latest version.</p>`,
    },
    fr: {
      title: 'Politique de confidentialité | KarmaaOptimizer',
      desc: 'Quelles données personnelles KarmaaOptimizer et karmaaoptimizer.com traitent, pourquoi, avec quels prestataires, combien de temps, et tes droits RGPD.',
      h1: 'Politique de confidentialité',
      body: `<p>Cette politique explique quelles données personnelles sont traitées quand tu visites karmaaoptimizer.com, achètes une licence et utilises l’app KarmaaOptimizer, conformément au Règlement général sur la protection des données (RGPD).</p>
<h2>Responsable du traitement</h2>
<p>${fr('nom ou dénomination')}, ${fr('adresse')}, ${fr('e-mail de contact pour les demandes RGPD')}.</p>
<h2>Sur ce site</h2>
<ul>
<li><strong>Aucun outil de statistiques et aucun cookie publicitaire.</strong> Le site n’utilise pas de cookies de suivi ou de publicité.</li>
<li><strong>Choix de la langue</strong> : quand tu cliques sur le lien EN / FR, ton choix est enregistré dans le stockage local de ton navigateur (clé <code>ko-lang</code>). Il ne quitte jamais ton appareil.</li>
<li><strong>Hébergement</strong> : le site est hébergé sur GitHub Pages. Comme tout hébergeur, GitHub peut enregistrer des données techniques comme ton adresse IP pour des raisons de sécurité. Voir la déclaration de confidentialité de GitHub.</li>
<li><strong>Ressources tierces</strong> : la page d’accueil charge des polices depuis Google Fonts et des scripts depuis des CDN publics (cdnjs, jsDelivr). Ces prestataires reçoivent ton adresse IP quand ils fournissent ces fichiers. ${fr('décider s’il faut héberger les polices et scripts sur le site pour éviter ça')}</li>
</ul>
<h2>Quand tu achètes une licence</h2>
<ul>
<li><strong>Paiement</strong> : géré par Stripe. Stripe collecte ton e-mail, ton nom, ton pays et tes données de paiement. On reçoit ton e-mail, ton nom, ton pays et le statut de la commande, jamais ton numéro de carte complet. Finalité : exécuter la vente. Base légale : le contrat. Les pièces comptables sont conservées pendant la durée prévue par la loi (10 ans en France).</li>
<li><strong>Envoi de la licence</strong> : ta licence et le lien de téléchargement sont envoyés par e-mail. ${fr('nom du prestataire d’envoi d’e-mails utilisé, s’il y en a un')}</li>
<li><strong>Gestion des licences</strong> : les licences sont gérées avec Keygen (keygen.sh). Il stocke ta clé de licence et les données techniques nécessaires à son activation. ${fr('vérifier précisément ce qui est envoyé à l’activation, ex. un identifiant d’appareil, et le lister ici')}</li>
</ul>
<h2>Quand tu utilises l’app</h2>
<p>KarmaaOptimizer fonctionne en local sur ton PC. Tes réglages, résultats de scan et sauvegardes restent sur ton ordinateur. L’app ne se connecte à internet que pour :</p>
<ul>
<li><strong>L’activation et la vérification de la licence</strong> (Keygen), voir plus haut.</li>
<li><strong>La recherche de mises à jour</strong> : l’app lit un fichier de version sur karmaaoptimizer.com.</li>
<li><strong>La vérification des pilotes</strong> : l’app peut interroger les serveurs de NVIDIA pour trouver le dernier pilote de ta carte graphique.</li>
<li><strong>Le test réseau</strong> : si tu le lances, le test de débit utilise les serveurs de test de Cloudflare.</li>
<li><strong>L’assistant KarmaaAI</strong> : les messages que tu envoies à l’assistant, et les infos sur ton PC que tu choisis de lui partager, sont envoyés à notre serveur hébergé sur Cloudflare Workers pour générer une réponse. ${fr('nommer le fournisseur d’IA utilisé derrière, ce qui est enregistré et combien de temps')}</li>
</ul>
<p>${fr('confirmer que l’app n’envoie aucune autre donnée (télémétrie, rapports de plantage), ou les lister')}</p>
<h2>Discord</h2>
<p>Si tu demandes de l’aide sur notre serveur Discord, la politique de confidentialité de Discord s’applique à tes messages là-bas.</p>
<h2>Durée de conservation</h2>
<p>${fr('durée de conservation des données clients, ex. pendant la durée de la licence, puis archivage pour les obligations légales')}</p>
<h2>Transferts hors de l’UE</h2>
<p>Certains prestataires (Stripe, GitHub, Cloudflare, Keygen, Google) peuvent traiter des données hors de l’Union européenne, notamment aux États-Unis. Ces transferts reposent sur les garanties prévues par le RGPD, comme le Data Privacy Framework UE–États-Unis ou les clauses contractuelles types de la Commission européenne. ${fr('vérifier la garantie de chaque prestataire')}</p>
<h2>Tes droits</h2>
<p>Tu as le droit d’accéder à tes données, de les rectifier, de les effacer, d’en limiter le traitement, de t’y opposer et de les récupérer (portabilité). Pour les exercer, écris à ${fr('e-mail de contact RGPD')}. Tu peux aussi adresser une réclamation à la CNIL (cnil.fr).</p>
<h2>Modifications</h2>
<p>Cette politique peut évoluer. La date en haut de page indique la dernière version.</p>`,
    },
  },

  /* ---------------- Remboursement ---------------- */
  {
    slug: { en: 'refund', fr: 'remboursement' },
    en: {
      title: 'Refund Policy | KarmaaOptimizer',
      desc: 'KarmaaOptimizer refund policy: when you can get a refund for your license, how to ask for it and how long it takes.',
      h1: 'Refund policy',
      body: `<p>We want you to be satisfied with KarmaaOptimizer. This page explains when and how you can get a refund. It does not replace your legal rights (withdrawal right and guarantee of conformity), described in our <a href="../terms/">terms of sale</a>.</p>
<h2>Refund period</h2>
<p>You can ask for a refund within <strong>${en('number of days')}</strong> days of your purchase. ${en('conditions, if any: e.g. no conditions, or only if the app does not work on your PC')}</p>
<h2>If the app does not work on your PC</h2>
<p>Contact us first on Discord or by email: most problems (activation, antivirus warning, missing requirement) can be fixed quickly. If we cannot make the app work as described on your PC, you will be refunded under the legal guarantee of conformity.</p>
<h2>How to ask for a refund</h2>
<ol>
<li>Write to ${en('contact email')} or on our <a href="${DISCORD}" target="_blank" rel="noopener noreferrer">Discord</a>.</li>
<li>Give the email used for the purchase and, if you can, your Stripe receipt number.</li>
<li>Tell us briefly why. It helps us improve the app, but it does not decide the refund when you are within the legal or refund period.</li>
</ol>
<h2>What happens next</h2>
<ul>
<li>The refund is made on the payment method used, through Stripe, within ${en('delay, e.g. 14 days')} after we accept it. Your bank may take a few more days to show it.</li>
<li>Your license is deactivated once the refund is made.</li>
</ul>
<h2>Contact</h2>
<p>See the <a href="../contact/">contact page</a>.</p>`,
    },
    fr: {
      title: 'Politique de remboursement | KarmaaOptimizer',
      desc: 'Politique de remboursement KarmaaOptimizer : quand tu peux être remboursé de ta licence, comment le demander et en combien de temps.',
      h1: 'Politique de remboursement',
      body: `<p>On veut que tu sois satisfait de KarmaaOptimizer. Cette page explique quand et comment être remboursé. Elle ne remplace pas tes droits légaux (droit de rétractation et garantie de conformité), décrits dans nos <a href="../cgv/">CGV</a>.</p>
<h2>Délai de remboursement</h2>
<p>Tu peux demander un remboursement dans les <strong>${fr('nombre de jours')}</strong> jours qui suivent ton achat. ${fr('conditions éventuelles : ex. sans condition, ou seulement si l’app ne marche pas sur ton PC')}</p>
<h2>Si l’app ne fonctionne pas sur ton PC</h2>
<p>Contacte-nous d’abord sur Discord ou par e-mail : la plupart des problèmes (activation, alerte antivirus, prérequis manquant) se règlent vite. Si on n’arrive pas à faire fonctionner l’app comme décrit sur ton PC, tu es remboursé au titre de la garantie légale de conformité.</p>
<h2>Comment demander un remboursement</h2>
<ol>
<li>Écris à ${fr('e-mail de contact')} ou sur notre <a href="${DISCORD}" target="_blank" rel="noopener noreferrer">Discord</a>.</li>
<li>Indique l’e-mail utilisé pour l’achat et, si tu peux, le numéro de ton reçu Stripe.</li>
<li>Dis-nous en deux mots pourquoi. Ça nous aide à améliorer l’app, mais ça ne décide pas du remboursement quand tu es dans le délai légal ou de remboursement.</li>
</ol>
<h2>Et ensuite</h2>
<ul>
<li>Le remboursement se fait sur le moyen de paiement utilisé, via Stripe, sous ${fr('délai, ex. 14 jours')} après acceptation. Ta banque peut mettre quelques jours de plus à l’afficher.</li>
<li>Ta licence est désactivée une fois le remboursement fait.</li>
</ul>
<h2>Contact</h2>
<p>Voir la <a href="../contact/">page contact</a>.</p>`,
    },
  },

  /* ---------------- Contact ---------------- */
  {
    slug: { en: 'contact', fr: 'contact' },
    en: {
      title: 'Contact | KarmaaOptimizer',
      desc: 'Contact KarmaaOptimizer: help on Discord 7 days a week, email for orders, refunds and privacy requests.',
      h1: 'Contact',
      body: `<h2>Help with the app</h2>
<p>The fastest way to get help is our <a href="${DISCORD}" target="_blank" rel="noopener noreferrer">Discord server</a>, 7 days a week.</p>
<h2>Orders, refunds and privacy requests</h2>
<ul>
<li>Email: ${en('contact email')}</li>
<li>Postal address: ${en('postal address')}</li>
<li>Usual response time: ${en('e.g. within 48 hours')}</li>
</ul>
<p>For an order, give the email used for the purchase and, if you can, your Stripe receipt number.</p>
<h2>Useful pages</h2>
<ul>
<li><a href="../terms/">Terms of sale</a></li>
<li><a href="../refund/">Refund policy</a></li>
<li><a href="../privacy/">Privacy policy</a></li>
<li><a href="../legal-notice/">Legal notice</a></li>
</ul>`,
    },
    fr: {
      title: 'Contact | KarmaaOptimizer',
      desc: 'Contacter KarmaaOptimizer : aide sur Discord 7 jours sur 7, e-mail pour les commandes, remboursements et demandes RGPD.',
      h1: 'Contact',
      body: `<h2>De l’aide avec l’app</h2>
<p>Le plus rapide pour avoir de l’aide, c’est notre <a href="${DISCORD}" target="_blank" rel="noopener noreferrer">serveur Discord</a>, 7 jours sur 7.</p>
<h2>Commandes, remboursements et demandes RGPD</h2>
<ul>
<li>E-mail : ${fr('e-mail de contact')}</li>
<li>Adresse postale : ${fr('adresse postale')}</li>
<li>Délai de réponse habituel : ${fr('ex. sous 48 heures')}</li>
</ul>
<p>Pour une commande, indique l’e-mail utilisé pour l’achat et, si tu peux, le numéro de ton reçu Stripe.</p>
<h2>Pages utiles</h2>
<ul>
<li><a href="../cgv/">Conditions générales de vente</a></li>
<li><a href="../remboursement/">Politique de remboursement</a></li>
<li><a href="../confidentialite/">Politique de confidentialité</a></li>
<li><a href="../mentions-legales/">Mentions légales</a></li>
</ul>`,
    },
  },
];
