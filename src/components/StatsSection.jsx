import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsAchievements() {
  const statsRef = useRef([]);
  const containerRef = useRef(null);

  const stats = [
    { number: 50, label: "Projects Completed" },
    { number: 30, label: "Happy Clients" },
    { number: 5, label: "Years Experience" },
    { number: 99, label: "Satisfaction Rate (%)" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach((stat, i) => {
        const numberEl = stat.querySelector(".number");

        // Count-up animation
        gsap.fromTo(
          numberEl,
          { innerText: 0 },
          {
            innerText: stats[i].number,
            duration: 1.8,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              once: true,
            },
          }
        );

        // Fade-up animation
        gsap.from(stat, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden"
    >
      {/* Sketch texture */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/sketchy.png')]" />

      {/* Soft gray blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gray-200 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-gray-300 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="bg-white border border-gray-200 p-8 rounded-3xl
              shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold number mb-2 text-gray-900">
                0
              </div>
              <div className="text-gray-600 text-lg sm:text-xl">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
