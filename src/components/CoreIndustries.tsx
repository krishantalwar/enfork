import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import IndustryCard from "../components/common/IndustryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const industries = [
  {
    title: "Media & Entertainment",
    description:
      "Your brand is the story people share about you when you're not in the room.",
    image: "./Core industries section/tile 1.png",
    backContent: {
      title: "What We Do",
      points: [
        "Digital Transformation",
        "AI & Machine Learning",
        "Cloud Solutions",
        "Cybersecurity",
        "Software Development",
      ],
    },
  },
  {
    title: "Information Technology",
    description:
      "Your brand is the story people share about you when you're not in the room.",
    image: "./Core industries section/tile 2.png",

    backContent: {
      title: "Healthcare Solutions",
      points: [
        "Home Care Services",
        "Health Monitoring",
        "Wellness Programs",
        "Medical Assistance",
        "Patient Support",
      ],
    },
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
    backContent: {
      title: "Creative Services",
      points: [
        "Brand Strategy",
        "Digital Marketing",
        "Content Creation",
        "Social Media",
        "Campaign Management",
      ],
    },
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
    backContent: {
      title: "Creative Services",
      points: [
        "Brand Strategy",
        "Digital Marketing",
        "Content Creation",
        "Social Media",
        "Campaign Management",
      ],
    },
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
    backContent: {
      title: "Creative Services",
      points: [
        "Brand Strategy",
        "Digital Marketing",
        "Content Creation",
        "Social Media",
        "Campaign Management",
      ],
    },
  },
];

const CoreIndustries = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* ===== Section Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className=" text-foreground mb-4">Core Industries</h1>
          <p className="text-p text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence across multiple sectors with innovative
            solutions tailored to your needs
          </p>
        </motion.div>

        {/* ===== Industry Cards Grid ===== */}
        <Swiper
        
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
   
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <IndustryCard industry={industry} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoreIndustries;
