"use server";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function subscribeNewsletter(formData: FormData) {
  const email = String(formData.get("email") || "").trim().toLowerCase();
  if (!email || !email.includes("@")) return { ok: false, error: "Email invalide" };

  const supabase = createSupabaseServer();
  const { error } = await supabase.from("newsletter").insert({ email, source: "footer" });
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
