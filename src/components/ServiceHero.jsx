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

      tl.from(".hero-badge", { y: 16, opacity: 0, duration: 0.5 })
        .from(
          ".hero-title span",
          { y: 40, opacity: 0, stagger: 0.08, duration: 0.7 },
          "-=0.2"
        )
        .from(".hero-desc", { y: 24, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-btn", { scale: 0.95, opacity: 0, duration: 0.4 }, "-=0.2")
        .from(".hero-image", { x: 40, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(
          ".service-card",
          { y: 20, opacity: 0, stagger: 0.15, duration: 0.5 },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleWords = [
    "Smart",
    "Software",
    "Solutions",
    "for",
    "Growing",
    "Businesses",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 z-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.4), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.4), rgba(0,0,0,0))",
        }}
      />

      {/* GLOW */}
      <div className="absolute -top-40 -right-40 w-[480px] h-[480px] bg-blue-500/10 rounded-full blur-3xl z-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT (FIXED VISIBILITY) */}
          <div className="relative z-20">
            <span className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-5">
              ⚡ Our Services
              <span className="text-blue-300">•</span>
              Vidhinisoft
            </span>

            <h1 className="hero-title text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 leading-snug mb-5 max-w-lg">
              {titleWords.map((word, i) => (
                <span key={i} className="inline-block mr-3">
                  {word}
                </span>
              ))}
            </h1>

            <p className="hero-desc text-base text-gray-600 max-w-md mb-8 leading-relaxed">
              At <strong>Vidhinisoft</strong>, we craft scalable software, cloud
              solutions, and user-centric digital products that help businesses
              innovate faster and grow smarter.
            </p>

            <a href="/schedule">
              <button className="hero-btn px-6 py-2.5 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:shadow-blue-300 hover:bg-blue-700 transition">
                Contact Us
              </button>
            </a>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center">

            {/* IMAGE (BELOW CARDS) */}
            <div className="hero-image relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/G/31/employer-brand/hero-remote.jpg"
                alt="Vidhinisoft Services"
                className="w-[400px] h-[460px] object-cover"
              />
            </div>

            {/* FLOATING CARDS (ABOVE IMAGE) */}
            <div className="service-card absolute -left-8 top-20 z-20 bg-white shadow-xl rounded-2xl px-5 py-4">
              <p className="font-semibold text-gray-900">Web Development</p>
              <p className="text-sm text-gray-500">Modern & Scalable</p>
            </div>

            <div className="service-card absolute -right-10 bottom-24 z-20 bg-white shadow-xl rounded-2xl px-5 py-4">
              <p className="font-semibold text-gray-900">Cloud & DevOps</p>
              <p className="text-sm text-gray-500">Secure & Reliable</p>
            </div>

            <div className="service-card absolute right-16 -bottom-8 z-20 bg-white shadow-xl rounded-2xl px-5 py-4">
              <p className="font-semibold text-gray-900">UI / UX Design</p>
              <p className="text-sm text-gray-500">User-Focused</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[120px]" preserveAspectRatio="none">
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
