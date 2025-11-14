import { motion } from "framer-motion";
import BrandLogs from "../components/common/BrandLogos";
const About = () => {
  return (
    <section
      id="about"
 
      className="relative py-12 sm:py-14 lg:py-16 overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
        {/* ===== Left Content ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="font-light mb-4 leading-tight">
            <h1 className="text-foreground font-light">About</h1>
            <br />
            <a href="#" className="flex items-center gap-2 select-none">
              <img
                src="./logo bg 2.png"
                alt="Enfork"
                className="w-[150px] sm:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[400px] h-auto object-contain"
              />
            </a>
          </div>

          <p className="text-foreground leading-relaxed max-w-lg  lg:max-w-2xl mt-4 sm:mt-5 lg:mt-6">
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
          className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative hidden lg:flex w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-2xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[440px] xl:h-[480px] justify-center items-center mx-auto">
            {/* === Floating Brand Cards === */}

            {/* Card 1 */}
            <motion.div
              className="absolute top-[85px] sm:top-[95px] md:top-[105px] lg:top-[115px] right-[-50px] sm:right-[-70px] md:right-[-80px] lg:right-[-90px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-[45px] sm:h-[48px] md:h-[50px]"
              style={{ rotate: "-12deg" }}
            >
              <img
                src="./brand logos/Frame 22.png"
                alt="Enfork Creations"
                className="w-[45px] sm:w-[50px] md:w-[55px] lg:w-[60px] object-contain"
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="absolute top-[35px] sm:top-[40px] md:top-[45px] lg:top-[50px] right-[10px] sm:right-[15px] md:right-[18px] lg:right-[20px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[110px] sm:w-[120px] md:w-[135px] lg:w-[150px] h-[45px] sm:h-[48px] md:h-[50px]"
              style={{ rotate: "12deg" }}
            >
              <img
                src="./brand logos/Frame 21.png"
                alt="Bolly Bath"
                className="w-[60px] sm:w-[65px] md:w-[72px] lg:w-[80px] object-contain"
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="absolute top-[70px] sm:top-[80px] md:top-[90px] lg:top-[100px] right-[80px] sm:right-[95px] md:right-[105px] lg:right-[120px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-[50px] sm:h-[55px] md:h-[60px]"
              style={{ rotate: "-12deg" }}
            >
              <img
                src="./brand logos/Frame 21.png"
                alt="Enfork Creations"
                className="w-[90px] sm:w-[100px] md:w-[110px] lg:w-[120px] object-contain"
              />
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="absolute top-[130px] sm:top-[145px] md:top-[160px] lg:top-[180px] right-[5px] sm:right-[7px] md:right-[8px] lg:right-[10px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-[50px] sm:h-[55px] md:h-[60px]"
              style={{ rotate: "15deg" }}
            >
              <img
                src="./brand logos/Frame 21.png"
                alt="Bolly Bath"
                className="w-[90px] sm:w-[100px] md:w-[110px] lg:w-[120px] object-contain"
              />
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="absolute top-[185px] sm:top-[210px] md:top-[235px] lg:top-[260px] right-[-25px] sm:right-[-30px] md:right-[-35px] lg:right-[-40px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-[50px] sm:h-[55px] md:h-[60px]"
            >
              <img
                src="./brand logos/Frame 22.png"
                alt="Enfork Creations"
                className="w-[60px] sm:w-[65px] md:w-[72px] lg:w-[80px] object-contain"
              />
            </motion.div>

            {/* Card 6 */}
            <motion.div
              className="absolute top-[175px] sm:top-[200px] md:top-[225px] lg:top-[250px] right-[100px] sm:right-[115px] md:right-[130px] lg:right-[150px] bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-[50px] sm:h-[55px] md:h-[60px]"
              style={{ rotate: "-16deg" }}
            >
              <img
                src="./brand logos/Frame 21.png"
                alt="Bolly Bath"
                className="w-[90px] sm:w-[100px] md:w-[110px] lg:w-[120px] object-contain"
              />
            </motion.div>

            {/* Card 7 */}
            <motion.div
              className="absolute top-[130px] sm:top-[145px] md:top-[160px] lg:top-[180px] left-[160px] sm:left-[185px] md:left-[150px] lg:left-[150px] 2xl:left-[300px]  bg-background border border-white/10 
                   rounded-full shadow-lg flex items-center justify-center 
                   w-[110px] sm:w-[120px] md:w-[135px] lg:w-[150px] h-[50px] sm:h-[55px] md:h-[60px]"
              style={{ rotate: "5deg" }}
            >
              <img
                src="./brand logos/Frame 22.png"
                alt="Enfork Creations"
                className="w-[50px] sm:w-[55px] md:w-[62px] lg:w-[70px] object-contain"
              />
            </motion.div>
          </div>
          <div className="w-full lg:hidden">
            <BrandLogs />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
