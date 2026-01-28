import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const jobs = [
  {
    slug: "frontend-react-developer",
    title: "Frontend Developer (React.js)",
    description:
      "Build modern, responsive user interfaces using React, Tailwind CSS, and modern frontend tools.",
  },
  {
    slug: "backend-node-developer",
    title: "Backend Developer (Node.js)",
    description:
      "Design and develop scalable backend services, APIs, and databases.",
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    description:
      "Create intuitive, user-centric designs for web and mobile products.",
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    description:
      "Ensure product quality through manual and automated testing.",
  },
];

const OpenPositions = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-950 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Open <span className="text-blue-400">Positions</span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Explore exciting opportunities and grow your career with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <div
              key={job.slug}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() =>
                window.open(`/careers/${job.slug}`, "_blank")
              }
              className="cursor-pointer p-8 rounded-2xl bg-white/5 border border-white/10 
                         hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-white">
                {job.title}
              </h3>

              <p className="text-slate-400 mt-3 line-clamp-2">
                {job.description}
              </p>

              <div className="mt-6 text-blue-400 font-medium">
                View Details →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
