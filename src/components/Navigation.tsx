"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="block md:flex py-5">
        {/* Instruments */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Instruments</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white p-4 w-full min-w-[300px] md:min-w-[600px] lg:min-w-[1000]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  href: "/instruments/guitar/acoustic",
                  name: "Acoustic Guitar",
                  desc: "Acoustic & Electric Guitar lessons.",
                  img: "/images/acoustic.png",
                },
                {
                  href: "/instruments/guitar/electric",
                  name: "ElectricGuitar",
                  desc: "Electric Guitar lessons.",
                  img: "/images/electric.png",
                },
                {
                  href: "/instruments/piano",
                  name: "Piano",
                  desc: "Classical and modern piano training.",
                  img: "/images/piano.png",
                },
                {
                  href: "/instruments/drums",
                  name: "Drums",
                  desc: "Drum set and percussion basics.",
                  img: "/images/drums.png",
                },
                {
                  href: "/instruments/bass",
                  name: "Bass",
                  desc: "Learn bass techniques and grooves.",
                  img: "/images/bass.png",
                },
                {
                  href: "/instruments/voice",
                  name: "Voice",
                  desc: "Develop your vocal range and tone.",
                  img: "/images/voice.png",
                },
              ].map((item) => (
                <NavigationMenuLink asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded hover:bg-gray-100 p-2 transition"
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={400}
                      height={250}
                      className="rounded mb-2 object-cover w-full h-40"
                    />
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/workshops" className="px-4 py-2 block">
              Workshops
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/pricing" className="px-4 py-2 block">
              Pricing
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/contact" className="px-4 py-2 block">
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* FAQs */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/faqs" className="px-4 py-2 block">
              FAQs
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* More */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white p-4 w-full min-w-[300px] md:min-w-[600px] lg:min-w-[1000]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              {[
                {
                  href: "/teachers",
                  name: "Teachers",
                  desc: "Tips, guides, and music insights.",
                  img: "/images/blog.jpg",
                },
                {
                  href: "/tips",
                  name: "Tips",
                  desc: "Tips, guides, and music insights.",
                  img: "/images/blog.jpg",
                },
                {
                  href: "/blog",
                  name: "Blog",
                  desc: "Tips, guides, and music insights.",
                  img: "/images/blog.jpg",
                },
                {
                  href: "/careers",
                  name: "Careers",
                  desc: "Join our team of instructors.",
                  img: "/images/careers.jpg",
                },
                {
                  href: "/partners",
                  name: "Partners",
                  desc: "Join the Community.",
                  img: "/images/careers.jpg",
                },
              ].map((item) => (
                <NavigationMenuLink asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded hover:bg-gray-100 p-2 transition"
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={400}
                      height={250}
                      className="rounded mb-2 object-cover w-full h-40"
                    />
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
