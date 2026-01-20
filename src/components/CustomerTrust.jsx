import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Users, Award, Smile } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Briefcase, value: 120, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 60, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 6, suffix: "+", label: "Years of Experience" },
  { icon: Smile, value: 99, suffix: "%", label: "Client Satisfaction" },
];

export default function NumbersThatBuildTrust() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const numbersRef = useRef([]);
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

      tl.from(".trust-title", {
        y: 90,
        opacity: 0,
        skewY: 4,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(
          ".trust-subtitle",
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
            y: 120,
            rotateX: 25,
            scale: 0.85,
            transformPerspective: 1200,
            duration: 1.4,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.3"
        );

      // COUNT-UP with overshoot
      numbersRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: stats[i].value,
            duration: 2.2,
            ease: "back.out(1.7)",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // ICON ENTRY + FLOAT LOOP
      iconsRef.current.forEach((icon, i) => {
        gsap.from(icon, {
          rotate: -90,
          scale: 0,
          opacity: 0,
          duration: 0.8,
          delay: 0.4 + i * 0.1,
          ease: "back.out(2)",
        });

        gsap.to(icon, {
          y: 10,
          duration: 2.5 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // CURSOR TILT EFFECT
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
      <div className="absolute top-24 left-24 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-24 right-24 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-24">
          <h2 className="trust-title text-4xl md:text-5xl font-bold mb-6">
            Numbers That Build Trust
          </h2>
          <p className="trust-subtitle text-gray-400 max-w-2xl mx-auto text-lg">
            Proven results that reflect trust, consistency, and long-term value.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, cardsRef.current[index])}
                onMouseLeave={() => resetTilt(cardsRef.current[index])}
                className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                hover:border-blue-500/40 hover:shadow-[0_0_60px_rgba(59,130,246,0.4)]
                transition-shadow duration-300 transform-gpu"
              >
                {/* ICON */}
                <div
                  ref={(el) => (iconsRef.current[index] = el)}
                  className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl
                  bg-gradient-to-br from-blue-500 to-purple-500"
                >
                  <Icon size={26} />
                </div>

                {/* NUMBER */}
                <div className="flex items-end text-4xl font-bold mb-2">
                  <span ref={(el) => (numbersRef.current[index] = el)}>0</span>
                  <span className="ml-1">{stat.suffix}</span>
                </div>

                {/* LABEL */}
                <p className="text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
