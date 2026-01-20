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
          y: 50,
          opacity: 0,
          duration: 1,
          delay: i * 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-cyan-500/30 p-8 rounded-3xl shadow-2xl backdrop-blur-lg hover:scale-105 transition-transform duration-500"
            >
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-white/80 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-16 -right-16 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
    </section>
  );
}