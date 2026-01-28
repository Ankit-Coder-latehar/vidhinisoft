import React from "react";

const HowWeBuild = () => {
  return (
    <section className="relative overflow-hidden py-28 bg-[#f9fbff]">
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6efff_1px,transparent_1px),linear-gradient(to_bottom,#e6efff_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

      {/* Soft gradient glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
            Our Process
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            How We Build High-Impact <br />
            <span className="text-blue-600">Software & Digital Products</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We follow a proven, transparent process that blends strategy,
            technology, and design to deliver scalable software built for
            performance and growth.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <span className="text-blue-600 text-sm font-semibold">01</span>
            <h3 className="mt-3 text-xl font-bold text-slate-900">
              Discovery & Strategy
            </h3>
            <p className="mt-3 text-slate-600">
              We deeply understand your business goals, users, and market to
              define a clear product strategy and success metrics.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <span className="text-blue-600 text-sm font-semibold">02</span>
            <h3 className="mt-3 text-xl font-bold text-slate-900">
              UX, UI & Architecture
            </h3>
            <p className="mt-3 text-slate-600">
              Our designers and engineers collaborate to create intuitive user
              experiences and scalable system architectures.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <span className="text-blue-600 text-sm font-semibold">03</span>
            <h3 className="mt-3 text-xl font-bold text-slate-900">
              Agile Development
            </h3>
            <p className="mt-3 text-slate-600">
              Using agile methodologies, we build in iterations, ensuring speed,
              flexibility, and continuous improvement.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <span className="text-blue-600 text-sm font-semibold">04</span>
            <h3 className="mt-3 text-xl font-bold text-slate-900">
              Testing, Launch & Scale
            </h3>
            <p className="mt-3 text-slate-600">
              We rigorously test, securely deploy, and continuously optimize
              your product to scale alongside your business.
            </p>
          </div>
        </div>

        {/* Bottom Trust Statement */}
        <div className="mt-20 text-center">
          <p className="text-lg text-slate-700 font-medium">
            From idea to launch — and beyond — we build software designed to
            grow, adapt, and deliver measurable impact.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowWeBuild;
