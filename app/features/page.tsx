// app/features/page.tsx
import { redirect } from "next/navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fonctionnalités Sidetick — Billetterie sécurisée, revente officielle, Fan Graph",
  description:
    "Découvrez Sidetick : billetterie en ligne anti-fraude, revente officielle encadrée, et Fan Graph (badges, statuts, avantages) pour récompenser les fans et aider les organisateurs.",
};


export default function FeaturesPage() {
  // On redirige proprement pour éviter le contenu dupliqué
  redirect("/");
}
