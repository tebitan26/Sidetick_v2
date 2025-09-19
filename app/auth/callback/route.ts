// app/auth/callback/route.ts
import { NextResponse, NextRequest } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const flow = url.searchParams.get("flow") || "waitlist";
  const supabase = createSupabaseServer();

  // 1) Échange le code OAuth contre une session (pose les cookies)
  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(`${url.origin}/waitlist/error?m=${encodeURIComponent(error.message)}`);
    }
  }

  // 2) Récupère l'utilisateur (email)
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user?.email) {
    return NextResponse.redirect(`${url.origin}/waitlist/error?m=${encodeURIComponent(userError?.message || "Aucun email")}`);
  }

  // 3) Insère / met à jour dans la waitlist
  const email = user.email.toLowerCase();
  const { error: insertError } = await supabase
    .from("waitlist")
    .upsert({ email, context: flow }, { onConflict: "email" });

  // 4) Déconnexion immédiate (pas de session persistante)
  await supabase.auth.signOut();

  if (insertError) {
    return NextResponse.redirect(`${url.origin}/waitlist/error?m=${encodeURIComponent(insertError.message)}`);
  }

  // 5) Succès
  return NextResponse.redirect(`${url.origin}/waitlist/success`);
}
