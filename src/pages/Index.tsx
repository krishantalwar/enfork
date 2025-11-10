import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import CoreIndustries from "@/components/CoreIndustries";
import OurBrands from "@/components/OurVentures";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import ContactCTA from "@/components/ContactCTA";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import OurVentures from "@/components/OurVentures";
const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div
        style={{ backgroundImage: "url('./ha bg.png')" }}
        className="relative py-4 sm:py-14 lg:py-16 bg-black overflow-hidden bg-cover bg-center bg-no-repeat"
      >
        <Hero />
        <About />
      </div>
      <CoreIndustries />
      <OurVentures />
      <Testimonials />
      <div
        style={{ backgroundImage: "url('./faq bg.png')" }}
        className="relative -mt-24 sm:0 overflow-hidden bg-cover bg-bottom bg-no-repeat"
      >
        <FAQs />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
