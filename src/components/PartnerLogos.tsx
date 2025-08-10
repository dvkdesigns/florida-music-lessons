import Image from "next/image";

export default function PartnerLogos() {
  const partners = [
    {
      name: "All Star Pizza Parkland",
      image: "/images/all-star-pizza-logo.jpg",
      link: "https://all-star-pizza.com/parkland/",
    },
    {
      name: "SoFlo Life Collective",
      image: "/images/soflo-life-collective-logo.jpg",
      link: "https://www.instagram.com/soflo_life_collective/",
    },
    { name: "Partner Three", image: "/images/partner3.png" },
    { name: "Partner Four", image: "/images/partner4.png" },
    { name: "Partner Five", image: "/images/partner5.png" },
    { name: "Partner Six", image: "/images/partner6.png" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center">
            <a href={partner.link} target="_blank" className="text-center">
              <div className="w-32 h-32 relative items-center">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-medium text-center text-gray-700 mb-10">
                {partner.name}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
