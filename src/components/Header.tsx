import { motion } from "framer-motion";
import { Button } from "./ui/button";
import AppButton from "@/components/common/AppButton";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 "
    >
      {/* === Inner Container === */}
      <div className="section-container  flex items-center justify-between py-4 md:py-6 relative">
        {/* === Logo === */}
        <a href="#" className="flex items-center gap-2 select-none">
          <img
            src="./logo bg 2.png"
            alt="Enfork"
            className="w-[130px] h-auto object-contain"
          />
        </a>

        {/* === Centered Navigation === */}
        <nav className="hidden md:flex absolute inset-x-0 top-1/2 -translate-y-1/2 items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-1 py-1">
            <a
              href="#"
              className="px-5 py-2 text-sm rounded-full bg-white/20 text-white font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-5 py-2 text-sm rounded-full text-gray-300 hover:bg-white/10 transition-colors"
            >
              About us
            </a>
            <a
              href="#services"
              className="px-5 py-2 text-sm rounded-full text-gray-300 hover:bg-white/10 transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="px-5 py-2 text-sm rounded-full text-gray-300 hover:bg-white/10 transition-colors"
            >
              Projects
            </a>
          </div>
        </nav>

        {/* === Contact Button === */}
        <div className="flex items-center gap-3">
        <AppButton label="Contact us" isBlack={true} icon={true} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
