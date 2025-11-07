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
      className="relative   bg-black overflow-hidden bg-backgroud"
    >
      <div className="container">
        {/* ===== Heading Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light text-foreground mb-4">
            Core Industries
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Empowering businesses across technology, marketing, finance, and
            services with innovative solutions, expert strategies, and
            measurable impact.
          </p>
        </motion.div>

        {/* ===== Swiper Slider Section ===== */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative pb-16 !px-0" // ✅ No padding on sides
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col justify-between group relative bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)] 
                           border border-white/10 rounded-[20px] p-6 md:p-8
                           backdrop-blur-[12px] shadow-[0_4px_30px_rgba(0,0,0,0.3)]
                           hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]
                           transition-all duration-300 h-[550px]"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl md:text-4xl text-foreground font-light leading-snug">
                    {industry.title}
                  </h3>
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>

                <div>
                  {/* Description */}
                  <p className="text-sm md:text-base text-foreground font-light leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  {/* Image */}
                  <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoreIndustries;
