import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -120,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(imagesRef.current, {
        opacity: 0,
        y: 120,
        scale: 0.9,
        rotate: -4,
        duration: 1.4,
        stagger: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      imagesRef.current.forEach((img, i) => {
        gsap.to(img, {
          y: -40 - i * 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 overflow-hidden"
    >
      {/* SKETCH BACKGROUND */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        viewBox="0 0 800 800"
        preserveAspectRatio="none"
      >
        <path
          d="M80 120 Q420 40 760 220 T760 620 T120 760"
          fill="none"
          stroke="#000"
          strokeWidth="1"
          strokeDasharray="6 10"
        />
        <circle cx="620" cy="180" r="70" fill="none" stroke="#000" />
        <circle cx="180" cy="620" r="90" fill="none" stroke="#000" />
      </svg>

      {/* DOT GRID */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div ref={textRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How We Work
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our approach is collaborative and transparent. We listen first,
            design thoughtfully, and build with precision—keeping quality,
            timelines, and outcomes front and center.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Agile practices, rigorous testing, and clear communication ensure
            solutions that deliver real business value.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative h-[480px] flex items-center justify-center">
          <img
            ref={(el) => (imagesRef.current[0] = el)}
            src="/Custom-Software-Development-Phases.webp"
            alt="How we work 1"
            className="absolute top-0 left-12 w-64 rounded-2xl shadow-xl
            border border-gray-200 hover:-translate-y-3 transition-transform duration-300 bg-white"
          />

          <img
            ref={(el) => (imagesRef.current[1] = el)}
            src="/infografika-EN-6-etapow.jpg"
            alt="How we work 2"
            className="absolute top-24 right-0 w-72 rounded-2xl shadow-xl
            border border-gray-200 hover:-translate-y-3 transition-transform duration-300 bg-white"
          />

          <img
            ref={(el) => (imagesRef.current[2] = el)}
            src="/Custom-software-development-process-infographic.png"
            alt="How we work 3"
            className="absolute bottom-0 left-28 w-60 rounded-2xl shadow-xl
            border border-gray-200 hover:-translate-y-3 transition-transform duration-300 bg-white"
          />
        </div>
      </div>
    </section>
  );
}
