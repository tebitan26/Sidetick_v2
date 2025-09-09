import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JSONLD from "@/components/JSONLD";

const mont = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
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
    "événements live"
  ],
  metadataBase: new URL("https://sidetick.app"),
  openGraph: { images: ["/og-default.svg"] },
    title: "Sidetick – Billetterie sécurisée nouvelle génération",
    description:
      "Achetez et revendez vos billets en toute sécurité. You bring the vibe, we bring the ticket!",
    url: "https://sidetick.app",
    siteName: "Sidetick",
    images: [
      {
        url: "/og-default.jpg", // TODO: remplace par ton image 1200x630
        width: 1200,
        height: 630,
        alt: "Sidetick – billetterie en ligne sécurisée & anti-fraude"
      }
    ]
  },
  twitter: { images: ["/og-default.svg"] },
    card: "summary_large_image",
    title: "Sidetick – Billetterie sécurisée nouvelle génération",
    description:
      "Achetez et revendez vos billets en toute sécurité. You bring the vibe, we bring the ticket!",
    images: ["/og-default.jpg"] // TODO: remplace par ton image 1200x630
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sidetick",
    "url": "https://sidetick.app",
    "logo": "https://sidetick.app/logo.png",
    "sameAs": [
      "https://www.instagram.com/",
      "https://twitter.com/",
      "https://www.linkedin.com/"
    ]
  };

  return (
    <html lang="fr" className={`${mont.className} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <JSONLD data={org} />
      </body>
    </html>
  );
}
