"use client";

import Script from "next/script";

export default function BookingPage() {
  return (
    <>
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
          src="https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9yZlBKViIsIldlYnNpdGVJRCI6Indic19kcTVKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiXzc0QkZKQyJ9"
          strategy="afterInteractive"
        />
      </div>
    </>
  );
}
