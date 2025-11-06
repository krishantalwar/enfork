import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="container relative min-h-[100vh] overflow-hidden pt-28 ">
      {/* <div className="container"> */}
        {/* ===== Decorative Background ===== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute right-[-6%] bottom-[-8%] w-[30%] h-[60%] rounded-full 
          bg-[radial-gradient(closest-side_at_82%_82%,rgba(220,220,220,0.10)_0%,rgba(190,190,190,0.04)_30%,rgba(0,0,0,0)_65%)]
          blur-[36px]"
          />
        </div>

        {/* ===== Content Wrapper (Equal Padding) ===== */}
        <div className="relative z-10  grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* ===== Left Column ===== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-[1.3] tracking-wide">
              Powering Excellence
              <br />
              Across Every Industry
            </h1>

            <p className="text-base text-muted-foreground mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
              From technology to care, from innovation to impact — Enfork Group
              stands at the heart of progress, driving excellence through every
              venture we touch.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="rounded-full bg-[hsl(var(--muted))] text-foreground font-medium px-7 py-3 hover:bg-white/20 transition-colors"
              >
                Explore Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 text-foreground font-medium px-7 py-3 hover:bg-white/10 transition-colors"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>

          {/* ===== Right Image Composition ===== */}
          <div className="relative flex justify-center lg:justify-end h-[420px] sm:h-[480px] md:h-[520px] mt-12 lg:mt-0">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-[60px] left-2 sm:left-4 md:left-8 
                       w-[150px] h-[225px] sm:w-[170px] sm:h-[255px] md:w-[200px] md:h-[300px]
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
              className="absolute top-20 left-14 sm:left-20 md:left-32
                       w-[150px] h-[225px] sm:w-[170px] sm:h-[255px] md:w-[200px] md:h-[300px]
                       rounded-2xl overflow-hidden rotate-[2deg] z-[4]"
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
              className="absolute bottom-10 right-10 sm:right-16 md:right-24 
                       w-[150px] h-[225px] sm:w-[170px] sm:h-[255px] md:w-[200px] md:h-[300px]
                       rounded-2xl overflow-hidden rotate-[3deg] z-[3]"
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
              className="absolute top-6 right-2 sm:right-4 md:right-0
                       w-[150px] h-[225px] sm:w-[170px] sm:h-[255px] md:w-[200px] md:h-[300px]
                       rounded-2xl overflow-hidden rotate-[-1deg] z-[2]"
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
        <div className="relative  -mt-24 rounded-2xl overflow-hidden shadow-lg border border-white/10 z-[1]">
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
            <div className="absolute bottom-8 left-8">
              <button className="px-6 py-2 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Let’s Talk
              </button>
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
      {/* </div> */}
    </section>
  );
};

export default Hero;
