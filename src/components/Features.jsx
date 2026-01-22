import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black via-slate-950 to-black py-28 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-[-100px] left-[-120px] w-[280px] h-[280px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-120px] w-[280px] h-[280px] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Features & Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Built to Power <span className="text-blue-400">Modern</span> Businesses
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            At Vardhini Software Solutions, our products are not just tools —
            they are growth enablers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-all hover:-translate-y-2"
          >
            <span className="text-4xl">🧩</span>
            <h3 className="text-2xl font-semibold text-white mt-4">
              Custom Digital Products
            </h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Industry-specific mobile & web applications</li>
              <li>• Internal business tools and dashboards</li>
              <li>• Workflow automation platforms</li>
              <li>• Customer engagement & booking systems</li>
            </ul>
            <p className="mt-6 text-slate-400">
              Each product is built with scalability, security, and performance
              at its core.
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-all hover:-translate-y-2"
          >
            <span className="text-4xl">☁️</span>
            <h3 className="text-2xl font-semibold text-white mt-4">
              Cloud-Ready & Enterprise Solutions
            </h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Cloud-native applications</li>
              <li>• API-driven platforms</li>
              <li>• Data-driven dashboards & reporting</li>
              <li>• Secure third-party integrations</li>
            </ul>
            <p className="mt-6 text-slate-400">
              Ideal for startups, growing businesses, and enterprises modernizing
              their digital infrastructure.
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur hover:from-blue-500/20 hover:to-purple-500/20 transition-all hover:-translate-y-2"
          >
            <span className="text-4xl">🚀</span>
            <h3 className="text-2xl font-semibold text-white mt-4">
              Our Product Philosophy
            </h3>
            <ul className="mt-6 space-y-3 text-slate-200">
              <li>• User-centric design</li>
              <li>• Scalable architecture</li>
              <li>• Reliable, secure technology</li>
              <li>• Business value first</li>
            </ul>
            <p className="mt-6 text-slate-300">
              Every feature solves a real problem and helps your business grow.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-slate-300 text-lg">
            Have an idea or want to learn more about <span className="text-blue-400">Vidhini</span>?
          </p>
          <p className="text-white text-xl font-semibold mt-2">
            Let’s build the future together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
