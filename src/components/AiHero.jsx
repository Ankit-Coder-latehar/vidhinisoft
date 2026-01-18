import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AiHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".ai-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".ai-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".ai-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".ai-btn",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".ai-image",
          {
            x: 60,
            opacity: 0,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          ".ai-neon",
          {
            scale: 0,
            rotate: 30,
            duration: 0.8,
          },
          "-=0.8"
        )
        .from(
          ".ai-float",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.15,
            duration: 0.4,
          },
          "-=0.6"
        );

      // Floating loop
      gsap.to(".ai-float", {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f8f9fb] overflow-hidden"
    >
      {/* background curve */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[100%] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="ai-badge text-blue-400 font-semibold tracking-widest mb-4">
            ARTIFICIAL INTELLIGENCE
          </p>

          <h1 className="ai-title text-[42px] sm:text-[48px] leading-[1.15] font-bold text-gray-800 mb-6">
            Boost your innovation <br />
            with cutting-edge AI.
          </h1>

          <p className="ai-desc text-gray-500 text-lg leading-relaxed max-w-xl mb-10">
            Our AI talents revolutionize the way you work, providing
            innovative solutions to streamline operations, enhance customer
            experience, and drive growth.
          </p>

          <button className="ai-btn bg-blue-400 hover:bg-lime-500 transition text-white font-semibold px-8 py-4 rounded-md">
            Transform your business today
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* neon card */}
          <div className="ai-neon absolute right-8 top-8 w-40 h-56 bg-blue-300 rounded-2xl z-0" />

          {/* main image */}
          <div className="ai-image relative z-10 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1677368599009-8356bfcb3994?w=600&auto=format&fit=crop&q=60"
              alt="AI"
              className="w-[320px] sm:w-[380px] h-[380px] sm:h-[420px] object-cover"
            />
          </div>

          {/* floating icons */}
          <div className="ai-float absolute left-6 top-24 bg-white rounded-full p-4 shadow-lg">
            ⚙️
          </div>

          <div className="ai-float absolute right-6 top-12 bg-white rounded-full p-4 shadow-lg">
            📊
          </div>

          <div className="ai-float absolute right-10 bottom-12 bg-white rounded-full p-4 shadow-lg">
            🧩
          </div>
        </div>

      </div>
    </section>
  );
};

export default AiHero;
