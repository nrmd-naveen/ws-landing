import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { WhyChoose } from "@/components/why-choose";
import { Testimonials } from "@/components/testimonials";
import { Founder } from "@/components/founder";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { FashionBrand } from "@/components/fashion-brand";
import { Footer } from "@/components/footer";
import MyJourneyPage from "@/components/timeline";
import NavBar from "@/components/navbar";
import { AboutUs } from "@/components/aboutUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <NavBar />
      <Hero />
      <AboutUs />
      {/* <HowItWorks /> */}
      <MyJourneyPage />
      <WhyChoose />

      <Testimonials />
      <Founder />
      <CTA />
      <FAQ />
      <FashionBrand />
      <Footer />
    </main>
  );
}
