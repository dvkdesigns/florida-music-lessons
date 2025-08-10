import Head from "next/head";
import PartnerLogos from "@/components/PartnerLogos";

export default function PartnersPage() {
  return (
    <>
      <Head>
        <title>Our Partners | Your Site Name</title>
        <meta
          name="description"
          content="Meet our valued partners and collaborators."
        />
      </Head>
      <main className="bg-white min-h-screen">
        <div className="py-12">
          <PartnerLogos />
        </div>
      </main>
    </>
  );
}
