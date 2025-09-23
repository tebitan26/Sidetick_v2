
import EmailAuth from "./EmailAuth";

export default function AuthSection() {
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur">
      <h2 className="text-lg font-semibold">Connexion</h2>
      <p className="mt-1 text-sm text-white/70">
        Choisissez une méthode pour vous connecter à Sidetick.
      </p>
      <div className="mt-4 grid gap-4">
        <SocialButtons />
        <div className="h-px bg-white/10" />
        <EmailAuth />
      </div>
    </div>
  );
}
