import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sidetick.app";
  const now = new Date().toISOString();

  const routes = [
    "", "features", "about", "blog", "faq",
    "legal-mentions", "privacy", "terms", "accessibilite"
  ];

  return routes.map((r) => ({
    url: `${base}/${r}`,
    lastModified: now,
    changeFrequency: r ? "weekly" : "daily",
    priority: r ? 0.6 : 1,
  }));
}
