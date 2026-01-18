import React from "react";
import { Check } from "lucide-react";

const BenefitsGlofer = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* LEFT IMAGE GRID */}
        <div className="relative grid grid-cols-2 gap-8">
          {/* Large Image */}
          <div className="row-span-2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1561889601-b55700f61168?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwd29ya2luZyUyMGdpcmwlMjBpbiUyMHNvZnR3YXJlfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Right */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1663040480219-075412b6a58e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbCUyMHdvcmtpbmclMjBnaXJsJTIwaW4lMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1689848591601-1319fdc4e090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2Zlc3Npb25hbCUyMHdvcmtpbmclMjBnaXJsJTIwaW4lMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-sm tracking-widest font-semibold text-gray-400 uppercase mb-4">
            Work with us
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Benefits of becoming a VidhiniSoft
          </h2>

          {/* BENEFIT ITEM */}
          <div className="flex gap-4 mb-8">
            <div className="flex-shrink-0">
              <Check className="text-blue-400 w-6 h-6 mt-1" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Zero bureaucracy
              </h4>
              <p className="text-gray-500 mt-1 max-w-md">
                We take care of everything for you: professional support,
                human resources management, and any legal matters.
              </p>
            </div>
          </div>

          {/* BENEFIT ITEM */}
          <div className="flex gap-4 mb-8">
            <div className="flex-shrink-0">
              <Check className="text-blue-400 w-6 h-6 mt-1" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Salary in dollars
              </h4>
              <p className="text-gray-500 mt-1 max-w-md">
                Access to many opportunities with above-average salaries.
              </p>
            </div>
          </div>

          {/* BENEFIT ITEM */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Check className="text-blue-400 w-6 h-6 mt-1" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                100% Remote
              </h4>
              <p className="text-gray-500 mt-1 max-w-md">
                Work from anywhere for US-based companies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsGlofer;
