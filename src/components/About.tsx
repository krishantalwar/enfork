import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      style={{ backgroundImage: "url('./About bg gradient.png')" }}
      className="relative container py-16 bg-black  overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* ===== Left Content ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-4 leading-tight">
            <span className="text-foreground font-light">About</span>
            <br />
            <a href="#" className="flex items-center gap-2 select-none">
              <img
                src="./logo bg 2.png"
                alt="Enfork"
                className="w-[300px] h-auto object-contain"
              />
            </a>
          </h2>

          <p className="text-sm md:text-base text-foreground leading-relaxed max-w-lg mt-6">
            Enfork Group, based in Australia, drives innovation across
            technology, marketing, finance, and social initiatives. Our diverse
            brands empower businesses, communities, and individuals to grow,
            succeed, and thrive.
          </p>
        </motion.div>

        {/* ===== Right Floating Logos ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-2xl h-[400px] sm:h-[440px] md:h-[480px] flex justify-center items-center mx-auto">
            {/* === Floating Brand Cards === */}

            {/* Card 1 */}
            <motion.div
              className="absolute top-[115px] right-[-90px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[160px] sm:w-[180px] md:w-[200px] h-[60px] sm:h-[50px]"
              style={{ rotate: "-12deg" }}
            >
              <img
                src="./brand logos/Frame 22.png"
                alt="Enfork Creations"
                className="w-[60px] object-contain"
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="absolute top-[50px] right-[20px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[160px] sm:w-[180px] md:w-[150px] h-[60px] sm:h-[50px]"
              style={{ rotate: "12deg" }}
            >
              <img
                src="./brand logos/Frame 21.png"
                alt="Bolly Bath"
                className="w-[80px] object-contain"
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="absolute top-[100px] right-[120px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[160px] sm:w-[180px] md:w-[200px] h-[60px] sm:h-[60px]"
              style={{ rotate: "-12deg" }}
            >
              <img
                src="./brand logos/Frame 21.png"
                alt="Enfork Creations"
                className="w-[120px] object-contain"
              />
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="absolute top-[180px] right-[10px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[160px] sm:w-[180px] md:w-[200px] h-[60px] sm:h-[60px]"
              style={{ rotate: "15deg" }}
            >
              <img
                src="./brand logos/Frame 21.png"
                alt="Bolly Bath"
                className="w-[120px] object-contain"
              />
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="absolute top-[260px] right-[-40px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[160px] sm:w-[180px] md:w-[200px] h-[60px] sm:h-[60px]"
            >
              <img
                src="./brand logos/Frame 22.png"
                alt="Enfork Creations"
                className="w-[80px] object-contain"
              />
            </motion.div>

            {/* Card-6 */}
            <motion.div
              className="absolute top-[250px] right-[150px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[160px] sm:w-[180px] md:w-[200px] h-[60px] sm:h-[60px]"
              style={{ rotate: "-16deg" }}
            >
              <img
                src="./brand logos/Frame 21.png"
                alt="Bolly Bath"
                className="w-[120px] object-contain"
              />
            </motion.div>
            {/* card 7 */}
            <motion.div
              className="absolute top-[180px] left-[240px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[160px] sm:w-[180px] md:w-[150px] h-[60px] sm:h-[60px]"
              style={{ rotate: "5deg" }}
            >
              <img
                src="./brand logos/Frame 22.png"
                alt="Enfork Creations"
                className="w-[70px] object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
