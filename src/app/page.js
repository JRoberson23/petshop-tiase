import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Sobre from "../components/Sobre";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Sobre />
      <Footer />
    </main>
  );
}
