// lib/supabase/browser.ts
"use client";
import { createBrowserClient } from "@supabase/ssr";

// ✅ Export nommé (correspond à ton import { supabaseBrowser } ...)
export const supabaseBrowser = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
