import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const caseStudies = [
    {
      title: "E-commerce Platform Launch",
      description: "Created a scalable online store with custom features.",
      image:
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "SaaS Dashboard Redesign",
      description:
        "Enhanced user experience and increased engagement by 40%.",
      image:
        "https://cdn.prod.website-files.com/64103d21294ba09537b876c8/678e1ba93abbf74d6c950133_AD_4nXfg3YYDnCywk3mgB5J7iy5DunTGoHmDR3txHWvQV104YmMay79mQUZHxHI7DlVazelpL4twKeXZ7Nj_kEajcjh_CNHbmI2eDs6y2OXDxRMC17WvgaO3imdzC3XF2tkF1Lj7o8IlbA.png",
    },
    {
      title: "Mobile App Development",
      description:
        "Delivered a seamless cross-platform mobile experience.",
      image:
        "https://www.mindinventory.com/blog/wp-content/uploads/2023/12/mobile-app-development-trends.webp",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
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
          Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden
              shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600">
                  {caseStudy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
