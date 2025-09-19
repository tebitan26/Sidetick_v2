"use client";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function SocialWaitlistButtons() {
  const supabase = supabaseBrowser();

  async function joinGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback?flow=waitlist` },
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={joinGoogle}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90"
      >
        {/* Icône Google inline */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path fill="#EA4335" d="M12 10.2v3.8h5.4c-.2 1.3-1.6 3.7-5.4 3.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.7 3 14.5 2 12 2 6.9 2 2.8 6.1 2.8 11.2S6.9 20.4 12 20.4c6.9 0 9.6-4.8 9.6-7.3 0-.5-.1-.9-.2-1.3H12z"/>
        </svg>
        Rejoindre la waitlist avec Google
      </button>
      {/* Quand tu auras Apple, on ajoutera un second bouton ici */}
    </div>
  );
}
