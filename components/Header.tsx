// components/Header.tsx
"use client";

import { useEffect, useState } from "react";
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

  // Fermer le tiroir quand on change de route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Esc pour fermer
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-sidetick.night/70 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo = plus de texte “Sidetick” */}
        <Link href="/" className="flex items-center gap-2" aria-label="Sidetick – Accueil">
          {/* Utilise la variante lisible sur fond sombre */}
          <Image
            src="/og/Logo-White.png" // mets tes fichiers dans /public/og/ (ou change le chemin)
            alt="Sidetick"
            width={128}
            height={28}
            className="h-7 w-auto"
            priority
          />
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
          <a href="#waitlist" className="btn ml-2">Rejoindre la liste</a>
        </nav>

        {/* Bouton burger mobile */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sidetick.violet"
          aria-label="Ouvrir le menu"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Overlay + tiroir mobile */}
      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-black/60 transition-opacity md:hidden",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      {/* Tiroir */}
      <aside
        className={clsx(
          "fixed right-0 top-0 z-50 h-full w-72 md:hidden",
          "translate-x-full transition-transform",
          open && "translate-x-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex h-full flex-col bg-sidetick.night shadow-xl border-l border-white/10">
          <div className="flex items-center justify-between p-4">
            <Image
              src="/og/Logo-White.png"
              alt="Sidetick"
              width={112}
              height={24}
              className="h-6 w-auto"
              priority
            />
            <button
              type="button"
              className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sidetick.violet"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="px-4 pb-4">
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={clsx(
                      "block rounded-lg px-3 py-2 text-base",
                      pathname === l.href ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="#waitlist"
              className="btn mt-4 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Rejoindre la liste
            </a>
          </nav>

          <div className="mt-auto p-4 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Sidetick
          </div>
        </div>
      </aside>
    </header>
  );
}
