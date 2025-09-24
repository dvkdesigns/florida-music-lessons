"use client";

export default function FAQ() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12 mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions about how Florida Music Lessons works? Here are some
            quick answers to help you get started.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Do you offer in-home lessons?
            </h3>
            <p className="text-gray-700 mt-2">
              No! In-home lessons are no longer available.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              What instruments do you teach?
            </h3>
            <p className="text-gray-700 mt-2">
              We offer personalized instruction in guitar, bass, piano, drums,
              and voice — for all ages and skill levels.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              How do I schedule a lesson?
            </h3>
            <p className="text-gray-700 mt-2">
              Just fill out our contact form or give us a call. We’ll match you
              with a teacher in your area and help set a time that fits your
              schedule.
            </p>
          </div>
        </div>

        <div className="text-center mt-12"></div>
      </div>
    </section>
  );
}
