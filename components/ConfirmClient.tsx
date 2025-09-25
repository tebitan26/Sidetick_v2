// components/ConfirmClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function ConfirmClient({ referrer }: { referrer?: string | null }) {
  const sb = supabaseBrowser();
  const router = useRouter();
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        // 1) récupérer le code PKCE ajouté par Supabase à l’URL
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        if (!code) throw new Error("NO_CODE");

        // 2) échanger le code contre une session (PKCE)
        const { error: exErr } = await sb.auth.exchangeCodeForSession({ code });
        if (exErr) throw exErr;

        // 3) récupérer l’email connecté
        const { data } = await sb.auth.getUser();
        const email = data.user?.email;
        if (!email) throw new Error("NO_EMAIL");

        // 4) confirmer l’inscription + récupérer/attribuer mon code de parrainage
        const { data: myCode, error: rpcErr } = await sb.rpc("confirm_waitlist", {
          p_email: email,
          p_referrer: referrer || null,
        });
        if (rpcErr) throw rpcErr;

        // 5) on ne garde PAS la session (pas de “login” sur le site)
        await sb.auth.signOut();

        const codeStr = typeof myCode === "string" ? myCode : "";
        const dest = `/thanks${codeStr ? `?me=${encodeURIComponent(codeStr)}` : ""}`;
        window.location.replace(dest);
      } catch (e) {
        console.error(e);
        setErr("La vérification a échoué. Réessaie avec ton lien ou renvoie-toi un nouveau mail.");
        router.replace("/?verify=failed");
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
