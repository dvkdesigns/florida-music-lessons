// src/app/instruments/page.js
import Image from "next/image";

export const metadata = {
  title: "Instruments We Teach | Florida Music Lessons",
  description:
    "Explore the wide range of instruments we teach, from guitar and piano to drums, bass, and more.",
};

export default function InstrumentsPage() {
  const instruments = [
    {
      name: "Guitar",
      description:
        "Electric, acoustic, and classical guitar lessons for beginners to advanced players, covering technique, theory, and performance.",
      image: "/images/instruments/guitar.jpg",
    },
    {
      name: "Piano",
      description:
        "Learn classical, pop, jazz, or contemporary piano with a strong foundation in reading music, chords, and improvisation.",
      image: "/images/instruments/piano.jpg",
    },
    {
      name: "Bass",
      description:
        "From funk to rock to jazz, learn bass techniques, grooves, and music theory to lock in with any band.",
      image: "/images/instruments/bass.jpg",
    },
    {
      name: "Drums",
      description:
        "Master rhythm, coordination, and dynamic control with drum lessons for all ages and styles.",
      image: "/images/instruments/drums.jpg",
    },
    {
      name: "Voice",
      description:
        "Learn vocal technique, breath control, range expansion, and performance skills for any genre.",
      image: "/images/instruments/voice.jpg",
    },
    {
      name: "Ukulele",
      description:
        "Fun and beginner-friendly ukulele lessons for kids, adults, and anyone who loves tropical sounds.",
      image: "/images/instruments/ukulele.jpg",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Instruments We Teach</h1>
      <p className="text-lg text-gray-700 mb-10">
        We offer lessons for a variety of instruments and skill levels. Whether
        you&rsquo;re starting fresh or looking to refine your abilities, our
        teachers can guide you every step of the way.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {instruments.map((instrument, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {instrument.image && (
              <div className="w-full h-56 relative">
                <Image
                  src={instrument.image}
                  alt={instrument.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  priority={idx < 3}
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{instrument.name}</h2>
              <p className="text-gray-700 mt-3">{instrument.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
