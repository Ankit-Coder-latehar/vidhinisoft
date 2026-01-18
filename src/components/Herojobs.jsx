import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroJobs = () => {
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

      tl.from(".jobs-left > *", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
      })
        .from(
          ".jobs-image",
          {
            y: 60,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".jobs-dots",
          {
            opacity: 0,
            scale: 0.6,
            duration: 0.5,
          },
          "-=0.6"
        )
        .from(
          ".jobs-blob",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.15,
            duration: 0.4,
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="jobs-left">
          <h1 className="text-[42px] leading-tight font-bold text-gray-900 max-w-xl">
            Find full-time remote software jobs <br />
            at leading companies around the World
          </h1>

          <p className="mt-6 text-gray-500 text-lg max-w-lg">
            Join VidhiniSoft and get full-time remote software jobs with higher
            salaries and professional growth.
          </p>

          <button className="mt-10 bg-blue-400 hover:bg-lime-500 transition px-8 py-4 rounded-md font-semibold text-black">
            Apply now!
          </button>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="relative grid grid-cols-2 gap-10">

          {/* Decorative dots */}
          <div className="jobs-dots absolute -left-6 top-10 grid grid-cols-4 gap-2 opacity-30">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
            ))}
          </div>

          {/* Image 1 */}
          <div className="jobs-image rounded-t-full overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1666299430525-6726a55955d9?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="jobs-image rounded-t-full overflow-hidden translate-y-10">
            <img
              src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="jobs-image rounded-t-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="jobs-image rounded-t-full overflow-hidden translate-y-10">
            <img
              src="https://plus.unsplash.com/premium_photo-1682608388268-d2fe94141e13?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>

          {/* Background blobs */}
          <div className="jobs-blob absolute right-0 top-16 w-28 h-28 bg-blue-400 rounded-2xl -z-10" />
          <div className="jobs-blob absolute left-6 bottom-10 w-24 h-24 bg-blue-400 rounded-2xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroJobs;
