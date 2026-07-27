import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Applications from "@/components/Applications";
import Capabilities from "@/components/Capabilities";
import GlobalReach from "@/components/GlobalReach";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Stats />
      <Products />
      <Applications />
      <Capabilities />
      <GlobalReach />
      <ContactForm />
      <Footer />
    </main>
  );
}
