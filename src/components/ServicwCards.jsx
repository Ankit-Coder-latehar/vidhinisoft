import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  Puzzle,
  ShieldCheck,
} from "lucide-react";

/* ---------- CARD COMPONENT ---------- */
const ServiceCard = ({ icon: Icon, title, points }) => {
  return (
    <div
      className="group relative p-8 rounded-2xl bg-white/10 border border-white/20
      backdrop-blur-xl transition-all duration-300 transform-gpu
      hover:-translate-y-3 hover:scale-105
      hover:border-blue-500/40
      hover:shadow-[0_0_50px_rgba(59,130,246,0.35)]"
    >
      {/* Icon */}
      <div
        className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl
        bg-gradient-to-br from-blue-500 to-purple-500
        transition-transform duration-300
        group-hover:scale-125 group-hover:rotate-6"
      >
        <Icon size={26} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-4 text-white">
        {title}
      </h3>

      {/* Points */}
      <ul className="space-y-2 text-gray-400 text-sm">
        {points.map((point, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-blue-400">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ---------- MAIN SECTION ---------- */
export default function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "💻 Custom Software Development",
      points: [
        "Tailored software aligned with business goals",
        "Web & enterprise application development",
        "Custom business platforms & internal tools",
        "API design and system integrations",
        "Scalable, secure, performance-optimized solutions",
      ],
    },
    {
      icon: Smartphone,
      title: "📱 Mobile App Development",
      points: [
        "Android & iOS app development",
        "Customer-facing & business applications",
        "Real-time features & notifications",
        "Dashboards and analytics",
        "App maintenance & version upgrades",
      ],
    },
    {
      icon: Cloud,
      title: "☁️ Cloud & DevOps Services",
      points: [
        "Cloud application development & migration",
        "DevOps automation & CI/CD pipelines",
        "Performance optimization & monitoring",
        "Secure & scalable cloud architectures",
      ],
    },
    {
      icon: Brain,
      title: "🧠 IT Consulting & Technology Strategy",
      points: [
        "Product & architecture consulting",
        "Digital transformation planning",
        "Technology stack selection",
        "Process optimization & automation",
      ],
    },
    {
      icon: Puzzle,
      title: "🧩 Product Engineering & SaaS Development",
      points: [
        "MVP development & rapid prototyping",
        "SaaS platform development",
        "Multi-tenant architecture design",
        "Long-term product enhancement & support",
      ],
    },
    {
      icon: ShieldCheck,
      title: "🔒 Application Support & Maintenance",
      points: [
        "Ongoing monitoring & issue resolution",
        "Feature enhancements & performance tuning",
        "Security updates & compliance support",
        "Dedicated support models",
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-24 left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-24 right-20 w-[28rem] h-[28rem] bg-purple-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We deliver end-to-end technology solutions that help businesses
            innovate faster, scale smarter, and operate with confidence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
