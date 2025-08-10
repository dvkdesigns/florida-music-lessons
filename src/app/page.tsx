import Hero from "@/components/HP-Hero";
import Instruments from "@/components/HP-Instruments";
import Styles from "@/components/HP-Styles";
import Pricing from "@/components/HP-Pricing";
import Contact from "@/components/HP-Contact";
import FAQs from "@/components/HP-FAQ";
import About from "@/components/HP-About";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen px-8 pb-20 gap-2  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2  sm:items-start">
        <Hero />
        <Instruments />
        <Styles />
        <Pricing />
        <Contact />
        <FAQs />
        <About />
      </main>
    </div>
  );
}
