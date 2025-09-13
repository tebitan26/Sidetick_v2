// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sidetick.app";
  const routes = [
    "", "features", "about", "blog", "faq",
    "legal-mentions", "privacy", "terms",
  ];
  const now = new Date().toISOString();

  return routes.map((p) => ({
    url: `${base}/${p}`.replace(/\/+$/,"/"),
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.6,
  }));
}
