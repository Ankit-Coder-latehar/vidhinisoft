import React, { useState } from "react";

const steps = {
  acquisition: {
    title: "Acquisition",
    desc: "Get discovered by high-intent users using SEO, paid ads, and AI-driven search."
  },
  pipeline: {
    title: "Pipeline",
    desc: "Turn traffic into qualified leads with CRO, landing pages, and automation."
  },
  revenue: {
    title: "Revenue",
    desc: "Convert leads into measurable revenue with attribution and optimization."
  },
  intelligence: {
    title: "Intelligence",
    desc: "Use AI insights, analytics, and data to continuously improve performance."
  }
};

const Hero = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#f6f9fc]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-[#0f172a]">
            Your Revenue <br />
            Growth Partner in <br />
            the AI Era
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            For marketing teams who need to prove revenue impact, not just
            report performance. WebFX's revenue-focused framework connects
            expert execution, data, and strategy to drive measurable growth in
            2026 and beyond.
          </p>

          {/* CTA Button Only */}
          <div className="mt-10">
            <button className="bg-[#0f172a] text-white px-10 py-4 font-semibold rounded-lg shadow-md hover:bg-[#020617] hover:scale-[1.02] transition">
              Get My Free Proposal
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">
          
          {/* Ring */}
          <div className="relative w-[420px] h-[420px] rounded-full flex items-center justify-center">

            {/* Acquisition */}
            <div
              onMouseEnter={() => setActive("acquisition")}
              onMouseLeave={() => setActive(null)}
              className="absolute top-2 left-1/2 -translate-x-1/2 w-[260px] h-[90px] bg-blue-500 rounded-full text-white font-semibold flex items-center justify-center rotate-[-10deg] cursor-pointer"
            >
              Acquisition
            </div>

            {/* Pipeline */}
            <div
              onMouseEnter={() => setActive("pipeline")}
              onMouseLeave={() => setActive(null)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-[90px] h-[260px] bg-teal-400 rounded-full text-white font-semibold flex items-center justify-center rotate-[10deg] cursor-pointer"
              style={{ writingMode: "vertical-rl" }}
            >
              Pipeline
            </div>

            {/* Revenue */}
            <div
              onMouseEnter={() => setActive("revenue")}
              onMouseLeave={() => setActive(null)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[260px] h-[90px] bg-green-400 rounded-full text-white font-semibold flex items-center justify-center rotate-[10deg] cursor-pointer"
            >
              Revenue
            </div>

            {/* Intelligence */}
            <div
              onMouseEnter={() => setActive("intelligence")}
              onMouseLeave={() => setActive(null)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-[90px] h-[260px] bg-purple-500 rounded-full text-white font-semibold flex items-center justify-center rotate-[-10deg] cursor-pointer"
              style={{ writingMode: "vertical-rl" }}
            >
              Intelligence
            </div>

            {/* Center */}
            <div className="absolute w-56 h-56 bg-white rounded-full shadow-xl flex flex-col items-center justify-center text-center z-10">
              <span className="text-sm font-semibold text-slate-500">
                WebFX
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Revenue Engine
              </h3>
              <p className="text-blue-600 font-semibold mt-1">
                15% Higher Lead Growth
              </p>

              <button className="mt-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:scale-105 transition">
                ▶
              </button>
            </div>
          </div>

          {/* Tooltip */}
          {active && (
            <div className="absolute right-[-260px] top-1/2 -translate-y-1/2 w-64 bg-white shadow-xl rounded-xl p-5 border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900">
                {steps[active].title}
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                {steps[active].desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
