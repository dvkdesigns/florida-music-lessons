"use client";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Get in Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Whether you&apos;re ready to book your first lesson or just have a
            question about our programs, we’re here to help. We primarily offer
            **in-home music lessons** and serve families throughout{" "}
            <a href="parklandguitarlessons.com">Parkland</a>,
            <a href="bocaratonguitarlessons.com">Boca Raton</a>,{" "}
            <a href="parklandguitarlessons.com">Deerfield Beach</a>,{" "}
            <a href="hollywoodguitarlessons.com">Hollywood</a>, and most of{" "}
            <a href="southfloridamusiclessons.com">South Florida</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Component */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Info & Service Areas */}
          <div className="bg-gray-50 rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-700">
              <li>🏡 In-Home Lessons (Primary Offering)</li>
              <li>In-Studio Lesson Locations:</li>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>Parkland, FL</li>
                <li>Boca Raton, FL</li>
                <li>Deerfield Beach, FL</li>
                <li>Hollywood, FL</li>
              </ul>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-700">
                📞{" "}
                <a
                  href="tel:954-867-9023"
                  className="text-blue-600 hover:underline"
                >
                  954-867-9023
                </a>
                <br />
                ✉️{" "}
                <a
                  href="mailto:info@floridamusiclessons.com"
                  className="text-blue-600 hover:underline"
                >
                  info@floridamusiclessons.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
