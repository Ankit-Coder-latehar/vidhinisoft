import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactHero = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6 },
        "-=0.4"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Soft Background Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight"
        >
          Let’s <span className="text-blue-600">Connect</span> & Build Something
          Great
        </h1>

        <p
          ref={textRef}
          className="mt-6 text-lg md:text-xl text-slate-600"
        >
          We’d love to hear from you. Whether you have a question, a project idea,
          or want to explore how we can work together —{" "}
          <span className="text-slate-900 font-medium">
            Vardhini Software Solutions
          </span>{" "}
          is here to help.
        </p>

        <div ref={buttonRef} className="mt-10">
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Light Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
    </section>
  );
};

export default ContactHero;
