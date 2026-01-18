import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaAndroid,
  FaAws,
  FaVuejs,
  FaPython,
  FaApple,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaJs,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const TechnologiesSection = () => {
  const sectionRef = useRef(null);
  const topCardRef = useRef(null);
  const iconsRef = useRef([]);
  const bottomCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!topCardRef.current || !bottomCardRef.current) return;

      const icons = iconsRef.current.filter(Boolean);

      /* TOP CARD */
      gsap.from(topCardRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: topCardRef.current,
          start: "top 80%",
        },
      });

      /* ICON STAGGER */
      if (icons.length) {
        gsap.from(icons, {
          opacity: 0,
          y: 40,
          scale: 0.85,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.7)",
          immediateRender: false,
          scrollTrigger: {
            trigger: topCardRef.current,
            start: "top 70%",
          },
        });

        /* FLOATING ICON LOOP */
        icons.forEach((icon, i) => {
          gsap.to(icon, {
            y: -6,
            duration: 1.6 + i * 0.05,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }

      /* BOTTOM CTA CARD */
      gsap.from(bottomCardRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: bottomCardRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* TOP CARD */}
        <div
          ref={topCardRef}
          className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center shadow-sm"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Get expert talent to drive your <br className="hidden sm:block" />
            company's growth
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Our extensive team possesses expertise across a wide range of
            programming languages.
          </p>

          {/* ICON GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6 mt-10 sm:mt-12">
            {[
              <FaReact className="text-sky-400" />,
              <FaAndroid className="text-green-500" />,
              <FaAws className="text-orange-500" />,
              <FaVuejs className="text-green-600" />,
              <FaPython className="text-yellow-500" />,
              <FaApple className="text-black" />,
              <FaJava className="text-red-500" />,
              <FaNodeJs className="text-green-600" />,
              <FaDocker className="text-blue-500" />,
              <FaJs className="text-yellow-400" />,
            ].map((Icon, i) => (
              <div
                key={i}
                ref={(el) => (iconsRef.current[i] = el)}
                className="bg-white rounded-xl shadow-md h-20 sm:h-24 flex items-center justify-center text-3xl sm:text-4xl"
              >
                {Icon}
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-gray-400 mt-6 text-right pr-2 sm:pr-4">
            And More...
          </p>
        </div>

        {/* BOTTOM CTA CARD */}
        <div
          ref={bottomCardRef}
          className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center shadow-sm"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            If you'd like to get a 1:1 intro chat, we'd <br className="hidden sm:block" />
            be delighted
          </h3>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Discover tailored solutions in a one-on-one intro chat. Let’s
            discuss your needs and explore how we can collaborate for success.
          </p>

          <button className="mt-8 bg-blue-400 hover:bg-lime-500 text-white font-medium px-6 py-3 rounded-md transition">
            Let's work together
          </button>
        </div>

      </div>
    </section>
  );
};

export default TechnologiesSection;
