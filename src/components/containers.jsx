import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CustomerServiceSection() {
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

      tl.from(".cs-image", {
        x: -60,
        opacity: 0,
        duration: 0.9,
      })
        .from(
          ".cs-label",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.6"
        )
        .from(
          ".cs-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".cs-item",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.2"
        )
        .from(
          ".cs-icon",
          {
            scale: 0.6,
            opacity: 0,
            stagger: 0.15,
            duration: 0.4,
          },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60"
              alt="Dedicated software team"
              className="cs-image w-full max-w-[560px] rounded-[28px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="cs-label text-sm tracking-widest font-semibold text-blue-400 mb-4">
              PARTNERSHIP BEYOND DEVELOPMENT
            </p>

            <h2 className="cs-title text-[44px] leading-[1.2] font-extrabold text-gray-800 mb-10">
              We don’t just build software, <br />
              we build long-term partnerships
            </h2>

            {/* LIST */}
            <div className="space-y-8">
              {[
                {
                  title: "Dedicated project ownership",
                  desc:
                    "A single point of contact ensures clear communication, accountability, and smooth execution throughout the development lifecycle.",
                },
                {
                  title: "Fast onboarding & delivery",
                  desc:
                    "Our proven onboarding process allows your project to move from idea to execution quickly without unnecessary delays.",
                },
                {
                  title: "Solutions tailored to your business",
                  desc:
                    "Every product we build is customized to align with your goals, users, and long-term technical roadmap.",
                },
                {
                  title: "Transparent & human-first approach",
                  desc:
                    "We believe in honest collaboration, regular updates, and a people-first mindset that keeps you informed and confident.",
                },
              ].map((item, index) => (
                <div key={index} className="cs-item flex gap-4">
                  <Check className="cs-icon w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
