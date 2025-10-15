"use client";

import Image from "next/image";
import Link from "next/link";

export default function Instruments() {
  return (
    <section className="bg-white pb-12 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 sm:items-center sm:flex-row sm:justify-center sm:gap-2 sm:gap-x-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-bold mt-2">Guitar Lessons</h2>

          <Link href="/" passHref>
            <Image
              className="dark:invert"
              src="/images/electric.png"
              alt="Electric Guitar"
              width={350}
              height={38}
              priority
            />
          </Link>

          <p className="text-gray-600 max-w-sm">
            Learn rock, blues, and metal techniques with our expert teachers.
            Click the image to explore electric guitar lessons.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-bold mt-2">Bass Lessons</h2>

          <Link href="#" passHref>
            <Image
              className="dark:invert"
              src="/images/bass.png"
              alt="Electric Guitar"
              width={350}
              height={38}
              priority
            />
          </Link>

          <p className="text-gray-600 max-w-sm">
            Learn rock, blues, and metal techniques with our expert teachers.
            Click the image to explore electric guitar lessons.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-bold mt-2">Piano Lessons</h2>

          <Link href="/" passHref>
            <Image
              className="dark:invert"
              src="/images/piano-2.png"
              alt="Electric Guitar"
              width={350}
              height={38}
              priority
            />
          </Link>

          <p className="text-gray-600 max-w-sm">
            Learn rock, blues, and metal techniques with our expert teachers.
            Click the image to explore electric guitar lessons.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:items-center sm:flex-row sm:justify-center sm:gap-2 sm:gap-x-4 m-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-bold mt-2">Voice Lessons</h2>

          <Link href="/" passHref>
            <Image
              className="dark:invert"
              src="/images/voice.png"
              alt="Electric Guitar"
              width={350}
              height={38}
              priority
            />
          </Link>

          <p className="text-gray-600 max-w-sm">
            Learn rock, blues, and metal techniques with our expert teachers.
            Click the image to explore electric guitar lessons.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold mt-2">Drum Lessons</h2>

            <Link href="/" passHref>
              <Image
                className="dark:invert"
                src="/images/drums.png"
                alt="Electric Guitar"
                width={350}
                height={38}
                priority
              />
            </Link>

            <p className="text-gray-600 max-w-sm">
              Learn rock, blues, and metal techniques with our expert teachers.
              Click the image to explore electric guitar lessons.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold mt-2">Group Classes</h2>

            <Link href="/" passHref>
              <Image
                className="dark:invert"
                src="/images/drums.png"
                alt="Electric Guitar"
                width={350}
                height={38}
                priority
              />
            </Link>

            <p className="text-gray-600 max-w-sm">
              Learn rock, blues, and metal techniques with our expert teachers.
              Click the image to explore electric guitar lessons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
