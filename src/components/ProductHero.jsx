import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ProductsHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const badgeRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(badgeRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.2")
      .fromTo(textRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
      .fromTo(visualRef.current, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, "-=0.6");
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#fdfefe]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      {/* Glow accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div className="space-y-8">
          <span
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20"
          >
            Our Products
          </span>

          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900"
          >
            Products Built for <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Real Business Impact
            </span>
          </h1>

          <p
            ref={textRef}
            className="text-lg text-gray-600 max-w-xl leading-relaxed"
          >
            At Vidhini Soft, we build practical, scalable, and impact-driven
            digital products that solve real business problems. Our solutions
            are designed with a strong focus on user experience, operational
            efficiency, and long-term growth—serving both businesses and end
            customers.
          </p>
        </div>

        {/* Right Visual */}
        <div
          ref={visualRef}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Floating glass card */}
          <div className="relative w-[340px] h-[340px] rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            
            {/* Inner gradient */}
            <div className="absolute inset-5 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <span className="text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                VS
              </span>
            </div>

            {/* Accent dots */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 rounded-full shadow-lg" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full shadow-lg" />
          </div>
        </div>
      </div>

      {/* Bottom soft curve */}
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

export default ProductsHero;

