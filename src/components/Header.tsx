"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import StudentPortalButton from "@/components/StudentPortalButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-3 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        {/* Top Row: Logo and Contact */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Florida Music Lessons Logo"
                width={400}
                height={80}
              />
            </Link>
          </div>

          {/* Contact + Social + Address */}
          <div className="hidden md:block text-right">
            <p className="">
              Call/Text:{" "}
              <a
                href="tel:954-249-8837"
                className="text-orange-600 text-3xl font-bold"
              >
                954-249-8837
              </a>
            </p>

            {/* Social Icons */}
            <div className="Social-Icons flex justify-end space-x-3 mt-1 items-center">
              <a
                href="https://facebook.com/floridamusiclessons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-blue-600 hover:text-blue-800" />
              </a>
              <a
                href="https://instagram.com/floridamusiclessons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500 hover:text-pink-700" />
              </a>
              <StudentPortalButton />
            </div>
          </div>

          {/* Hamburger Icon (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-gray-700"
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Contact Info below logo on mobile */}
        <div className="block md:hidden mt-2 text-center">
          <p className="text-sm">
            Call:{" "}
            <a href="tel:954-249-8837" className="text-orange-600 no-underline">
              954-249-8837
            </a>
          </p>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:info@floridamusiclessons.com"
              className="text-blue-600"
            >
              info@floridamusiclessons.com
            </a>
          </p>

          {/* Mobile Address */}
          <p className="text-sm mt-1 flex justify-center items-center space-x-1">
            <FaMapMarkerAlt className="text-red-500" />
            <a
              href="https://www.google.com/maps/place/Florida+Music+Lessons/@26.2726098,-80.268944,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              9752 W Sample Rd, Coral Springs, FL
            </a>
          </p>

          <div className="Social-Icons flex justify-center space-x-3 mt-1 items-center">
            <a
              href="https://facebook.com/floridamusiclessons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-blue-600 hover:text-blue-800" />
            </a>
            <a
              href="https://instagram.com/floridamusiclessons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 hover:text-pink-700" />
            </a>
            <StudentPortalButton />
          </div>
        </div>
      </div>
    </header>
  );
}
