import { motion } from "framer-motion";
import { Button } from "./ui/button";

/**
 * Sample data - change image paths to your real files.
 * The `reverse` boolean indicates that this row should flip (image left, text right).
 */
const ventures = [
  {
    name: "Enfork Creations",
    description:
      "Enfork Creations crafts compelling marketing campaigns and brand messages that captivate audiences, boost engagement, and drive measurable growth worldwide.",
    image: "/ventures/enfork-creations.png",
    reverse: false,
  },
  {
    name: "Bolly Beats",
    description:
      "Bolly Beats creates high-energy social campaigns and immersive event experiences that ignite buzz, celebrate culture, and connect brands with audiences in meaningful and fun ways.",
    image: "/ventures/bolly-beats.png",
    reverse: true,
  },
  {
    name: "Enfork Care",
    description:
      "Enfork Care provides holistic home and personal care services designed to support well-being, comfort, and daily independence. Our caregivers deliver empathy-driven assistance that nurtures both health and peace of mind.",
    image: "/ventures/enfork-care.png",
    reverse: false,
  },
];

const OurVentures = () => {
  return (
    <section
      id="ventures"
      className="py-32 bg-background relative overflow-hidden"
    >
      <div
        // style={{ backgroundImage: "url('./our venture bg gradient.png')" }}
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      >
        <h2 className="text-5xl md:text-7xl font-light text-foreground text-center py-20">
          Our Ventures
        </h2>
      </div>
    </section>
  );
};

export default OurVentures;
