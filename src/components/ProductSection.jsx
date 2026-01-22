import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ZewaProductSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      rightRef.current,
      { x: 80, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f8f9fb] overflow-hidden py-28"
    >
      {/* White curved background */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[100%] z-0" />

      {/* Decorative gradients */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-100/30 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div ref={leftRef} className="space-y-6 z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-sm font-medium">
            💻 Vidhini Soft
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Building Scalable <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-xl">
            Vidhini Soft is a modern software development company focused on
            building high-quality, scalable, and performance-driven digital
            solutions for businesses of all sizes.
          </p>

          <p className="text-gray-500 max-w-xl">
            From web and mobile applications to custom software, automation,
            and cloud-based platforms, we help businesses innovate, grow, and
            stay ahead in the digital era.
          </p>

          {/* Service tags */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "Web Development",
              "Mobile Apps",
              "UI/UX Design",
              "Custom Software",
              "Cloud Solutions",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-500 border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Visual (unchanged) */}
        <div ref={rightRef} className="relative flex justify-center lg:justify-end z-10">
          <div className="relative w-[340px] h-[420px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl shadow-2xl">
            
            <div className="absolute top-6 left-6 right-6 h-16 rounded-xl bg-white/80 border border-white/10 flex items-center justify-between px-4">
              <span className="text-sm text-gray-800">Project Status</span>
              <span className="text-emerald-400 text-sm font-medium">
                In Progress
              </span>
            </div>

            <div className="absolute top-28 left-6 right-10 h-20 rounded-xl bg-white/80 border border-white/10 px-4 py-3">
              <p className="text-sm text-gray-800">Client Dashboard</p>
              <p className="text-xs text-gray-500">Real-time Updates</p>
            </div>

            <div className="absolute bottom-10 left-10 right-6 h-24 rounded-xl bg-white/80 border border-white/10 px-4 py-3">
              <p className="text-sm text-gray-800">Development Progress</p>
              <div className="mt-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ZewaProductSection;
