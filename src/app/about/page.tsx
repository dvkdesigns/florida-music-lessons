// src/app/about/our-teachers/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Our Teachers | Florida Music Lessons",
  description:
    "Meet the talented and passionate music instructors who make learning fun and effective at Florida Music Lessons.",
};

export default function OurTeachersPage() {
  const teachers = [
    {
      name: "Sarah Johnson",
      instrument: "Piano & Voice",
      bio: "Sarah has over 15 years of teaching experience and a background in classical and contemporary music. She inspires students to explore their creativity while mastering solid technique.",
      image: "/images/teachers/sarah.jpg",
    },
    {
      name: "David Kim",
      instrument: "Guitar & Bass",
      bio: "David is a touring musician with a love for blues, rock, and jazz. He focuses on practical skills, improvisation, and helping students develop their own unique style.",
      image: "/images/teachers/david.jpg",
    },
    {
      name: "Maria Lopez",
      instrument: "Drums & Percussion",
      bio: "Maria has played in various bands across South Florida and specializes in rhythm training, coordination, and building strong fundamentals for drummers of all levels.",
      image: "/images/teachers/maria.jpg",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Meet Our Teachers</h1>
      <p className="text-lg text-gray-700 mb-10">
        Our instructors are passionate, experienced, and dedicated to helping
        you reach your musical goals — whether you&apos;re just starting or
        taking your skills to the next level.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={teacher.image}
              alt={teacher.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{teacher.name}</h2>
              <p className="text-indigo-600 font-medium mb-3">
                {teacher.instrument}
              </p>
              <p className="text-gray-700 text-sm">{teacher.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
