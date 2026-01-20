import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FORMSPREE_URL = "https://formspree.io/f/xkoovaww";

const jobs = [
  {
    title: "Frontend Developer (React.js)",
    description:
      "Build modern, responsive user interfaces using React, Tailwind CSS, and modern frontend tools. Work closely with designers and backend engineers to deliver seamless user experiences.",
  },
  {
    title: "Backend Developer (Node.js)",
    description:
      "Design and develop scalable backend services, APIs, and databases. Focus on performance, security, and reliability across our digital products.",
  },
  {
    title: "UI/UX Designer",
    description:
      "Create intuitive, user-centric designs for web and mobile products. Collaborate with product managers and developers to turn ideas into delightful experiences.",
  },
  {
    title: "QA Engineer",
    description:
      "Ensure product quality through manual and automated testing. Identify bugs, improve workflows, and help deliver stable, high-quality releases.",
  },
];

const OpenPositions = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const modalRef = useRef(null);
  const formRef = useRef(null);

  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);

  /* Cards animation */
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  /* Modal animation */
  useEffect(() => {
    if (selectedJob) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [selectedJob]);

  /* Form animation */
  useEffect(() => {
    if (showForm) {
      gsap.fromTo(
        formRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 }
      );
    }
  }, [showForm]);

  return (
    <>
      {/* OPEN POSITIONS */}
      <section ref={sectionRef} className="bg-slate-950 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Open <span className="text-blue-400">Positions</span>
            </h2>
            <p className="text-slate-400 mt-4 text-lg">
              Explore exciting opportunities and grow your career with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                onClick={() => {
                  setSelectedJob(job);
                  setShowForm(false);
                }}
                className="cursor-pointer p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {job.title}
                </h3>
                <p className="text-slate-400 mt-3 line-clamp-2">
                  {job.description}
                </p>
                <div className="mt-6 text-blue-400 font-medium">
                  View Details →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur px-4">
          <div
            ref={modalRef}
            className="relative max-w-lg w-full bg-slate-900 border border-white/10 rounded-2xl p-8"
          >
            <button
              onClick={() => {
                setSelectedJob(null);
                setShowForm(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            {!showForm ? (
              <>
                <h3 className="text-2xl font-bold text-white">
                  {selectedJob.title}
                </h3>
                <p className="text-slate-300 mt-4">
                  {selectedJob.description}
                </p>

                <button
                  onClick={() => setShowForm(true)}
                  className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
                >
                  Apply Now
                </button>
              </>
            ) : (
              <form
                ref={formRef}
                action={FORMSPREE_URL}
                method="POST"
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  Apply for {selectedJob.title}
                </h3>

                {/* Hidden job field */}
                <input
                  type="hidden"
                  name="Job Role"
                  value={selectedJob.title}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required name="First Name" placeholder="First Name" className="input" />
                  <input required name="Last Name" placeholder="Last Name" className="input" />
                </div>

                <input required name="Email" type="email" placeholder="Email" className="input" />
                <input required name="Phone" type="tel" placeholder="Phone Number" className="input" />

                {/* Uploadcare Resume Upload */}
                <div className="space-y-2">
                  <label className="text-slate-300 text-sm">
                    Upload Resume
                  </label>

                  <input
                    type="hidden"
                    name="Resume URL"
                    role="uploadcare-uploader"
                    data-clearable
                    data-tabs="file"
                    data-file-types=".pdf,.doc,.docx"
                    data-multiple="false"
                    data-public-key="f80f00b6286361e0138a"
                  />

                  <p className="text-xs text-slate-400">
                    Accepted formats: PDF, DOC, DOCX
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Tailwind helpers */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: white;
        }
        .input::placeholder {
          color: #94a3b8;
        }
      `}</style>
    </>
  );
};

export default OpenPositions;
