import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Targeted Campaigns",
    desc: "Reach the right audience based on demographics, interests, and behaviors.",
  },
  {
    title: "Multi-Platform Expertise",
    desc: "Google Ads, Facebook, Instagram, LinkedIn, and more.",
  },
  {
    title: "Optimized ROI",
    desc: "Continuous analysis and optimization for budget-friendly impactful results.",
  },
  {
    title: "Data-Driven Strategies",
    desc: "Harness insights from analytics to refine and improve campaign performance.",
  },
];

export default function DigitalMarketingHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        delay: 0.2,
        duration: 0.8,
      });

      gsap.from(".feature-card", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        delay: 0.4,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".hero-image", {
        x: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-white overflow-hidden py-24"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-gray-200 opacity-40 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border border-gray-200 opacity-30 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="hero-title text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Your Trusted Partner in Digital Marketing,
            <br />
            <span className="text-gray-900">
              Driving Business Success
            </span>
          </h1>

          <p className="hero-subtitle mt-6 text-gray-500 max-w-xl">
            Our proven strategies and expert team have consistently delivered
            impactful results, helping businesses thrive in the ever-evolving
            digital landscape.
          </p>

          <h3 className="mt-14 text-2xl font-semibold text-gray-900">
            Tailored Digital Strategies
          </h3>

          <p className="mt-3 text-gray-500 max-w-xl">
            Our team conducts in-depth research on your target audience,
            competitors, and industry trends to develop strategies that resonate
            with your brand identity and align with your business objectives.
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div
                key={i}
                className="feature-card bg-gray-50 border border-gray-100 rounded-xl p-4 flex gap-3 hover:shadow-md transition"
              >
                <CheckCircle className="text-orange-500 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 text-orange-500 font-medium hover:underline">
            Learn More
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="hero-image relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=600"
            alt="Marketing Expert"
            className="w-[360px] rounded-2xl"
          />

          {/* Success Badge */}
          <div className="absolute top-24 -left-6 bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2">
            <span className="text-orange-500 font-bold">96%</span>
            <span className="text-sm text-gray-600">
              Successful Client
            </span>
          </div>

          {/* Chart Card */}
          <div className="absolute -bottom-6 left-0 bg-white shadow-lg rounded-xl p-4 w-64">
            <p className="text-sm font-medium text-gray-700">
              B2B Income 2024
            </p>
            <div className="mt-3 h-24 bg-gradient-to-r from-orange-100 to-orange-200 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
