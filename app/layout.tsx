// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JSONLD from "@/components/JSONLD";

const mont = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sidetick.app"),
  alternates: { canonical: "/" },

  title: "Sidetick – Billetterie sécurisée nouvelle génération",
  description:
    "Billetterie en ligne éthique et anti-fraude : achetez et revendez vos billets de concert et festival en toute sécurité (tickets blockchain).",
  keywords: [
    "billetterie en ligne",
    "billets de concert",
    "billets de festival",
    "revente de billets",
    "marché secondaire",
    "tickets blockchain",
    "anti-fraude billetterie",
    "QR dynamique",
    "marketplace billets",
    "événements live",
  ],

  openGraph: {
    title: "Sidetick – Billetterie sécurisée nouvelle génération",
    description:
      "Achetez et revendez vos billets en toute sécurité. You bring the vibe, we bring the ticket!",
    url: "https://www.sidetick.app",
    siteName: "Sidetick",
    images: [
      {
        url: "/og/og-default.jpg", // place bien public/og/og-default.jpg
        width: 1200,
        height: 630,
        alt: "Sidetick – billetterie en ligne sécurisée & anti-fraude",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sidetick – Billetterie sécurisée nouvelle génération",
    description:
      "Achetez et revendez vos billets en toute sécurité. You bring the vibe, we bring the ticket!",
    images: ["/og/og-default.jpg"],
  },

  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sidetick",
    url: "https://www.sidetick.app",
    logo: "https://www.sidetick.app/logo.png",
    sameAs: [
      "https://www.instagram.com/", // remplace par tes vrais comptes
      "https://twitter.com/",
      "https://www.linkedin.com/",
    ],
  };

  return (
    <html lang="fr" className={`${mont.className} ${inter.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JSONLD data={org} />
      </body>
    </html>
  );
}
