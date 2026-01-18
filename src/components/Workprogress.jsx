import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".wp-heading", { y: 30, opacity: 0, duration: 0.6 })
        .from(".wp-subheading", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".wp-mockup", { x: -60, opacity: 0, scale: 0.95, duration: 0.9 }, "-=0.2")
        .from(".wp-card", { y: 40, opacity: 0, stagger: 0.15, duration: 0.6 }, "-=0.5")
        .from(".wp-line", { scaleY: 0, transformOrigin: "top", duration: 0.6 }, "-=0.6")
        .from(".wp-step", { y: 30, opacity: 0, stagger: 0.2, duration: 0.6 }, "-=0.4")
        .from(".wp-step-circle", { scale: 0, opacity: 0, stagger: 0.2, duration: 0.4 }, "-=0.8");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="wp-heading text-3xl sm:text-4xl font-semibold text-gray-900">
            Work Process
          </h2>
          <p className="wp-subheading mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            We simplify access to high-caliber talent: simple, seamless, streamlined.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT MOCKUP */}
          <div className="relative wp-mockup">
            {/* glow */}
            <div className="absolute -inset-6 sm:-inset-10 bg-blue-200 blur-[80px] sm:blur-[120px] rounded-full" />

            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8">
              {/* search */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
                <span className="text-gray-400">🔍</span>
                <div className="flex flex-wrap gap-2">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="wp-card bg-gray-100 rounded-xl h-48 sm:h-56" />

                <div className="wp-card bg-white rounded-xl shadow-lg p-4 h-48 sm:h-56 flex flex-col">
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

                <div className="wp-card bg-gray-100 rounded-xl h-48 sm:h-56 hidden sm:block" />
              </div>
            </div>
          </div>

          {/* RIGHT STEPS */}
          <div className="space-y-8 sm:space-y-10 relative">
            <div className="wp-line absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gray-200" />

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
              <div key={i} className="wp-step flex gap-4 sm:gap-6 items-start">
                <div className="wp-step-circle relative z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-400 text-white font-semibold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-md text-sm sm:text-base">
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
