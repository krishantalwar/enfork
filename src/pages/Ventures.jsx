import React from "react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { motion } from "framer-motion";

const Ventures = () => {
  return (
    <section
      id="ventures"
      style={{
        backgroundImage: "url('./Hero background.png')",
      }}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen"
    >
      <div className="section-container relative z-10">

        {/* ===== Breadcrumb ===== */}
        <div className="mb-8 md:mb-12 flex justify-start">
          <Breadcrumb>
            <BreadcrumbList className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 inline-flex">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to="/"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-white/60" />

              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  Ventures
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* ===== Page Title ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-h3 sm:text-h2 lg:text-h1 font-light text-white">
            Our Ventures
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Explore our current business verticals and growth initiatives.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Ventures;
