import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import TestimonialSlider from "../components/common/TestimonialSlider";
const testimonials = [
  {
    title: "Problem Solvers",
    review:
      "With having a fleet business you need to have consistent leads and thanks to Pav and team for getting this sorted. Empty garage looks perfect!!",
    rating: 4.0,
    author: "Omega Auto Rentals",
  },
  {
    title: "One Stop for All Solutions",
    review:
      "They understood our vision from day one and delivered beyond expectations. The campaign results were simply outstanding.",
    rating: 4.5,
    author: "BrightPath Agency",
  },
  {
    title: "Creative & Professional",
    review:
      "Their ideas are always fresh and effective. Loved working with such a talented and responsive team!",
    rating: 5.0,
    author: "Nova Digital",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-10 md:py-16 lg:py-24 text-white text-center overflow-hidden">
      {/* background images */}
      <div className="absolute top-0 -left-10 lg:-left-24 w-[150px] lg:w-[350px]">
        <motion.img
          src="./Enfork page bg elemts/bg object 6.png"
          alt="background-images"
          className="w-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
      <div className="absolute top-64 -right-10 lg:-right-24 w-[150px] lg:w-[350px]">
        <motion.img
          src="./Enfork page bg elemts/bg object 8.png"
          alt="background-images"
          className="w-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative  md:px-6 lg:px-0">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 md:space-y-4 section-container"
          >
            <h1 className="tracking-tight">Testimonials</h1>
            <p className="max-w-2xl mx-auto  leading-relaxed">
              Our relationships define us. These reflections highlight the care,
              craftsmanship, and dedication we bring to every brand, every
              project, and every individual we serve.
            </p>
          </motion.div>
          <div
            style={{
              backgroundImage: "url('./testtimonial bg.png')",
            }}
            className="py-8  md:py-10 lg:py-12 bg-cover bg-left-top bg-no-repeat mt-4 md:mt-6 lg:mt-4"
          >
            <div className="section-container w-full ">
              {/* ====== Customer Count ====== */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8 lg:mt-10">
                <p className="text-base md:text-lg font-medium text-gray-300">
                  <span className="text-white font-bold text-lg md:text-xl">
                    200+
                  </span>{" "}
                  Satisfied Customers
                </p>
                <div className="flex -space-x-2">
                  <img
                    src="/testimonial images/1.png"
                    alt="user1"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10"
                  />
                  <img
                    src="/testimonial images/2.png"
                    alt="user2"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10"
                  />
                  <img
                    src="/testimonial images/3.png"
                    alt="user3"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10"
                  />
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs md:text-sm">
                    +
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center overflow-hidden w-[100%] md:[60%] lg:w-[700px] mx-auto cl:p-12 ">
                {/* Main Card */}
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
