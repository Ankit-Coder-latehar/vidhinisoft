import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f9fafb]">
      {/* Background curve */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[80%]" />

      <div className="relative max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-lg text-gray-800 mb-6">
              Your developers and ours. <span className="font-semibold">Integrated.</span>
            </p>

            <h1 className="text-[44px] leading-[1.15] md:text-[56px] font-extrabold text-gray-800 mb-6">
              Extend Your Team with <br />
              the Brightest Nearshore <br />
              Talent.
            </h1>

            <p className="text-lg text-gray-500 max-w-xl mb-10">
              Ready to embrace Digital Transformation. Ready to scale
              your tech projects.
            </p>

            <button className="bg-blue-400 hover:bg-[#bce600] text-black font-semibold px-8 py-4 rounded-lg transition">
              Let&apos;s work together
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            
            {/* Neon shape */}
            <div className="absolute -top-10 right-10 w-[260px] h-[260px] bg-[#C7F000] rounded-[60px] -z-10" />
            <div className="absolute -bottom-12 right-28 w-[120px] h-[120px] bg-[#eaff99] rounded-[40px] -z-10" />

            {/* Image card */}
            <div className="bg-white rounded-[32px] shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Professional working"
                className="w-[420px] h-[480px] object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
