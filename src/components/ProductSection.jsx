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
      className="relative w-full overflow-hidden py-32 bg-[#fdfefe]"
    >
      {/* Grid + dot background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] bg-[size:36px_36px] opacity-40" />

      {/* Gradient glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl" />

      {/* White curved base */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[120%] z-0" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">

        {/* Left Content */}
        <div ref={leftRef} className="space-y-7">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-sm font-semibold">
            💻 Vidhini Soft
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Building Scalable <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
            Vidhini Soft is a modern software development company focused on
            building high-quality, scalable, and performance-driven digital
            solutions for businesses of all sizes.
          </p>

          <p className="text-gray-500 max-w-xl leading-relaxed">
            From web and mobile applications to custom software, automation,
            and cloud-based platforms, we help businesses innovate, grow, and
            stay ahead in the digital era.
          </p>

          {/* Service tags */}
          <div className="flex flex-wrap gap-3 pt-3">
            {[
              "Web Development",
              "Mobile Apps",
              "UI/UX Design",
              "Custom Software",
              "Cloud Solutions",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-1.5 rounded-full text-sm bg-white/70 backdrop-blur border border-gray-200 text-gray-600 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div
          ref={rightRef}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Floating glass container */}
          <div className="relative w-[360px] h-[440px] rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">

            {/* Top card */}
            <div className="absolute top-6 left-6 right-6 h-16 rounded-xl bg-white/80 border border-white/30 flex items-center justify-between px-4">
              <span className="text-sm font-medium text-gray-800">
                Project Status
              </span>
              <span className="text-emerald-500 text-sm font-semibold">
                In Progress
              </span>
            </div>

            {/* Middle card */}
            <div className="absolute top-28 left-6 right-10 h-20 rounded-xl bg-white/80 border border-white/30 px-4 py-3">
              <p className="text-sm font-medium text-gray-800">
                Client Dashboard
              </p>
              <p className="text-xs text-gray-500">
                Real-time Updates
              </p>
            </div>

            {/* Bottom progress */}
            <div className="absolute bottom-10 left-10 right-6 h-24 rounded-xl bg-white/80 border border-white/30 px-4 py-3">
              <p className="text-sm font-medium text-gray-800">
                Development Progress
              </p>
              <div className="mt-3 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            {/* Accent dots */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 rounded-full shadow-lg" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZewaProductSection;
