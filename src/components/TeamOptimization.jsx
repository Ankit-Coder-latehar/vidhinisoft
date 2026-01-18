import React from "react";

const TeamOptimization = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            AI in Team Optimization. <br /> Our experience.
          </h2>

          <p className="text-gray-500 mb-14 max-w-xl">
            We leverage these technologies internally to improve our processes:
          </p>

          {/* LIST */}
          <div className="space-y-12 relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

            {/* Item 1 */}
            <div className="flex gap-6 relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold text-lg z-10">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  AI-Powered Matching.
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-md">
                  We use an algorithm to match the perfect professionals with
                  the right project based on our clients' needs.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-6 relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold text-lg z-10">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Predictive Talent Insights.
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-md">
                  We gain valuable insights into candidate behavior and project
                  trends to make decisions during our support process.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-6 relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold text-lg z-10">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  AI-Powered ATS Integration.
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-md">
                  We adopt an applicant tracking system (ATS) with AI-powered
                  resume/CV analysis tools to streamline candidate and skill
                  selection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://diggrowth.com/wp-content/uploads/2025/05/ai_driven_reporting_and_dashboards_1x_1.webp"
              alt="AI Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOptimization;
