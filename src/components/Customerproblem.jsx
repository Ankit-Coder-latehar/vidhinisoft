import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Cpu,
  Gauge,
  TrendingUp,
  RefreshCcw,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: Cpu,
    title: "Legacy Systems Holding Growth Back",
    desc: "Outdated platforms and tools that limit innovation and flexibility.",
  },
  {
    icon: Gauge,
    title: "Slow Performance & Poor UX",
    desc: "Applications that load slowly and frustrate users.",
  },
  {
    icon: TrendingUp,
    title: "Scaling & Growth Challenges",
    desc: "Systems unable to handle increasing users and traffic.",
  },
  {
    icon: RefreshCcw,
    title: "Manual & Repetitive Processes",
    desc: "Time-consuming workflows that reduce efficiency.",
  },
  {
    icon: BarChart3,
    title: "No Data-Driven Insights",
    desc: "Lack of visibility into business performance and metrics.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability Issues",
    desc: "Downtime, vulnerabilities, and unstable infrastructure.",
  },
];

export default function ProblemsWeSolve() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ===== SECTION INTRO TIMELINE =====
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".pws-title", {
        y: 80,
        opacity: 0,
        skewY: 4,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(
          ".pws-subtitle",
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
            rotateX: 15,
            scale: 0.85,
            transformPerspective: 1000,
            duration: 1.2,
            stagger: {
              each: 0.15,
              from: "center",
            },
            ease: "power4.out",
          },
          "-=0.4"
        );

      // ===== ICON FLOAT LOOP =====
      iconsRef.current.forEach((icon, i) => {
        gsap.to(icon, {
          y: 8,
          duration: 2 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ===== CURSOR TILT EFFECT =====
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
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
      className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden"
    >
      {/* Animated Glow Orbs */}
      <div className="absolute top-32 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="pws-title text-4xl md:text-5xl font-bold mb-6">
            Problems We Solve
          </h2>
          <p className="pws-subtitle text-gray-400 max-w-2xl mx-auto text-lg">
            Real business challenges solved through powerful, scalable, and
            modern technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, cardsRef.current[index])}
                onMouseLeave={() => resetTilt(cardsRef.current[index])}
                className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                transition-shadow duration-300
                hover:border-blue-500/40 hover:shadow-[0_0_60px_rgba(59,130,246,0.35)]
                transform-gpu"
              >
                <div
                  ref={(el) => (iconsRef.current[index] = el)}
                  className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl
                  bg-gradient-to-br from-blue-500 to-purple-500
                  transition-all duration-300 group-hover:rotate-6"
                >
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
