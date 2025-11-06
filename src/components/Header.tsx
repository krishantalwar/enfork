import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md"
    >
      {/* === Inner Container === */}
      <div className="container flex items-center justify-between py-4 md:py-6 relative">
        
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
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-5 py-2 text-sm flex items-center gap-2 
                       border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            <span>Contact us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
