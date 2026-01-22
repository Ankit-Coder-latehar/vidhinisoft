import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CustomerStory() {
  const containerRef = useRef(null);
  const storyRefs = useRef([]);

  const customerStories = [
    {
      name: "Ankit",
      role: "CEO, Vidhini Soft",
      story:
        "Working with this team transformed our business. Their solutions increased our efficiency by 50% and improved user engagement significantly.",
      image:
        "https://img.freepik.com/free-photo/ambitious-businessman-standing-street_1262-3451.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Priyanka",
      role: "Product Manager, Vidhini Soft",
      story:
        "The design and development process was seamless. The team brought our vision to life while exceeding expectations.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Rohit Kumar",
      role: "Founder, Vidhini Soft",
      story:
        "Professional, creative, and highly skilled. Our product launch was a huge success thanks to their expertise.",
      image:
        "https://img.freepik.com/free-photo/confident-businessman-portrait_23-2148989894.jpg?w=740&q=80",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      storyRefs.current.forEach((card, i) => {
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
          Customer Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {customerStories.map((customer, index) => (
            <div
              key={index}
              ref={(el) => (storyRefs.current[index] = el)}
              className="bg-white border border-gray-200 rounded-3xl p-6
              shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={customer.image}
                alt={customer.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />

              <h3 className="text-xl font-semibold mb-1 text-gray-900">
                {customer.name}
              </h3>

              <p className="text-gray-500 italic mb-4">
                {customer.role}
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                “{customer.story}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
