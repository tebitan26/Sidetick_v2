// lib/faqs.ts
export type QA = { q: string; a: string };
export type FAQCategory = { slug: string; title: string; items: QA[] };

export const faqsByCategory: FAQCategory[] = [
  {
    slug: "decouvrir",
    title: "Découvrir Sidetick",
    items: [
      { q: "Qu’est-ce que Sidetick ?", a: "Une billetterie en ligne sécurisée et éthique : achat, revente officielle et anti-fraude via QR dynamique et ancrage blockchain – tout en euros." },
      { q: "Sur quelles plateformes est disponible Sidetick ?", a: "Web, iOS et Android (appli à venir). L’achat fonctionne déjà dans ton navigateur." },
      { q: "Dois-je connaître la blockchain ?", a: "Non. La techno est invisible. Paiements en euros et parcours classique." },
      { q: "Quels événements sont concernés ?", a: "Concerts, festivals, soirées, spectacles. Les organisateurs compatibles l’indiqueront sur leur page." },
      { q: "Comment créer un compte ?", a: "Avec ton email (login magic link). Pas de mot de passe à retenir." },
    ],
  },
  {
    slug: "achat",
    title: "Achat & accès à l’événement",
    items: [
      { q: "Comment se présente mon billet ?", a: "Dans ton compte Sidetick : un billet numérique avec QR dynamique + infos pratique." },
      { q: "Puis-je transférer un billet à un ami ?", a: "Oui, en sécurité depuis ton compte. L’historique garde la traçabilité." },
      { q: "Que se passe-t-il si je perds mon téléphone ?", a: "Reconnecte-toi via ton email ; ton billet est lié à ton compte, pas à l’appareil." },
      { q: "Et si l’événement est annulé ?", a: "Le remboursement suit la politique de l’organisateur. Tu es notifié dans l’app." },
      { q: "Mon QR peut-il être copié ?", a: "Non : il est dynamique/rotatif et vérifié côté serveur à l’entrée." },
    ],
  },
  {
    slug: "revente",
    title: "Revente officielle",
    items: [
      { q: "Comment fonctionne la revente officielle ?", a: "Depuis ton billet, clique « Revendre ». Le billet est listé au prix encadré par l’organisateur et automatiquement transféré à l’acheteur." },
      { q: "Jusqu’à quand puis-je revendre mon billet ?", a: "Jusqu’à l’heure limite fixée par l’organisateur (souvent quelques heures avant les portes)." },
      { q: "Pourquoi y a-t-il des frais (ex. 10%) ?", a: "Ils couvrent sécurité, paiement, lutte anti-fraude, support, et redistribuent équitablement (organisateur/artiste)." },
      { q: "Puis-je fixer librement le prix ?", a: "Le prix est borné pour éviter la spéculation. Les bornes sont affichées lors de la mise en vente." },
      { q: "Comment et quand suis-je payé après revente ?", a: "Après validation de la vente, virement sur ton IBAN (délais bancaires habituels)." },
    ],
  },
  {
    slug: "paiement",
    title: "Paiements & sécurité",
    items: [
      { q: "Quels moyens de paiement acceptez-vous ?", a: "Carte bancaire (Visa/Mastercard), Apple Pay/Google Pay quand dispo." },
      { q: "Mes données de paiement sont-elles sécurisées ?", a: "Oui, prestataire certifié PCI-DSS ; Sidetick ne stocke pas les données sensibles." },
      { q: "Puis-je obtenir une facture ?", a: "Oui, depuis l’historique de commandes de ton compte." },
      { q: "Les prix affichés incluent-ils les frais ?", a: "Le détail des frais est affiché avant paiement pour une transparence totale." },
      { q: "Puis-je utiliser des coupons ou codes promo ?", a: "Quand un organisateur en propose, tu pourras l’appliquer au checkout." },
    ],
  },
];

export const topFAQs: QA[] = [
  // Choisis ici les 7 essentielles affichées sur la home
  faqsByCategory[0].items[0],
  faqsByCategory[0].items[2],
  faqsByCategory[1].items[4],
  faqsByCategory[2].items[0],
  faqsByCategory[2].items[1],
  faqsByCategory[2].items[2],
  faqsByCategory[3].items[1],
];
