// src/app/pricing/page.js

export const metadata = {
  title: "Lesson Pricing | Florida Music Lessons",
  description:
    "Clear and simple pricing for in-studio, in-home, and virtual music lessons for all instruments.",
};

export default function PricingPage() {
  const pricing = [
    {
      type: "In-Studio Lessons",
      details: "One-on-one private lessons at our Coral Springs studio.",
      rates: [
        { time: "30 Minutes", price: "$45" },
        { time: "1 Hour", price: "$65" },
      ],
    },
    {
      type: "In-Home Lessons",
      details:
        "We come to you for the convenience of learning at home. Travel fees may apply based on distance.",
      rates: [
        { time: "30 Minutes", price: "$55" },
        { time: "1 Hour", price: "$75" },
      ],
    },
    {
      type: "Virtual Lessons",
      details:
        "Learn from anywhere via Zoom or Google Meet with the same personalized instruction.",
      rates: [
        { time: "30 Minutes", price: "$40" },
        { time: "1 Hour", price: "$60" },
      ],
    },
    {
      type: "Discount Packages",
      details:
        "Save when you buy multiple lessons at once. Flexible scheduling available.",
      rates: [{ time: "4 Lessons", price: "10% Off Regular Rate" }],
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Lesson Pricing</h1>
      <p className="text-lg text-gray-700 mb-10">
        We keep our pricing simple and transparent, so you know exactly what to
        expect. No contracts—just pay as you go or save with lesson packages.
      </p>

      <div className="space-y-8">
        {pricing.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{item.type}</h2>
            <p className="text-gray-600 mb-4">{item.details}</p>
            <ul className="space-y-2">
              {item.rates.map((rate, i) => (
                <li
                  key={i}
                  className="flex justify-between border-b border-gray-200 pb-2"
                >
                  <span className="font-medium">{rate.time}</span>
                  <span className="text-indigo-600 font-semibold">
                    {rate.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
