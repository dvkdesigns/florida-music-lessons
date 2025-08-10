// src/app/tips/page.js

export const metadata = {
  title: "Music Learning Tips | Florida Music Lessons",
  description:
    "Practical tips for students to get the most out of their music lessons and practice sessions.",
};

export default function TipsPage() {
  const tips = [
    {
      title: "Practice Consistently",
      description:
        "Aim for short, daily practice sessions rather than cramming once a week. Even 15–20 minutes a day can lead to big improvements.",
    },
    {
      title: "Warm Up Before Playing",
      description:
        "Stretch your fingers, do basic scales, or play simple warm-up exercises to avoid strain and improve technique.",
    },
    {
      title: "Set Clear Goals",
      description:
        "Decide what you want to accomplish each week—whether it’s mastering a song, improving speed, or learning a new chord progression.",
    },
    {
      title: "Record Yourself",
      description:
        "Listening back helps you hear mistakes you might not notice while playing and track your progress over time.",
    },
    {
      title: "Play With Others",
      description:
        "Jamming with friends or joining a group class can improve your timing, listening skills, and confidence.",
    },
    {
      title: "Be Patient With Yourself",
      description:
        "Progress takes time—celebrate small wins and keep your practice fun and enjoyable.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Music Learning Tips</h1>
      <p className="text-lg text-gray-700 mb-10">
        Whether you’re a beginner or an experienced musician, these tips will
        help you stay motivated, practice smarter, and enjoy your music journey.
      </p>

      <ul className="space-y-6">
        {tips.map((tip, index) => (
          <li
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{tip.title}</h2>
            <p className="text-gray-700">{tip.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
