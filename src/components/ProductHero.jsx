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
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=0.6"
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-[#f8f9fb] overflow-hidden"
    >
      {/* background curve */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[100%] z-0" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <span
            ref={badgeRef}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            Our Products
          </span>

          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-gray-800"
          >
            Products Built for <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real Business Impact
            </span>
          </h1>

          <p
            ref={textRef}
            className="text-lg text-gray-600 max-w-xl"
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
          <div className="relative w-[320px] h-[320px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="absolute inset-4 rounded-xl bg-white/80 flex items-center justify-center">
              <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                VS
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsHero;
