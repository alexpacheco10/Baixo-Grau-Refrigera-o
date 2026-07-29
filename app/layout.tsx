import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { company, faqs, services } from "./site-data";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const title =
  "Baixo Grau Refrigeração | Serviços de Refrigeração em Manaus";
const description =
  "Instalação, manutenção, limpeza e reparo de equipamentos de climatização e refrigeração em Manaus. Conheça os serviços e fale pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(company.canonicalUrl),
  title,
  description,
  applicationName: company.displayName,
  authors: [{ name: company.displayName }],
  creator: company.displayName,
  publisher: company.displayName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/baixo-grau-logo.jpeg",
        alt: "Baixo Grau Refrigeração e Climatização",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#096bb8",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${company.canonicalUrl}/#localbusiness`,
  name: company.displayName,
  description,
  url: company.canonicalUrl,
  telephone: `+${company.whatsappIntl}`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${company.whatsappIntl}`,
    contactType: "customer service",
    areaServed: "BR-AM",
    availableLanguage: "pt-BR",
  },
  areaServed: {
    "@type": "City",
    name: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  openingHours: "Mo-Su 08:00-20:00",
  priceRange: "$$",
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      areaServed: "Manaus - AM",
      provider: {
        "@id": `${company.canonicalUrl}/#localbusiness`,
      },
    },
  })),
};

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${company.canonicalUrl}/#website`,
  name: company.displayName,
  url: company.canonicalUrl,
  inLanguage: "pt-BR",
};

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${company.canonicalUrl}/#webpage`,
  url: company.canonicalUrl,
  name: title,
  description,
  isPartOf: {
    "@id": `${company.canonicalUrl}/#website`,
  },
  about: {
    "@id": `${company.canonicalUrl}/#localbusiness`,
  },
  inLanguage: "pt-BR",
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusiness, webSite, webPage, faqPage]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
