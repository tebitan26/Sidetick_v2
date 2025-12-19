// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/start", label: "Commencer" },
  { href: "/pros", label: "Organisateurs & artistes" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/10 bg-sidetick-bg/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            {/* Si tu as un logo en image, tu pourras le remettre ici */}
            <span className="text-base font-bold tracking-tight">
              Sidetick
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-sidetick-orange ${
                  isActive ? "text-sidetick-orange" : "text-white/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* CTA Waitlist toujours visible */}
          <Link
            href="#waitlist"
            className="inline-flex items-center rounded-full bg-sidetick-orange px-4 py-1.5 text-xs font-semibold text-black hover:brightness-105 hover:-translate-y-0.5 transition"
          >
            Rejoindre la waiting list
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-1.5 text-xs text-white/80 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Ouvrir le menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-sidetick-bg/95 md:hidden">
          <nav className="container flex flex-col gap-2 py-3 text-sm">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1 transition hover:text-sidetick-orange ${
                    isActive ? "text-sidetick-orange" : "text-white/80"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="#waitlist"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sidetick-orange px-4 py-2 text-xs font-semibold text-black hover:brightness-105 transition"
              onClick={() => setOpen(false)}
            >
              Rejoindre la waiting list
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
