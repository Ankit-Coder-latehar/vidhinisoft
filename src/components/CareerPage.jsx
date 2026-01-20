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
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=0.6"
      );
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Background glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-600/30 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <span
            ref={badgeRef}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
          >
            Careers at Vardhini
          </span>

          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight"
          >
            Build Technology.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Grow Your Career.
            </span>
          </h1>

          <p
            ref={textRef}
            className="text-lg text-slate-300 max-w-xl"
          >
            At Vardhini Software Solutions, we believe great technology is built
            by great people. We’re always looking for passionate, curious, and
            driven individuals who want to grow their careers while building
            impactful digital products.
          </p>

          <p className="text-slate-400 max-w-xl">
            If you love solving problems, learning new technologies, and working
            in a collaborative environment—you’ll feel right at home here.
          </p>
        </div>

        {/* Right Visual */}
        <div
          ref={visualRef}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[340px] h-[340px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center">
            
            <div className="absolute inset-6 rounded-xl bg-slate-900/80 border border-white/10 flex flex-col items-center justify-center space-y-3">
              <span className="text-5xl">👩‍💻👨‍💻</span>
              <p className="text-white font-semibold">
                Join Our Team
              </p>
              <p className="text-slate-400 text-sm text-center px-6">
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
