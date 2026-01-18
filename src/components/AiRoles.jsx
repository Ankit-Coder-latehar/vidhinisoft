import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Database,
  BarChart3,
  Cpu,
  Layers,
  Eye,
  MessageSquare,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Roles = () => {
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

      tl.from(".roles-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".roles-subheading",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".role-item",
          {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".role-icon",
          {
            scale: 0,
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
    <section ref={sectionRef} className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="roles-heading text-4xl font-bold text-gray-800 mb-6">
            Roles
          </h2>
          <p className="roles-subheading text-gray-500 text-lg leading-relaxed">
            Artificial Intelligence is a field in constant evolution that
            requires specialized talent to apply effective and innovative
            solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-20">

          {/* Role Item */}
          {[
            {
              Icon: Database,
              title: "Data Engineer:",
              items: [
                "They are responsible for designing, building, and managing data infrastructure.",
                "They prepare and clean data for analysis and modeling.",
              ],
            },
            {
              Icon: BarChart3,
              title: "Data Scientist:",
              items: [
                "They develop statistical models and machine learning algorithms.",
                "They analyze and extract insights from large volumes of data.",
              ],
            },
            {
              Icon: Cpu,
              title: "Machine Learning Engineer:",
              items: [
                "They implement and maintain machine learning models in production.",
                "They work on optimizing and scaling models.",
              ],
            },
            {
              Icon: Layers,
              title: "AI Engineer:",
              items: [
                "They specialize in developing and deploying AI applications.",
                "They work with deep learning techniques and neural networks.",
              ],
            },
            {
              Icon: Eye,
              title: "Computer Vision Specialist:",
              items: [
                "They develop algorithms and systems to interpret images and videos.",
                "They work on applications like object recognition and image analysis.",
              ],
            },
            {
              Icon: MessageSquare,
              title: "NLP Engineer:",
              items: [
                "They develop systems to understand and generate human language.",
                "They work on applications such as chatbots, text analysis, and machine translation.",
              ],
            },
          ].map((role, i) => (
            <div key={i} className="role-item flex gap-6">
              <role.Icon className="role-icon text-blue-400 w-10 h-10 shrink-0" />
              <div>
                <h3 className="font-bold text-xl text-gray-800 mb-4">
                  {role.title}
                </h3>
                <ul className="text-gray-500 space-y-3 list-disc list-inside">
                  {role.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Roles;
