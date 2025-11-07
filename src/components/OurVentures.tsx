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
      className="container py-12 bg-black relative overflow-hidden"
    >
      <div

        className="relative overflow-hidden background: radial-gradient(circle, #FFFFFF 0%, #BBBBBB 46%, #555555 100%) bg-cover bg-center bg-no-repeat"
      >
        <h2 className="text-5xl md:text-7xl font-light text-foreground text-center py-20">
          Our Ventures
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col space-y-12">
        {/* Cards -1  */}
        <div className="grid grid-cols-3 gap-8">
          {/* ===== Left Content Card ===== */}
          <div className="relative col-span-2 bg-[#0e0e0e]/90 rounded-2xl p-8 md:p-12 border border-white/10 text-white shadow-lg backdrop-blur-sm !py-24">
            {/* Background Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10 bg-[url('/brand-icons-bg.png')] bg-cover bg-center rounded-2xl"
              aria-hidden="true"
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                Enfork Creations
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Enfork Creations crafts compelling marketing campaigns and brand
                strategies that captivate audiences, boost engagement, and drive
                measurable growth worldwide.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-gray-300 text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-all duration-300">
                  Explore Now
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300">
                  Let’s Talk
                </button>
              </div>
            </div>
          </div>

          {/* ===== Right Image Card ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative  rounded-2xl overflow-hidden shadow-xl"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded-2xl object-cover"
            >
              <source src="./videos/brand 1 video.mp4" type="video/mp4" />
            </video>
            {/* Overlay Logo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
              <img
                src="./brand logos/Frame 21.png"
                alt="Enfork"
                className="w-[250px] h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
        {/* Cards-2 */}
        <div className="grid grid-cols-3 gap-8">
          {/* ===== Left Content Card ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative  rounded-2xl overflow-hidden shadow-xl"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded-2xl object-cover"
            >
              <source src="./videos/brand 2 video.mp4" type="video/mp4" />
            </video>
            {/* Overlay Logo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
              <img
                src="./brand logos/Frame 22.png"
                alt="Enfork"
                className="w-[250px] h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* ===== Right Image Card ===== */}
          <div className="relative col-span-2 bg-[#0e0e0e]/90 rounded-2xl p-8 md:p-12 border border-white/10 text-white shadow-lg backdrop-blur-sm !py-24">
            {/* Background Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10 bg-[url('/brand-icons-bg.png')] bg-cover bg-center rounded-2xl"
              aria-hidden="true"
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                Enfork Creations
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Enfork Creations crafts compelling marketing campaigns and brand
                strategies that captivate audiences, boost engagement, and drive
                measurable growth worldwide.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-gray-300 text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-all duration-300">
                  Explore Now
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300">
                  Let’s Talk
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="grid grid-cols-3 gap-8">
          {/* ===== Left Content Card ===== */}
          <div className="relative col-span-2 bg-[#0e0e0e]/90 rounded-2xl p-8 md:p-12 border border-white/10 text-white shadow-lg backdrop-blur-sm !py-24">
            {/* Background Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10 bg-[url('/brand-icons-bg.png')] bg-cover bg-center rounded-2xl"
              aria-hidden="true"
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                Enfork Creations
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Enfork Creations crafts compelling marketing campaigns and brand
                strategies that captivate audiences, boost engagement, and drive
                measurable growth worldwide.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-gray-300 text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-all duration-300">
                  Explore Now
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300">
                  Let’s Talk
                </button>
              </div>
            </div>
          </div>

          {/* ===== Right Image Card ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative  rounded-2xl overflow-hidden shadow-xl"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded-2xl object-cover"
            >
              <source src="./videos/brand 3 video.mp4" type="video/mp4" />
            </video>
            {/* Overlay Logo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
              <img
                src="./brand logos/Frame 23.png"
                alt="Enfork"
                className="w-[250px] h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurVentures;
