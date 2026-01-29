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
      className="relative bg-white py-32 overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Soft Accent Glows */}
      <div className="absolute -left-40 top-20 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[160px]" />
      <div className="absolute -right-40 bottom-20 w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-10">
          <h2
            ref={(el) => (leftItemsRef.current[0] = el)}
            className="text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Contact <span className="text-blue-600">Information</span>
          </h2>

          <div ref={(el) => (leftItemsRef.current[1] = el)}>
            <h3 className="text-lg font-semibold text-slate-900">📧 Email</h3>
            <p className="text-slate-600 mt-1">info@vardhinisoft.com</p>
          </div>

          <div ref={(el) => (leftItemsRef.current[2] = el)}>
            <h3 className="text-lg font-semibold text-slate-900">📞 Phone</h3>
            <p className="text-slate-600 mt-1">+1 (972) 872-8668</p>
            <p className="text-slate-600">+91 83282 88776</p>
          </div>

          <div ref={(el) => (leftItemsRef.current[3] = el)}>
            <h3 className="text-lg font-semibold text-slate-900">📍 Offices</h3>
            <div className="text-slate-600 mt-2 space-y-2">
              <p>
                <span className="font-medium text-slate-900">
                  United States
                </span>
                <br />Dallas, Texas
              </p>
              <p>
                <span className="font-medium text-slate-900">India</span>
                <br />Tirupati, Andhra Pradesh
              </p>
            </div>
          </div>

          <div ref={(el) => (leftItemsRef.current[4] = el)}>
            <h3 className="text-lg font-semibold text-slate-900">
              🕘 Business Hours
            </h3>
            <p className="text-slate-600 mt-1">Monday – Friday</p>
            <p className="text-slate-600">
              9:00 AM – 6:00 PM (Local Time)
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          ref={rightRef}
          className="relative p-12 rounded-3xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all"
        >
          <h2 className="text-4xl font-extrabold text-slate-900">
            Let’s <span className="text-purple-600">Build Together</span>
          </h2>

          <p className="text-slate-600 mt-6 text-lg leading-relaxed">
            At Vardhini Software Solutions, we believe the best ideas start with a
            conversation. Tell us about your goals, challenges, or vision—and
            we’ll help turn them into powerful digital solutions.
          </p>

          <button
            ref={buttonRef}
            className="mt-10 px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg shadow-lg hover:scale-110 transition-transform"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSplitSection;
