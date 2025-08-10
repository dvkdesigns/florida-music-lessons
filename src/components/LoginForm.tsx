"use client";
import React from "react";
import Script from "next/script";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="mms-widget">
      {/* Link back to homepage */}
      <div className="text-center my-4">
        <Link href="/">
          <span className="text-blue-600 hover:underline">← Back to Home</span>
        </Link>
      </div>

      {/* Hide header style */}
      <style>{`header { display: none; }`}</style>

      {/* Widget container */}
      <div id="mms-widget"></div>

      {/* MMS Widget Script */}
      <Script
        src="https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9yZlBKViIsIldlYnNpdGVJRCI6Indic19kcTVKSyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1FUbkxKOSJ9"
        strategy="afterInteractive"
      />
    </div>
  );
}
