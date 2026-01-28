import React from "react";

const OurStoryHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-24">
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5efff_1px,transparent_1px),linear-gradient(to_bottom,#e5efff_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-block mb-4 text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
            Our Story
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Built to Turn Marketing <br />
            <span className="text-blue-600">Into Measurable Revenue</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We started with a simple belief — marketing should do more than
            generate clicks. It should drive real business growth. That belief
            became the foundation of our revenue-driven marketing platform.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left – Story */}
          <div>
            <p className="text-slate-600 leading-relaxed">
              For years, teams struggled with disconnected tools, unclear
              attribution, and reports that failed to answer the most important
              question: <strong>Is marketing driving revenue?</strong>
            </p>

            <p className="mt-6 text-slate-600 leading-relaxed">
              We built our platform to unify data, align teams, and give
              marketers clear visibility into what actually works. By combining
              automation, analytics, and AI-powered insights, we help companies
              optimize every step of the customer journey.
            </p>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Today, we partner with growth-focused teams to replace guesswork
              with confidence and transform marketing into a predictable,
              scalable revenue engine.
            </p>
          </div>

          {/* Right – Stats / Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="mt-2 text-slate-600">
                Years building performance-driven marketing technology
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-3xl font-bold text-blue-600">1B+</h3>
              <p className="mt-2 text-slate-600">
                Data points analyzed to optimize growth decisions
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-3xl font-bold text-blue-600">3×</h3>
              <p className="mt-2 text-slate-600">
                Faster insights compared to traditional reporting tools
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-3xl font-bold text-blue-600">100%</h3>
              <p className="mt-2 text-slate-600">
                Focused on revenue-backed marketing outcomes
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Vision */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-10 md:p-14 text-white">
          <h3 className="text-3xl font-bold">
            Our Mission
          </h3>
          <p className="mt-4 max-w-3xl text-blue-100 text-lg">
            To help marketing teams prove impact, scale growth, and confidently
            connect every campaign to real revenue — using data, automation, and
            intelligent insights.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurStoryHero;
