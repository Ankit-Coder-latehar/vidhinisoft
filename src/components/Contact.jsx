import React, { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const fieldsRef = useRef([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name required";
    if (!formData.lastName) newErrors.lastName = "Last name required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter 10-digit mobile number";
    if (!formData.message) newErrors.message = "Message required";
    if (!formData.captcha) newErrors.captcha = "CAPTCHA required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulated submit (replace with API / Formspree)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <section className="py-32 bg-[#f7faff] text-center">
        <h3 className="text-4xl font-extrabold text-slate-900">
          Thank You! 🎉
        </h3>
        <p className="mt-4 text-lg text-slate-600">
          Your message has been submitted. Our team will contact you shortly.
        </p>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 bg-[#f7faff]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e3ecff_1px,transparent_1px),linear-gradient(to_bottom,#e3ecff_1px,transparent_1px)] bg-[size:84px_84px] opacity-40" />

      {/* Glows */}
      <div className="absolute -left-32 top-1/4 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 w-[420px] h-[420px] bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* LEFT */}
        <div ref={leftRef}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Let’s Build Something <span className="text-blue-600">Great</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-md">
            Tell us about your project and we’ll respond with a clear roadmap.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">
              hello@vidhinisoft.co
            </span>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-8 border border-slate-100"
        >
          {[
            ["First Name", "firstName"],
            ["Last Name", "lastName"],
            ["Email", "email"],
            ["Mobile Number", "phone"],
          ].map(([label, key], i) => (
            <div key={key} ref={(el) => (fieldsRef.current[i] = el)}>
              <label className="text-sm text-slate-600">{label} *</label>
              <input
                className="w-full mt-2 bg-slate-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData[key]}
                onChange={(e) =>
                  setFormData({ ...formData, [key]: e.target.value })
                }
              />
              {errors[key] && (
                <p className="text-xs text-red-500 mt-1">{errors[key]}</p>
              )}
            </div>
          ))}

          {/* Message */}
          <div
            ref={(el) => (fieldsRef.current[4] = el)}
            className="sm:col-span-2"
          >
            <label className="text-sm text-slate-600">Message *</label>
            <textarea
              rows="4"
              className="w-full mt-2 bg-slate-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          {/* CAPTCHA */}
          <div
            ref={(el) => (fieldsRef.current[5] = el)}
            className="sm:col-span-2"
          >
            <label className="text-sm text-slate-600">CAPTCHA *</label>
            <input
              className="w-full mt-2 bg-slate-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.captcha}
              onChange={(e) =>
                setFormData({ ...formData, captcha: e.target.value })
              }
            />
            {errors.captcha && (
              <p className="text-xs text-red-500 mt-1">{errors.captcha}</p>
            )}
          </div>

          {/* Submit */}
          <div
            ref={(el) => (fieldsRef.current[6] = el)}
            className="sm:col-span-2 mt-4"
          >
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
