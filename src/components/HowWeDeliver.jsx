import React from "react";

const HowWeDeliver = () => {
  return (
    <section className="relative overflow-hidden py-28 bg-[#f7faff]">
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e3ecff_1px,transparent_1px),linear-gradient(to_bottom,#e3ecff_1px,transparent_1px)] bg-[size:84px_84px] opacity-40" />

      {/* Soft gradient accents */}
      <div className="absolute top-1/4 -left-32 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-[420px] h-[420px] bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
            Delivery Framework
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            How We Deliver Reliable, <br />
            <span className="text-blue-600">Scalable Results</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Delivery is where strategy becomes impact. Our structured approach
            ensures on-time execution, transparency, and measurable outcomes at
            every stage.
          </p>
        </div>

        {/* Delivery Steps */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
              01
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Structured Planning
            </h3>
            <p className="mt-3 text-slate-600">
              We break down strategy into clear milestones, timelines, and
              responsibilities to ensure alignment from day one.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
              02
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Agile Execution
            </h3>
            <p className="mt-3 text-slate-600">
              Work is delivered in focused sprints with continuous feedback,
              allowing us to adapt quickly without losing momentum.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
              03
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Quality & Validation
            </h3>
            <p className="mt-3 text-slate-600">
              Every release goes through rigorous testing and performance checks
              to ensure stability, security, and quality.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
              04
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Transparent Communication
            </h3>
            <p className="mt-3 text-slate-600">
              Regular updates, shared dashboards, and clear reporting keep all
              stakeholders informed and confident.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
              05
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Secure Deployment
            </h3>
            <p className="mt-3 text-slate-600">
              We deploy using best practices for security, scalability, and
              performance across modern cloud infrastructure.
            </p>
          </div>

          {/* Step 6 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
              06
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Ongoing Optimization
            </h3>
            <p className="mt-3 text-slate-600">
              Post-launch, we monitor performance, gather insights, and
              continuously improve to maximize long-term impact.
            </p>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 font-medium">
            Our delivery model is built to reduce risk, increase speed, and
            ensure every solution delivers real, measurable value.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowWeDeliver;
