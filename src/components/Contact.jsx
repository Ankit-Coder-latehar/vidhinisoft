import React, { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);
  const fieldsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    tl.fromTo(
      leftRef.current,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      fieldsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      },
      "-=0.6"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-slate-50 to-white py-32 overflow-hidden"
    >
      {/* Animated background curves */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[1000px]"
          viewBox="0 0 1000 600"
          fill="none"
        >
          {[...Array(16)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${80 + i * 30} C 300 ${40 + i * 30}, 700 ${
                140 + i * 30
              }, 1000 ${120 + i * 30}`}
              stroke="#CBD5E1"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* LEFT CONTENT */}
        <div ref={leftRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Get in Touch <br />
            Connect with us{" "}
            <span className="text-blue-500">Today</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-md text-lg leading-relaxed">
            Are you ready to enhance your team with the best IT professionals?
            Whether you are planning a project, hiring talent, or exploring
            collaboration—we’re here to help.
          </p>

          {/* Email pill */}
          <div className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition">
            <Mail className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-semibold">
              hello@Vidhinisoft.co
            </span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          ref={formRef}
          action="https://formspree.io/f/mwvvlzdv"
          method="POST"
          className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-8 border border-gray-200"
        >
          <input type="hidden" name="_captcha" value="false" />

          {/* Name */}
          <div ref={(el) => (fieldsRef.current[0] = el)}>
            <label className="text-sm text-gray-600 mb-2 block">Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full bg-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          {/* Email */}
          <div ref={(el) => (fieldsRef.current[1] = el)}>
            <label className="text-sm text-gray-600 mb-2 block">Email *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full bg-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          {/* Company */}
          <div ref={(el) => (fieldsRef.current[2] = el)}>
            <label className="text-sm text-gray-600 mb-2 block">
              Company name
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="w-full bg-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Phone */}
          <div ref={(el) => (fieldsRef.current[3] = el)}>
            <label className="text-sm text-gray-600 mb-2 block">Phone *</label>
            <div className="flex">
              <span className="px-4 flex items-center bg-gray-200 rounded-l-xl text-sm">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone number"
                className="w-full bg-gray-100 rounded-r-xl px-4 py-4 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Goal */}
          <div ref={(el) => (fieldsRef.current[4] = el)}>
            <label className="text-sm text-gray-600 mb-2 block">
              Your goal
            </label>
            <select
              name="goal"
              className="w-full bg-gray-100 rounded-xl px-4 py-4 outline-none"
            >
              <option value="">Select</option>
              <option>Hire IT Talent</option>
              <option>Project Collaboration</option>
              <option>General Inquiry</option>
            </select>
          </div>

          {/* Role */}
          <div ref={(el) => (fieldsRef.current[5] = el)}>
            <label className="text-sm text-gray-600 mb-2 block">
              Your role
            </label>
            <select
              name="role"
              className="w-full bg-gray-100 rounded-xl px-4 py-4 outline-none"
            >
              <option value="">Select</option>
              <option>Founder</option>
              <option>CTO</option>
              <option>HR</option>
              <option>Manager</option>
            </select>
          </div>

          {/* Submit */}
          <div
            ref={(el) => (fieldsRef.current[6] = el)}
            className="sm:col-span-2 mt-6"
          >
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
