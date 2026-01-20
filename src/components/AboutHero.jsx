import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background gradient animation
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
      );

      // Badge animation
      gsap.from(badgeRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      // Title animation (staggered words)
      gsap.from(titleRef.current.children, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.4,
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: "power3.out",
      });

      // Scroll-based subtle parallax
      gsap.to(bgRef.current, {
        y: 80,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleWords = ["We", "Build", "Digital", "Experiences", "That", "Matter"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-cyan-500/20"
      />

      {/* Glow blobs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        <span
          ref={badgeRef}
          className="inline-block mb-6 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-wide backdrop-blur"
        >
          About Us
        </span>

        <h1
          ref={titleRef}
          className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl"
        >
          {titleWords.map((word, i) => (
            <span key={i} className="inline-block">
              {word}
            </span>
          ))}
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-8 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          We are a modern tech-driven team focused on design, performance, and
          meaningful digital solutions. Our mission is to help brands grow with
          clarity and impact.
        </p>
      </div>
    </section>
  );
}
