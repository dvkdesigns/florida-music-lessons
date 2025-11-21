"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-white max-w-6xl mx-auto mb-5">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Side: Text */}
        <div className="md:w-2/3 pl-4 pt-5">
          <h1 className="text-4xl font-bold mb-4">
            <small className="text-orange-600">Welcome To</small>
            <br /> Florida Music Lessons
          </h1>
          <h2 className="text-xl text-gray-700 mb-4">
            Private, Group & Community Music Experiences in Coral Springs
          </h2>
          <p className="text-gray-600 mb-5">
            At Florida Music Lessons, we make music learning exciting, social,
            and deeply rewarding. From private lessons to live events and
            creative workshops, our studio is a place where students of all ages
            can play, connect, and grow together through the power of music.
          </p>

          <p>
            From beginners discovering their first chord to advanced players
            ready to hit the stage, our goal is to make every student feel
            inspired, supported, and part of a thriving local music community.
            <br />
            <br />
            <strong>Start your Journey From Sunshine to Stage Lights</strong>
          </p>
          <div className="mt-6">
            <a href="/booking">
              <Button className="px-8 py-2.5 text-white cursor-pointer bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg px-15 py-10 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Book Your First Lesson
              </Button>
            </a>
          </div>

          {/* Google Reviews Carousel
          <div className="mt-8 visible">
            <GoogleReviewsCarousel reviews={reviews} />
          </div> */}
        </div>
        {/* Right Side: Floating Image */}
        <div className="md:w-1/3 relative md:mt-0">
          <Card className="shadow-none bg-transparent p-0 m-0 border-0">
            <CardContent className="flex items-end px-0 justify-items-end">
              <div className="relative w-full h-115 md:h-115 ">
                <Image
                  src="/images/hero.jpg"
                  alt="Floating isolated graphic"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
