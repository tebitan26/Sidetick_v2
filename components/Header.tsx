"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const links=[{href:"/",label:"Accueil"},{href:"/features",label:"Fonctionnalités"},{href:"/about",label:"À propos"},{href:"/blog",label:"Blog"}];
export default function Header(){
  const pathname=usePathname();
  return(<header className="sticky top-0 z-50 bg-sidetick.night/70 backdrop-blur-md border-b border-white/10">
    <div className="container flex items-center justify-between py-4">
      <Link href="/" className="font-extrabold text-xl tracking-wide">Sidetick</Link>
      <nav className="flex gap-6">
        {links.map(l=>(
          <Link key={l.href} href={l.href} className={clsx("text-white/80 hover:text-white", pathname===l.href&&"text-white")}>{l.label}</Link>
        ))}
      </nav>
      <a href="#waitlist" className="btn">Rejoindre la liste</a>
    </div>
  </header>);
}
