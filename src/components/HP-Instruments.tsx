"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Instruments() {
  return (
    <section className="bg-white  max-w-6xl mx-auto ">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Right Side: Floating Image */}
        <div className="md:w-1/3 relative md:mt-0">
          <Card className="shadow-none bg-transparent p-0 m-0 h-0 border-0">
            <CardContent className="px-0 flex items-end">
              <div className="relative w-full h-60  ">
                <Image
                  src="/images/acoustic.png"
                  alt="Floating isolated graphic"
                  fill
                  className=""
                />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Left Side: Text */}
        <div className="md:w-2/3 pl-4">
          <section className="">
            <h2 className="text-2xl font-semibold text-white bg-orange-600 py-2 px-4 mb-5">
              Learn, play, and create with us:
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <strong>Guitar &amp; Bass</strong> &mdash; Learn songs you love
                and develop stage-ready confidence.
              </div>
              <div>
                <strong>Piano &amp; Keys</strong> &mdash; Explore melody,
                harmony, and improvisation across genres.
              </div>
              <div>
                <strong>Drums &amp; Percussion</strong> &mdash; Full kit, hand
                drum, and rhythm-based lessons for all skill levels.
              </div>
              <div>
                <strong>Voice</strong> &mdash; Build range, control, and
                performance presence.
              </div>
              <div>
                <strong>Mandolin, Ukulele &amp; More</strong> &mdash; Learn
                unique instruments that inspire creativity.
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
