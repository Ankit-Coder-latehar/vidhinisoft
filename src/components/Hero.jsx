import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const steps = {
  acquisition: {
    title: "Acquisition",
    desc: "Get discovered by high-intent users using SEO, paid ads, and AI-driven search."
  },
  pipeline: {
    title: "Pipeline",
    desc: "Turn traffic into qualified leads with CRO, landing pages, and automation."
  },
  revenue: {
    title: "Revenue",
    desc: "Convert leads into measurable revenue with attribution and optimization."
  },
  intelligence: {
    title: "Intelligence",
    desc: "Use AI insights, analytics, and data to continuously improve performance."
  }
};

const Hero = () => {
  const [active, setActive] = useState(null);

  const sectionRef = useRef(null);
  const ringRef = useRef(null);
  const pillsRef = useRef([]);
  const centerBtnRef = useRef(null);
  const tooltipRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ===== Intro animation ===== */
      gsap.fromTo(
        "h1, p, button",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "all"
        }
      );

      /* ===== Slow ring rotation ===== */
      gsap.to(ringRef.current, {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "linear"
      });

      /* ===== Floating pills ===== */
      pillsRef.current.forEach((pill, i) => {
        if (!pill) return;
        gsap.to(pill, {
          y: i % 2 === 0 ? -10 : 10,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

      /* ===== Center button pulse ===== */
      gsap.to(centerBtnRef.current, {
        scale: 1.1,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (active && tooltipRef.current) {
      gsap.fromTo(
        tooltipRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [active]);

  const hoverIn = (el) => {
    gsap.to(el, {
      scale: 1.06,
      boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
      duration: 0.3
    });
  };

  const hoverOut = (el) => {
    gsap.to(el, {
      scale: 1,
      boxShadow: "none",
      duration: 0.3
    });
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f6f9fc]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-[#0f172a]">
            Your Revenue <br />
            Growth Partner in <br />
            the AI Era
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            For marketing teams who need to prove revenue impact, not just
            report performance. Vidhini Soft connects execution, data,
            and strategy to drive measurable growth.
          </p>

          <div className="mt-10">
            <button className="bg-[#0f172a] text-white px-10 py-4 font-semibold rounded-lg shadow-md hover:bg-[#020617] transition">
              Get My Free Proposal
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">
          <div
            ref={ringRef}
            className="relative w-[420px] h-[420px] rounded-full flex items-center justify-center"
          >
            {[
              ["Acquisition", "acquisition", "top-2 left-1/2 -translate-x-1/2 w-[260px] h-[90px] bg-blue-500 rotate-[-10deg]"],
              ["Pipeline", "pipeline", "right-2 top-1/2 -translate-y-1/2 w-[90px] h-[260px] bg-teal-400 rotate-[10deg]"],
              ["Revenue", "revenue", "bottom-2 left-1/2 -translate-x-1/2 w-[260px] h-[90px] bg-green-400 rotate-[10deg]"],
              ["Intelligence", "intelligence", "left-2 top-1/2 -translate-y-1/2 w-[90px] h-[260px] bg-purple-500 rotate-[-10deg]"]
            ].map(([label, key, cls], i) => (
              <div
                key={key}
                ref={(el) => (pillsRef.current[i] = el)}
                onMouseEnter={(e) => {
                  setActive(key);
                  hoverIn(e.currentTarget);
                }}
                onMouseLeave={(e) => {
                  setActive(null);
                  hoverOut(e.currentTarget);
                }}
                className={`absolute ${cls} rounded-full text-white font-semibold flex items-center justify-center cursor-pointer`}
                style={cls.includes("w-[90px]") ? { writingMode: "vertical-rl" } : {}}
              >
                {label}
              </div>
            ))}

            {/* Center */}
            <div className="absolute w-56 h-56 bg-white rounded-full shadow-xl flex flex-col items-center justify-center text-center z-10">
              <span className="text-sm font-semibold text-slate-500">
                Vidhini Soft
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Software Solutions
              </h3>
              <p className="text-blue-600 font-semibold mt-1">
                85% Higher Growth Rate
              </p>

              <button
                ref={centerBtnRef}
                className="mt-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white"
              >
                ▶
              </button>
            </div>
          </div>

          {/* Tooltip */}
          {active && (
            <div
              ref={tooltipRef}
              className="absolute right-[-260px] top-1/2 -translate-y-1/2 w-64 bg-white shadow-xl rounded-xl p-5 border border-slate-100"
            >
              <h4 className="text-lg font-bold text-slate-900">
                {steps[active].title}
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                {steps[active].desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
