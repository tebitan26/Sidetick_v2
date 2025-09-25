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
        // 1) Échanger le ?code= de l’URL contre une session
        const { error: exErr } = await sb.auth.exchangeCodeForSession(window.location.href);
        if (exErr) throw exErr;

        // 2) Récupérer l'email maintenant que la session est créée
        const { data } = await sb.auth.getUser();
        const email = data.user?.email;
        if (!email) throw new Error("NO_EMAIL");

        // 3) Confirmer l'inscription et récupérer MON code de parrainage
        const { data: myCode, error: rpcErr } = await sb.rpc("confirm_waitlist", {
          p_email: email,
          p_referrer: referrer || null,
        });
        if (rpcErr) throw rpcErr;

        // 4) On ne “connecte” personne : on se déconnecte puis on redirige
        await sb.auth.signOut();

        const code = typeof myCode === "string" && myCode.length > 0 ? myCode : "";
        const dest = `/thanks${code ? `?me=${encodeURIComponent(code)}` : ""}`;

        window.location.replace(dest);
      } catch (e) {
        console.error(e);
        setErr("La vérification a échoué.");
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
