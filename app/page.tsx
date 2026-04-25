import StarsCanvas from "@/components/StarsCanvas";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StarsCanvas />
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Waitlist />
      <Footer />
    </>
  );
}
