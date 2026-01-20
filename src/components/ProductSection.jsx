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
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-[-120px] w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div ref={leftRef} className="space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium">
            🚀 ZeWa App
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Smart Queue & <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Appointment Management
            </span>
          </h2>

          <p className="text-slate-300 text-lg max-w-xl">
            ZeWa is our flagship product—an intelligent, all-in-one platform
            designed to transform how service-based businesses manage customers,
            queues, and appointments.
          </p>

          <p className="text-slate-400 max-w-xl">
            Built for industries like salons, spas, beauty parlors, wellness
            centers, and automotive services, ZeWa bridges the gap between
            businesses and customers with real-time visibility and seamless
            interactions.
          </p>

          {/* Industry tags */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "Salons",
              "Spas",
              "Wellness Centers",
              "Beauty Parlors",
              "Automotive Services",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-sm bg-white/5 text-slate-300 border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div ref={rightRef} className="relative flex justify-center lg:justify-end">
          <div className="relative w-[340px] h-[420px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl shadow-2xl">
            
            {/* Floating UI cards */}
            <div className="absolute top-6 left-6 right-6 h-16 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between px-4">
              <span className="text-sm text-white">Live Queue</span>
              <span className="text-emerald-400 text-sm font-medium">
                12 Waiting
              </span>
            </div>

            <div className="absolute top-28 left-6 right-10 h-20 rounded-xl bg-slate-900/80 border border-white/10 px-4 py-3">
              <p className="text-sm text-white">Appointment Confirmed</p>
              <p className="text-xs text-slate-400">Today • 4:30 PM</p>
            </div>

            <div className="absolute bottom-10 left-10 right-6 h-24 rounded-xl bg-slate-900/80 border border-white/10 px-4 py-3">
              <p className="text-sm text-white">Customer Flow</p>
              <div className="mt-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ZewaProductSection;
