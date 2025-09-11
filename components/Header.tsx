// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/features", label: "Fonctionnalités" },
  { href: "/about", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-sidetick-night/70 backdrop-blur-md">
      <div className="container flex items-center justify-between py-3 md:py-4">
        {/* Logo = image (garde le ratio) */}
        <Link href="/" aria-label="Sidetick - Accueil" className="flex items-center gap-2">
          <Image
            src="og/logo-white.png"          // place bien le fichier dans /public/og/Logo-White.png
            alt="Sidetick"
            width={128}
            height={32}
            priority={false}
            className="h-8 w-auto"            // ← empêche l’écrasement
          />
          {/* On cache le texte visuel pour éviter le doublon que tu voyais */}
          <span className="sr-only">Sidetick</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "text-white/80 hover:text-white transition",
                pathname === l.href && "text-white"
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#waitlist"
            onClick={() => (window as any).plausible?.("cta_click_header")}
            className="btn ml-2"
          >
            Rejoindre la liste
          </a>
        </nav>

        {/* Burger mobile */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sidetick-violet"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Panneau coulissant mobile */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60]">
          {/* Backdrop */}
          <button
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          {/* Panel */}
          <div
            id="mobile-menu"
            className="absolute right-0 top-0 h-full w-80 max-w-[85%] translate-x-0 bg-sidetick-night shadow-2xl ring-1 ring-white/10 transition-transform"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <Image
                src="og/logo-white.png"
                alt="Sidetick"
                width={112}
                height={28}
                className="h-7 w-auto"
              />
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sidetick-violet"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="px-5 py-4">
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "block rounded-lg px-3 py-2 text-base text-white/90 hover:bg-white/10",
                        pathname === l.href && "bg-white/10 text-white"
                      )}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                onClick={() => {
                  (window as any).plausible?.("cta_click_header_mobile");
                  setOpen(false);
                }}
                className="btn mt-4 w-full justify-center"
              >
                Rejoindre la liste
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
