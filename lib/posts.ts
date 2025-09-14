import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  date: string;            // ISO
  excerpt?: string;
  cover?: string;          // /og/xxx.jpg optionnel
  tags?: string[];
  html: string;            // contenu rendu
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getSlugs(): string[] {
  return fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith(".md"))
    .map(f => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const title = data.title ?? slug;
  const date = data.date ?? new Date().toISOString();
  const excerpt = data.excerpt ?? "";
  const cover = data.cover ?? "/og/og-default.jpg";
  const tags = Array.isArray(data.tags) ? data.tags : [];

  // rendu HTML côté serveur (typography Tailwind fera le style)
  const html = marked.parse(content) as string;

  return { slug, title, date, excerpt, cover, tags, html };
}

export function getAllPosts(): Post[] {
  return getSlugs()
    .map(getPostBySlug)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
