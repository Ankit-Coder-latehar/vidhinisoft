import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IdCard,
  MessageSquare,
  Clock,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".benefits-label", {
        y: 20,
        opacity: 0,
        duration: 0.5,
      })
        .from(
          ".benefits-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".benefits-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".benefit-card",
          {
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          ".benefit-icon",
          {
            scale: 0.6,
            opacity: 0,
            stagger: 0.2,
            duration: 0.4,
          },
          "-=0.9"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT CONTENT */}
        <div>
          <p className="benefits-label text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Our key advantages
          </p>

          <h2 className="benefits-title mt-4 text-5xl font-semibold text-gray-900 leading-tight">
            What makes us a <br />
            reliable technology <br />
            partner
          </h2>

          <p className="benefits-desc mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
            Choosing the right development partner can define your product’s
            success. We focus on quality engineering, clear collaboration, and
            long-term value to help businesses grow with confidence.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="benefit-card bg-white rounded-2xl shadow-lg p-8">
            <div className="benefit-icon w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center mb-6">
              <IdCard className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Skilled & Reliable Team
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Collaborate with experienced engineers who understand business
              requirements and deliver clean, maintainable, and scalable code.
            </p>
          </div>

          {/* Card 2 */}
          <div className="benefit-card bg-white rounded-2xl shadow-lg p-8 translate-y-10">
            <div className="benefit-icon w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center mb-6">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Open & Consistent Communication
            </h3>
            <p className="text-gray-500 leading-relaxed">
              We prioritize transparency through regular updates, clear
              timelines, and proactive collaboration at every step.
            </p>
          </div>

          {/* Card 3 */}
          <div className="benefit-card bg-white rounded-2xl shadow-lg p-8">
            <div className="benefit-icon w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Efficient Delivery
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Our agile approach helps reduce development cycles and ensures
              faster delivery without compromising on quality.
            </p>
          </div>

          {/* Card 4 */}
          <div className="benefit-card bg-white rounded-2xl shadow-lg p-8 translate-y-10">
            <div className="benefit-icon w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center mb-6">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Growth-Ready Engagement Models
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Whether you’re launching an MVP or scaling an enterprise product,
              our flexible models adapt to your evolving needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
