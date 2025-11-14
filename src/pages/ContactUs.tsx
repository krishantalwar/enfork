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
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div
      className="min-h-screen pt-24 sm:pt-28 lg:pt-32"
      style={{
        backgroundImage: "url('./Hero background.png')",
      }}
    >
      {/* Hero Section with Background Image */}
      <div className="relative h-screen overflow-hidden section-container rounded-3xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Gradient Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-200/30 via-purple-200/20 to-transparent" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 md:p-12">
          {/* Breadcrumb */}
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
                <BreadcrumbPage className="text-white">Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
            Contact
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className=" py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Get in touch button and Heading Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
            {/* Get in touch button - 1 part */}
            <div className="flex justify-start">
              <button className="px-6 py-2 rounded-full border border-white/20 text-white hover:border-white/40 hover:bg-white/10 transition-colors animate-pulse">
                ✦ Get in touch
              </button>
            </div>

            {/* Heading - 2 parts */}
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                We're ready to
                <br />
                help you!
              </h2>
            </div>
          </div>

          {/* Form */}
          <form className="max-w-4xl mx-auto space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="First Name"
                className="h-14 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/15 transition-colors"
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="h-14 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/15 transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <Input
                type="email"
                placeholder="Your Email"
                className="h-14 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/15 transition-colors pr-12"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
            </div>

            {/* Message Field */}
            <Textarea
              placeholder="Your Message"
              rows={8}
              className="rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/15 transition-colors resize-none"
            />

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 rounded-full text-lg font-semibold bg-black text-white border border-white hover:bg-black/80 hover:border-white transition-colors"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
