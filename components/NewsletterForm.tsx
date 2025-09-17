"use client";
import { useState } from "react";
import { subscribeNewsletter } from "@/app/actions/newsletter";

export default function NewsletterForm() {
  const [msg, setMsg] = useState<string | null>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget as HTMLFormElement);
        const res = await subscribeNewsletter(fd);
        setMsg(res.ok ? "Merci ! Vous êtes inscrit·e." : res.error || "Erreur");
        if (res.ok) (e.currentTarget as HTMLFormElement).reset();
      }}
      className="flex gap-2"
    >
      <input name="email" type="email" required placeholder="Votre email"
        className="rounded-xl px-4 py-2 bg-white/10 text-white placeholder-white/60" />
      <button className="rounded-xl bg-white/15 px-4 py-2 hover:bg-white/25">S’inscrire</button>
      {msg && <p className="text-sm text-white/80 ml-3">{msg}</p>}
    </form>
  );
}
