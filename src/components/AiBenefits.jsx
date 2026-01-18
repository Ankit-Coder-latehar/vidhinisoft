import React, { useEffect, useRef } from "react";
import { Repeat, PieChart, Target } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AiBenefits = () => {
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

      tl.from(".benefits-left > *", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
      })
        .from(
          ".benefit-card",
          {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".benefit-icon",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            duration: 0.4,
          },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT CONTENT */}
        <div className="benefits-left">
          <p className="uppercase text-sm font-semibold tracking-wider text-gray-500 mb-4">
            Benefits of Implementing AI
          </p>

          <h2 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
            Leverage AI to achieve <br /> scalable growth.
          </h2>

          <p className="text-gray-600 font-semibold mb-6">
            In today’s competitive landscape, harnessing Artificial
            Intelligence (AI) is key to staying ahead.
          </p>

          <ul className="space-y-6 text-gray-500 leading-relaxed list-disc list-inside">
            <li>
              Our expert AI development services are designed to empower your
              business by transforming complex challenges into innovative
              solutions.
            </li>
            <li>
              Whether you’re looking to optimize processes, improve customer
              interactions, or innovate new solutions, we have the experience
              to achieve it.
            </li>
          </ul>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="benefit-card bg-white rounded-2xl p-10 shadow-lg">
            <div className="benefit-icon w-14 h-14 flex items-center justify-center rounded-full bg-blue-400 mb-6">
              <Repeat className="text-white w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Automating repetitive tasks.
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Allowing collaborators to focus on higher-value activities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="benefit-card bg-white rounded-2xl p-10 shadow-lg">
            <div className="benefit-icon w-14 h-14 flex items-center justify-center rounded-full bg-blue-400 mb-6">
              <PieChart className="text-white w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Data-driven decision making.
            </h3>

            <p className="text-gray-500 leading-relaxed">
              By accessing valuable insights, our collaborators can enhance
              their performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="benefit-card md:col-span-2 bg-white rounded-2xl p-10 shadow-lg">
            <div className="benefit-icon w-14 h-14 flex items-center justify-center rounded-full bg-blue-400 mb-6">
              <Target className="text-white w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Personalized experiences.
            </h3>

            <p className="text-gray-500 leading-relaxed max-w-xl">
              Through predictive analysis, our collaborators can create
              tailored solutions that meet each client’s needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiBenefits;
