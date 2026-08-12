import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-banner">
          <div className="wrap">
            <span className="eyebrow on-dark">Gallery</span>
            <h1>Dokumentasi Kegiatan Perusahaan</h1>
          </div>
        </section>
        <Gallery />
      </main>
      <Cta />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}