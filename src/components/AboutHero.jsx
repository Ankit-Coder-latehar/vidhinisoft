import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaXTwitter, FaTiktok } from "react-icons/fa6";

const  AboutHero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-70" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-600 bg-blue-100 rounded-full">
            🚀 VIDHINISOFT
          </span>

          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-snug max-w-lg">
            Building Smart Digital <br />
            Products for Growing <br />
            Businesses
          </h1>

          <p className="mt-5 text-gray-600 max-w-md text-base leading-relaxed">
            Vidhinisoft delivers scalable software, AI-powered solutions, and
            modern digital experiences designed to accelerate business growth.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium shadow-md hover:shadow-blue-300 transition"
            >
              Get Started
            </motion.button>

            <motion.a
              whileHover={{ x: 5 }}
              href="#services"
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              View Services →
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] bg-blue-200 rounded-full blur-3xl opacity-40 -z-10" />

          {/* Main Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Vidhinisoft Team"
            className="w-[340px] rounded-3xl shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Analytics Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="absolute left-0 top-24 bg-white rounded-2xl shadow-xl p-4 w-56"
          >
            <p className="font-semibold text-sm text-gray-700 mb-3">
              📊 Product Analytics
            </p>

            <div className="flex items-end gap-2 h-24">
              {[24, 38, 52, 70, 90].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: h }}
                  transition={{ delay: 0.15 * i, duration: 0.5 }}
                  className="w-5 bg-gradient-to-t from-blue-400 to-blue-600 rounded-md"
                />
              ))}
            </div>
          </motion.div>

          {/* Social Proof Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="absolute right-0 bottom-14 bg-white rounded-2xl shadow-xl px-4 py-3"
          >
            <p className="text-xs font-semibold text-gray-500 mb-2">
              Trusted Platforms
            </p>

            <div className="flex gap-3 text-blue-600 text-lg">
              <FaInstagram />
              <FaFacebookF />
              <FaXTwitter />
              <FaTiktok />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
