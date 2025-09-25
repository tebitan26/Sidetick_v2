// app/waitlist/confirm/page.tsx
import type { Metadata } from "next";
import ConfirmClient from "@/components/ConfirmClient";

export const metadata: Metadata = {
  title: "Confirmation — Sidetick",
  description: "Email confirmé. Bienvenue sur la waiting list Sidetick !",
  alternates: { canonical: "/waitlist/confirm" },
};

export default function ConfirmPage({
  searchParams,
}: {
  searchParams?: { ref?: string; src?: string; came_from?: string };
}) {
  const referrer = searchParams?.ref ?? null;

  return (
    <div className="section">
      <div className="container text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Confirmation en cours…</h1>
        <p className="mt-2 text-white/70">
          Merci ! On valide ton email et on prépare ton lien de parrainage.
        </p>

        {/* ⬇️ La logique d’échange du code et de confirmation est côté client */}
        <ConfirmClient referrer={referrer} />
      </div>
    </div>
  );
}
