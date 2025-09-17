"use client";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function AuthButton() {
  const supabase = supabaseBrowser();
  const [email, setEmail] = useState("");

  async function signIn() {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/` },
    });
    alert(error ? error.message : "Lien magique envoyé ✉️");
  }

  async function signOut() {
    await supabase.auth.signOut();
    location.reload();
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre email"
        className="rounded-xl bg-white/10 px-3 py-1.5 text-sm"
      />
      <button onClick={signIn} className="rounded-xl bg-white/15 px-3 py-1.5 hover:bg-white/25 text-sm">
        Magic link
      </button>
      <button onClick={signOut} className="rounded-xl bg-white/15 px-3 py-1.5 hover:bg-white/25 text-sm">
        Logout
      </button>
    </div>
  );
}
