import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Software Development & IT Services",
    description:
      "Custom software solutions tailored to your business goals with modern, scalable technologies.",
    icon: "💻",
  },
  {
    title: "Product Engineering & SaaS Solutions",
    description:
      "End-to-end product development, from idea to scalable SaaS platforms.",
    icon: "🚀",
  },
  {
    title: "Consulting & Technology Strategy",
    description:
      "Expert guidance to help you make the right technology decisions.",
    icon: "🧠",
  },
  {
    title: "Partnerships & Career Opportunities",
    description:
      "Collaborate with us or join our growing team of innovators.",
    icon: "🤝",
  },
];

const GetInTouch = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-28 overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Soft Accent Glows */}
      <div className="absolute left-[-120px] top-32 w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-[140px]" />
      <div className="absolute right-[-120px] bottom-32 w-[300px] h-[300px] bg-purple-400/20 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Get <span className="text-blue-600">in Touch</span>
          </h2>
          <p className="text-slate-600 mt-5 text-lg">
            Reach out to us for:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition">
                {service.title}
              </h3>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-center text-slate-600 mt-16 text-lg">
          Our team will get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default GetInTouch;
