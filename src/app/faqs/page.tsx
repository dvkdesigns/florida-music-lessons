// src/app/faqs/page.js

export const metadata = {
  title: "FAQs | Florida Music Lessons",
  description:
    "Find answers to common questions about music lessons, scheduling, pricing, and more.",
};

export default function FAQsPage() {
  const faqs = [
    {
      question: "What instruments do you teach?",
      answer:
        "We offer lessons for guitar, piano, bass, drums, voice, and more. We also provide beginner-friendly ukulele lessons and specialized coaching for live performance.",
    },
    {
      question: "Where are lessons held?",
      answer:
        "You can take lessons at our Coral Springs studio or choose in-home lessons for a small travel fee. We also offer virtual lessons via Zoom or Google Meet.",
    },
    {
      question: "How long are lessons?",
      answer:
        "Most lessons are 30 minutes or 1 hour. We can customize lesson length based on your goals and schedule.",
    },
    {
      question: "How much do lessons cost?",
      answer:
        "Our standard rates are $45 for 30 minutes and $65 for 1 hour in-studio. In-home lessons have a small additional fee for travel.",
    },
    {
      question: "Do I need my own instrument?",
      answer:
        "Yes, we recommend having your own instrument for practice at home. If you need help choosing one, we’re happy to make recommendations.",
    },
    {
      question: "What ages do you teach?",
      answer:
        "We work with students as young as 5 for piano and drums, and 7 for guitar. Adults are welcome too—we teach all ages!",
    },
    {
      question: "Do you offer group lessons?",
      answer:
        "Yes, we offer small group classes for guitar, ukulele, and drum circles. Group lessons are a great way to learn and make friends.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <p className="text-lg text-gray-700 mb-10">
        Here are answers to the most common questions we receive about our
        lessons, scheduling, and policies.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
