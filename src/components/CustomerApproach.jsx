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
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".approach-title", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".approach-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden"
    >
      {/* Sketch background */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/sketchy.png')]" />

      {/* Soft blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gray-200 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 bg-gray-300 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="approach-title text-4xl sm:text-5xl font-bold mb-4">
            Our Approach With Customers
          </h2>
          <p className="approach-subtitle text-gray-600 max-w-2xl mx-auto text-lg">
            A proven, collaborative process that turns ideas into impactful
            digital solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-200 -translate-x-1/2" />

          <div className="space-y-20">
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
                    className="w-full md:w-[46%] bg-white border border-gray-200 rounded-2xl p-8
                    shadow-sm hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-800">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 w-4 h-4 rounded-full bg-gray-400 -translate-x-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
