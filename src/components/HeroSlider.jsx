import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
  "data:image/png;base64,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",
  "https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
  "https://www.glofy.co/new-front/images/clients/client-1.png",
  "https://www.glofy.co/new-front/images/clients/client-13.png",
  "https://www.glofy.co/new-front/images/clients/client-5.png",
];

export default function LogosSection() {
  const rowRef = useRef(null);

  useEffect(() => {
    gsap.to(rowRef.current, {
      xPercent: -50,
      duration: 30,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* GLOW BLOBS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        <p className="text-center text-gray-700 text-lg font-medium mb-14">
          Trusted by innovative brands worldwide
        </p>

        {/* FADE MASK */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            ref={rowRef}
            className="flex w-max items-center gap-28 grayscale opacity-70"
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="brand"
                className="h-12 object-contain transition hover:grayscale-0 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
