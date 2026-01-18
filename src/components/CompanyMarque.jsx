import React from "react";
import {
  Code2,
  ShieldCheck,
  Brain,
  LayoutDashboard,
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Craft custom software for your unique needs, spanning front-end and core back-end technology.",
    icon: Code2,
  },
  {
    title: "QA and Testing",
    description:
      "Ensure seamless functionality and reliability through rigorous quality assurance and testing.",
    icon: ShieldCheck,
  },
  {
    title: "AI and Data Science",
    description:
      "Harness AI and data science for meaningful insights and enhanced business processes.",
    icon: Brain,
  },
  {
    title: "UX/UI Design",
    description:
      "Create visually stunning, user-friendly interfaces for an enhanced digital experience.",
    icon: LayoutDashboard,
  },
];

export default function StaffingSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm tracking-widest text-gray-500 font-semibold mb-6">
              STAFFING: ONE-STOP SOLUTION
            </p>

            <h2 className="text-[44px] leading-[1.2] font-extrabold text-gray-800 mb-6">
              Hire faster with our vetted
              <br />
              developers in your time zone
            </h2>

            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Staff augmentation streamlines talent addition to your team via a
              third party, offering flexibility and immediate access to a
              high-quality talent pool.
            </p>
          </div>

          {/* RIGHT SERVICES */}
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-14">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index}>
                  <Icon className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
