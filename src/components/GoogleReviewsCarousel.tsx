"use client";

import { useEffect, useState } from "react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: string; // adjust type based on your data
}

export default function GoogleReviewsCarousel({
  reviews = [],
}: {
  reviews?: Review[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (reviews.length === 0) return; // prevent interval when no reviews

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  if (reviews.length === 0) return null;

  return (
    <div className="relative w-full max-w-xl  mb-10">
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white shadow p-6 rounded-lg text-center">
            <p className="text-lg font-semibold mb-2">{review.author_name}</p>
            <p className="text-yellow-400 mb-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </p>
            <p className="text-gray-700 italic">"{review.text}"</p>
          </div>
        </div>
      ))}
    </div>
  );
}
