import type { Metadata } from "next";
import { bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "spray foam insurance company",
    "spray foam insurance provider",
    "best spray foam insurer",
    "spray foam GL company",
    "spray foam direct insurer",
    "spray foam insurance policy",
    "spray foam contractor coverage company",
    "spray polyurethane foam insurer",
    "spray foam admitted carrier",
    "spray foam workers comp company",
    "spray foam pollution liability company",
    "spray foam same day certificate",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Direct spray foam insurance — GL, off-ratio coverage, contractor pollution liability, workers' comp, commercial auto, tools and equipment, umbrella, and bonds. A-rated carriers. Same-day certificates. All 50 states.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — spray foam contractor coverage` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Direct spray foam insurance. GL, off-ratio coverage, contractor pollution liability, workers' comp, commercial auto, tools and equipment, umbrella, and bonds. Same-day certificates.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Spray Foam General Liability Insurance",
      "Off-Ratio Spray Foam Coverage",
      "Contractor Pollution Liability for Spray Foam",
      "Workers' Compensation for Spray Foam Crews",
      "Commercial Auto for Spray Foam Contractors",
      "Tools and Equipment Insurance for Spray Foam",
      "Commercial Umbrella for Spray Foam Contractors",
      "Contractor Bonds for Spray Foam Businesses",
    ],
  };

  return (
    <html lang="en" className={bodyFont.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
