// components/Footer.tsx
import Link from "next/link";
import dynamic from "next/dynamic";

const WaitlistCount = dynamic(() => import("./WaitlistCount"), { ssr: false });

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-10">
        {/* Brand + colonnes */}
        <div className="grid gap-8 md:grid-cols-5">
          {/* Col 1 — Brand */}
          <div>
            <h3 className="text-xl font-bold">Sidetick</h3>
            <p className="text-white/70 mt-2">
              You bring the vibe, we bring the ticket!
            </p>
            <div className="mt-3">
              <WaitlistCount />
            </div>
            <p className="mt-6 text-white/50 text-sm">
              © {new Date().getFullYear()} Sidetick SAS
            </p>
          </div>

          {/* Col 2 — Pages */}
          <nav className="flex flex-col gap-2">
            <p className="text-white/60 text-sm uppercase tracking-wide">Pages</p>
            <Link href="/">Accueil</Link>
            <Link href="/features">Fonctionnalités</Link>
            <Link href="/about">À propos</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
          </nav>

          {/* Col 3 — Légal */}
          <nav className="flex flex-col gap-2">
            <p className="text-white/60 text-sm uppercase tracking-wide">Légal</p>
            <Link href="/legal-mentions">Mentions légales</Link>
            <Link href="/privacy">Confidentialité</Link>
            <Link href="/terms">Conditions</Link>
          </nav>

          {/* Col 4 — Réseaux */}
          <nav className="flex flex-col gap-2">
            <p className="text-white/60 text-sm uppercase tracking-wide">Réseaux</p>
            <a href="https://x.com/sidetick_app" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <a href="https://www.instagram.com/sidetick.app/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/sidetick-app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>

          {/* Col 5 — Contact */}
          <div className="flex flex-col gap-2">
            <p className="text-white/60 text-sm uppercase tracking-wide">Contact</p>
            <a href="mailto:contact@sidetick.app">contact@sidetick.app</a>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            Ce site a été conçu avec ❤️ par l’équipe Sidetick, pour tous les fans qui font vibrer la scène.
          </p>
        </div>
      </div>
    </footer>
  );
}
