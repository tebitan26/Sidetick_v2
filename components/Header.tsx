"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/features", label: "Fonctionnalités" },
  { href: "/about", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Empêche le scroll de la page quand le tiroir est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-sidetick-night/80 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" aria-label="Sidetick – Accueil" className="flex items-center gap-2">
          <Image
            src="og/logo-white.png"     // mets bien l’image dans public/og/Logo-White.png
            alt="Sidetick"
            width={112}
            height={28}
            priority
          />
          {/* si tu veux enlever tout texte à côté du logo, laisse vide ici */}
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-white">
              {l.label}
            </Link>
          ))}
          <a href="#waitlist" className="btn">Rejoindre la liste</a>
        </nav>

        {/* Bouton burger (mobile) */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Overlay + Tiroir mobile */}
      {/* Overlay (cliquable pour fermer) */}
      <div
        className={clsx(
          "fixed inset-0 z-[98] bg-black/40 transition-opacity md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Panneau tiroir */}
      <aside
        aria-hidden={!open}
        className={clsx(
          "fixed right-0 top-0 z-[99] h-dvh w-80 max-w-[85vw] transform border-l border-white/10 md:hidden",
          "bg-sidetick-night text-white shadow-xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4">
          <Image
            src="og/logo-white.png"
            alt="Sidetick"
            width={112}
            height={28}
            priority
          />
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-4 pb-6">
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded-lg px-3 py-3 text-base text-white/90 hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-sidetick-orange px-4 py-3 font-semibold text-black hover:opacity-90"
          >
            Rejoindre la liste
          </a>
        </nav>
      </aside>
    </header>
  );
}
