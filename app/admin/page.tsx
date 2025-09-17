import { createSupabaseServer } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = createSupabaseServer();

  // récupère l'utilisateur
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return (
      <div className="container py-12">
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="mt-2 text-white/80">Veuillez vous connecter.</p>
      </div>
    );
  }

  // vérifie le rôle
  const { data: profile } = await supabase
    .from("profiles")
    .select("role, full_name")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile || profile.role !== "admin") {
    return (
      <div className="container py-12">
        <h1 className="text-2xl font-bold">Accès refusé</h1>
        <p className="mt-2 text-white/80">Vous n'avez pas les droits nécessaires.</p>
      </div>
    );
  }

  // contenu admin minimal (posts + newsletter)
  const [{ data: posts }, { data: emails }] = await Promise.all([
    supabase.from("posts").select("id, title, slug, published, published_at").order("created_at", { ascending: false }),
    supabase.from("newsletter").select("email, created_at").order("created_at", { ascending: false }),
  ]);

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold">Admin — Bonjour {profile.full_name ?? "Admin"}</h1>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Posts</h2>
        <div className="mt-3 grid gap-2">
          {(posts ?? []).map((p) => (
            <div key={p.id} className="rounded-lg border border-white/10 p-3">
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-white/70">/{p.slug} — {p.published ? "Publié" : "Brouillon"}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Newsletter</h2>
        <div className="mt-3 grid gap-1">
          {(emails ?? []).map((e, i) => (
            <div key={i} className="text-sm text-white/80">{e.email} — {new Date(e.created_at).toLocaleString()}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
