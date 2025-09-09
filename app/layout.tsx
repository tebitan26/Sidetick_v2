import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JSONLD from "@/components/JSONLD";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sidetick – Billetterie sécurisée nouvelle génération",
  description: "Billetterie en ligne éthique et anti-fraude : achetez et revendez vos billets de concert et festival en toute sécurité (tickets blockchain).",
  metadataBase: new URL("https://sidetick.app"),
  openGraph: {
    title: "Sidetick – Billetterie sécurisée nouvelle génération",
    description: "Achetez et revendez vos billets en toute sécurité. You bring the vibe, we bring the ticket!",
    url: "https://sidetick.app",
    siteName: "Sidetick",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  const org = {
    "@context":"https://schema.org","@type":"Organization",
    "name":"Sidetick","url":"https://sidetick.app",
    "logo":"https://sidetick.app/logo.png",
    "sameAs":["https://www.instagram.com/","https://twitter.com/","https://www.linkedin.com/"]
  };
  return(<html lang="fr" className={font.className}>
    <body>
      <Header/>
      <main>{children}</main>
      <Footer/>
      <JSONLD data={org}/>
    </body>
  </html>);
}
