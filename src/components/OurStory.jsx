import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-28 bg-white text-gray-800 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-14 px-6">
        
        {/* Text */}
        <div ref={textRef} className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold sm:text-5xl text-gray-900">
            Our Story
          </h2>

          <p className="text-lg sm:text-xl text-gray-600">
            We started as a small team with a big vision — to transform ideas into
            meaningful digital experiences. Over the years, we’ve grown into a
            modern agency that blends creativity, technology, and strategy.
          </p>

          <p className="text-lg sm:text-xl text-gray-600">
            Our mission is to empower brands, deliver impactful solutions, and
            create experiences that people love. Every line of code, every design
            choice, every decision we make revolves around this philosophy.
          </p>
        </div>

        {/* Image */}
        <div ref={imageRef} className="lg:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Subtle Gray Design Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path
            d="M0,60 C240,100 480,100 720,80 960,60 1200,20 1440,40 L1440,120 L0,120 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
