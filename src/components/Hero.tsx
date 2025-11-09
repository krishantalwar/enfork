import { motion } from "framer-motion";
import CurveButton from "@/components/common/CurveButton";
import AppButton from "@/components/common/AppButton";
import Stats from "./hero/Stats";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] overflow-hidden pt-16 sm:pt-20 lg:pt-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./Hero background.png')" }}
    >
      <div className="section-container">
        {/* ===== Content Wrapper (Equal Padding) ===== */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 sm:gap-10 lg:gap-12">
          {/* ===== Left Column ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left col-span-1 lg:col-span-2"
          >
            <h1 className="text-h2 text-foreground mb-4 sm:mb-5 lg:mb-6 leading-[1.3] tracking-wide">
              Powering Excellence
              <br />
              Across Every Industry
            </h1>

            <p className="text-xs sm:text-sm lg:text-sm text-muted-foreground mb-6 sm:mb-8 lg:mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
              From technology to care, from innovation to impact — Enfork Group
              stands at the heart of progress, driving excellence through every
              venture we touch.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-4">
              <AppButton label="Explore Now" />
              <AppButton label="Get In Touch" isBlack={true} />
            </div>
          </motion.div>

          {/* ===== Right Image Composition ===== */}
          <div className="relative mt-6 sm:mt-8 lg:mt-12">
            {/* Mobile & Tablet layout: centered 2x2 grid */}
            <div className="grid grid-cols-2 gap-4 justify-items-center lg:hidden">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-[120px] sm:w-[140px] rounded-xl overflow-hidden rotate-3 z-[5]"
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
                className="w-[120px] sm:w-[140px] rounded-xl overflow-hidden rotate-3 z-[4]"
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
                className="w-[120px] sm:w-[140px] rounded-xl overflow-hidden rotate-3 z-[3]"
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
                className="w-[120px] sm:w-[140px] rounded-xl overflow-hidden rotate-[-10deg] z-[2]"
              >
                <img
                  src="./hero section images/Card 4.png"
                  alt="Creative Marketing"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Desktop layout: your original absolute style */}
            <div className="hidden lg:flex justify-center lg:justify-end h-[520px] relative">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-[60px] left-[-20%]
                 w-[130px] xl:w-[160px] 2xl:w-[200px]
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
                className="absolute top-[20%] left-2 xl:left-4
                 w-[130px] xl:w-[160px] 2xl:w-[200px]
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
                 w-[130px] xl:w-[160px] 2xl:w-[200px]
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
                className="absolute top-[30%] right-[-40%]
                 w-[130px] xl:w-[160px] 2xl:w-[200px]
                 rounded-2xl overflow-hidden rotate-[-15deg] z-[2]"
              >
                <img
                  src="./hero section images/Card 4.png"
                  alt="Creative Marketing"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="z-[2] relative flex justify-center my-6 sm:my-8 lg:my-0 ">
          <img
            src="./enfork bg logo 1.png"
            alt="bg-enfork"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none opacity-40 sm:opacity-50 lg:opacity-100"
          />
        </div>

        {/* ===== Bottom Video Section ===== */}
        <div className="relative -mt-8 sm:-mt-16 lg:-mt-24 rounded-xl sm:rounded-2xl shadow-lg z-[1] overflow-hidden">
          {/* ===== Video ===== */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
          >
            <source src="./videos/About section video.mp4" type="video/mp4" />
          </video>

          {/* ===== Overlay (Visible only on lg and up) ===== */}
          <div className="hidden lg:flex absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-8 py-8 justify-end items-end text-white">
            {/* Left Side – Button */}
            <div className="absolute bottom-[10px] left-[0px]">
              <CurveButton />
            </div>

            {/* Right Side – Stats */}
            <Stats />
          </div>

          {/* ===== Stats Section (Visible only below video on small & tablet) ===== */}
          <div className="block lg:hidden my-12 to-transparent text-white px-5 sm:px-8 py-6 mt-2 rounded-xl sm:rounded-2xl shadow-inner border border-white/10">
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-center">
              {/* Stat 1 */}
              <div>
                <p className="text-[11px] sm:text-xs text-gray-300 font-medium leading-tight">
                  Years <br /> Experience
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  10
                  <span className="text-sm sm:text-base align-top ml-1">+</span>
                </h3>
              </div>

              {/* Stat 2 */}
              <div>
                <p className="text-[11px] sm:text-xs text-gray-300 font-medium leading-tight">
                  Industries <br /> Transformed
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  9
                  <span className="text-sm sm:text-base align-top ml-1">+</span>
                </h3>
              </div>

              {/* Stat 3 */}
              <div>
                <p className="text-[11px] sm:text-xs text-gray-300 font-medium leading-tight">
                  Clients <br /> Served
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  200
                  <span className="text-sm sm:text-base align-top ml-1">+</span>
                </h3>
              </div>

              {/* Stat 4 */}
              <div>
                <p className="text-[11px] sm:text-xs text-gray-300 font-medium leading-tight">
                  Projects <br /> Delivered
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  237
                  <span className="text-sm sm:text-base align-top ml-1">+</span>
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
