import { faqsByCategory } from "@/lib/faqs";

export const metadata = {
  title: "FAQ Sidetick — questions fréquentes",
  description: "Tout savoir sur l’achat, la revente officielle, les paiements et la sécurité.",
};

export default function FAQPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-extrabold">FAQ</h1>
        <p className="mt-3 text-white/80 max-w-prose">
          Les réponses rapides aux questions les plus fréquentes.
        </p>

        {faqsByCategory.map((cat) => (
          <section key={cat.slug} className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold">{cat.title}</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {cat.items.map((item, i) => (
                <details key={i} className="card p-5">
                  <summary className="cursor-pointer font-semibold">{item.q}</summary>
                  <p className="mt-2 text-white/80">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
