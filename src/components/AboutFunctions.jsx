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
      // Left content animation
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

      // Images stagger + depth
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

      // Parallax effect
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
      className="relative py-36 bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white overflow-hidden"
    >
      {/* Glow accents */}
      <div className="absolute top-24 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-24 right-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div ref={textRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Work
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Our approach is collaborative and transparent. We listen first,
            design thoughtfully, and build with precision—keeping quality,
            timelines, and outcomes front and center.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Agile practices, rigorous testing, and clear communication ensure
            solutions that deliver real business value.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative h-[480px] flex items-center justify-center">
          {/* Image 1 */}
          <img
            ref={(el) => (imagesRef.current[0] = el)}
            src="/Custom-Software-Development-Phases.webp"
            alt="How we work 1"
            className="absolute top-0 left-12 w-64 rounded-2xl shadow-2xl
            border border-white/10 hover:-translate-y-3 transition-transform duration-300"
          />

          {/* Image 2 */}
          <img
            ref={(el) => (imagesRef.current[1] = el)}
            src="/infografika-EN-6-etapow.jpg"
            alt="How we work 2"
            className="absolute top-24 right-0 w-72 rounded-2xl shadow-2xl
            border border-white/10 hover:-translate-y-3 transition-transform duration-300"
          />

          {/* Image 3 */}
          <img
            ref={(el) => (imagesRef.current[2] = el)}
            src="/Custom-software-development-process-infographic.png"
            alt="How we work 3"
            className="absolute bottom-0 left-28 w-60 rounded-2xl shadow-2xl
            border border-white/10 hover:-translate-y-3 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
