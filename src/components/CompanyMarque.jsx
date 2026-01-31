import React from "react";

const RevenueComparison = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">
      
      {/* Dotted curve background */}
      <svg
        className="absolute top-20 left-0 w-full h-64 opacity-40"
        viewBox="0 0 1200 200"
        fill="none"
      >
        <path
          d="M0 100 C 200 20, 400 180, 600 100 S 1000 20, 1200 100"
          stroke="#94d3c7"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Move From Marketing that Reports Clicks to
          <br />
          <span className="text-blue-600">
            Marketing that Reports Revenue
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-4xl mx-auto text-lg text-slate-600">
          Traditional marketing optimizes for channel metrics. Revenue marketing
          optimizes for business impact. Connected revenue marketing through
          RevenueCloudFX leads to{" "}
          <strong className="text-slate-900">
            1.8X faster lead growth than industry average.
          </strong>
        </p>
      </div>

      {/* Comparison */}
      <div className="relative max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 px-6 items-center">
        
        {/* LEFT – Traditional */}
        <div className="relative text-center">
          
          {/* Funnel */}
          <div className="relative mx-auto w-48">
            <div className="h-20 bg-gray-400 rounded-t-full" />
            <div className="h-20 bg-gray-500 w-40 mx-auto" />
            <div className="h-20 bg-gray-600 w-28 mx-auto" />
            <div className="h-16 bg-gray-700 w-16 mx-auto rounded-b-full" />

            {/* Cracks */}
            <div className="absolute inset-0 pointer-events-none">
              <svg viewBox="0 0 100 300" className="w-full h-full">
                <path
                  d="M50 0 L40 60 L60 120 L45 180 L55 260"
                  stroke="#1f2937"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          <h3 className="mt-8 text-xl font-bold text-slate-700">
            Traditional Digital Marketing
          </h3>

          <p className="mt-3 text-slate-500 max-w-sm mx-auto">
            Siloed marketing and sales data leads to a broken, inefficient funnel
            that leads to decisions based on <em>feel</em> rather than true ROI.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-blue-700">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-6 bg-blue-700 rounded-full" />
        </div>

        {/* RIGHT – Revenue Marketing */}
        <div className="relative text-center">
          
          {/* Funnel */}
          <div className="relative mx-auto w-48">
            <div className="h-20 bg-blue-500 rounded-t-full flex items-center justify-center text-white text-sm font-semibold">
              Brand Visibility
            </div>
            <div className="h-20 bg-teal-400 w-40 mx-auto flex items-center justify-center text-white text-sm font-semibold">
              Website Traffic
            </div>
            <div className="h-20 bg-green-400 w-28 mx-auto flex items-center justify-center text-white text-sm font-semibold">
              Qualified Leads
            </div>
            <div className="h-16 bg-green-600 w-16 mx-auto rounded-b-full flex items-center justify-center text-white text-xs font-semibold">
              Sales
            </div>
          </div>

          <p className="mt-4 text-sm font-semibold text-teal-500">
            Revenue-Backed Optimization
          </p>

          <h3 className="mt-6 text-xl font-bold text-slate-900">
            Revenue Marketing
          </h3>

          <p className="mt-3 text-slate-600 max-w-sm mx-auto">
            Vidhini Soft connects your data through{" "}
            <strong>Revenue Vidhini Soft</strong> to make revenue-backed marketing
            decisions that reduce cost per lead and maximize ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevenueComparison;
