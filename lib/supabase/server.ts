// lib/supabase/server.ts
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

// Nom historique (pratique)
export function supabaseServer() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
        set() {},   // Next gère l'écriture côté middleware/route si besoin
        remove() {},// on ne les utilise pas ici
      },
    }
  );
}

// Si tu veux garder l'ancien nom aussi :
