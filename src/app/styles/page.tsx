// src/app/styles/page.js
import Image from "next/image";

export const metadata = {
  title: "Music Styles We Teach | Florida Music Lessons",
  description:
    "From rock and blues to jazz, pop, and classical, we teach a wide variety of music styles for all skill levels.",
};

export default function StylesPage() {
  const styles = [
    {
      name: "Rock",
      description:
        "Learn to play your favorite rock anthems with a focus on rhythm, riffs, and stage presence.",
      image: "/images/styles/rock.jpg",
    },
    {
      name: "Blues",
      description:
        "Master the 12-bar blues, expressive bends, and soulful improvisation techniques.",
      image: "/images/styles/blues.jpg",
    },
    {
      name: "Jazz",
      description:
        "Dive into jazz chords, improvisation, and complex rhythms for piano, guitar, and more.",
      image: "/images/styles/jazz.jpg",
    },
    {
      name: "Pop",
      description:
        "Learn modern pop songs, chord progressions, and performance skills for voice or instruments.",
      image: "/images/styles/pop.jpg",
    },
    {
      name: "Classical",
      description:
        "Build strong fundamentals with sight-reading, technique, and classical repertoire.",
      image: "/images/styles/classical.jpg",
    },
    {
      name: "Latin",
      description:
        "Explore lively Latin rhythms, syncopation, and traditional instruments.",
      image: "/images/styles/latin.jpg",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Music Styles We Teach</h1>
      <p className="text-lg text-gray-700 mb-10">
        We offer instruction in a variety of styles, so you can learn the music
        you love while building strong technical skills.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {styles.map((style, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {style.image && (
              <div className="w-full h-56 relative">
                <Image
                  src={style.image}
                  alt={style.name}
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
              <h2 className="text-2xl font-semibold">{style.name}</h2>
              <p className="text-gray-700 mt-3">{style.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
