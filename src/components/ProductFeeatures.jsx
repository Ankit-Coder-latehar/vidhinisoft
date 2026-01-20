import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ZewaKeyFeatures = () => {
  const sectionRef = useRef(null);
  const customerRef = useRef([]);
  const businessRef = useRef([]);
  const dividerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      dividerRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      customerRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      businessRef.current,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  const customers = [
    "Real-time wait time visibility",
    "Join virtual queues or book appointments remotely",
    "Notifications for turn alerts and updates",
    "Easy check-in and service tracking",
  ];

  const businesses = [
    "Live queue and appointment management",
    "Staff availability & workload tracking",
    "Business dashboard with insights and analytics",
    "Reduced walk-away rates and improved customer satisfaction",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black via-slate-950 to-black py-28 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-[-100px] w-[260px] h-[260px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-[-100px] w-[260px] h-[260px] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Key Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Built for <span className="text-blue-400">Customers</span> &
            <span className="text-purple-400"> Businesses</span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            ZeWa helps businesses optimize operations while giving customers the
            convenience they expect in a digital-first world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Customers */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              For Customers
            </h3>

            {customers.map((item, i) => (
              <div
                key={i}
                ref={(el) => (customerRef.current[i] = el)}
                className="group p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition"
              >
                <p className="text-slate-200 group-hover:text-white transition">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden lg:flex justify-center">
            <div
              ref={dividerRef}
              className="w-[2px] h-full bg-gradient-to-b from-blue-400 to-purple-400 origin-top"
            />
          </div>

          {/* Businesses */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6">
              For Businesses
            </h3>

            {businesses.map((item, i) => (
              <div
                key={i}
                ref={(el) => (businessRef.current[i] = el)}
                className="group p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition"
              >
                <p className="text-slate-200 group-hover:text-white transition">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ZewaKeyFeatures;
