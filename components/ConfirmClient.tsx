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
      const u = new URL(url);

      const code = u.searchParams.get("code");
      const tokenHash = u.searchParams.get("token_hash");

      // tokens éventuels en hash (#access_token=...&refresh_token=...)
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      const hashParams = new URLSearchParams(hash.startsWith("#") ? hash.slice(1) : hash);
      const accessToken = hashParams.get("access_token");
      const refreshToken = hashParams.get("refresh_token");

      // 1) Si on a un code (PKCE / OAuth) → échange
      if (code) {
        const { error: exErr } = await sb.auth.exchangeCodeForSession(url);
        if (exErr) throw exErr;
      }
      // 2) Sinon, si on a un token_hash (vérif magiclink “hash”) → vérifie
      else if (tokenHash) {
        const { error: vErr } = await sb.auth.verifyOtp({ type: "magiclink", token_hash: tokenHash });
        if (vErr) throw vErr;
      }
      // 3) Sinon, si on a des tokens en hash (implicit flow) → setSession
      else if (accessToken && refreshToken) {
        const { error: setErr } = await sb.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
        if (setErr) throw setErr;
      }
      // 4) Sinon : tenter de lire la session (certains modes créent la session sans param)
      else {
        const { data: s } = await sb.auth.getSession();
        if (!s.session) {
          // pas de preuve d’auth dans l’URL et pas de session → message clair
          setErr(
            "Ouvre le lien reçu par email pour confirmer ton inscription. " +
            "Si nécessaire, renvoie-toi un nouveau mail depuis le formulaire."
          );
          return;
        }
      }

      // Ici, on doit avoir une session → on lit l’email
      const { data: userData, error: userErr } = await sb.auth.getUser();
      if (userErr) throw userErr;
      const email = userData.user?.email;
      if (!email) throw new Error("NO_EMAIL");

      // ref depuis props OU depuis l’URL
      const urlRef = u.searchParams.get("ref");
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
      setErr("La vérification a échoué. Réessaie avec ton lien ou renvoie-toi un nouveau mail.");
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
