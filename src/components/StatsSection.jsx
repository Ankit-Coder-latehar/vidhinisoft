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
        // Count-up animation
        const numberEl = stat.querySelector(".number");
        gsap.fromTo(
          numberEl,
          { innerText: 0 },
          {
            innerText: stats[i].number,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
            },
          }
        );

        // Fade-up animation for entire card
        gsap.from(stat, {
          y: 40,
          opacity: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-cyan-500/20 p-8 rounded-3xl shadow-2xl backdrop-blur-lg"
            >
              <div className="text-4xl sm:text-5xl font-bold number mb-2">0</div>
              <div className="text-white/80 text-lg sm:text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-16 -right-16 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
    </section>
  );
}