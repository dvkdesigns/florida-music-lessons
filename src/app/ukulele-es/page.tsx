"use client";

import Script from "next/script";

export default function BookingPage() {
  return (
    <>
      {/* You can’t use export const metadata in a client component.
          If you need SEO tags, add them in /app/booking/head.tsx instead. */}
      <div className="mx-auto max-w-6xl px-8 pt-5">
        <strong>Build Your Dream Guitar — With Your Own Hands! </strong>
        <p>
          Weekend Warrior (2-day workshop) – Build and take home your own custom
          built guitar. Stratocaster or Telecaster Style Body All tools and
          materials provided. No experience necessary — just passion, curiosity,
          and love for music.
          <br />
          <br />
          <strong>
            Next Session Begins: December 6th <br />
            <small>(Classes held 2pm-5pm Dec 6th, 7th)</small>
          </strong>
          <br />
          <br />
          👉 3 spots available — reserve yours today!
        </p>
      </div>
      <main className="bg-white min-h-screen">
        <style jsx global>{`
          .footer,
          main {
            display: none;
          }
        `}</style>
      </main>
      <div className="py-1">
        <Script
          src="https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9yZlBKViIsIldlYnNpdGVJRCI6Indic19kcTVKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3poUG5ZSnEifQ=="
          strategy="afterInteractive"
        />
      </div>
    </>
  );
}
