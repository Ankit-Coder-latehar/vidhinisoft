import { Users, Cpu, ShieldCheck, Heart } from "lucide-react";

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

export default function WhyChooseUs() {
  return (
    <section className="relative py-36 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/sketchy.png')]" />

      {/* Soft background blobs */}
      <div className="absolute top-24 left-16 w-96 h-96 bg-gray-200 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-[28rem] h-[28rem] bg-gray-300 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Why Choose Us
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
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
                className="group p-8 rounded-2xl bg-white border border-gray-200
                shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div
                  className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl
                  bg-gradient-to-br from-gray-800 to-gray-600 text-white"
                >
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {reason.title}
                </h3>

                <p className="text-gray-600">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
