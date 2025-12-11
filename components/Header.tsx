"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/pros", label: "Organisateurs & artistes" },
  { href: "/about", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Empêche le scroll quand le menu mobile est ouvert
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
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/og/logo-white.png"
            alt="Sidetick"
            width={140}
            height={32}
            priority
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#waitlist"
            className="inline-flex items-center rounded-full bg-sidetick-orange px-4 py-2 text-sm font-semibold text-black shadow-sm hover:opacity-90"
          >
            Rejoindre la liste
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 md:hidden"
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Menu mobile (tiroir) */}
      <div
        className={clsx(
          "fixed inset-0 z-40 md:hidden transition-opacity",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setOpen(false)}
        />

        {/* Panneau */}
        <div
          className={clsx(
            "absolute right-0 top-0 h-full w-72 bg-black px-4 py-4 shadow-xl transition-transform",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <Image
              src="/og/logo-white.png"
              alt="Sidetick"
              width={120}
              height={28}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-3">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-sidetick-orange px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Rejoindre la liste
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
