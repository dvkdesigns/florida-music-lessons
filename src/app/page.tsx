// app/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import Hero from "@/components/HP-Hero";
import Instruments from "@/components/HP-Instruments";
import Styles from "@/components/HP-Styles";
import Pricing from "@/components/HP-Pricing";
import Contact from "@/components/HP-Contact";
import FAQs from "@/components/HP-FAQ";
import About from "@/components/HP-About";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://floridamusiclessons.com"; // ← set this env
const OG_IMAGE = `${SITE_URL}/images/og/florida-music-lessons-og.jpg`; // ← supply this image (1200×630)

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Florida Music Lessons | In-Home & Studio Lessons Across South Florida",
    template: "%s | Florida Music Lessons",
  },
  description:
    "One-on-one music lessons for guitar, piano, drums, bass, and voice. In-home or at our Coral Springs studio. Flexible scheduling, experienced teachers, and customized lesson plans.",
  keywords: [
    "music lessons",
    "guitar lessons",
    "piano lessons",
    "drum lessons",
    "voice lessons",
    "Coral Springs",
    "Parkland",
    "South Florida",
    "in-home lessons",
    "music school",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Florida Music Lessons",
    title:
      "Florida Music Lessons | In-Home & Studio Lessons Across South Florida",
    description:
      "Private guitar, piano, drums, bass, and voice lessons—your place or ours. Friendly pros. Clear goals. Faster progress.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Florida Music Lessons – in-home and studio lessons in South Florida",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle", // ← update or remove
    creator: "@yourhandle", // ← update or remove
    title:
      "Florida Music Lessons | In-Home & Studio Lessons Across South Florida",
    description:
      "Private lessons for guitar, piano, drums, bass, and voice. In-home or studio in Coral Springs.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, // ← put token in .env
    yandex: undefined,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
  category: "education",
  referrer: "origin-when-cross-origin",
  applicationName: "Florida Music Lessons",
  creator: "Florida Music Lessons",
  publisher: "Florida Music Lessons",
};

// JSON-LD helpers
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Florida Music Lessons",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  sameAs: [
    "https://www.facebook.com/floridamusiclessons",
    "https://www.instagram.com/floridamusiclessons",
    // "https://g.page/your-gmb" // add if you have it
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  name: "Florida Music Lessons",
  image: `${SITE_URL}/images/studio.jpg`,
  url: SITE_URL,
  telephone: "+1-954-000-0000", // ← update
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8357 w Sample Rd", // ← update if you list address publicly
    addressLocality: "Coral Springs",
    addressRegion: "FL",
    postalCode: "33065",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Coral Springs" },
    { "@type": "City", name: "Parkland" },
    { "@type": "City", name: "Coconut Creek" },
    { "@type": "City", name: "Boca Raton" },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Guitar Lessons" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Piano Lessons" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Drum Lessons" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Voice Lessons" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Bass Lessons" },
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  services: ["In-home lessons", "In-studio lessons", "Online lessons"],
  paymentAccepted: "Cash, Credit Card, Debit Card",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: `${SITE_URL}#pricing`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Contact",
      item: `${SITE_URL}#contact`,
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="schema-org-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="schema-org-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Script
        id="schema-org-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Page */}
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 pb-20 gap-2 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
          <Hero />
          <Instruments />
          <Styles />
          <Pricing />
          <Contact />
          <FAQs />
          <About />
        </main>
      </div>
    </>
  );
}
