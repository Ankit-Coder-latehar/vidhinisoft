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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pws-title", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".pws-subtitle", {
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

      {/* Soft gray blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gray-200 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 bg-gray-300 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="pws-title text-4xl sm:text-5xl font-bold mb-4">
            Problems We Solve
          </h2>
          <p className="pws-subtitle text-gray-600 max-w-2xl mx-auto text-lg">
            Real business challenges solved through scalable and modern
            technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white border border-gray-200 rounded-2xl p-8
                shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 text-gray-800">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
