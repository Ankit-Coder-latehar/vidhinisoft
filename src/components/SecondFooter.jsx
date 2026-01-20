import React from "react";
import { ArrowRight } from "lucide-react";

const SecondFooter = () => {
  return (
    <footer className="w-full bg-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center font-bold text-white">
              VS
            </div>
            <span className="text-2xl font-semibold text-gray-900">
              Vidhini Soft
            </span>
          </div>

          <p className="text-gray-500 leading-relaxed max-w-sm">
            We're specialists in IT recruitment and we optimize the search
            processes of companies. We connect Latin American IT talent with
            companies in the USA or LATAM that need to fill specific positions
            for projects related to the technology area.
          </p>

          <div className="flex gap-4 mt-8 text-gray-500">
            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              f
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              ⦿
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              in
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-6">
            About Vidhini 
          </h4>
          <ul className="space-y-4 text-gray-500">
            <li className="hover:text-gray-900 cursor-pointer">
              Services
            </li>
            <li className="hover:text-gray-900 cursor-pointer">
              Technologies
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-6">
            Follow the Best
          </h4>

          <div className="relative max-w-sm">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-100 rounded-md px-4 py-3 pr-12 text-gray-700 outline-none focus:ring-2 focus:ring-lime-400"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-lime-400">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SecondFooter;
