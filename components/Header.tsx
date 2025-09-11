"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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

  // Empêche le scroll quand le tiroir est ouvert
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-sidetick-night/70 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 font-extrabold text-xl tracking-wide">
          <Image
            src="/og/logo-white.png"
            alt="Sidetick"
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span className="hidden sm:inline">Sidetick</span>
        </Link>

        {/* Desktop nav */}
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

        <div className="hidden md:block">
          <a href="#waitlist" className="btn">Rejoindre la liste</a>
        </div>

        {/* Burger mobile */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white hover:bg-white/10"
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Overlay + tiroir mobile */}
      {open && (
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
        />
      )}
      <aside
        className={clsx(
          "fixed right-0 top-0 z-[70] h-screen w-5/6 max-w-xs transform bg-sidetick-night border-l border-white/10 shadow-2xl transition-transform md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image src="/og/logo-white.png" alt="Sidetick" width={24} height={24} />
            <span className="font-semibold">Sidetick</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-white/90 hover:text-white hover:bg-white/10"
            aria-label="Fermer le menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "rounded-lg px-3 py-3 text-base transition",
                pathname === l.href ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-4 btn text-center"
          >
            Rejoindre la liste
          </a>
        </nav>
      </aside>
    </header>
  );
}
