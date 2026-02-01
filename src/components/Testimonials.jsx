import { Megaphone, Code2, BarChart3, Share2 } from "lucide-react";

const services = [
  {
    icon: <Megaphone size={20} />,
    title: "Digital Advertising Agency",
    desc: "Transform your brand’s online presence with our cutting-edge digital advertising solutions. Our expert team creates and manages targeted ad campaigns to maximize reach, drive conversions, and achieve measurable results.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Web Development Agency",
    desc: "Build a powerful online presence with our innovative web development services. We design and develop responsive, user-friendly websites that are optimized for performance and tailored to meet your business needs.",
    highlight: true,
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Digital Analyst Agency",
    desc: "Unlock valuable insights with our comprehensive digital analysis services. Our skilled analysts provide in-depth reports and actionable data to help you make informed decisions, optimize strategies, and drive business growth.",
  },
  {
    icon: <Share2 size={20} />,
    title: "Social Media Agency",
    desc: "Engage and grow your audience with our strategic social media management services. We craft compelling content, manage campaigns, and analyze performance to enhance your brand’s visibility and foster meaningful connections.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-[#fff7ef] to-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Empowering Your Business with Proven
          <br /> Digital Marketing Solutions
        </h1>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1 rounded-full mt-4">
         Vidhini Soft 
        </div>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-gray-500">
          At <span className="text-orange-500 font-medium">Vidhini Soft</span>, we combine innovation with
          data-driven strategies to deliver impactful digital marketing solutions
          that drive real results. Provenly helps many top brands succeed since 2014.
        </p>

        {/* Cards */}
        <div className="mt-16 grid lg:grid-cols-4 gap-6 text-left">
          {services.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-6 transition-all duration-300
              ${
                item.highlight
                  ? "bg-orange-400 text-white shadow-xl"
                  : "bg-white shadow-md hover:bg-blue-600 hover:text-white"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-4
                ${
                  item.highlight
                    ? "bg-white text-orange-500"
                    : "bg-orange-100 text-orange-500 group-hover:bg-white group-hover:text-blue-600"
                }`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed
                ${
                  item.highlight
                    ? "text-orange-100"
                    : "text-gray-500 group-hover:text-blue-100"
                }`}
              >
                {item.desc}
              </p>

              {/* Button */}
              <button
                className={`mt-6 text-sm font-medium px-4 py-2 rounded-full
                ${
                  item.highlight
                    ? "bg-white text-orange-500"
                    : "bg-orange-100 text-orange-500 group-hover:bg-white group-hover:text-blue-600"
                }`}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
