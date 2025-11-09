const IndustryCard = ({ industry, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasBg, setHasBg] = useState(true);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
        onMouseEnter={() => setHasBg(false)}
        onMouseLeave={() => setHasBg(true)}
        style={{
          background: hasBg
            ? "url('./Core industries section/card bg.png') center/cover no-repeat"
            : "#1b1b1b", // plain background on hover
          transition: "all 0.6s ease-in-out",
          height: "400px",
          borderRadius: "16px",
        }}
      className="rounded-2xl sm:rounded-[20px] bg-center h-full"
    >
      <div className="relative h-full min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:h-[460px] xl:h-[500px] perspective-1000">
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* ===== FRONT SIDE ===== */}
          <div
            className="absolute inset-0 backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div
              className="flex flex-col justify-between group relative 
                         border border-white/10 rounded-2xl sm:rounded-[20px] 
                         p-5 sm:p-6 lg:p-7
                         shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                         hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]
                         transition-all duration-300
                         h-full"
            >
              {/* ===== Card Header ===== */}
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] text-foreground font-light leading-snug pr-2">
                  {industry.title}
                </h3>
                <button
                  onClick={handleFlip}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                  aria-label="Flip card"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </button>
              </div>

              <div className="flex flex-col flex-grow justify-end">
                {/* ===== Description ===== */}
                <p className="text-p text-foreground font-light leading-relaxed mb-4 sm:mb-6">
                  {industry.description}
                </p>

                {/* ===== Image ===== */}
                <div className="relative w-full rounded-xl overflow-hidden">
                  <img
                    src={industry.image}
                    alt={
                      typeof industry.title === "string"
                        ? industry.title
                        : "Industry image"
                    }
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===== BACK SIDE ===== */}
          <div
            className="absolute inset-0 backface-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div
              className="flex flex-col group relative 
                         border border-white/10 rounded-2xl sm:rounded-[20px] 
                         p-5 sm:p-6 lg:p-7
                         shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                         bg-background/95 backdrop-blur-sm
                         h-full"
            >
              {/* ===== Back Header ===== */}
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] text-foreground font-light leading-snug pr-2">
                  {industry.backContent?.title || "Learn More"}
                </h3>
                <button
                  onClick={handleFlip}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                  aria-label="Flip back"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </button>
              </div>

              {/* ===== Back Content ===== */}
              <div className="flex flex-col space-y-4">
                {industry.backContent?.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-foreground font-light leading-relaxed">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* ===== CTA Button ===== */}
              <div className="mt-auto pt-6">
                <button className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


Hero section

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