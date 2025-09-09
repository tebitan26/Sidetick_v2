import fs from "fs";import path from "path";import matter from "gray-matter";import { marked } from "marked";import JSONLD from "@/components/JSONLD";
type Params={params:{slug:string}};
export default function Article({params}:Params){
  const file=path.join(process.cwd(),"content/blog",`${params.slug}.md`);
  const raw=fs.readFileSync(file,"utf-8");const {data,content}=matter(raw);const html=marked.parse(content);
  const jsonld={"@context":"https://schema.org","@type":"Article","headline":data.title,"description":data.description,"datePublished":data.date,"author":{"@type":"Organization","name":"Sidetick"}};
  return(<article className="prose prose-invert max-w-prose mx-auto section">
    <JSONLD data={jsonld}/><h1>{data.title}</h1><p className="text-white/70">{data.description}</p>
    <div className="mt-6" dangerouslySetInnerHTML={{__html:html}}/>
  </article>);
}
export function generateStaticParams(){
  const dir=path.join(process.cwd(),"content/blog");const files=fs.existsSync(dir)?fs.readdirSync(dir).filter(f=>f.endsWith(".md")):[];
  return files.map(f=>({slug:f.replace(/\.md$/,"")}));
}
