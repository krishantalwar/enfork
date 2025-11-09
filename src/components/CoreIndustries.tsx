import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import IndustryCard from "../components/common/IndustryCard";

const industries = [
  {
    title: "Media & Entertainment",
    description:
      "Your brand is the story people share about you when you're not in the room.",
    image: "./Core industries section/tile 1.png",
    backContent: {
      title:"What We Do",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreIndustries;
