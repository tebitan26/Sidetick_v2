// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog Sidetick — billets, revente officielle & anti-fraude",
  description:
    "Actus et guides sur la billetterie sécurisée, la revente officielle, la lutte anti-fraude, l’expérience fan, QR & NFC.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="section section-alt">
      <div className="container">
        {/* HERO */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold">Blog</h1>
          <p className="mt-3 text-white/80 max-w-prose">
            Guides pratiques, coulisses produit, sécurité (QR & NFC), revente officielle et stratégie fans.
          </p>
        </div>

        {/* LISTE */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={p.cover || "/blog/placeholder.jpg"} // crée /public/blog/placeholder.jpg
                  alt={p.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              <div className="p-5 flex flex-col gap-2">
                <div className="text-xs text-white/60">
                  {fmtDate(p.date)}
                </div>

                <h2 className="text-lg md:text-xl font-bold leading-tight">
                  <Link className="hover:underline" href={`/blog/${p.slug}`}>
                    {p.title}
                  </Link>
                </h2>

                {p.excerpt && <p className="text-sm text-white/80 line-clamp-3">{p.excerpt}</p>}

                {/* Badges tags si présents */}
                {Array.isArray(p.tags) && p.tags.length > 0 && (
                  <div className="mt-1 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t: string) => (
                      <span key={t} className="text-xs rounded-full bg-white/10 px-2 py-1">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-2 pt-2">
                  <Link className="underline text-sm" href={`/blog/${p.slug}`}>Lire →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SEO invisible : liste des titres (keywords) */}
        <ul className="sr-only">
          {posts.map((p) => (
            <li key={p.slug}>{p.title} — {p.excerpt || ""}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function fmtDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  } catch { return ""; }
}
