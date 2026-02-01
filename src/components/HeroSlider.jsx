import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
  "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
  "https://download.logo.wine/logo/Flipkart/Flipkart-Logo.wine.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHx2fvDlifHG_PwXe6uRtI3zlsg6vX2VqcDA&s",
  "https://static.vecteezy.com/system/resources/thumbnails/053/646/518/small/old-man-with-beard-greek-ancient-philosopher-figure-face-head-statue-sculpture-with-greek-border-logo-design-vector.jpg",
];

export default function LogosSection() {
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">

      {/* Soft radial glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Text */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            POWERING TEAMS GLOBALLY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Fast-Growing & Enterprise Brands
          </h2>
          <p className="text-gray-600 text-lg">
            From ambitious startups to global leaders, teams rely on us to build,
            scale, and innovate faster.
          </p>
        </div>

        {/* Logos */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            ref={trackRef}
            className="flex w-max gap-10 items-center"
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="group flex items-center justify-center h-20 w-44 rounded-xl 
                           bg-white/70 backdrop-blur border border-gray-200
                           shadow-sm transition-all duration-300
                           hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={logo}
                  alt="brand"
                  className="h-10 object-contain grayscale opacity-70 
                             group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
