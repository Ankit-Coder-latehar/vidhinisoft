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
      // Image slide-in from left
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

      // Text fade-in and staggered line animation
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
    <section ref={containerRef} className="relative py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6">
        {/* Text */}
        <div ref={textRef} className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold sm:text-5xl">Our Story</h2>
          <p className="text-lg sm:text-xl text-white/80">
            We started as a small team with a big vision — to transform ideas into
            meaningful digital experiences. Over the years, we’ve grown into a
            modern agency that blends creativity, technology, and strategy.
          </p>
          <p className="text-lg sm:text-xl text-white/80">
            Our mission is to empower brands, deliver impactful solutions, and create
            experiences that people love. Every line of code, every design choice,
            every decision we make revolves around this philosophy.
          </p>
        </div>

        {/* Image */}
        <div ref={imageRef} className="lg:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-16 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
    </section>
  );
}
