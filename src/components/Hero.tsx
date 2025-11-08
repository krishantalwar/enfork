import { motion } from "framer-motion";
import { Button } from "./ui/button";
import CurveButton from "@/components/common/CurveButton";
import AppButton from "@/components/common/AppButton";

const Hero = () => {
  return (
    <section
      className="relative min-h-[100vh] overflow-hidden pt-12  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./Hero background.png')" }}
    >
      <div className="section-container ">
        {/* ===== Content Wrapper (Equal Padding) ===== */}
        <div className="relative z-10  grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
          {/* ===== Left Column ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left  col-span-2"
          >
            <h1 className="text-h1 text-foreground mb-6 leading-[1.3] tracking-wide">
              Powering Excellence
              <br />
              Across Every Industry
            </h1>

            <p className="text-sm text-muted-foreground mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
              From technology to care, from innovation to impact — Enfork Group
              stands at the heart of progress, driving excellence through every
              venture we touch.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <AppButton label="Explore Now" />
                 <AppButton label="Get In Touch" isBlack={true} />
            
            </div>
          </motion.div>

          {/* ===== Right Image Composition ===== */}
          <div className="relative flex justify-center lg:justify-end h-[420px] sm:h-[480px] md:h-[520px] mt-12 lg:mt-0">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-[60px] left-[-20%]
                        w-[50px] sm:w-[80px] md:w-[100px]  lg:w-[130px] xl:w-[160px] 2xl:w-[200px]
                       rounded-2xl overflow-hidden rotate-3 z-[5]"
            >
              <img
                src="./hero section images/Card 1.png"
                alt="Finance Growth"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-[20%] left-2 sm:left-4 md:left-8 
                        w-[50px] sm:w-[80px] md:w-[100px]  lg:w-[130px] xl:w-[160px] 2xl:w-[200px]
                       rounded-2xl overflow-hidden rotate-3 z-[4]"
            >
              <img
                src="./hero section images/Card 2.png"
                alt="Healthcare Professionals"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-[60px] right-[6%]
                        w-[50px] sm:w-[80px] md:w-[100px]  lg:w-[130px] xl:w-[160px] 2xl:w-[200px]
                       rounded-2xl overflow-hidden rotate-3 z-[3]"
            >
              <img
                src="./hero section images/Card 3.png"
                alt="Technology Team"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-[30%] md:right-[-40%] 
                        w-[50px] sm:w-[80px] md:w-[100px]  lg:w-[130px] xl:w-[160px] 2xl:w-[200px]
                       rounded-2xl overflow-hidden rotate-[-15eg] z-[2]"
            >
              <img
                src="./hero section images/Card 4.png"
                alt="Creative Marketing"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="  z-[2]">
          <img src="./enfork bg logo 1.png" alt="bg-enfork" />
        </div>

        {/* ===== Bottom Video Section ===== */}
        <div className="relative  -mt-24 rounded-2xl  shadow-lg border border-white/10 z-[1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-2xl object-cover"
          >
            <source src="./videos/About section video.mp4" type="video/mp4" />
          </video>

          {/* ===== Stats Overlay ===== */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 md:px-12 py-6 flex flex-wrap justify-end items-center text-white">
            {/* Left Side – Button */}
            <div className="absolute bottom-[8px] left-[-1px]">
              <CurveButton />
            </div>

            {/* Right Side – Stats */}
            <div className="w-2/3 flex flex-wrap justify-between md:gap-6 md:justify-end text-center">
              <div className="hidden md:block w-[2px] bg-white/20"></div>

              {/* Stat 1 */}
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="text-sm text-gray-300 font-semibold text-start">
                  Years
                  <br />
                  Experience
                </p>
                <h3 className="text-3xl md:text-5xl font-semibold">
                  10<span className="text-lg align-top">+</span>
                </h3>
              </div>

              <div className="hidden md:block w-[2px] bg-white/20"></div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="text-sm text-gray-300 font-semibold text-start">
                  Industries <br /> Transformed
                </p>
                <h3 className="text-3xl md:text-5xl font-semibold">
                  9<span className="text-lg align-top">+</span>
                </h3>
              </div>

              <div className="hidden md:block w-[2px] bg-white/20"></div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="text-sm text-gray-300 font-semibold text-start">
                  Clients <br /> Served
                </p>
                <h3 className="text-3xl md:text-5xl font-semibold text-start">
                  200<span className="text-lg align-top">+</span>
                </h3>
              </div>

              <div className="hidden md:block w-[2px] bg-white/20"></div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="text-sm text-gray-300 font-semibold text-start">
                  Projects <br />
                  Delivered
                </p>
                <h3 className="text-3xl md:text-4xl font-semibold">
                  237<span className="text-lg align-top">+</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
