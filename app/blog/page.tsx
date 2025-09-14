import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog Sidetick — billets, revente officielle & anti-fraude",
  description:
    "Actus et guides sur la billetterie sécurisée, la revente officielle, la lutte anti-fraude et l’expérience fan.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="section section-alt">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-extrabold">Blog</h1>
        <p className="mt-3 text-white/80 max-w-prose">
          Guides pratiques, coulisses produit et actualités billetterie.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {posts.map((p) => (
            <article key={p.slug} className="card p-5 flex flex-col">
              <div className="text-xs text-white/60">
                {new Date(p.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
              </div>
              <h2 className="mt-2 text-xl font-bold">
                <Link className="hover:underline" href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              {p.excerpt && <p className="mt-2 text-white/80">{p.excerpt}</p>}
              <div className="mt-auto pt-4">
                <Link className="underline" href={`/blog/${p.slug}`}>Lire →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
