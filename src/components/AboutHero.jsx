import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutHero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);

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
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleWords = [
    "End-to-End",
    "Software",
    "Services",
    "to",
    "Power",
    "Your",
    "Business.",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-white overflow-hidden flex items-center"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span
            ref={badgeRef}
            className="inline-block mb-5 text-sm text-gray-600"
          >
            Our Expertise. <span className="font-semibold">Your Advantage.</span>
          </span>

          <h1
            ref={titleRef}
            className="flex flex-wrap gap-x-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block">
                {word}
              </span>
            ))}
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 max-w-xl text-gray-600 text-base sm:text-lg"
          >
            From strategy and design to development and scaling, we deliver
            high-impact digital solutions tailored to your goals.
          </p>
        </div>

        {/* Right Image Placeholder */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            {/* Replace with your actual image */}
            <img
              src="https://images.squarespace-cdn.com/content/v1/5951cc071b10e3977f15d46a/1639716569224-MU1Y7OQO53NLHI60XR58/customer-success-skills-team-building.jpg"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Curved Background (EXACT STYLE) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,100 480,100 720,80 960,60 1200,20 1440,40 L1440,120 L0,120 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
