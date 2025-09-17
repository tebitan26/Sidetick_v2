"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("subscribers").insert([{ email }]);
    if (error) {
      setMessage("❌ Erreur : cet email existe déjà ou est invalide.");
    } else {
      setMessage("✅ Merci, votre email a bien été enregistré !");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre email"
        className="px-4 py-2 rounded-lg text-black"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-orange-500 text-white font-semibold"
      >
        S’inscrire
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
      <small className="text-xs text-white/70">
        En vous inscrivant, vous acceptez de recevoir nos actualités. Vous pouvez vous désabonner à tout moment.
      </small>
    </form>
  );
}
