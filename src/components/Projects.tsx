import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sunlife Homes",
    category: ["Branding", "Marketing"],
    image: "/CaseStudy images/Subtract-1.png",
    logo: "/images/sunlife-logo.png",
    description:
      "Crafted a sleek and modern logo for Sunlife Homes that reflects their commitment to excellence in the real estate housing industry.",
    metrics: [
      { label: "Traffic", value: "+65%" },
      { label: "Engagement", value: "+80%" },
    ],
  },
  {
    id: 2,
    title: "HRT College",
    category: ["Facebook Ads", "Google Ads"],
    image: "/CaseStudy images/Subtract.png",
    logo: "/images/hrt-logo.png",
    description:
      "We launched targeted Google and Facebook Ads to boost enrollment and brand visibility for HRT College.",
    metrics: [
      { label: "Traffic", value: "+25%" },
      { label: "Inquiries", value: "+40%" },
    ],
  },
];

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-white">
      {/* ===== Header ===== */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Our Projects
        </h2>
        <p className="text-gray-400 mt-4 md:mt-0 max-w-md leading-relaxed text-sm md:text-base">
          Read how we’ve helped some of the biggest brands transform their
          business
        </p>
      </div>

      {/* ===== Projects Grid ===== */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            {/* Image Card */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                <img
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  className="h-10 md:h-12 object-contain"
                />
              </div>

              {/* Arrow Button */}
              <button className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Project Details */}
            <div className="mt-5">
              {/* Category Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.category.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-lg">
                {project.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between max-w-xs">
                {project.metrics.map((metric, i) => (
                  <div key={i}>
                    <p className="text-lg font-semibold">{metric.value}</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                      {metric.label}
                    </p>
                  </div>
                ))}
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white flex items-center gap-1 transition-all"
                >
                  Read More <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
