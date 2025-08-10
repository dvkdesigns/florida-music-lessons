// components/HPAbout.tsx
import Link from "next/link";

export default function HPAbout() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to Florida Music Lessons
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We bring in-home music education to students across Parkland, Boca
            Raton, Deerfield Beach, and Hollywood. Whether you’re learning
            guitar, bass, piano, drums, or voice, our goal is to help you play
            the music you love — while building lifelong skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              🎓{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Teachers
              </Link>
            </h3>
            <p className="text-gray-700">
              Meet our passionate instructors and explore their musical
              backgrounds and teaching styles.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              💡{" "}
              <Link href="/tips" className="text-blue-600 hover:underline">
                Tips
              </Link>
            </h3>
            <p className="text-gray-700">
              Get practical how-tos, practice tips, warm-ups, and helpful
              insights for every instrument.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              📰{" "}
              <Link href="/blog" className="text-blue-600 hover:underline">
                Blog
              </Link>
            </h3>
            <p className="text-gray-700">
              Stay inspired with music news, gear reviews, and learning
              strategies from our team and students.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              🛠️{" "}
              <Link
                href="/guitar-maintenance"
                className="text-blue-600 hover:underline"
              >
                Guitar Maintenance
              </Link>
            </h3>
            <p className="text-gray-700">
              We offer string changes, setups, minor repairs, and light custom
              work — done by experienced techs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              🎸{" "}
              <Link
                href="/custom-guitars"
                className="text-blue-600 hover:underline"
              >
                Custom Guitar Showcase
              </Link>
            </h3>
            <p className="text-gray-700">
              Explore one-of-a-kind guitars designed for tone, playability, and
              style — built by musicians, for musicians.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              🎤{" "}
              <Link href="/careers" className="text-blue-600 hover:underline">
                Careers
              </Link>
            </h3>
            <p className="text-gray-700">
              We&apos;re always looking for great instructors. Join our team and
              make a difference through music.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              🤝{" "}
              <Link href="/partners" className="text-blue-600 hover:underline">
                Partners
              </Link>
            </h3>
            <p className="text-gray-700">
              We collaborate with schools, HOAs, and community orgs. Learn how
              to partner with us and grow access to music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
