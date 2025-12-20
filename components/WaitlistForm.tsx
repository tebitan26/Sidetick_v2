// components/WaitlistForm.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

type Props = { referrer?: string }; // code de parrain optionnel (?ref=xxxx)

export default function WaitlistForm({ referrer }: Props) {
  const sb = supabaseBrowser();

  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  // anti-bot: honeypot + délai de frappe + cooldown
  const firstFocusAt = useRef<number | null>(null);
  const lastSubmitAt = useRef<number>(0);
  const honeypot = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (firstFocusAt.current === null && email.length > 0) {
      firstFocusAt.current = Date.now();
    }
  }, [email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setOk(null);

    // Validations
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr("Email invalide.");
      return;
    }
    if (!consent) {
      setErr("Merci d’accepter de recevoir les infos de lancement.");
      return;
    }
    if (honeypot.current && honeypot.current.value) {
      setErr("Oups, une erreur est survenue.");
      return;
    }

    const now = Date.now();
    if (firstFocusAt.current && now - firstFocusAt.current < 2000) {
      setErr("Trop rapide 😉 Réessaie dans un instant.");
      return;
    }
    if (now - lastSubmitAt.current < 10000) {
      setErr("Patiente quelques secondes avant une nouvelle tentative.");
      return;
    }
    lastSubmitAt.current = now;

    try {
      setLoading(true);
      const normalized = email.trim().toLowerCase();

      // récupère le ref depuis la prop OU depuis l’URL courante
      const urlRef =
        referrer ??
        (typeof location !== "undefined"
          ? new URLSearchParams(location.search).get("ref") || undefined
          : undefined);

      const base = typeof location !== "undefined" ? location.origin : "";
      const url = new URL("/waitlist/confirm", base);
      if (urlRef) url.searchParams.set("ref", urlRef);

      try {
        localStorage.setItem("sidetick:lastEmail", normalized);
      } catch {}

      const { error } = await sb.auth.signInWithOtp({
        email: normalized,
        options: { emailRedirectTo: url.toString() },
      });
      if (error) throw error;

      setOk("Vérifie ta boîte mail pour confirmer ton inscription ✉️");
      setEmail("");
      setConsent(false);
    } catch (e: any) {
      setErr(e?.message || "Oups, ça a coupé. Réessaie dans un instant.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
    >
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-semibold text-white/85"
      >
        Ton email
      </label>

      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-2xl px-4 py-3 text-black outline-none focus:ring-2 focus:ring-sidetick-orange/60"
        placeholder="ton.email@exemple.com"
        required
      />

      {/* Honeypot */}
      <input
        ref={honeypot}
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mt-3 flex items-start gap-2">
        <input
          id="consent"
          type="checkbox"
          checked={consent}
          onChange={() => setConsent((v) => !v)}
          className="mt-1"
        />
        {/* ✅ leading-snug : ici, sur le label de la checkbox */}
        <label htmlFor="consent" className="text-sm text-white/80 leading-snug">
          J’accepte de recevoir les infos de lancement.
        </label>
      </div>

      <button disabled={loading} className="btn mt-4 w-full">
        {loading ? "Envoi..." : "Rejoindre la Side"}
      </button>

      <p className="mt-3 text-xs text-white/70">
        Aucun spam. Désinscription en 1 clic.
      </p>

      {ok && <p className="mt-3 text-green-300 text-sm">{ok}</p>}
      {err && <p className="mt-3 text-red-300 text-sm">{err}</p>}
    </form>
  );
}
