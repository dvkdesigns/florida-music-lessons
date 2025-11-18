"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Instruments() {
  return (
    <section className="bg-white  max-w-6xl mx-auto mt-10">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Side: Text */}
        <div className="md:w-2/3 pr-4">
          <section className="">
            <h2 className="text-2xl font-semibold text-white bg-orange-600 py-2 px-4 mb-5 ">
              Beyond Lessons — The Full Florida Music Experience:
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <strong>Workshops</strong> &mdash; Songwriting, recording, music
                theory, performance, and band-building.
              </div>
              <div>
                <strong>Drum Circles &amp; Rhythm Jams</strong> &mdash;
                Family-friendly group sessions that bring everyone together.
              </div>
              <div>
                <strong>Group Classes &amp; Student Socials</strong> &mdash;
                Learn, collaborate, and make new friends.
              </div>
              <div>
                <strong>Live Gigs &amp; Showcases</strong> &mdash; Perform at
                local venues and studio events with full backline support.
              </div>
              <div>
                <strong>Instrument Maintenance &amp; Repair</strong> &mdash;
                Keep your guitars, drums, and keyboards in top condition.
              </div>
              <div>
                <strong>Luthier &amp; DIY Workshops</strong> &mdash; Build,
                customize, or repair your own instrument under expert guidance.
              </div>
              <div>
                <strong>Recording &amp; Production Sessions</strong> &mdash;
                Capture your progress, make demos, or record original music.
              </div>
            </div>
          </section>
        </div>
        {/* Right Side: Floating Image */}
        <div className="md:w-1/3 relative md:mt-0">
          <Card className="shadow-none bg-transparent p-0 m-0 h-0 border-0">
            <CardContent className="px-0 flex items-end">
              <div className="relative w-full h-80  ">
                <Image
                  src="/images/drums.png"
                  alt="Floating isolated graphic"
                  fill
                  className=""
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
