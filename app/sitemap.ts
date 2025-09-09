export default async function sitemap(){
  const base="https://sidetick.app";
  const routes=["","/features","/about","/blog","/thanks"].map(p=>({url:base+p,lastModified:new Date().toISOString()}));
  return routes;
}
