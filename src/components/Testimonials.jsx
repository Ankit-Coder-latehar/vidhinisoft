import React, { useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, Vidhini Soft",
    quote:
      "Their structured process and execution helped us scale faster than expected. Extremely professional team.",
  },
  {
    name: "Ananya Verma",
    role: "Marketing Head, Vidhini Soft",
    quote:
      "Clear communication, strong strategy, and measurable outcomes. Highly recommended for SaaS brands.",
  },
  {
    name: "Amit Patel",
    role: "CTO, Vidhini Soft",
    quote:
      "They delivered exactly what they promised. The workflow and timelines were very well managed.",
  },
  {
    name: "Kunal Mehta",
    role: "Co-Founder, Vidhini Soft",
    quote:
      "One of the best digital teams we’ve worked with. Their insights genuinely improved our conversions.",
  },
  {
    name: "Sneha Kapoor",
    role: "Product Lead, Vidhini Soft",
    quote:
      "From design to delivery, everything felt premium and well thought out. Great experience overall.",
  },
  {
    name: "Rohit Jain",
    role: "CEO, Vidhini Soft",
    quote:
      "A reliable long-term partner. Their delivery model is efficient and scalable.",
  },
];

const ITEMS_PER_SLIDE = 3;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_SLIDE);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="relative overflow-hidden py-28 bg-[#f7faff]">
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e3ecff_1px,transparent_1px),linear-gradient(to_bottom,#e3ecff_1px,transparent_1px)] bg-[size:84px_84px] opacity-40" />

      {/* Glow */}
      <div className="absolute -left-32 top-1/3 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -right-32 bottom-1/3 w-[420px] h-[420px] bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block mb-4 text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Trusted by <span className="text-blue-600">Growing Teams</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Real feedback from companies that scaled with our digital solutions.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-20 relative overflow-hidden">
          
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {testimonials
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition"
                    >
                      <p className="text-slate-700 leading-relaxed">
                        “{item.quote}”
                      </p>

                      <div className="mt-6">
                        <h4 className="text-lg font-bold text-slate-900">
                          {item.name}
                        </h4>
                        <p className="text-sm text-slate-500">{item.role}</p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="px-5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              ← Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Next →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
