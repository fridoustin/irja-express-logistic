import Header from "@/components/Header";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
