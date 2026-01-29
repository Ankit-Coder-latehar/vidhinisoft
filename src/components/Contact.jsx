import React, { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Widget } from "@uploadcare/react-widget";

gsap.registerPlugin(ScrollTrigger);

/* ================= CAPTCHA ================= */

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let text = "";
  for (let i = 0; i < 6; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
};

const ContactForm = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const fieldsRef = useRef([]);

  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setCaptcha(generateCaptcha());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    tl.fromTo(
      leftRef.current,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    ).fromTo(
      fieldsRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.08 },
      "-=0.6"
    );
  }, []);

  /* ================= CAPTCHA CHECK ================= */

  const handleSubmit = (e) => {
    if (captchaInput.toUpperCase() !== captcha) {
      e.preventDefault(); // ❌ stop Formspree
      setErrors({ captcha: "Captcha does not match" });
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 bg-[#f7faff]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e3ecff_1px,transparent_1px),linear-gradient(to_bottom,#e3ecff_1px,transparent_1px)] bg-[size:84px_84px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* LEFT */}
        <div ref={leftRef}>
          <h2 className="text-5xl font-extrabold text-slate-900">
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

        {/* FORM (DIRECT FORMSPREE SUBMIT) */}
        <form
          action="https://formspree.io/f/maqjjbjb"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {[
            ["First Name", "firstName"],
            ["Last Name", "lastName"],
            ["Email", "email"],
            ["Mobile Number", "phone"],
          ].map(([label, name], i) => (
            <div key={name} ref={(el) => (fieldsRef.current[i] = el)}>
              <label className="text-sm text-slate-600">{label} *</label>
              <input
                name={name}
                required
                className="w-full mt-2 bg-slate-100 rounded-xl px-4 py-4"
              />
            </div>
          ))}

          {/* MESSAGE */}
          <div
            ref={(el) => (fieldsRef.current[4] = el)}
            className="sm:col-span-2"
          >
            <label className="text-sm text-slate-600">Message *</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full mt-2 bg-slate-100 rounded-xl px-4 py-4"
            />
          </div>

          {/* UPLOADCARE FILE */}
          <div
            ref={(el) => (fieldsRef.current[5] = el)}
            className="sm:col-span-2"
          >
            <label className="text-sm text-slate-600">
              Upload File *
            </label>

            <Widget
              publicKey="0a3edf6835bb621b934f"
              clearable
              multiple={false}
              onChange={(file) => setResumeUrl(file?.cdnUrl)}
            />

            <input type="hidden" name="file" value={resumeUrl} required />
          </div>

          {/* CAPTCHA */}
          <div
            ref={(el) => (fieldsRef.current[6] = el)}
            className="sm:col-span-2"
          >
            <label className="text-sm text-slate-600">CAPTCHA *</label>

            <div className="flex items-center justify-between bg-slate-100 rounded-xl px-4 py-3 mt-2">
              <span className="font-bold tracking-widest">{captcha}</span>
              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
              >
                🔄
              </button>
            </div>

            <input
              required
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-full mt-3 bg-slate-100 rounded-xl px-4 py-4"
              placeholder="Enter Captcha"
            />

            {errors.captcha && (
              <p className="text-xs text-red-500 mt-1">
                {errors.captcha}
              </p>
            )}
          </div>

          {/* SUBMIT */}
          <div
            ref={(el) => (fieldsRef.current[7] = el)}
            className="sm:col-span-2 mt-4"
          >
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg"
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
