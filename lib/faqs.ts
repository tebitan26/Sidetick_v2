// lib/faqs.ts
export type QA = { q: string; a: string };
export type FAQCategory = { id: string; title: string; emoji: string; items: QA[] };

// 🎟️ Billets & Sécurité
const billetsSecurite: QA[] = [
  {
    q: "Comment Sidetick garantit que mon billet n’est pas un faux ?",
    a: "Chaque billet est sécurisé avec un QR code dynamique et un ancrage blockchain. Impossible de dupliquer, falsifier ou revendre hors circuit. Au contrôle, seul le QR valide passe."
  },
  {
    q: "Est-ce que je peux transférer mon billet à un ami facilement ?",
    a: "Oui. Depuis ton compte, clique sur “Transférer” et saisis l’email de ton ami. Le billet est réassigné en toute sécurité et apparait dans son espace Sidetick."
  },
  {
    q: "Que se passe-t-il si quelqu’un essaie de scanner mon billet avant moi ?",
    a: "Le QR est dynamique et lié à ton compte. Les copies/screenshots ne fonctionnent pas. Au scan, un seul billet est validé, les duplications sont rejetées."
  },
  {
    q: "Pourquoi mes billets sont-ils dynamiques ?",
    a: "Un QR dynamique change régulièrement pour bloquer les arnaques (copie, revente sauvage). C’est transparent pour toi et très efficace contre la fraude."
  },
  {
    q: "Sidetick protège-t-il mes données personnelles (RGPD) ?",
    a: "Oui. Nous respectons le RGPD : données chiffrées, pas de revente de data, et tu peux demander la suppression de ton compte à tout moment."
  }
];

// 🔄 Revente officielle
const reventeOfficielle: QA[] = [
  {
    q: "Comment revendre mon billet si je ne peux pas assister à l’événement ?",
    a: "Depuis ton espace, clique sur “Revendre mon billet”. Tu fixes un prix (dans la limite autorisée) et ton billet redevient dispo en toute légalité pour un autre fan."
  },
  {
    q: "Jusqu’à quand puis-je revendre mon billet avant le concert ?",
    a: "Jusqu’à la fermeture décidée par l’organisateur (souvent quelques heures avant l’événement). La deadline exacte est indiquée sur la page de l’événement."
  },
  {
    q: "Pourquoi y a-t-il 10 % de frais quand je revends ma place ?",
    a: "Ces frais financent la sécurité (anti-fraude), la traçabilité et la redistribution équitable (artiste/organisateur). Ils limitent aussi la spéculation."
  },
  {
    q: "La revente via Sidetick est-elle légale en France et en Europe ?",
    a: "Oui. C’est une revente officielle, encadrée par l’organisateur. Transparente, traçable et équitable pour tout l’écosystème."
  },
  {
    q: "Que se passe-t-il si personne n’achète mon billet revendu ?",
    a: "Si ton billet n’est pas repris avant la deadline, il reste dans ton compte. Tu peux ajuster le prix (si autorisé) ou conserver ta place."
  }
];

// 🌍 Utilisation & Accessibilité
const utilisationAccess: QA[] = [
  {
    q: "Sur quelles plateformes je trouve Sidetick (iOS, Android, Web) ?",
    a: "Sidetick est dispo sur iOS (App Store), Android (Google Play) et en version Web. Tu peux acheter, revendre et gérer tes billets depuis n’importe lequel."
  },
  {
    q: "Dois-je comprendre la blockchain pour utiliser Sidetick ?",
    a: "Pas du tout. Tu payes en euros, parcours classique. La techno blockchain reste sous le capot pour sécuriser tes billets."
  },
  {
    q: "Quels moyens de paiement sont acceptés sur Sidetick ?",
    a: "Carte bancaire (débit/crédit). D’autres moyens (wallet, Apple Pay/Google Pay) arrivent. Tout est en euros."
  },
  {
    q: "Est-ce que je peux acheter un billet sans créer de compte ?",
    a: "Non, par sécurité et traçabilité. L’inscription est gratuite et prend 1 minute."
  },
  {
    q: "Sidetick marche-t-il uniquement en France ?",
    a: "Le lancement démarre en France/Europe, mais la plateforme est pensée pour être internationale."
  }
];

// ⭐ UltraFan & Expérience
const ultrafanXP: QA[] = [
  {
    q: "Qu’est-ce que le programme UltraFan ?",
    a: "C’est le club des fans qui s’investissent : tu gagnes des points, des badges et des avantages (accès anticipé, drops exclusifs, surprises IRL…)."
  },
  {
    q: "Quels avantages concrets j’ai en étant UltraFan ?",
    a: "Accès early aux billets, offres limitées, contenu exclusif, rencontres, et une vraie reconnaissance de ta fidélité."
  },
  {
    q: "Comment gagner des badges et monter de niveau ?",
    a: "En achetant des billets, en assistant aux shows, en partageant, en participant aux activations. Plus tu vibres, plus tu montes."
  },
  {
    q: "Est-ce que UltraFan coûte quelque chose ?",
    a: "Le programme de base est gratuit. Certaines features premium pourront exister selon les artistes/organisateurs."
  },
  {
    q: "Pourquoi Sidetick met les fans au centre de son modèle ?",
    a: "Parce que tu crées la vibe ! On redistribue la valeur au bon endroit et on te remercie pour ton engagement."
  }
];

export const faqCategories: FAQCategory[] = [
  { id: "billets-securite", title: "Billets & Sécurité", emoji: "🎟️", items: billetsSecurite },
  { id: "revente-officielle", title: "Revente officielle", emoji: "🔄", items: reventeOfficielle },
  { id: "utilisation-accessibilite", title: "Utilisation & Accessibilité", emoji: "🌍", items: utilisationAccess },
  { id: "ultrafan-experience", title: "UltraFan & Expérience", emoji: "⭐", items: ultrafanXP }
];

// 7 essentielles pour la home
export const homeEssentials: QA[] = [
  billetsSecurite[0],
  billetsSecurite[1],
  reventeOfficielle[0],
  reventeOfficielle[1],
  utilisationAccess[0],
  utilisationAccess[1],
  ultrafanXP[0]
];

export function allFaqsFlat(): QA[] {
  return faqCategories.flatMap(c => c.items);
}
