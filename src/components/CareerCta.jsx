import React from "react";

const CareerCTA = () => {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* LEFT GLOW (keep subtle) */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-white/20 rounded-full blur-3xl" />

      {/* RIGHT GREY EFFECT (replaced glow) */}
      <div className="absolute bottom-0 -right-32 w-[380px] h-[380px] bg-gray-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold tracking-wide">
            CAREERS AT VIDHINISOFT
          </span>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6 max-w-xl">
            Take your career to the next level with us
          </h2>

          <p className="text-blue-100 max-w-lg leading-relaxed mb-6 text-sm sm:text-base">
            We don’t just offer jobs — we build careers. Join a global,
            remote-first team where innovation, growth, and balance come
            together to help you succeed.
          </p>

          <p className="text-white font-semibold mb-10 text-sm">
            Let’s build something meaningful together.
          </p>

          <button className="group inline-flex items-center gap-3 bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all">
            Apply Now
            <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:translate-x-1 transition">
              →
            </span>
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Floating accent card */}
          <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 z-20">
            <p className="text-xs text-gray-500">Open Positions</p>
            <p className="text-2xl font-bold text-blue-600">25+</p>
          </div>

          {/* Image card */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
            <img
              src="https://www.shutterstock.com/image-photo/happy-mature-business-woman-entrepreneur-600nw-2350002273.jpg"
              alt="Career growth"
              className="w-[420px] h-auto object-cover"
            />
          </div>

          {/* Subtle grey decorative block */}
          <div className="absolute bottom-6 right-6 w-24 h-24 bg-gray-200/40 rounded-2xl rotate-12" />
        </div>

      </div>
    </section>
  );
};

export default CareerCTA;
