// components/HPAbout.tsx

export default function HPAbout() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to Florida Music Lessons
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We bring in-studio music education to students across Parkland, Boca
            Raton, Deerfield Beach, and Hollywood. Whether you’re learning
            guitar, bass, piano, drums, or voice, our goal is to help you play
            the music you love — while building lifelong skills.
          </p>
        </div>

        {/* Studio Map */}
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26198.92550472778!2d-80.26894402568358!3d26.272609800000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa685a0bf34c238ad%3A0xa7536af9b5a9ac1!2sFlorida%20Music%20Lessons!5e1!3m2!1sen!2sus!4v1760545665823!5m2!1sen!2sus"
            width="800"
            height="400"
            loading="lazy"
            allowFullScreen
            className="rounded-xl shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
