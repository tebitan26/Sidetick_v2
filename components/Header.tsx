"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
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
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Fermer avec Échap & clic extérieur
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    function onClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.addEventListener("mousedown", onClick);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-sidetick.night/70 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-extrabold text-xl tracking-wide">Sidetick</Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-6">
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
        </nav>

        {/* CTA desktop */}
        <a href="#waitlist" className="btn hidden md:inline-flex">Rejoindre la liste</a>

        {/* Burger mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 bg-white/10 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sidetick.orange"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* PANNEAU MOBILE */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-40 bg-black/60"
        >
          <div
            ref={panelRef}
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-sidetick.night border-l border-white/10 p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-lg">Sidetick</span>
              <button
                className="inline-flex items-center justify-center rounded-lg p-2 bg-white/10 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sidetick.orange"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={clsx(
                    "text-white/90 hover:text-white text-base",
                    pathname === l.href && "font-semibold"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <a
              href="#waitlist"
              className="btn mt-6 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Rejoindre la liste
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
