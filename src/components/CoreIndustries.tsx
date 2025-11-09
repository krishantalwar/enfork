import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const industries = [
  {
    title: "Media & Entertainment",
    description:
      "Your brand is the story people share about you when you're not in the room.",
    image: "./Core industries section/tile 1.png",
  },
  {
    title: "Information Technology",
    description:
      "Your brand is the story people share about you when you're not in the room.",
    image: "./Core industries section/tile 2.png",
  },
  {
    title: (
      <>
        NDIS & <br /> Healthcare
      </>
    ),
    description:
      "Your brand is the story people share about you when you're not in the room.",
    image: "./Core industries section/tile 3.png",
  },
  {
    title: "Finance & Consulting",
    description:
      "Your brand is the story people share about you when you're not in the room.",
    image: "./Core industries section/tile 1.png",
  },
];

const CoreIndustries = () => {
  return (
    <section
      id="industries"
      className="relative bg-black overflow-hidden bg-background py-8 sm:py-12 md:py-14 lg:py-16"
    >
      <div className="section-container px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto">
        {/* ===== Heading Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2 className="text-h2 font-light text-foreground mb-3 sm:mb-4 leading-tight px-4">
            Core Industries
          </h2>
          <p className="text-foreground w-full sm:max-w-2xl mx-auto text-p  leading-relaxed">
            Empowering businesses across technology, marketing, finance, and
            services with innovative solutions, expert strategies, and
            measurable impact.
          </p>
        </motion.div>

        {/* ===== Swiper Slider Section ===== */}
        <div className="max-md:px-0 relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              enabled: true,
            }}
            breakpoints={{
              640: { 
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              768: { 
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="relative pb-12 sm:pb-14 md:pb-16 
            [&_.swiper-button-next]:hidden 
            [&_.swiper-button-prev]:hidden 
            md:[&_.swiper-button-next]:flex 
            md:[&_.swiper-button-prev]:flex 
            [&_.swiper-button-next]:w-10
            [&_.swiper-button-prev]:w-10
            [&_.swiper-button-next]:h-10
            [&_.swiper-button-prev]:h-10
            [&_.swiper-button-next]:bg-white/10
            [&_.swiper-button-prev]:bg-white/10
            [&_.swiper-button-next]:backdrop-blur-sm
            [&_.swiper-button-prev]:backdrop-blur-sm
            [&_.swiper-button-next]:border
            [&_.swiper-button-prev]:border
            [&_.swiper-button-next]:border-white/20
            [&_.swiper-button-prev]:border-white/20
            [&_.swiper-button-next]:rounded-full
            [&_.swiper-button-prev]:rounded-full
            [&_.swiper-button-next]:text-white 
            [&_.swiper-button-prev]:text-white
            [&_.swiper-button-next]:after:text-sm
            [&_.swiper-button-prev]:after:text-sm
            [&_.swiper-button-next]:after:font-bold
            [&_.swiper-button-prev]:after:font-bold
            [&_.swiper-button-next]:-right-14
            [&_.swiper-button-prev]:-left-14
            [&_.swiper-button-next]:hover:bg-white/20
            [&_.swiper-button-prev]:hover:bg-white/20
            [&_.swiper-pagination-bullet]:bg-white/50 
            [&_.swiper-pagination-bullet-active]:bg-white"
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  style={
                    index === 0
                      ? { background: "#1b1b1b" }
                      : {
                          backgroundImage:
                            "url('./Core industries section/card bg.png')",
                        }
                  }
                  className="rounded-2xl sm:rounded-[20px] bg-center bg-cover h-full"
                >
                  <div
                    className="flex flex-col justify-between group relative 
                             border border-white/10 rounded-2xl sm:rounded-[20px] 
                             p-5 sm:p-6 lg:p-7
                             backdrop-blur-[12px] 
                             shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                             hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]
                             transition-all duration-300
                             h-full min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:h-[500px]"
                  >
                    {/* ===== Card Header ===== */}
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <h3 className="text-2xl sm:text-3xl lg:text-[32px] text-foreground font-light leading-snug pr-2">
                        {industry.title}
                      </h3>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition cursor-pointer">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow justify-end">
                      {/* ===== Description ===== */}
                      <p className="text-p text-foreground font-light leading-relaxed mb-4 sm:mb-6">
                        {industry.description}
                      </p>

                      {/* ===== Image ===== */}
                      <div className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] rounded-xl overflow-hidden">
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
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CoreIndustries;
