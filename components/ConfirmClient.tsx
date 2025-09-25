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
        const url = typeof window !== "undefined" ? window.location.href : "";
        // 🛡️ garde-fou : vérifier qu’on a bien des paramètres de magic link
        const hasCode =
          typeof window !== "undefined" &&
          (new URL(window.location.href).searchParams.get("code") ||
           new URL(window.location.href).searchParams.get("token_hash") ||
           new URL(window.location.href).searchParams.get("access_token"));

        if (!hasCode) {
          setErr(
            "Ouvre le lien reçu par email pour confirmer ton inscription. " +
            "Si besoin, renvoie-toi un nouveau mail depuis le formulaire."
          );
          return;
        }

        // 1) Échanger le code contre une session
        const { error: exErr } = await sb.auth.exchangeCodeForSession(url);
        if (exErr) throw exErr;

        // 2) Récupérer l’email
        const { data: userData, error: uErr } = await sb.auth.getUser();
        if (uErr) throw uErr;
        const email = userData.user?.email;
        if (!email) throw new Error("NO_EMAIL");

        // 3) Confirmer waitlist + récupérer le code
        const params = new URL(url).searchParams;
        const urlRef = params.get("ref");
        const { data: rpcRaw, error: rpcErr } = await sb.rpc("confirm_waitlist", {
          p_email: email,
          p_referrer: (referrer || urlRef) ?? null,
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

        try { await sb.auth.signOut(); } catch {}

        const dest = `/thanks${myCode ? `?me=${encodeURIComponent(myCode)}&status=${already ? "already" : "new"}` : ""}`;
        if (typeof window !== "undefined") window.location.replace(dest);
      } catch (e) {
        console.error("[ConfirmClient] error:", e);
        setErr("La vérification a échoué. Réessaie avec ton lien ou demande un nouveau mail.");
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
