import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <Hero/>

      {/* How It Works Section */}
      {/* // <HowItWorks /> */}

      {/* Our Results Section */}
      {/* // <OurResults /> */}

      {/* Our Customers Section */}
      {/* // <OurCustomers /> */}

      <Footer />
    </main>
  );
}
