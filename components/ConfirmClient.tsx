// components/ConfirmClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

type RpcOk =
  | { already: boolean; my_code: string | null }          // if function RETURNS TABLE
  | string                                                // if function returns just the code
  | null;

export default function ConfirmClient({ referrer }: { referrer?: string | null }) {
  const sb = supabaseBrowser();
  const router = useRouter();
  const qs = useSearchParams();
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        // 1) Convertit le ?code= du magic-link en session
        const url = typeof window !== "undefined" ? window.location.href : "";
        const { error: exErr } = await sb.auth.exchangeCodeForSession(url);
        if (exErr) throw exErr;

        // 2) Récupère l’email de l’utilisateur une fois la session créée
        const { data: userData, error: uErr } = await sb.auth.getUser();
        if (uErr) throw uErr;
        const email = userData.user?.email;
        if (!email) throw new Error("NO_EMAIL");

        // 3) Confirme l’inscription + récupère le code de parrainage
        //    (accepte les 2 signatures de retour possibles)
        const { data: rpcRaw, error: rpcErr } = await sb.rpc("confirm_waitlist", {
          p_email: email,
          p_referrer: referrer || qs.get("ref") || null,
        });
        if (rpcErr) throw rpcErr;

        let already = false;
        let myCode = "";

        if (rpcRaw && typeof rpcRaw === "object" && "already" in (rpcRaw as any)) {
          const r = rpcRaw as { already: boolean; my_code: string | null };
          already = !!r.already;
          myCode = r.my_code ?? "";
        } else if (typeof rpcRaw === "string") {
          myCode = rpcRaw;
        }

        // 4) On ne garde pas la session ouverte : on tente un signOut (sans bloquer)
        try { await sb.auth.signOut(); } catch {}

        // 5) Redirection vers la page de remerciement
        const dest = `/thanks${myCode ? `?me=${encodeURIComponent(myCode)}&status=${already ? "already" : "new"}` : ""}`;
        if (typeof window !== "undefined") {
          window.location.replace(dest);
        } else {
          router.replace(dest);
        }
      } catch (e) {
        console.error("[ConfirmClient] error:", e);
        setErr("La vérification a échoué. Réessaie avec ton lien ou demande un nouveau mail.");
        // On ne renvoie plus vers /?verify=failed pour éviter la confusion
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [referrer]);

  return err ? (
    <p className="mt-4 text-red-300">{err}</p>
  ) : (
    <p className="mt-4 text-white/60">Ça prend 1 seconde…</p>
  );
}
