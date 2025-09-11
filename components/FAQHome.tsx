"use client";
import Link from "next/link";
import { topFAQs } from "@/lib/faqs";

export default function FAQHome() {
  return (
    <section className="mt-10">
      <h3 className="text-xl font-bold">FAQ — l’essentiel</h3>
      <div className="mt-4 space-y-3">
        {topFAQs.map((item, i) => (
          <details key={i} className="card p-4">
            <summary className="cursor-pointer font-semibold">{item.q}</summary>
            <p className="mt-2 text-white/80">{item.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link href="/faq" className="underline">Voir toutes les questions</Link>
      </div>
    </section>
  );
}
