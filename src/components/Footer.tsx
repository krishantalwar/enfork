import React from "react";
import {
  Mail,
  MapPin,
  Phone,

} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative text-white border-t border-white/10 mt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./footer background.png')" }}
    >
      <div className="section-container">
        <div className=" py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* ====== Left Column: Brand & Subscribe ====== */}
          <div className="col-span-2">
            <img src="./logo bg 3.png" alt="logo" className="w-[200px]" />

            <p className="text-foreground w-80 text-h6 mt-10 leading-tight">
              Get the latest inspiration & insights
            </p>

            {/* Email Input + Button */}
            <div className="flex items-center bg-white/10 border border-white/10 rounded-full overflow-hidden w-full max-w-sm backdrop-blur-sm mt-4">
              <input
                type="email"
                placeholder="Enter Your Email For latest updates"
                className="flex-1 px-4 py-2 bg-white font-light text-p text-gray-200 placeholder-gray-400 outline-none"
              />
              <button className="px-5 py-2 bg-white text-black font-medium text-p2 hover:bg-gray-200 transition-all">
                Subscribe
              </button>
            </div>

            <p className="text-gray-500 text-xs mt-8">
              © 2025 Enfork. All Rights Reserved.
            </p>
          </div>

          {/* ====== Middle Column: Quick Links ====== */}
          <div>
            <h4 className="text-p3 font-semibold mb-4 text-gray-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-p3 ">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all font-light"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all font-light"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all font-light"
                >
                  Our Brands
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-all font-light"
                >
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
                <img
                  className="w-[20px]"
                  src="./footer icons/Icon_19_.svg"
                  alt="mail"
                />
                info@enfork.com.au
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <img
                  className="w-[20px]"
                  src="./footer icons/Vector.svg"
                  alt="location"
                />
                13 Nerang st, Southport QLD 4215
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <img
                  className="w-[20px]"
                  src="./footer icons/Group 1000004278.svg"
                  alt="phone"
                />
                +61 460777779
              </div>
            </div>
          </div>
        </div>

        {/* ====== Bottom Row: Social Media ====== */}
        <div className="flex justify-end max-w-7xl mx-auto px-6 md:px-12 pb-6">
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="text-p  text-foreground">Follow us on.</span>
            <a href="#" className="hover:text-white transition-all">
              <img
                className="w-[16px]"
                src="./footer icons/Group 1762097.svg"
                alt="Instagram"
              />
            </a>
            
            <a href="#" className="hover:text-white transition-all">
             <img
                className="w-[16px]"
                src="./footer icons/Group 1762099.svg"
                alt="Instagram"
              />
            </a>
            <a href="#" className="hover:text-white transition-all">
            <img
                className="w-[16px]"
                src="./footer icons/Group 1762098.svg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
