import Link from "next/link";
import WaitlistCount from "./WaitlistCount";
export default function Footer(){
  return(<footer className="mt-16 border-t border-white/10">
    <div className="container py-10 grid md:grid-cols-3 gap-8 items-center">
      <div><h3 className="text-xl font-bold">Sidetick</h3>
        <p className="text-white/70 mt-2">You bring the vibe, we bring the ticket!</p>
        <div className="mt-3"><WaitlistCount/></div>
      </div>
      <nav className="flex flex-col gap-2 md:gap-1">
        <Link href="/legal-mentions">Mentions légales</Link>
        <Link href="/privacy">Confidentialité</Link>
        <Link href="/terms">Conditions</Link>
      </nav>
      <div className="justify-self-end">
        <small className="muted">© {new Date().getFullYear()} Sidetick SAS</small>
      </div>
    </div>
  </footer>);
}
