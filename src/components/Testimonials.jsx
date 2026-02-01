import React, { useState } from "react";
import { Quote } from "lucide-react";

/* ✅ DATA MUST BE DEFINED */
const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, Vidhini Soft",
    quote:
      "Vidhini Soft brought structure to our product vision. Their software architecture helped us scale faster with solid performance.",
  },
  {
    name: "Ananya Verma",
    role: "Marketing Head, Vidhini Soft",
    quote:
      "From dashboards to automation, every solution was built with clear business outcomes in mind.",
  },
  {
    name: "Amit Patel",
    role: "CTO, Vidhini Soft",
    quote:
      "Clean code, scalable systems, and predictable delivery. Collaboration was smooth and reliable.",
  },
  {
    name: "Kunal Mehta",
    role: "Co-Founder, Vidhini Soft",
    quote:
      "They didn’t just build features — they solved real problems with thoughtful software design.",
  },
  {
    name: "Sneha Kapoor",
    role: "Product Lead, Vidhini Soft",
    quote:
      "From UX to backend logic, everything felt cohesive and enterprise-ready.",
  },
  {
    name: "Rohit Jain",
    role: "CEO, Vidhini Soft",
    quote:
      "A dependable long-term technology partner with a very efficient development process.",
  },
];

const ITEMS_PER_SLIDE = 3;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_SLIDE);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trusted by teams building scalable software with Vidhini Soft
          </p>
        </div>

        {/* Slider */}
        <div className="mt-20 overflow-hidden">
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
                      className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
                    >
                      <div className="absolute -top-6 left-6 h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                        <Quote size={20} />
                      </div>

                      <p className="mt-6 text-slate-700 leading-relaxed">
                        “{item.quote}”
                      </p>

                      <div className="mt-6 pt-4 border-t">
                        <h4 className="font-semibold text-slate-900">
                          {item.name}
                        </h4>
                        <p className="text-sm text-slate-500">{item.role}</p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() =>
              setCurrent((prev) =>
                prev === 0 ? totalSlides - 1 : prev - 1
              )
            }
            className="px-5 py-2 rounded-lg border bg-white hover:bg-slate-100"
          >
            ← Prev
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % totalSlides)}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
