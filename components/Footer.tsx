import Link from "next/link";
import WaitlistCount from "./WaitlistCount";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer(){
  return(
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-10 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <h3 className="text-xl font-bold">Sidetick</h3>
          <p className="text-white/70 mt-2">You bring the vibe, we bring the ticket!</p>
          <div className="mt-3"><WaitlistCount/></div>

          {/* Réseaux sociaux */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://x.com/sidetick_app" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-sidetick.orange hover:text-black transition focus:outline-none focus:ring-2 focus:ring-sidetick.violet">
              <Twitter className="w-4 h-4" /> X
            </a>
            <a href="https://www.instagram.com/sidetick.app/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-sidetick.orange hover:text-black transition focus:outline-none focus:ring-2 focus:ring-sidetick.violet">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="https://www.linkedin.com/company/sidetick-app" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-sidetick.orange hover:text-black transition focus:outline-none focus:ring-2 focus:ring-sidetick.violet">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
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
    </footer>
  );
}
