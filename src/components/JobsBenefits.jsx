import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BenefitsGlofer = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".benefit-image", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9,
      })
        .from(
          ".benefit-text > *",
          {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.6"
        )
        .from(
          ".benefit-item",
          {
            x: -20,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT IMAGE GRID */}
        <div className="relative grid grid-cols-2 gap-8">
          <div className="benefit-image row-span-2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1561889601-b55700f61168?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="benefit-image rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1663040480219-075412b6a58e?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="benefit-image rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1689848591601-1319fdc4e090?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="benefit-text">
          <p className="text-sm tracking-widest font-semibold text-gray-400 uppercase mb-4">
            Work with us
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Benefits of becoming a VidhiniSoft
          </h2>

          {/* BENEFIT ITEM */}
          <div className="benefit-item flex gap-4 mb-8">
            <Check className="text-blue-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Zero bureaucracy
              </h4>
              <p className="text-gray-500 mt-1 max-w-md">
                We take care of everything for you: professional support,
                human resources management, and any legal matters.
              </p>
            </div>
          </div>

          <div className="benefit-item flex gap-4 mb-8">
            <Check className="text-blue-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Salary in dollars
              </h4>
              <p className="text-gray-500 mt-1 max-w-md">
                Access to many opportunities with above-average salaries.
              </p>
            </div>
          </div>

          <div className="benefit-item flex gap-4">
            <Check className="text-blue-400 w-6 h-6 mt-1 shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                100% Remote
              </h4>
              <p className="text-gray-500 mt-1 max-w-md">
                Work from anywhere for US-based companies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsGlofer;
