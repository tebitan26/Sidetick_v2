import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const host = "https://www.sidetick.app";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin"],
    },
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
