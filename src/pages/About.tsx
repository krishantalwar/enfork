import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AppButton from "@/components/common/AppButton";

const About = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundImage: "url('./Hero background.png')",
      }}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen"
    >
      <div className="section-container relative z-10">
        {/* ===== Section Title ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-h3 sm:text-h2 font-light text-white mb-3">
            Let’s know about us
          </h2>
        </motion.div>
      </div>

    </section>
  );
};

export default About;
