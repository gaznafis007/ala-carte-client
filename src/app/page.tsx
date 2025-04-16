import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OurCustomers } from "@/components/sections/our-customers";
import { OurResults } from "@/components/sections/our-results";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <Hero/>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Our Results Section */}
      <OurResults />

      {/* Our Customers Section */}
      <OurCustomers />

      <Footer />
    </main>
  );
}
