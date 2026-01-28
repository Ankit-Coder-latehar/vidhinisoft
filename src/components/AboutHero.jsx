import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutHero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(titleRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        delay: 0.9,
        ease: "power3.out",
      });

      gsap.from(cardsRef.current, {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        delay: 1.1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleWords = [
    "End-to-End",
    "Digital",
    "Solutions",
    "Built",
    "for",
    "Growth.",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center overflow-hidden"
    >
      {/* Soft Glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6"
          >
            🚀 About Us
            <span className="text-blue-400">•</span>
            Powering Modern Businesses
          </span>

          <h1
            ref={titleRef}
            className="flex flex-wrap gap-x-3 text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block">
                {word}
              </span>
            ))}
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 max-w-xl text-gray-600 text-lg"
          >
            We design, build, and scale high-performance digital products that
            help businesses move faster, smarter, and stronger in today’s
            competitive landscape.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Work With Us
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
              View Services
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5951cc071b10e3977f15d46a/1639716569224-MU1Y7OQO53NLHI60XR58/customer-success-skills-team-building.jpg"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Cards */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl px-6 py-4"
          >
            <p className="text-3xl font-bold text-gray-900">120+</p>
            <p className="text-sm text-gray-500">Projects Delivered</p>
          </div>

          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="absolute top-10 -right-8 bg-white rounded-2xl shadow-xl px-6 py-4"
          >
            <p className="text-3xl font-bold text-gray-900">8+ yrs</p>
            <p className="text-sm text-gray-500">Industry Experience</p>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[120px]" preserveAspectRatio="none">
          <path
            d="M0,40 C240,100 480,100 720,80 960,60 1200,20 1440,40 L1440,120 L0,120 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
