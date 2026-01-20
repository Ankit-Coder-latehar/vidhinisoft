import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CustomerStory() {
  const containerRef = useRef(null);
  const storyRefs = useRef([]);

  const customerStories = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      story: "Working with this team transformed our business. Their solutions increased our efficiency by 50% and improved user engagement significantly.",
      image: "https://images.unsplash.com/photo-1603415526960-fb0d1c4f97f6?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Jane Smith",
      role: "Product Manager, SoftSolutions",
      story: "The design and development process was seamless. The team brought our vision to life while exceeding expectations.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Alice Johnson",
      role: "Founder, InnovateX",
      story: "Professional, creative, and highly skilled. Our product launch was a huge success thanks to their expertise.",
      image: "https://images.unsplash.com/photo-1603415526960-fb0d1c4f97f6?auto=format&fit=crop&w=400&q=80",
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
