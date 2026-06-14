import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import RoomsGrid from "@/components/RoomsGrid";
import DiningSection from "@/components/DiningSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustMetrics />
        <RoomsGrid />
        <DiningSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

