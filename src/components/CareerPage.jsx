import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CareersHero = () => {
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      badgeRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        "-=0.2"
      )
      .fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        visualRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=0.6"
      );
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-32 bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#eef2ff]">
      
      {/* Gradient Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-blue-400/20 rounded-full blur-[140px]" />
      <div className="absolute top-20 -right-40 w-[420px] h-[420px] bg-purple-400/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-emerald-300/10 rounded-full blur-[160px]" />

      {/* White curved bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-white rounded-t-[100%] z-0" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">

        {/* Left Content */}
        <div className="space-y-7">
          <span
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium
            bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 backdrop-blur"
          >
            Careers at Vidhini Soft
          </span>

          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-gray-900"
          >
            Build Technology.
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Grow Your Career.
            </span>
          </h1>

          <p
            ref={textRef}
            className="text-lg text-gray-600 max-w-xl leading-relaxed"
          >
            At Vidhini Soft, we believe great technology is built by great people. 
            We’re always looking for passionate, curious, and driven individuals who 
            want to grow their careers while building impactful digital products.
          </p>

          <p className="text-gray-500 max-w-xl leading-relaxed">
            If you love solving problems, learning new technologies, and working in 
            a collaborative environment—you’ll feel right at home here.
          </p>
        </div>

        {/* Right Visual */}
        <div
          ref={visualRef}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[360px] h-[360px] rounded-3xl 
            bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20
            backdrop-blur-2xl border border-white/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]
            flex items-center justify-center"
          >
            {/* Inner Glass Card */}
            <div className="absolute inset-6 rounded-2xl bg-white/80 border border-white/30
              flex flex-col items-center justify-center space-y-4 text-center"
            >
              <span className="text-6xl">👩‍💻👨‍💻</span>
              <p className="text-gray-900 font-semibold text-lg">
                Join Our Team
              </p>
              <p className="text-gray-500 text-sm px-8">
                Learn • Build • Grow Together
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareersHero;
