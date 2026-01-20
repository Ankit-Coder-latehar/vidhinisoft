import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSplitSection = () => {
  const sectionRef = useRef(null);
  const leftItemsRef = useRef([]);
  const rightRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    tl.fromTo(
      leftItemsRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      }
    ).fromTo(
      rightRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.4"
    );

    gsap.to(buttonRef.current, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.8,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-950 py-32 overflow-hidden"
    >
      {/* Floating Gradients */}
      <div className="absolute -left-40 top-20 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute -right-40 bottom-20 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[160px] animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-10">
          <h2
            ref={(el) => (leftItemsRef.current[0] = el)}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Contact <span className="text-blue-400">Information</span>
          </h2>

          <div ref={(el) => (leftItemsRef.current[1] = el)}>
            <h3 className="text-lg font-semibold text-white">📧 Email</h3>
            <p className="text-slate-400 mt-1">info@vardhinisoft.com</p>
          </div>

          <div ref={(el) => (leftItemsRef.current[2] = el)}>
            <h3 className="text-lg font-semibold text-white">📞 Phone</h3>
            <p className="text-slate-400 mt-1">+1 (972) 872-8668</p>
            <p className="text-slate-400">+91 83282 88776</p>
          </div>

          <div ref={(el) => (leftItemsRef.current[3] = el)}>
            <h3 className="text-lg font-semibold text-white">📍 Offices</h3>
            <div className="text-slate-400 mt-2 space-y-2">
              <p>
                <span className="text-white font-medium">United States</span>
                <br />Dallas, Texas
              </p>
              <p>
                <span className="text-white font-medium">India</span>
                <br />Tirupati, Andhra Pradesh
              </p>
            </div>
          </div>

          <div ref={(el) => (leftItemsRef.current[4] = el)}>
            <h3 className="text-lg font-semibold text-white">
              🕘 Business Hours
            </h3>
            <p className="text-slate-400 mt-1">Monday – Friday</p>
            <p className="text-slate-400">
              9:00 AM – 6:00 PM (Local Time)
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          ref={rightRef}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-400/40 transition-all"
        >
          <h2 className="text-4xl font-extrabold text-white">
            Let’s <span className="text-purple-400">Build Together</span>
          </h2>

          <p className="text-slate-300 mt-6 text-lg leading-relaxed">
            At Vardhini Software Solutions, we believe the best ideas start with a
            conversation. Tell us about your goals, challenges, or vision—and
            we’ll help turn them into powerful digital solutions.
          </p>

          <button
            ref={buttonRef}
            className="mt-10 px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg shadow-xl hover:scale-110 transition-transform"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSplitSection;
