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
        const code = url.searchParams.get("code");

        if (!code) throw new Error("NO_CODE_IN_URL");

        // --- Backward-compatible call for older/newer supabase-js versions ---
        const authAny = sb.auth as any;
        let exErr: any | null = null;

        if (typeof authAny.exchangeCodeForSession === "function") {
          // If the SDK expects a single string argument (old API), its function length is 1
          if (authAny.exchangeCodeForSession.length === 1) {
            const { error } = await authAny.exchangeCodeForSession(code);
            exErr = error ?? null;
          } else {
            // New API: expects an object { code }
            const { error } = await authAny.exchangeCodeForSession({ code });
            exErr = error ?? null;
          }
        } else {
          throw new Error("NO_EXCHANGE_FN");
        }

        if (exErr) throw exErr;

        // 2) Fetch the now-authenticated user to get the email
        const { data } = await sb.auth.getUser();
        const email = data.user?.email;
        if (!email) throw new Error("NO_EMAIL");

        // 3) Confirm / upsert the waitlist entry + get (or create) my ref code
        const { data: myCode, error: rpcErr } = await sb.rpc("confirm_waitlist", {
          p_email: email,
          p_referrer: referrer || null,
        });
        if (rpcErr) throw rpcErr;

        // 4) We don't keep a logged-in session
        await sb.auth.signOut();

        const codeStr = typeof myCode === "string" ? myCode : "";
        const dest = `/thanks${codeStr ? `?me=${encodeURIComponent(codeStr)}` : ""}`;
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
