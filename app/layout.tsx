// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JSONLD from "@/components/JSONLD";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Analytics } from "@vercel/analytics/next";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-mont",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sidetick.app"),

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
        url: "/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Sidetick – billetterie en ligne sécurisée & anti-fraude",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sidetick – Billetterie sécurisée nouvelle génération",
    description:
      "Achetez et revendez vos billets en toute sécurité. You bring the vibe, we bring the ticket!",
    images: ["/og/og-default.jpg"],
  },

  icons: {
    icon: [
      { url: "/og/logo-black.png", media: "(prefers-color-scheme: light)" },
      { url: "/og/logo-white.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/og/logo-black.png",
  },

  robots: { index: true, follow: true },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD Organization (rendu dans le body via le composant JSONLD)
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sidetick",
    url: "https://www.sidetick.app",
    logo: "https://www.sidetick.app/logo-white.png",
    sameAs: [
      "https://www.instagram.com/sidetick.app/",
      "https://x.com/sidetick_app",
      "https://www.linkedin.com/company/sidetick-app",
    ],
  };

  return (
    <html lang="fr" className={`${mont.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JSONLD data={org} />
        <RevealOnScroll />
      </body>
    </html>
  );
}
