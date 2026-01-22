import { Code2, Building2, Cloud, Headset } from "lucide-react";

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
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 overflow-hidden">
      
      {/* SKETCH BACKGROUND */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.035]"
        viewBox="0 0 800 800"
        preserveAspectRatio="none"
      >
        <path
          d="M100 100 Q400 50 700 200 T700 600 T100 700"
          fill="none"
          stroke="#000"
          strokeWidth="1"
          strokeDasharray="6 10"
        />
        <circle cx="600" cy="160" r="60" fill="none" stroke="#000" />
        <circle cx="200" cy="620" r="90" fill="none" stroke="#000" />
      </svg>

      {/* DOT GRID */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-24 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What We Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
                className="relative p-8 rounded-2xl bg-white border border-gray-200
                shadow-sm hover:shadow-xl transition-all duration-300
                hover:-translate-y-2"
              >
                {/* ICON */}
                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl
                  bg-gradient-to-br from-gray-900 to-gray-700 text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
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

