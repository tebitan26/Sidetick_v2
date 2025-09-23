"use client";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function AuthButton() {
  const supabase = supabaseBrowser();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const isEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  async function signIn() {
    setMsg(null);
    const target = email.trim().toLowerCase();

    if (!isEmail(target)) {
      setMsg("Entre un e-mail valide.");
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        email: target,
        options: { emailRedirectTo: `${location.origin}/` }, // ← OK
      });
      if (error) setMsg(error.message);
      else setMsg("Lien magique envoyé ✉️ — vérifie ta boîte mail.");
    } catch (e: any) {
      setMsg(e?.message ?? "Erreur inattendue. Réessaie.");
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      location.reload();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre e-mail"
        className="rounded-xl bg-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/30"
        autoComplete="email"
        inputMode="email"
      />
      <div className="flex gap-2">
        <button
          onClick={signIn}
          disabled={loading}
          className="rounded-xl bg-white/15 px-3 py-2 hover:bg-white/25 text-sm disabled:opacity-50"
        >
          {loading ? "Envoi…" : "Recevoir le lien"}
        </button>
        <button
          onClick={signOut}
          disabled={loading}
          className="rounded-xl bg-white/15 px-3 py-2 hover:bg-white/25 text-sm disabled:opacity-50"
        >
          Se déconnecter
        </button>
      </div>
      {msg && <p className="text-xs text-white/80">{msg}</p>}
    </div>
  );
}
