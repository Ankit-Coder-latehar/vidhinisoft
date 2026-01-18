import React from "react";

export default function WorkProcess() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-gray-900">
            Work Process
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We simplify access to high-caliber talent: simple, seamless, streamlined.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT MOCKUP */}
          <div className="relative">
            {/* glow */}
            <div className="absolute -inset-10 bg-blue-200 blur-[120px] rounded-full" />

            <div className="relative bg-white rounded-3xl shadow-xl p-8">

              {/* search */}
              <div className="flex items-center gap-3 mb-10">
                <span className="text-gray-400">🔍</span>
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-xs bg-blue-400 rounded-full">
                    developer
                  </span>
                  <span className="px-3 py-1 text-xs bg-blue-400 rounded-full">
                    react
                  </span>
                  <span className="px-3 py-1 text-xs bg-blue-400 rounded-full">
                    angular
                  </span>
                </div>
              </div>

              {/* cards */}
              <div className="grid grid-cols-3 gap-6">
                {/* placeholder card */}
                <div className="bg-gray-100 rounded-xl h-56" />

                {/* active card */}
                <div className="bg-white rounded-xl shadow-lg p-4 h-56">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                    <div>
                      <p className="font-medium text-sm">Marcos Herrera</p>
                      <p className="text-xs text-gray-500">
                        Senior fullstack developer
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      Angular
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      Typescript
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      Node
                    </span>
                  </div>
                  <button className="mt-auto w-full bg-gray-800 text-white text-sm py-2 rounded-lg">
                    Join my team
                  </button>
                </div>

                {/* placeholder card */}
                <div className="bg-gray-100 rounded-xl h-56" />
              </div>
            </div>
          </div>

          {/* RIGHT STEPS */}
          <div className="space-y-10 relative">

            {/* vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

            {[
              {
                title: "Conduct a discovery call",
                desc: "Initiate the process with a collaborative video call between your team and ours.",
              },
              {
                title: "Search and selection",
                desc: "Our team internally scouts and selects the best talent for your position.",
              },
              {
                title: "Technical and communication evaluations",
                desc: "Beyond technical tests, we evaluate cultural fit and communication skills.",
              },
              {
                title: "Presentation and contract execution",
                desc: "Presenting selected candidates, facilitating interviews, and managing contract execution.",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 text-white font-semibold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
