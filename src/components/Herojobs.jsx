import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroJobs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          defaults: { ease: "power3.out" },
        })
        .from(".jobs-left > *", {
          y: 30,
          opacity: 0,
          stagger: 0.15,
          duration: 0.7,
        })
        .from(
          ".jobs-image",
          {
            y: 50,
            opacity: 0,
            scale: 0.95,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".jobs-grid-bg",
          {
            opacity: 0,
            duration: 0.6,
          },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      {/* GRID BACKGROUND */}
      <div className="jobs-grid-bg absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="jobs-left relative z-10">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest">
            CAREERS AT VIDHINISOFT
          </span>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight max-w-xl">
            Build your career with <br />
            <span className="text-blue-600">remote tech jobs</span> worldwide
          </h1>

          <p className="mt-5 text-gray-600 text-sm sm:text-base max-w-lg leading-relaxed">
            Discover full-time remote software roles with top global companies.
            Work on meaningful products, earn competitively, and grow faster
            with VidhiniSoft.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="/career"><button className="px-7 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Apply Now
            </button></a>

            <a href="/career"><button className="px-7 py-3.5 rounded-full border border-blue-300 text-blue-700 font-semibold text-sm hover:bg-blue-50 transition">
              View Open Roles
            </button></a>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="relative grid grid-cols-2 gap-8 z-10">

          {/* IMAGE CARD */}
          {[
            "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600",
            "https://plus.unsplash.com/premium_photo-1666299430525-6726a55955d9?w=600",
            "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=600",
            "https://plus.unsplash.com/premium_photo-1682608388268-d2fe94141e13?w=600",
          ].map((img, i) => (
            <div
              key={i}
              className={`jobs-image rounded-2xl overflow-hidden shadow-xl bg-white ${
                i % 2 !== 0 ? "translate-y-8" : ""
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-[240px] object-cover"
              />
            </div>
          ))}

          {/* FLOATING ACCENTS */}
          <div className="absolute -right-6 top-16 w-24 h-24 bg-blue-400/20 rounded-2xl blur-xl -z-10" />
          <div className="absolute left-6 bottom-10 w-28 h-28 bg-blue-300/20 rounded-full blur-xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroJobs;
