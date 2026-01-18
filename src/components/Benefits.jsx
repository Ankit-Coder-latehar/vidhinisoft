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
            Explore the benefits
          </p>

          <h2 className="benefits-title mt-4 text-5xl font-semibold text-gray-900 leading-tight">
            Get to know the <br />
            advantages of working <br />
            with us
          </h2>

          <p className="benefits-desc mt-8 text-lg text-gray-500 max-w-xl leading-relaxed">
            Today it is increasingly difficult to run a profitable business
            without at least one results-oriented outsourcing provider focused
            on customer satisfaction.
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
              Guaranteed Talent
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Pre-screened talents available for pre-interviews.
            </p>
          </div>

          {/* Card 2 */}
          <div className="benefit-card bg-white rounded-2xl shadow-lg p-8 translate-y-10">
            <div className="benefit-icon w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center mb-6">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Streamline communication
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Our developers sync with your schedule and excel in clear
              communication.
            </p>
          </div>

          {/* Card 3 */}
          <div className="benefit-card bg-white rounded-2xl shadow-lg p-8">
            <div className="benefit-icon w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Save time
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Avoiding a long recruitment process.
            </p>
          </div>

          {/* Card 4 */}
          <div className="benefit-card bg-white rounded-2xl shadow-lg p-8 translate-y-10">
            <div className="benefit-icon w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center mb-6">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Teams On-Demand
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Whether it's one or ten, we're ready to scale with you.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
