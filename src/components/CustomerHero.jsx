import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CustomerHero = () => {
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

      tl.from(".ai-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(".ai-title span", {
          y: 60,
          opacity: 0,
          stagger: 0.08,
          duration: 0.9,
        }, "-=0.3")
        .from(".ai-desc", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".ai-btn", { scale: 0.95, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".ai-image", { x: 60, opacity: 0, duration: 1 }, "-=0.8")
        .from(".ai-card", { scale: 0.8, opacity: 0, duration: 0.6 }, "-=0.7");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fdfbf6]"
    >
      {/* subtle divider curve */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="ai-badge inline-block mb-6 px-5 py-2 rounded-full bg-yellow-400 text-black text-xs font-semibold tracking-widest">
            VIDHINI SOFT
          </span>

          <h1 className="ai-title text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight text-black mb-6">
            <span className="block">Empowering Your Business</span>
            <span className="block">with Smart Software Solutions</span>
          </h1>

          <p className="ai-desc text-gray-500 text-lg max-w-xl mb-10">
            From strategy and design to development and scaling, Vidhini Soft
            delivers tailored digital solutions that help your business thrive,
            streamline operations, and drive growth.
          </p>

          <div className="flex items-center gap-6">
            <button className="ai-btn px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
              Get Started with Us
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center">
          {/* image */}
          <div className="ai-image relative z-10">
            <img
              src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmxzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt="Vidhini Soft Solutions"
              className="w-[360px] h-[460px] object-cover rounded-2xl"
            />
          </div>

          {/* floating info card */}
          <div className="ai-card absolute left-0 bottom-24 bg-[#dbeee9] rounded-xl p-4 shadow-lg w-56">
            <p className="text-sm text-gray-600 mb-1">Congrats!</p>
            <p className="text-2xl font-bold text-black">$12.5</p>
            <p className="text-xs text-gray-500 mt-1">
              16 hours ago
            </p>
          </div>

          {/* small accent icon */}
          <div className="absolute left-40 bottom-48 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-md">
            🌵
          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomerHero;
