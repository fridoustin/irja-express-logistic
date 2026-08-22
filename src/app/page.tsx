import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CustomerSatisfaction from "@/components/CustomerSatisfaction";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <WhyChooseUs />
        <Services />
        <Stats />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
