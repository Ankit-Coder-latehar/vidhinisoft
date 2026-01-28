import React from "react";

const ideas = [
  {
    title: "Strategy Before Execution",
    description:
      "Every idea starts with a clear business objective. We align marketing and product decisions with measurable outcomes.",
  },
  {
    title: "Data-Driven Creativity",
    description:
      "Creativity backed by data performs better. We combine insights, analytics, and experimentation to refine every idea.",
  },
  {
    title: "AI-Powered Optimization",
    description:
      "We leverage AI and automation to optimize campaigns, user journeys, and product experiences at scale.",
  },
  {
    title: "User-First Thinking",
    description:
      "We design ideas around real user behavior, ensuring clarity, trust, and seamless digital experiences.",
  },
];

const OurIdeas = () => {
  return (
    <section className="relative overflow-hidden py-28 bg-[#f7faff]">
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e3ecff_1px,transparent_1px),linear-gradient(to_bottom,#e3ecff_1px,transparent_1px)] bg-[size:84px_84px] opacity-40" />

      {/* Glow accents */}
      <div className="absolute top-1/4 -left-32 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-[420px] h-[420px] bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-block mb-4 text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
            Our Ideas
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Ideas That Drive <br />
            <span className="text-blue-600">Growth & Innovation</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We believe strong ideas are built at the intersection of strategy,
            technology, and user behavior. Our approach turns insight into
            scalable digital solutions.
          </p>
        </div>

        {/* Ideas Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {ideas.map((idea, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition"
            >
              {/* Accent bar */}
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-6 group-hover:w-20 transition-all duration-300" />

              <h3 className="text-xl font-bold text-slate-900">
                {idea.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {idea.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurIdeas;
