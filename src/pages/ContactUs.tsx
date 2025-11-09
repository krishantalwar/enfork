import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AppButton from "@/components/common/AppButton";

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      style={{
        backgroundImage: "url('./Hero background.png')",
      }}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-cover bg-center bg-no-repeat"
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
            Let’s Build Something Great
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Have an idea or project in mind? Fill out the form below and our
            team will reach out soon.
          </p>
        </motion.div>

        {/* ===== Form Container ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-transparent border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-12 shadow-[0_0_25px_rgba(255,255,255,0.05)]">
            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 bg-[url('/brand-icons-bg.png')] bg-cover bg-center opacity-[0.07] rounded-2xl pointer-events-none"
              aria-hidden="true"
            ></div>

            {/* ===== Form ===== */}
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-white/80 text-sm font-medium"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-white/20"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-white/80 text-sm font-medium"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-white/20"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-white/80 text-sm font-medium"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-white/20 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center">
                <AppButton
                  label="Send Message"
                  icon={<Send className="w-4 h-4" />}
                  isBlack={false}
                />
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-0"></div>
    </section>
  );
};

export default ContactUs;
