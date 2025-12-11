// app/features/page.tsx
import { redirect } from "next/navigation";

export const metadata = {
  title: "Fonctionnalités — Sidetick",
  description:
    "Les fonctionnalités de Sidetick sont désormais regroupées sur les pages d’accueil et Pros.",
};

export default function FeaturesPage() {
  // On redirige proprement pour éviter le contenu dupliqué
  redirect("/");
}
