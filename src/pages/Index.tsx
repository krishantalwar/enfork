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
      <Hero />
      <About />
      <CoreIndustries />
      <OurVentures />
      <Testimonials />
      <FAQs />
      <Projects />
      <Footer />

   

    </div>
  );
};

export default Index;
