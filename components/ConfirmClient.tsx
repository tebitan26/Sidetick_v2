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
        const url = new URL(window.location.href);
        const search = url.searchParams;

        const code = search.get("code"); // OAuth/PKCE (Google/Apple/etc.)
        const tokenHash = search.get("token_hash") ?? search.get("token"); // Magic link
        const type = (search.get("type") || "").toLowerCase();

        // 1) Create a session from the link (support both link styles)
        if (code) {
          // OAuth/PKCE
          const { error } = await sb.auth.exchangeCodeForSession(code);
          if (error) throw error;
        } else if (tokenHash && (type === "magiclink" || type === "signup" || type === "invite")) {
          // Email magic link
          const { error } = await sb.auth.verifyOtp({ type: "email", token_hash: tokenHash });
          if (error) throw error;
        } else {
          throw new Error("LINK_PARAMS_MISSING");
        }

        // 2) Get the user email from the session
        const { data: userRes, error: userErr } = await sb.auth.getUser();
        if (userErr) throw userErr;
        const email = userRes.user?.email;
        if (!email) throw new Error("NO_EMAIL_FROM_SESSION");

        // 3) Confirm waitlist + ensure I have a ref code (idempotent server-side)
        const { data: myCode, error: rpcErr } = await sb.rpc("confirm_waitlist", {
          p_email: email,
          p_referrer: referrer || null,
        });
        if (rpcErr) throw rpcErr;

        // 4) We don’t keep anyone "logged in"
        await sb.auth.signOut();

        const codeStr = typeof myCode === "string" ? myCode : "";
        const dest = `/thanks${codeStr ? `?me=${encodeURIComponent(codeStr)}` : ""}`;
        window.location.replace(dest);
      } catch (e: any) {
        console.error("[ConfirmClient]", e?.message || e);
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
