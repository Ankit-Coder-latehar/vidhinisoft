import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Building2, Cloud, Headset } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Web and mobile applications crafted for performance and usability.",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    desc: "Systems that streamline operations and support long-term growth.",
  },
  {
    icon: Cloud,
    title: "Cloud & Modernization",
    desc: "Cloud-native apps, migrations, and performance optimization.",
  },
  {
    icon: Headset,
    title: "IT Consulting & Support",
    desc: "Strategic guidance from architecture to deployment and beyond.",
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // MASTER TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".wtd-title", {
        y: 90,
        opacity: 0,
        skewY: 4,
        duration: 1.3,
        ease: "power4.out",
      })
        .from(
          ".wtd-subtitle",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          cardsRef.current,
          {
            opacity: 0,
            y: 140,
            rotateX: 30,
            scale: 0.85,
            transformPerspective: 1200,
            duration: 1.4,
            stagger: {
              each: 0.18,
              from: "center",
            },
            ease: "power4.out",
          },
          "-=0.3"
        );

      // ICON ENTRY + FLOAT
      iconsRef.current.forEach((icon, i) => {
        gsap.from(icon, {
          scale: 0,
          rotate: -120,
          opacity: 0,
          duration: 0.9,
          delay: 0.4 + i * 0.12,
          ease: "back.out(2.2)",
        });

        gsap.to(icon, {
          y: 10,
          duration: 2.8 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // CURSOR TILT (PREMIUM EFFECT)
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(card, {
      rotateX: ((y / rect.height) - 0.5) * -10,
      rotateY: ((x / rect.width) - 0.5) * 10,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const resetTilt = (card) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-36 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden"
    >
      {/* PARALLAX GLOW */}
      <div className="absolute top-28 left-24 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-28 right-24 w-[28rem] h-[28rem] bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-28">
          <h2 className="wtd-title text-4xl md:text-5xl font-bold mb-6">
            What We Do
          </h2>
          <p className="wtd-subtitle text-gray-400 max-w-2xl mx-auto text-lg">
            We offer end-to-end software services tailored to your business needs.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseMove={(e) =>
                  handleMouseMove(e, cardsRef.current[index])
                }
                onMouseLeave={() =>
                  resetTilt(cardsRef.current[index])
                }
                className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                hover:border-blue-500/40 hover:shadow-[0_0_60px_rgba(59,130,246,0.4)]
                transition-shadow duration-300 transform-gpu"
              >
                {/* ICON */}
                <div
                  ref={(el) => (iconsRef.current[index] = el)}
                  className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl
                  bg-gradient-to-br from-blue-500 to-purple-500
                  transition-transform duration-300 group-hover:rotate-6"
                >
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
