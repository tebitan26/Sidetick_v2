"use client";

import { useState } from "react";
import {
  Ticket, Trophy, Stars, Gift, Share2, Music2, ShoppingBag,
  ShieldCheck, Smartphone, Zap
} from "lucide-react";
import Link from "next/link";

type TierKey = "fan" | "superfan" | "ultrafan";

const TIERS: Record<TierKey, {
  label: string;
  gradient: string;            // bg gradient
  ring: string;                 // ring color
  icon: JSX.Element;
  threshold: number;            // points needed to reach tier
  perks: { icon: JSX.Element; label: string; }[];
}> = {
  fan: {
    label: "Fan",
    gradient: "bg-gradient-to-br from-violet-600/25 to-indigo-600/25",
    ring: "ring-violet-400/30",
    icon: <Music2 className="h-5 w-5" />,
    threshold: 0,
    perks: [
      { icon: <ShieldCheck className="h-4 w-4" />, label: "Billets sécurisés & traçables" },
      { icon: <Smartphone className="h-4 w-4" />, label: "Ticket mobile & QR dynamique" },
    ],
  },
  superfan: {
    label: "Superfan",
    gradient: "bg-gradient-to-br from-blue-600/25 to-cyan-600/25",
    ring: "ring-blue-400/30",
    icon: <Stars className="h-5 w-5" />,
    threshold: 300,
    perks: [
      { icon: <Gift className="h-4 w-4" />, label: "Accès anticipé à certaines ventes" },
      { icon: <Ticket className="h-4 w-4" />, label: "Revente officielle simplifiée" },
      { icon: <Share2 className="h-4 w-4" />, label: "Bonus de parrainage ponctuels" },
    ],
  },
  ultrafan: {
    label: "UltraFan",
    gradient: "bg-gradient-to-br from-orange-600/25 to-rose-600/25",
    ring: "ring-orange-400/30",
    icon: <Trophy className="h-5 w-5" />,
    threshold: 1000,
    perks: [
      { icon: <Zap className="h-4 w-4" />, label: "Drops/présales exclusives" },
      { icon: <ShoppingBag className="h-4 w-4" />, label: "Merch & expériences limitées" },
      { icon: <Stars className="h-4 w-4" />, label: "Tirages “meet & greet”/backstage" },
    ],
  },
};

// Missions “comment gagner des points”
const MISSIONS: { pts: number; label: string; }[] = [
  { pts: 50,  label: "Acheter un billet" },
  { pts: 30,  label: "Assister à l’événement (check-in)" },
  { pts: 20,  label: "Partager l’event (social)" },
  { pts: 15,  label: "Inviter un ami (parrainage)" },
  { pts: 10,  label: "Consommer du contenu (clips/actu)" },
];

export default function UltraFan() {
  // état d’aperçu (pas de vraie session ici – purely marketing/UX)
  const [tier, setTier] = useState<TierKey>("superfan");
  const current = TIERS[tier];

  // progress bar de démo (montre visuellement le passage de palier)
  const demoPoints = tier === "fan" ? 120 : tier === "superfan" ? 620 : 1200;
  const nextThreshold = tier === "fan" ? TIERS.superfan.threshold : TIERS.ultrafan.threshold;
  const base = tier === "fan" ? TIERS.fan.threshold : TIERS.superfan.threshold;
  const pct = Math.min(100, Math.round(((demoPoints - base) / Math.max(1, (nextThreshold - base))) * 100));

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold reveal-up">
              UltraFan — la reconnaissance des vrais fans
            </h2>
            <p className="mt-2 text-white/80 max-w-prose reveal-up">
              Gagne des points en vivant ta passion. Monte de palier et débloque des avantages
              réels : accès anticipés, drops exclusifs, tirages et expériences uniques.
            </p>
          </div>

          {/* Switch tiers (aperçu) */}
          <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1 reveal-up">
            {(["fan", "superfan", "ultrafan"] as TierKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setTier(k)}
                className={[
                  "px-3 py-1.5 text-sm rounded-lg transition",
                  tier === k ? "bg-white/20 text-white" : "text-white/70 hover:text-white"
                ].join(" ")}
                aria-pressed={tier === k}
              >
                {TIERS[k].label}
              </button>
            ))}
          </div>
        </div>

        {/* Carte tier sélectionné */}
        <article
          className={[
            "mt-6 rounded-2xl border border-white/10 backdrop-blur p-5 md:p-6 reveal-up",
            current.gradient, current.ring, "ring-1"
          ].join(" ")}
        >
          <header className="flex items-center gap-2">
            <div className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              {current.icon}
            </div>
            <h3 className="text-xl font-bold">{current.label}</h3>
          </header>

          {/* Progress demo */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-white/70">
              <span>{demoPoints} pts</span>
              <span>palier {nextThreshold} pts</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-400 via-violet-400 to-blue-400"
                style={{ width: `${pct}%` }}
                aria-label={`Progression ${pct}%`}
              />
            </div>
          </div>

          {/* Avantages */}
          <ul className="mt-5 grid gap-2 md:grid-cols-2">
            {current.perks.map((p, i) => (
              <li key={i} className="flex items-center gap-2 text-white/90">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10">
                  {p.icon}
                </span>
                {p.label}
              </li>
            ))}
          </ul>

          {/* Missions — comment gagner des points */}
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Stars className="h-4 w-4" /> Gagner des points
            </div>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {MISSIONS.map((m, i) => (
                <li key={i} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <span className="text-white/85">{m.label}</span>
                  <span className="text-white/70 text-sm">+{m.pts}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-white/60">
              Exemple indicatif — barème amené à évoluer selon les événements.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="text-white/75 text-sm flex items-center gap-2">
              <Ticket className="h-4 w-4" />
              Commence dès maintenant : rejoins la waiting list.
            </div>
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-xl bg-white/15 px-4 py-2 text-sm hover:bg-white/25 transition"
            >
              Rejoindre la Side
            </Link>
          </div>

          {/* SEO invisible: liste des avantages pour chaque tier */}
          <ul className="sr-only">
            {Object.values(TIERS).map((t) =>
              t.perks.map((p) => <li key={`${t.label}-${p.label}`}>{t.label} — {p.label}</li>)
            )}
          </ul>
        </article>
      </div>
    </section>
  );
}
