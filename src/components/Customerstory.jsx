import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CustomerStory() {
  const containerRef = useRef(null);
  const storyRefs = useRef([]);

  const customerStories = [
    {
      name: "Ankit ",
      role: "CEO, Vidhini Soft",
      story: "Working with this team transformed our business. Their solutions increased our efficiency by 50% and improved user engagement significantly.",
      image: "https://img.freepik.com/free-photo/ambitious-businessman-standing-street_1262-3451.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Priyanka ",
      role: "Product Manager, vidhiniSoft",
      story: "The design and development process was seamless. The team brought our vision to life while exceeding expectations.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Rohit kumar",
      role: "Founder, VidhiniSoft",
      story: "Professional, creative, and highly skilled. Our product launch was a huge success thanks to their expertise.",
      image: "data:image/jpeg;base64,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",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      storyRefs.current.forEach((story, i) => {
        gsap.from(story, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: i * 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: story,
            start: "top 85%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Customer Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {customerStories.map((customer, index) => (
            <div
              key={index}
              ref={(el) => (storyRefs.current[index] = el)}
              className="bg-gradient-to-br from-green-600/30 via-teal-600/20 to-cyan-500/20 p-6 rounded-3xl shadow-2xl backdrop-blur-lg hover:scale-105 transition-transform duration-500"
            >
              <img
                src={customer.image}
                alt={customer.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{customer.name}</h3>
              <p className="text-white/80 italic mb-4">{customer.role}</p>
              <p className="text-white/80 text-base">“{customer.story}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-16 -right-16 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
    </section>
  );
}
