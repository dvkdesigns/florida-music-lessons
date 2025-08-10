// src/app/partners/page.js
import Image from "next/image";

export const metadata = {
  title: "Our Partners | Florida Music Lessons",
  description:
    "We proudly collaborate with amazing local organizations, venues, and businesses to make music accessible to everyone in South Florida.",
};

export default function PartnersPage() {
  const partners = [
    {
      name: "Parkland Community Center",
      description:
        "Hosting our group classes and student recitals for the local community.",
      logo: "/images/partners/parkland-community-center.png",
      link: "https://www.cityofparkland.org/",
    },
    {
      name: "The Falls at Parkland",
      description:
        "Partnering with us to bring music lessons and events to their residents.",
      logo: "/images/partners/falls-at-parkland.png",
      link: "#",
    },
    {
      name: "Strictly Gigs",
      description:
        "Connecting our students with live performance opportunities across South Florida.",
      logo: "/images/partners/strictly-gigs.png",
      link: "#",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Our Partners</h1>
      <p className="text-lg text-gray-700 mb-10">
        We&rsquo;re proud to work with these incredible partners who share our
        passion for music education, live performance, and community engagement.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner, idx) => {
          const card = (
            <div className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {partner.logo && (
                <div className="w-full h-48 bg-gray-50 p-4 relative">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx < 3}
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{partner.name}</h2>
                <p className="text-gray-700 text-sm mt-2">
                  {partner.description}
                </p>
              </div>
            </div>
          );

          // Only make it a link when there's a real href
          return partner.link && partner.link !== "#" ? (
            <a
              key={idx}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {card}
            </a>
          ) : (
            <div key={idx}>{card}</div>
          );
        })}
      </div>
    </main>
  );
}
