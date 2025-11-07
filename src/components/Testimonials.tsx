import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
    <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 text-white text-center overflow-hidden">
      {/* ====== Background Visuals ====== */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 -z-10" />
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* ====== Section Heading ====== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Testimonials
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Our relationships define us. These reflections highlight the care,
          craftsmanship, and dedication we bring to every brand, every project,
          and every individual we serve.
        </p>
      </motion.div>

      {/* ====== Customer Count ====== */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <p className="text-lg font-medium text-gray-300">
          <span className="text-white font-bold text-xl">200+</span> Satisfied
          Customers
        </p>
        <div className="flex -space-x-2">
          <img
            src="/images/avatar1.png"
            alt="user1"
            className="w-8 h-8 rounded-full border border-white/10"
          />
          <img
            src="/images/avatar2.png"
            alt="user2"
            className="w-8 h-8 rounded-full border border-white/10"
          />
          <img
            src="/images/avatar3.png"
            alt="user3"
            className="w-8 h-8 rounded-full border border-white/10"
          />
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sm">
            +
          </div>
        </div>
      </div>

      {/* ====== Testimonials Carousel ====== */}
      <div className="relative mt-16 flex items-center justify-center">
        {/* Left Dim Cards */}
        <div className="absolute left-10 w-[250px] h-[120px] bg-white/5 rounded-2xl opacity-20 blur-sm hidden md:block" />
        <div className="absolute right-10 w-[250px] h-[120px] bg-white/5 rounded-2xl opacity-20 blur-sm hidden md:block" />

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full md:w-[600px] text-left shadow-xl"
        >
          <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />

          <h3 className="text-xl font-semibold mb-2">Problem Solvers</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            With having a fleet business you need to have consistent leads and
            thanks to Pav and team for getting this sorted. Empty garage looks
            perfect!!
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-yellow-400">
              <span className="text-white font-semibold">4.0</span>
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-400 text-sm italic">
              – Omega Auto Rentals
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
