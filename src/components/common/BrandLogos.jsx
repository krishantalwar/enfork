import { motion } from "framer-motion";

const BrandLogos = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 place-items-center py-8">
      {[
        { src: "./brand logos/Frame 22.png", alt: "Enfork Creations" },
        { src: "./brand logos/Frame 21.png", alt: "Bolly Bath" },
        { src: "./brand logos/Frame 23.png", alt: "Another Brand" },
        { src: "./brand logos/Frame 23.png", alt: "Another Brand 2" },
      ].map((logo, index) => (
        <motion.div
          key={index}
          className="bg-background border border-white/10 rounded-full shadow-lg flex items-center justify-center 
                     w-[140px] sm:w-[160px] lg:w-[180px] h-[60px] sm:h-[65px] lg:h-[70px]"
          whileHover={{ rotate: index % 2 === 0 ? -5 : 5, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-[70px] sm:w-[80px] lg:w-[90px] object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BrandLogos;
