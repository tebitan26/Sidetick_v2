// components/FAQHomeLite.tsx
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { faqsByCategory } from "@/lib/faqs";

export default function FAQHomeLite() {
  const all = faqsByCategory.flatMap((c) => c.items);

  // Top 3 questions “home”
  const top3 = all.slice(0, 3);

  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-wide text-white/60">
        Des questions ? On te répond.
      </p>

      <h3 className="mt-2 text-2xl md:text-3xl font-extrabold">
        Rassuré en 15 secondes
      </h3>

      <div className="mt-6 grid gap-3">
        {top3.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
          >
            <summary className="flex cursor-pointer items-start justify-between gap-3 font-semibold list-none">
              <span className="leading-tight">{item.q}</span>
              <ChevronDown
                className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-5">
        <Link
          href="/faq"
          className="text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white"
        >
          Voir la FAQ complète →
        </Link>
      </div>
    </div>
  );
}
