"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import { Booking } from "@/components/Booking";

const reviews = [
  {
    author_name: "Tony Aguilar",
    rating: 5,
    text: "Fantastic lessons, Dan made it easy too understand and great insights to techniques, highly recommend!",
    time: "2025-06-01",
  },
  {
    author_name: "Omar Sanchez",
    rating: 5,
    text: "I recently had the pleasure of taking guitar lessons with Daniel, and I can't recommend him enough! He is an excellent instructor—very patient and truly knows how to teach from a musician level. Very professional and kind.",
    time: "2025-05-15",
  },
  {
    author_name: "Litza Cardoso",
    rating: 5,
    text: "Best Guitar teacher!!!",
    time: "2025-04-28",
  },
  // Add more reviews as needed
];

export default function Hero() {
  return (
    <section className="bg-white pb-12 max-w-7xl mx-auto mb-42">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Side: Text */}
        <div className="md:w-1/2 pl-4 pt-20">
          <h1 className="text-4xl font-bold mb-4">
            <small className="text-orange-600 text-sm">Welcome To</small>
            <br /> Florida Music Lessons
          </h1>
          <h2 className="text-xl text-gray-700 mb-4">
            One on One Lessons in the comfort of your home.
          </h2>
          <p className="text-gray-600">
            Learn guitar, bass, piano, voice, drums, and more with private music
            lessons right in your home. Our experienced teachers come to you,
            making it easy and comfortable to start learning today.
          </p>
          <div className="mt-6">
            <a href="/booking">
              <Button className="px-8 py-2.5 text-white cursor-pointer bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Availability
              </Button>
            </a>
          </div>
          {/* Google Reviews Carousel */}
          <div className="mt-8">
            <GoogleReviewsCarousel reviews={reviews} />
          </div>
        </div>

        {/* Right Side: Floating Image */}
        <div className="md:w-1/2 pr-4 relative md:mt-0">
          <Card className="shadow-none bg-transparent p-0 m-0 h-0 border-0">
            <CardContent className="flex items-end">
              <div className="relative w-full h-64 md:h-150">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Floating isolated graphic"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
