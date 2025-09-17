"use client";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function EmailAuth() {
  const supabase = supabaseBrowser();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function sendLink(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/` },
    });
    setMsg(error ? error.message : "Lien magique envoyé ✉️");
  }

  return (
    <form onSubmit={sendLink} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre email"
        className="flex-1 rounded-xl bg-white/10 px-4 py-2 text-sm text-white placeholder-white/60"
      />
      <button className="rounded-xl bg-white/15 px-4 py-2 text-sm hover:bg-white/25">
        Recevoir le lien
      </button>
      {msg && <span className="ml-2 text-sm text-white/80">{msg}</span>}
    </form>
  );
}
