import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Search,
    title: "Discover & Understand",
    desc: "We deeply understand your business, goals, users, and challenges.",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    desc: "We create a clear roadmap aligned with your growth objectives.",
  },
  {
    icon: PenTool,
    title: "Design & Architecture",
    desc: "We design scalable systems and intuitive user experiences.",
  },
  {
    icon: Code2,
    title: "Agile Development",
    desc: "We build fast, flexible, and secure solutions using modern tech.",
  },
  {
    icon: Bug,
    title: "Testing & Optimization",
    desc: "We ensure performance, security, and reliability at every stage.",
  },
  {
    icon: Rocket,
    title: "Launch, Support & Scale",
    desc: "We launch confidently and scale continuously with ongoing support.",
  },
];

export default function OurApproach() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section intro
      gsap.from(".approach-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // Timeline progress animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );

      // Cards reveal
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          x: index % 2 === 0 ? -120 : 120,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        });
      });

      // Floating icons
      iconsRef.current.forEach((icon, i) => {
        gsap.to(icon, {
          y: 10,
          duration: 2 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-28">
          <h2 className="approach-title text-4xl md:text-5xl font-bold mb-6">
            Our Approach With Customers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A proven, collaborative process that turns ideas into impactful
            digital solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/10 -translate-x-1/2" />
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2"
          />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="w-full md:w-[46%] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                    hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]
                    transition-all duration-300"
                  >
                    <div
                      ref={(el) => (iconsRef.current[index] = el)}
                      className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl
                      bg-gradient-to-br from-blue-500 to-purple-500"
                    >
                      <Icon size={22} />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 -translate-x-1/2 shadow-lg" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
