import Link from "next/link";

export default function WorkshopsPage() {
  return (
    <>
      <section className="fml-workshops">
        <div className="fml-workshops-inner">
          {/* Workshop List */}
          <div className="fml-workshops-info">
            <h1 className="fml-workshops-title">Workshops & Special Classes</h1>
            <p className="fml-workshops-subtitle mb-5">
              Unique learning experiences designed to inspire creativity, build
              skills, and bring students together through music. <br />
              Choose a workshop below to learn more and reserve your spot.
            </p>

            <div className="fml-workshop-list">
              {/* Workshop 1 */}
              <article className="fml-workshop-card">
                <h2 className="fml-workshop-name">
                  🎶 Music History & Appreciation
                </h2>
                <p className="fml-workshop-desc">
                  Mind-blowing stories behind the music you love — discover how
                  artists, genres, and moments in history shaped today’s sound.
                  We’ll connect classic recordings, modern hits, and everything
                  in between in a fun, interactive format.
                </p>
                <p className="fml-workshop-desc">
                  Perfect for curious listeners and active musicians who want to
                  understand where the music comes from and hear songs in a
                  whole new way.
                </p>
                <Link
                  href="/workshops/music-history-appreciation"
                  className="fml-workshop-button"
                >
                  View Details &amp; Sign Up
                </Link>
              </article>

              {/* Workshop 2 */}
              <article className="fml-workshop-card">
                <h2 className="fml-workshop-name">
                  🥁 Hand-Drumming Drum Circle
                </h2>
                <p className="fml-workshop-desc">
                  A high-energy, feel-good rhythm session using djembes, bongos,
                  shakers, and group grooves. Learn basic hand-drumming
                  techniques, call-and-response patterns, and how to lock in
                  with other players.
                </p>
                <p className="fml-workshop-desc">
                  No experience required — just bring your hands and a good
                  attitude. Great for kids, teens, and adults who want a
                  stress-relieving, community-driven music experience.
                </p>
                <Link
                  href="/workshops/drum-circle"
                  className="fml-workshop-button"
                >
                  View Details &amp; Sign Up
                </Link>
              </article>

              {/* Workshop 3 */}
              <article className="fml-workshop-card">
                <h2 className="fml-workshop-name">✍️ Songwriting 101</h2>
                <p className="fml-workshop-desc">
                  Learn to write your own original song from scratch — lyrics,
                  chords, structure, and a simple demo by the end of the
                  program. We’ll break songwriting down into fun, manageable
                  steps that anyone can follow.
                </p>
                <p className="fml-workshop-desc">
                  Ideal for singers, guitarists, pianists, and anyone who’s ever
                  said, “I’ve always wanted to write a song, but don’t know
                  where to start.”
                </p>
                <Link
                  href="/workshops/songwriting-101"
                  className="fml-workshop-button"
                >
                  View Details &amp; Sign Up
                </Link>
              </article>

              {/* Workshop 4 */}
              <article className="fml-workshop-card">
                <h2 className="fml-workshop-name">
                  🎸 Jam With the Band Night
                </h2>
                <p className="fml-workshop-desc">
                  Jump on stage and play with a live group in a friendly,
                  low-pressure environment. We’ll run through popular songs,
                  teach you how to follow a band, and help you gain real-world
                  performance confidence.
                </p>
                <p className="fml-workshop-desc">
                  Great for students who are ready to move beyond the lesson
                  room and experience what it feels like to actually play in a
                  band with other musicians.
                </p>
                <Link
                  href="/workshops/jam-with-the-band-night"
                  className="fml-workshop-button"
                >
                  View Details &amp; Sign Up
                </Link>
              </article>

              {/* Workshop 5 */}
              <article className="fml-workshop-card">
                <h2 className="fml-workshop-name">
                  😍 Build-a-Guitar Workshop
                </h2>
                <p className="fml-workshop-desc">
                  Yes… you actually build your own instrument. Start with a
                  beginner-friendly kit and learn how to assemble, shape, and
                  personalize your guitar under guided supervision.
                </p>
                <p className="fml-workshop-desc">
                  We’ll walk through basic setup, hardware installation, and
                  finishing touches so you leave with a playable guitar you
                  built yourself — not just a wall decoration.
                </p>
                <Link
                  href="/workshops/build-a-guitar"
                  className="fml-workshop-button"
                >
                  View Details &amp; Sign Up
                </Link>
              </article>

              {/* Workshop 6 */}
              <article className="fml-workshop-card">
                <h2 className="fml-workshop-name">
                  🌺 Build-Your-Own Ukulele Workshop
                </h2>
                <p className="fml-workshop-desc">
                  Create your very own playable ukulele from a hands-on kit.
                  Sand it, assemble it, string it, and decorate it to match your
                  style while learning how the instrument works.
                </p>
                <p className="fml-workshop-desc">
                  A fun, approachable build project that’s perfect for kids,
                  families, and adult hobbyists. Leave with a custom uke and the
                  basics to start playing it.
                </p>
                <Link
                  href="/workshops/build-your-own-ukulele"
                  className="fml-workshop-button"
                >
                  View Details &amp; Sign Up
                </Link>
              </article>

              {/* Workshop 7 */}
              <article className="fml-workshop-card">
                <h2 className="fml-workshop-name">
                  🎵 Practice With a Teacher
                </h2>
                <p className="fml-workshop-desc">
                  Guided practice sessions that help you improve faster — no
                  more “I don’t know what to practice.” A teacher will sit with
                  you, fine-tune your technique, and keep you focused.
                </p>
                <p className="fml-workshop-desc">
                  Perfect for students who struggle with motivation at home or
                  feel stuck playing the same things over and over.
                </p>
                <Link
                  href="/workshops/practice-with-a-teacher"
                  className="fml-workshop-button"
                >
                  View Details &amp; Sign Up
                </Link>
              </article>

              {/* Workshop 8 */}
              <article className="fml-workshop-card">
                <h2 className="fml-workshop-name">👥 Weekly Student Socials</h2>
                <p className="fml-workshop-desc">
                  Meet friends, jam, hang out, repeat. Weekly student socials
                  give everyone a chance to connect outside of lessons, share
                  what they’re working on, and discover new music together.
                </p>
                <p className="fml-workshop-desc">
                  A relaxed, community-focused hang for kids, teens, and adults
                  who want music to be part of their social life, not just
                  something they practice alone.
                </p>
                <Link
                  href="/workshops/student-socials"
                  className="fml-workshop-button"
                >
                  View Details &amp; Sign Up
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .fml-workshops {
          padding: 3rem 1.5rem 2rem;
        }

        .fml-workshops-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .fml-workshops-title {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .fml-workshops-subtitle {
          font-size: 1rem;
          max-width: 40rem;
        }

        .fml-workshop-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.fml-workshop-card {
  width: calc(33.333% - 1rem);
  padding: 1rem 1.25rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid #ddd;
  background: #fafafa;
}

        .fml-workshop-name {
          font-size: 1.15rem;
          margin: 0 0 0.4rem 0;
        }

        .fml-workshop-desc {
          font-size: 0.95rem;
          margin: 0 0 0.4rem 0;
        }

        .fml-workshop-button {
          display: inline-block;
          margin-top: 0.5rem;
          padding: 0.55rem 1.1rem;
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid #111827;
          background: #111827;
          color: #ffffff;
          transition:
            background 0.15s ease,
            color 0.15s ease,
            transform 0.15s ease,
            box-shadow 0.15s ease;
        }

        .fml-workshop-button:hover {
          background: #ffffff;
          color: #111827;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .fml-workshops {
            padding-top: 2.25rem;
          }
        }
          /* Mobile stacking */
@media (max-width: 900px) {
  .fml-workshop-card {
    width: 100%;
  }
}
      `}</style>
    </>
  );
}
