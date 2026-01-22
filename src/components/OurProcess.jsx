import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurProcess() {
  const containerRef = useRef(null);
  const stepsRef = useRef([]);

  const processSteps = [
    { title: "Discover", description: "Understand client needs and goals." },
    { title: "Design", description: "Craft visually appealing and functional designs." },
    { title: "Develop", description: "Turn designs into responsive, scalable products." },
    { title: "Deliver", description: "Launch with support and continuous improvement." },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, i) => {
        gsap.from(step, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden"
    >
      {/* Sketch texture */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/sketchy.png')]" />

      {/* Soft gray blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gray-200 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-gray-300 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900">
          Our Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="bg-white border border-gray-200 p-8 rounded-3xl
              shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
