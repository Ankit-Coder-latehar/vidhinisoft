import React from "react";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";

const SecondFooter = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-white to-gray-50 px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Left Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md">
              VS
            </div>
            <span className="text-2xl font-semibold text-gray-900">
              Vidhini Soft
            </span>
          </div>

          <p className="text-gray-500 leading-relaxed max-w-sm">
            We help companies hire elite IT talent by simplifying recruitment
            and connecting skilled professionals with high-impact tech roles
            across the USA & LATAM.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center text-gray-500 hover:text-blue-600 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center text-gray-500 hover:text-pink-500 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center text-gray-500 hover:text-blue-700 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-6 relative inline-block">
            Company
            <span className="absolute left-0 -bottom-2 w-10 h-1 bg-blue-500 rounded-full"></span>
          </h4>

          <ul className="space-y-4 text-gray-500">
            <li>
              <a href="/service" className="hover:text-gray-900 hover:translate-x-2 transition inline-block">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-900 hover:translate-x-2 transition inline-block">
                About us
              </a>
            </li>
            <li>
              <a href="/career" className="hover:text-gray-900 hover:translate-x-2 transition inline-block">
                Careers
              </a>
            </li>
            <li>
              <a href="/schedule" className="hover:text-gray-900 hover:translate-x-2 transition inline-block">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-6 relative inline-block">
            Stay Connected
            <span className="absolute left-0 -bottom-2 w-10 h-1 bg-indigo-500 rounded-full"></span>
          </h4>

          <p className="text-gray-500 mb-5">
            Join our newsletter for hiring insights and tech updates.
          </p>

          <div className="relative max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white border rounded-xl px-4 py-3 pr-14 text-gray-700 outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-10 h-10 rounded-lg flex items-center justify-center hover:scale-105 transition">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-20 border-t pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Vidhini Soft. All rights reserved.
      </div>
    </footer>
  );
};

export default SecondFooter;
