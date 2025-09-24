import React from "react";
import FAQ from "@/components/FAQs";
import "@/components/hide-header.css";
import Script from "next/script";
import Image from "next/image";

export const metadata = {
  title:
    "Florida Music Lessons | Studio Lessons for Guitar, Piano, Drums, Voice",
  description:
    "Personalized music lessons at our Coral Springs studio (7837 W Sample Road). Guitar, piano, drums, voice and more. English and Spanish available. Book a free trial lesson today.",
  openGraph: {
    title: "Florida Music Lessons | Studio Lessons",
    description:
      "Personalized music lessons at our Coral Springs studio (7837 W Sample Road). Guitar, piano, drums, voice and more. English and Spanish available.",
    url: "https://floridamusiclessons.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Music Lessons | Studio Lessons",
    description:
      "Personalized music lessons at our Coral Springs studio (7837 W Sample Road). Guitar, piano, drums, voice and more. English and Spanish available.",
  },
};

function Hero() {
  return (
    <section id="hero" className="text-center max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        Learn Guitar, Piano, Bass, Drums & Voice in Our Coral Springs Studio
      </h1>
      <p className="text-lg mb-6">
        All lessons are held at{" "}
        <strong>7837 W Sample Road, Coral Springs, Florida</strong>. Classes
        available in <strong>English and Spanish</strong>. <br />
        <br />
        Beginner-friendly and advanced players welcome!
      </p>
    </section>
  );
}

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 gap-2 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        {/* Logo */}
        <div className="flex items-center m-0 mx-auto">
          <Image
            src="/images/logo.png"
            alt="Florida Music Lessons Logo"
            width={300}
            height={80}
          />
        </div>
        <Hero />
        <FAQ />
        <Script
          src="https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9yZlBKViIsIldlYnNpdGVJRCI6Indic19kcTVKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1FodlNKeiJ9"
          strategy="afterInteractive"
        />
      </main>
    </div>
  );
}
