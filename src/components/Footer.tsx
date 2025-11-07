import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative bg-gradient-to-r from-[#0b0b0b] to-[#161616] text-white border-t border-white/10 mt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./footer background.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ====== Left Column: Brand & Subscribe ====== */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">En</span>
            <span className="text-gray-400">fork</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Get the latest inspiration & insights
          </p>

          {/* Email Input + Button */}
          <div className="flex items-center bg-white/10 border border-white/10 rounded-full overflow-hidden w-full max-w-sm backdrop-blur-sm">
            <input
              type="email"
              placeholder="Enter Your Email For latest updates"
              className="flex-1 px-4 py-2 bg-transparent text-sm text-gray-200 placeholder-gray-400 outline-none"
            />
            <button className="px-5 py-2 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-all">
              Subscribe
            </button>
          </div>

          <p className="text-gray-500 text-xs mt-8">
            © 2025 Enfork. All Rights Reserved.
          </p>
        </div>

        {/* ====== Middle Column: Quick Links ====== */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-200">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-all">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-all">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-all">
                Our Brands
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-all">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* ====== Right Column: Get in Touch ====== */}
        <div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 space-y-4 max-w-sm">
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Get in Touch
            </h4>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <Mail className="w-4 h-4 text-gray-400" />
              info@enfork.com.au
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <MapPin className="w-4 h-4 text-gray-400" />
              13 Nerang st, Southport QLD 4215
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <Phone className="w-4 h-4 text-gray-400" />
              +61 460777779
            </div>
          </div>
        </div>
      </div>

      {/* ====== Bottom Row: Social Media ====== */}
      <div className="flex justify-end max-w-7xl mx-auto px-6 md:px-12 pb-6">
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <span className="text-gray-500">Follow us on.</span>
          <a href="#" className="hover:text-white transition-all">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <Youtube className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
