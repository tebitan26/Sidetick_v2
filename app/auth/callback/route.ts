// app/auth/callback/route.ts
import { NextResponse, NextRequest } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const flow = url.searchParams.get("flow") || "waitlist";
  const origin = url.origin;

  const supabase = createSupabaseServer();

  try {
    // 1) Échange code OAuth → session (pose les cookies)
    if (code) {
      const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
      if (exchangeError) {
        console.error("exchangeCodeForSession error:", exchangeError);
        return NextResponse.redirect(`${origin}/waitlist/error?m=${encodeURIComponent("Connexion Google refusée. Réessayez.")}`);
      }
    }

    // 2) Récupère l'utilisateur
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user?.email) {
      console.error("getUser error:", userError);
      return NextResponse.redirect(`${origin}/waitlist/error?m=${encodeURIComponent("Impossible de récupérer l’email Google.")}`);
    }

    // 3) UPSERT en base (idempotent)
    const email = user.email.toLowerCase();

    const { error: upsertError } = await supabase
      .from("waitlist")
      .upsert({ email, context: flow }, { onConflict: "email" });

    // 4) Déconnexion (on ne garde aucune session active)
    await supabase.auth.signOut();

    // Gestion d’erreurs d’UPSERT
    if (upsertError) {
      // Cas typique : RLS, type, schéma
      console.error("waitlist upsert error:", upsertError);
      // On redirige quand même sur /success si c’est un cas “déjà inscrit”
      // Si ce n'est pas un 23505 (duplicate), on envoie vers /error
      const msg = (upsertError as any)?.message || "Erreur lors de l’inscription.";
      return NextResponse.redirect(`${origin}/waitlist/error?m=${encodeURIComponent(msg)}`);
    }

    // 5) Succès
    return NextResponse.redirect(`${origin}/waitlist/success`);
  } catch (err: any) {
    console.error("Callback fatal error:", err);
    // On tente un signOut silencieux au cas où
    try { await supabase.auth.signOut(); } catch (_) {}
    return NextResponse.redirect(`${origin}/waitlist/error?m=${encodeURIComponent("Erreur inattendue. Réessayez plus tard.")}`);
  }
}
