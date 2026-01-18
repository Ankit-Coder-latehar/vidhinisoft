import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",     // animation starts when section enters viewport
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-btn",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".hero-image",
          {
            x: 60,
            opacity: 0,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          ".neon-1",
          {
            scale: 0,
            rotate: 45,
            duration: 0.8,
          },
          "-=0.8"
        )
        .from(
          ".neon-2",
          {
            scale: 0,
            rotate: -45,
            duration: 0.6,
          },
          "-=0.6"
        );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f9fafb]"
    >
      {/* Background curve */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[80%]" />

      <div className="relative max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="hero-badge text-lg text-gray-800 mb-6">
              Your developers and ours.{" "}
              <span className="font-semibold">Integrated.</span>
            </p>

            <h1 className="hero-title text-[44px] leading-[1.15] md:text-[56px] font-extrabold text-gray-800 mb-6">
              Extend Your Team with <br />
              the Brightest Nearshore <br />
              Talent.
            </h1>

            <p className="hero-desc text-lg text-gray-500 max-w-xl mb-10">
              Ready to embrace Digital Transformation. Ready to scale
              your tech projects.
            </p>

            <button className="hero-btn bg-blue-400 hover:bg-[#bce600] text-black font-semibold px-8 py-4 rounded-lg transition">
              Let&apos;s work together
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="neon-1 absolute -top-10 right-10 w-[260px] h-[260px] bg-[#C7F000] rounded-[60px] -z-10" />
            <div className="neon-2 absolute -bottom-12 right-28 w-[120px] h-[120px] bg-[#eaff99] rounded-[40px] -z-10" />

            <div className="hero-image bg-white rounded-[32px] shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Professional working"
                className="w-[420px] h-[480px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
