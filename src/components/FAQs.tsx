import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import AppButton from "@/components/common/AppButton";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Enfork Group?",
    answer:
      "Enfork Group is a multi-industry organization housing diverse businesses across technology, marketing, healthcare, education, entertainment, finance, and social care. Each sub-brand operates independently while sharing the same core values of impact, innovation, and excellence.",
  },
  {
    question: "How do the sub-brands work together?",
    answer:
      "Our sub-brands collaborate through shared expertise, resources, and best practices while maintaining their unique identities. This synergy allows us to deliver comprehensive solutions across multiple sectors.",
  },
  {
    question: "What industries does Enfork Group serve?",
    answer:
      "We serve a diverse range of industries including technology, healthcare, education, entertainment, finance, marketing, and social care. Each sector benefits from our specialized expertise and innovative approaches.",
  },
  {
    question: "Are your services available internationally?",
    answer:
      "Yes, our services are available internationally. We work with clients across multiple countries and regions, adapting our solutions to meet local needs while maintaining global standards of excellence.",
  },
];

const QuestionIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <circle cx="20" cy="20" r="20" fill="#404040" />
    <text
      x="20"
      y="28"
      textAnchor="middle"
      fill="white"
      fontSize="24"
      fontWeight="bold"
    >
      ?
    </text>
  </svg>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-black py-28">
      <div className="section-container">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              <h2 className="text-h2 font-light leading-3 text-foreground tracking-wide mb-12">
                FAQs
              </h2>

              <p className="text-sm text-foreground max-w-md  ">
                Find quick answers about our brands, services, and how we can
                help you succeed. Clear, simple, and always at your fingertips.
              </p>

              <div className="space-y-2 ">
                <p className="text-white text-sm font-light">
                  Still Have Questions?
                  <br />
                  We're here to assist you — with clarity, confidence, and care.
                </p>
              </div>

              <AppButton label="Contact us" isBlack={true} icon={true} />
            </div>

            {/* Right Column - FAQ Items */}
            <div className="space-y-4 -mt-10">
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-start gap-4 text-left group"
                  >
                    <img
                      src="./Enfork icons/icons8-question-100.png"
                      alt="question"
                      className="w-[40px]"
                    />
                    <div className="flex-1">
                      <h3 className="text-h6 text-foreground font-normal group-hover:text-gray-300 transition-colors duration-200">
                        {item.question}
                      </h3>
                      {openIndex === index && (
                        <p className="text-sm text-foreground mt-4 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                          {item.answer}
                        </p>
                      )}
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-white transition-transform duration-300 flex-shrink-0 mt-1 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ====== CTA Card ====== */}
        <div
          style={{ backgroundImage: "url('./talk oppurnity bg.png')" }}
          className="relative    shadow-2xl overflow-visible flex flex-col md:flex-row items-center justify-between px-8 md:px-16 h-[300px] mt-64 bg-cover bg-center bg-no-repeat"
        >
          {/* ===== Left Content ===== */}
          <div className="relative z-10 w-full md:w-2/3  space-y-5 text-foreground">
            <h2 className="text-h3">We’re ready to talk opportunities</h2>
            <p className="text-md max-w[400px] leading-relaxed ">
              Book a free consultation and discover how our brands can help you
              grow, innovate, and succeed. No obligations, just expert guidance.
            </p>

            <AppButton
              label="Get a Free Strategy Call"
              isBlack={true}
              icon={true}
            />
          </div>

          {/* ===== Right Side: Man Image ===== */}
          <div className="relative w-full h-full  md:w-1/3 flex justify-center md:justify-end">
            <motion.img
              src="/CTA image.png"
              alt="Man making call gesture"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-0 right-0 w-[250px] md:w-[400px] h-auto z-20 drop-shadow-2xl"
            />

            {/* Floating Phone Icons Above the Image
          <motion.img
            src="/images/phone-icon.svg"
            alt="Floating phone icon"
            className="absolute -top-10 right-16 w-10 opacity-25 z-30"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          />
          <motion.img
            src="/images/phone-icon.svg"
            alt="Floating phone icon"
            className="absolute bottom-10 right-28 w-8 opacity-20 z-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
