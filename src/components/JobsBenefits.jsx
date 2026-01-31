import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BenefitsGlofer = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        defaults: { ease: "power3.out" },
      })
        .from(".benefit-image", {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
        })
        .from(
          ".benefit-text > *",
          {
            y: 30,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(
          ".benefit-item",
          {
            x: -20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-28"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,rgba(37,99,235,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.15)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* GLOW */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT IMAGE GRID */}
        <div className="relative grid grid-cols-2 gap-8">
          <div className="benefit-image row-span-2 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1561889601-b55700f61168?w=600"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="benefit-image rounded-3xl overflow-hidden shadow-xl translate-y-8">
            <img
              src="https://plus.unsplash.com/premium_photo-1663040480219-075412b6a58e?w=600"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="benefit-image rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1689848591601-1319fdc4e090?w=600"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="benefit-text">
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide">
            WHY VIDHINISOFT
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 max-w-lg">
            Benefits of working with <span className="text-blue-600">VidhiniSoft</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-10 max-w-lg leading-relaxed">
            Join a global remote-first team where innovation, growth, and work-life
            balance come together to build meaningful software solutions.
          </p>

          {/* BENEFITS */}
          <div className="space-y-6">
            <div className="benefit-item flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Check className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  Zero Bureaucracy
                </h4>
                <p className="text-gray-500 text-sm mt-1 max-w-md">
                  We handle HR, compliance, and support—so you can focus on doing
                  your best work.
                </p>
              </div>
            </div>

            <div className="benefit-item flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Check className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  Dollar-Based Salaries
                </h4>
                <p className="text-gray-500 text-sm mt-1 max-w-md">
                  Work with global clients and earn competitive salaries without
                  location limits.
                </p>
              </div>
            </div>

            <div className="benefit-item flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Check className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  100% Remote Culture
                </h4>
                <p className="text-gray-500 text-sm mt-1 max-w-md">
                  Work from anywhere while collaborating with top US-based teams.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsGlofer;
