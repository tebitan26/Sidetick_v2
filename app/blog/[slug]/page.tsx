import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import JSONLD from "@/components/JSONLD";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const p = getPostBySlug(params.slug);
    return {
      title: `${p.title} — Blog Sidetick`,
      description: p.excerpt || "Article du blog Sidetick.",
      openGraph: {
        title: p.title,
        description: p.excerpt || "Article du blog Sidetick.",
        url: `https://www.sidetick.app/blog/${p.slug}`,
        type: "article",
        images: [{ url: p.cover ?? "/og/og-default.jpg", width: 1200, height: 630 }]
      },
      twitter: {
        card: "summary_large_image",
        title: p.title,
        description: p.excerpt || "Article du blog Sidetick.",
        images: [p.cover ?? "/og/og-default.jpg"]
      }
    };
  } catch {
    return {};
  }
}

export default function BlogPostPage({ params }: Params) {
  let post;
  try { post = getPostBySlug(params.slug); } catch { return notFound(); }

  const jsonld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    image: post.cover ?? "/og/og-default.jpg",
    author: { "@type": "Organization", name: "Sidetick" },
    publisher: { "@type": "Organization", name: "Sidetick" },
    mainEntityOfPage: `https://www.sidetick.app/blog/${post.slug}`,
    description: post.excerpt || ""
  };

  return (
    <div className="section">
      <div className="container">
        <p className="text-white/60 text-sm">
          {new Date(post.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-1">{post.title}</h1>

        <article className="prose prose-invert max-w-none mt-6"
                 dangerouslySetInnerHTML={{ __html: post.html }} />

        <JSONLD data={jsonld} />
      </div>
    </div>
  );
}
