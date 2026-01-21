import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Cpu, ShieldCheck, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: Users,
    title: "Client-first mindset",
    desc: "We prioritize measurable results for every client.",
  },
  {
    icon: Cpu,
    title: "Experienced Engineering Team",
    desc: "Using modern, proven technologies to build your solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable & Secure Architectures",
    desc: "Built for tomorrow, designed to grow with your business.",
  },
  {
    icon: Heart,
    title: "Long-term Partnerships",
    desc: "We focus on collaboration beyond project delivery.",
  },
];

/* ---------- Helper: Split title ---------- */
const splitText = (element) => {
  const text = element.innerText;
  element.innerHTML = text
    .split("")
    .map(
      (char) =>
        `<span class="inline-block will-change-transform">${
          char === " " ? "&nbsp;" : char
        }</span>`
    )
    .join("");
  return element.querySelectorAll("span");
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------- TITLE ANIMATION ---------- */
      const chars = splitText(titleRef.current);

      gsap.from(chars, {
        y: 80,
        opacity: 0,
        rotateX: 60,
        stagger: 0.05,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      /* ---------- SECTION PARALLAX ---------- */
      gsap.fromTo(
        sectionRef.current,
        { scale: 0.96 },
        {
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      /* ---------- CARDS (VISIBLE & SAFE) ---------- */
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 120,
          scale: 0.95,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.18,
          ease: "power4.out",
          clearProps: "filter",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      /* ---------- ICONS ---------- */
      iconsRef.current.forEach((icon, i) => {
        gsap.fromTo(
          icon,
          { scale: 0, rotate: -120, opacity: 0 },
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.12,
            ease: "back.out(2)",
          }
        );

        gsap.to(icon, {
          y: 6,
          repeat: -1,
          yoyo: true,
          duration: 2 + i * 0.3,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------- MAGNETIC HOVER ---------- */
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      x: x * 0.06,
      y: y * 0.06,
      rotateX: y * -0.04,
      rotateY: x * 0.04,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const resetTilt = (card) => {
    gsap.to(card, {
      x: 0,
      y: 0,
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
      {/* Background glows */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-[28rem] h-[28rem] bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Why Choose Us
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          At Vardhini Software Solutions, we don’t just write code—we create
          technology that empowers organizations to move faster, operate smarter,
          and grow with confidence.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseMove={(e) =>
                  handleMouseMove(e, cardsRef.current[index])
                }
                onMouseLeave={() => resetTilt(cardsRef.current[index])}
                className="group relative p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl
                transition-all duration-300 transform-gpu cursor-pointer
                hover:-translate-y-3 hover:scale-105
                hover:border-blue-500/40
                hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
              >
                {/* Icon */}
                <div
                  ref={(el) => (iconsRef.current[index] = el)}
                  className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl
                  bg-gradient-to-br from-blue-500 to-purple-500
                  transition-transform duration-300
                  group-hover:scale-125 group-hover:rotate-12"
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
