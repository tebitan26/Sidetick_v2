# Sidetick – Vitrine (Next.js 14 + Tailwind + Supabase)
- Hero allégé + CTA + compteur
- Section **Ultra Fan & Récompenses**
- Blog Markdown (SSG) + JSON-LD Article
- Waitlist Supabase (insert + anti-spam) + compteur
- SEO : robots, sitemap, OG
- /thanks + partage

## Démarrage
npm i
cp .env.example .env.local   # ajoute NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev

## Supabase SQL
create extension if not exists "pgcrypto";
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  source text default 'website',
  referer text,
  consent boolean default false,
  created_at timestamptz default now()
);
alter table public.waitlist enable row level security;
create policy "waitlist_select_count_public" on public.waitlist for select to anon using (true);
create policy "waitlist_insert_public" on public.waitlist for insert to anon with check (true);
