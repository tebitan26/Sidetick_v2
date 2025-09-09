import fs from "fs";import path from "path";import matter from "gray-matter";import Link from "next/link";
type Post={slug:string;title:string;description:string;date:string;};
export const metadata={title:"Blog – Sidetick"};
export default function BlogPage(){
  const dir=path.join(process.cwd(),"content/blog");
  const files=fs.existsSync(dir)?fs.readdirSync(dir).filter(f=>f.endsWith(".md")):[];
  const posts:Post[]=files.map(f=>{const raw=fs.readFileSync(path.join(dir,f),"utf-8");const {data}=matter(raw);return{slug:f.replace(/\.md$/,""),title:data.title,description:data.description,date:data.date};});
  return(<div className="section"><div className="container"><h1>Blog</h1>
    <div className="mt-6 grid md:grid-cols-2 gap-6">
      {posts.map(p=>(<Link key={p.slug} href={`/blog/${p.slug}`} className="card no-underline">
        <h2 className="mb-2">{p.title}</h2><p className="text-white/80">{p.description}</p>
        <small className="muted block mt-2">{new Date(p.date).toLocaleDateString("fr-FR")}</small>
      </Link>))}
      {posts.length===0&&<p className="text-white/80">Articles en cours de rédaction.</p>}
    </div></div></div>);
}
