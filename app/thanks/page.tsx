export const metadata = { title: "Merci – Sidetick" };
export default function Thanks(){
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const url = origin + "/?utm_source=share&utm_medium=thanks";
  return(<div className="section"><div className="container text-center">
    <h1>Bienvenue dans la vibe ✨</h1>
    <p className="mt-3">Partage Sidetick et aide-nous à bâtir une billetterie plus juste.</p>
    <div className="mt-6 flex items-center justify-center gap-3">
      <a className="btn" href="https://twitter.com/intent/tweet?text=Je%20rejoints%20la%20vibe%20Sidetick!">Partager sur X</a>
      <button className="btn" onClick={()=>navigator.clipboard.writeText(url)}>Copier le lien</button>
    </div>
  </div></div>);
}
