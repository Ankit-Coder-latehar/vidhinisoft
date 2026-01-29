import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(
          ".hero-title span",
          {
            y: 60,
            opacity: 0,
            stagger: 0.1,
            duration: 0.9,
          },
          "-=0.3"
        )
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-btn", { scale: 0.9, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-image", { x: 60, opacity: 0, duration: 1 }, "-=0.8")
        .from(
          ".service-card",
          {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
          },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleWords = [
    "End-to-End",
    "Software",
    "Services",
    "for",
    "Modern",
    "Businesses",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 z-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.3), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.3), rgba(0,0,0,0))",
        }}
      />

      {/* GLOW */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl z-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              ⚡ Our Services
              <span className="text-blue-300">•</span>
              Built for Scale
            </span>

            <h1 className="hero-title text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              {titleWords.map((word, i) => (
                <span key={i} className="inline-block mr-3">
                  {word}
                </span>
              ))}
            </h1>

            <p className="hero-desc text-lg text-gray-600 max-w-xl mb-10">
              At Vardhini Software Solutions, we deliver future-ready digital
              services that empower startups and enterprises to innovate, scale,
              and lead with confidence.
            </p>

            <div className="flex gap-4">
              
              <a href="/schedule"><button className="px-7 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                Contact Us
              </button>
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center">
            {/* IMAGE */}
            <div className="hero-image relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/G/31/employer-brand/hero-remote.jpg"
                alt="Software services"
                className="w-[420px] h-[480px] object-cover"
              />
            </div>

            {/* FLOATING CARDS */}
            <div className="service-card absolute -left-8 top-20 bg-white shadow-xl rounded-2xl px-5 py-4">
              <p className="font-semibold text-gray-900">Web Development</p>
              <p className="text-sm text-gray-500">Scalable & Secure</p>
            </div>

            <div className="service-card absolute -right-10 bottom-24 bg-white shadow-xl rounded-2xl px-5 py-4">
              <p className="font-semibold text-gray-900">Cloud Solutions</p>
              <p className="text-sm text-gray-500">Future-Ready Tech</p>
            </div>

            <div className="service-card absolute right-16 -bottom-8 bg-white shadow-xl rounded-2xl px-5 py-4">
              <p className="font-semibold text-gray-900">UI/UX Design</p>
              <p className="text-sm text-gray-500">Human-Centered</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,100 480,100 720,80 960,60 1200,20 1440,40 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default ServicesHero;
