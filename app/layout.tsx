import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { company } from "./site-data";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const title =
  "Baixo Grau Refrigeração | Refrigeração e Climatização em Manaus";
const description =
  "Serviços de instalação, manutenção, limpeza e reparo de equipamentos de refrigeração em Manaus. Fale com a Baixo Grau Refrigeração pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(company.canonicalUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: company.displayName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/baixo-grau-logo.jpeg",
        width: 1254,
        height: 625,
        alt: "Baixo Grau Refrigeração e Climatização",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: company.displayName,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  areaServed: "Manaus - AM",
  telephone: `+${company.whatsappIntl}`,
  openingHours: "Mo-Su 08:00-20:00",
  url: company.canonicalUrl,
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        {children}
      </body>
    </html>
  );
}
