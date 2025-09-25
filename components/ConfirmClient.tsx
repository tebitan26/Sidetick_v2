"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function ConfirmClient({ referrer }: { referrer?: string | null }) {
  const sb = supabaseBrowser();
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        // 1) Échanger le ?code= de l’URL contre une session
        const { error: exErr } = await sb.auth.exchangeCodeForSession(window.location.href);
        if (exErr) throw exErr;

        // 2) Récupérer l'email maintenant que la session est créée
        const { data: { user }, error: uErr } = await sb.auth.getUser();
        if (uErr) throw uErr;
        const email = user?.email;
        if (!email) throw new Error("NO_EMAIL");

        // 3) RPC : insert / déjà inscrit / compteur
        const { data, error: rpcErr } = await sb.rpc("confirm_waitlist", {
          p_email: email,
          p_referrer: referrer || null,
        });
        if (rpcErr) throw rpcErr;

        const refCode   = (data && data.ref_code) || "";
        const already   = !!(data && data.already);
        const referrals = Number((data && data.referrals) ?? 0);

        // 4) Déconnexion (on ne veut pas de session persistée sur le site vitrine)
        await sb.auth.signOut();

        // 5) Redirection vers /thanks avec infos
        const qs = new URLSearchParams();
        if (refCode) qs.set("me", refCode);
        qs.set("status", already ? "already" : "ok");
        qs.set("count", String(referrals));

        window.location.replace(`/thanks?${qs.toString()}`);
      } catch (e) {
        console.error(e);
        setErr("La vérification a échoué.");
        window.location.replace("/?verify=failed");
      }
    })();
  }, [referrer, sb]);

  return err ? (
    <p className="mt-4 text-red-300">{err}</p>
  ) : (
    <p className="mt-4 text-white/60">Ça prend 1 seconde…</p>
  );
}
