// components/Footer.tsx
import Link from "next/link";
import dynamic from "next/dynamic";

const WaitlistCount = dynamic(() => import("./WaitlistCount"), { ssr: false });

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/90 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:justify-between">
        {/* Col 1 — Brand */}
        <div className="max-w-xs space-y-3">
          <h3 className="text-lg font-semibold">Sidetick</h3>
          <p className="text-sm text-white/80">
            You bring the vibe, we bring the ticket!
          </p>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Sidetick SAS. Tous droits réservés.
          </p>
          <p className="text-xs text-white/60">
            Déjà{" "}
            <span className="font-semibold">
              <WaitlistCount />
            </span>{" "}
            fans sur la liste d&apos;attente.
          </p>

          <Link
            href="/start#waitlist"
            className="inline-flex items-center rounded-full bg-sidetick-orange px-4 py-2 text-xs font-semibold text-black hover:brightness-105 transition"
          >
            Rejoindre la waiting list
          </Link>
        </div>

        {/* Col 2 — Pages */}
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold">Pages</h4>
          <div className="flex flex-col gap-1 text-white/80">
            <Link href="/">Accueil</Link>
            <Link href="/start">Commencer</Link>
            <Link href="/pros">Organisateurs & artistes</Link>
            <Link href="/about">À propos</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>

        {/* Col 3 — Légal */}
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold">Légal</h4>
          <div className="flex flex-col gap-1 text-white/80">
            <Link href="/legal">Mentions légales</Link>
            <Link href="/privacy">Confidentialité</Link>
            <Link href="/terms">Conditions</Link>
          </div>
        </div>

        {/* Col 4 — Réseaux */}
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold">Réseaux</h4>
          <div className="flex flex-col gap-1 text-white/80">
            <Link href="https://x.com/sidetick_app" target="_blank">
              X (Twitter)
            </Link>
            <Link href="https://www.instagram.com/sidetick.app/" target="_blank">
              Instagram
            </Link>
            <Link href="https://www.linkedin.com/company/sidetick-app" target="_blank">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Col 5 — Contact */}
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold">Contact</h4>
          <div className="flex flex-col gap-1 text-white/80">
            <a href="mailto:contact@sidetick.app">contact@sidetick.app</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        Ce site a été conçu avec ❤️ par l’équipe Sidetick, pour tous les fans qui
        font vibrer la scène.
      </div>
    </footer>
  );
}
