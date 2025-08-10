"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Navigation } from "@/components/Navigation";
import StudentPortalButton from "@/components/StudentPortalButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-2 bg-white shadow">
      <div className="container mx-auto px-4">
        {/* Top Row: Logo and Contact */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <Image
                src="/images/logo.png"
                alt="Florida Music Lessons Logo"
                width={150}
                height={80}
              />
            </a>
          </div>

          {/* Contact and Social */}
          <div className="hidden md:block text-right">
            <p className="text-sm">
              Call:{" "}
              <a href="tel:954-249-8837" className="text-blue-600">
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
            <a href="tel:954-249-8837" className="text-blue-600">
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

        {/* Navigation */}
        <div
          className={`md:block ${menuOpen ? "block" : "hidden"} mt-2 `}
        ></div>
      </div>
    </header>
  );
}
