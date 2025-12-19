// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sidetick.app";
  const now = new Date().toISOString();

  const routes = [
    "", // home
    "start",
    "pros",
    "features",
    "about",
    "blog",
    "faq",
    "waitlist",
    "thanks",
    "legal-mentions",
    "privacy",
    "terms",
    "accessibilite",
  ];

  return routes.map((r) => ({
    url: `${base}/${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "daily" : "weekly",
    priority: r === "" ? 1 : r === "start" ? 0.9 : r === "pros" ? 0.8 : 0.6,
  }));
}
