"use client";
import { supabaseBrowser } from "@/lib/supabase/browser";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="#EA4335" d="M12 10.2v3.8h5.4c-.2 1.3-1.6 3.7-5.4 3.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.7 3 14.5 2 12 2 6.9 2 2.8 6.1 2.8 11.2S6.9 20.4 12 20.4c6.9 0 9.6-4.8 9.6-7.3 0-.5-.1-.9-.2-1.3H12z"/>
    </svg>
  );
}
function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="currentColor" d="M16.365 2c-.94.056-2.062.67-2.72 1.453-.593.706-1.112 1.833-.915 2.892 1.053.081 2.137-.535 2.79-1.326.63-.765 1.098-1.885.845-3.019zM20.5 17.13c-.344.793-.502 1.134-.94 1.829-.61.977-1.472 2.194-2.55 2.204-.953.01-1.2-.65-2.505-.642-1.305.007-1.573.653-2.526.643-1.078-.01-1.901-1.116-2.512-2.094-1.72-2.758-1.9-5.996-.84-7.716.756-1.23 1.947-1.951 3.301-1.971 1.033-.02 2.007.7 2.525.7.518 0 1.745-.866 2.944-.738.5.021 1.913.203 2.814 1.537-2.47 1.359-2.072 4.893-.21 5.948z"/>
    </svg>
  );
}

export default function SocialButtons() {
  const supabase = supabaseBrowser();

  async function signIn(provider: "google" | "apple") {
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${location.origin}/` }, // retour Home après login
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => signIn("google")}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90"
      >
        <GoogleIcon /> Continuer avec Google
      </button>
      <button
        onClick={() => signIn("apple")}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90"
      >
        <AppleIcon /> Continuer avec Apple
      </button>
    </div>
  );
}
