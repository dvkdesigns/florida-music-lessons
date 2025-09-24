"use client";

export default function FAQ() {
  return (
    <section className="bg-gray-100 py-10 px-6 md:px-12 mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              How long are lessons?
            </h3>
            <p className="text-gray-700 mt-2">
              Lessons are 30 minutes or 1 hour once per week.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              What instruments do you teach?
            </h3>
            <p className="text-gray-700 mt-2">
              Acoustic and Electric Guitar, Bass, Drums, Piano and Vocals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Do you offer bulk pricing?
            </h3>
            <p className="text-gray-700 mt-2">
              More that one student (sibling) are eligible for a 10% discount.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Do I need an Instrument?
            </h3>
            <p className="text-gray-700 mt-2">
              No! We have instruments for sale, use and rent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
