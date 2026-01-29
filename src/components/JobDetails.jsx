import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Widget } from "@uploadcare/react-widget";

/* ================= JOB DATA ================= */

const jobData = {
  "frontend-react-developer": {
    title: "Frontend Developer (React.js)",
    jobId: "165499",
    location: "IND – Bengaluru",
    serviceLine: "Technology",
    country: "India",
    aboutCompany:
      "At our company, you’ll have the opportunity to build a career as unique as you are, with global scale, support, inclusive culture, and technology to become the best version of yourself.",
    description: `You will build modern, responsive user interfaces using React, Tailwind CSS, and modern frontend tooling.

You’ll collaborate with designers and backend engineers to create seamless digital experiences.`,

    behavioralCompetencies: [
      "Adaptive to team and fosters collaborative approach",
      "Innovative approach to the project, when required",
      "Shows passion and curiosity, desire to learn and can think digital",
      "Agile mindset and ability to multi-task",
      "Must have an eye for detail",
    ],

    skills: [
      "Understanding of software development best practices and SDLC",
      "Knowledge of Java / .Net / Python",
      "Understanding of SQL / Oracle / Teradata",
      "Internship in a relevant technology domain is a plus",
    ],

    qualification: [
      "BE / B.Tech (IT / Computer Science / Circuit branches)",
      "Minimum 60% throughout academics",
      "No active backlogs",
    ],
  },

  "backend-node-developer": {
    title: "Backend Developer (Node.js)",
    jobId: "165500",
    location: "IND – Hyderabad",
    serviceLine: "Engineering",
    country: "India",
    aboutCompany:
      "We help organizations transform through scalable backend systems and modern cloud technologies.",
    description: "You will design scalable backend services and APIs.",
    behavioralCompetencies: [
         "Strong problem-solving and analytical thinking",
    "Ability to work independently and within a team",
    "Good communication and documentation skills",
    "Proactive attitude toward learning new technologies",
    "Adaptable to agile and fast-paced environments",
    ],
    skills: [
         "Strong knowledge of Node.js and Express.js",
    "Experience with REST APIs and backend architecture",
    "Knowledge of databases like MongoDB / MySQL / PostgreSQL",
    "Understanding of authentication and authorization (JWT, OAuth)",
    "Basic knowledge of cloud platforms (AWS / Azure) is a plus",
    ],
    qualification: [
        "BE / B.Tech in Computer Science / IT or related field",
    "Minimum 60% throughout academics",
    "No active backlogs",
    "Relevant internship or project experience preferred",
    ],
  },

  "ui-ux-designer": {
    title: "UI / UX Designer",
    jobId: "165501",
    location: "IND – Pune",
    serviceLine: "Design",
    country: "India",
    aboutCompany:
      "We focus on user-centered design to build intuitive digital products.",
    description: "You will design clean and intuitive interfaces.",
    behavioralCompetencies: [
        "Strong empathy for users and their needs",
    "Excellent communication and collaboration skills",
    "Creative mindset with attention to detail",
    "Ability to accept feedback and iterate designs quickly",
    "Strong time-management and multitasking skills",
    ],
    skills: [
        "Proficiency in design tools like Figma, Adobe XD, or Sketch",
    "Strong understanding of UI/UX principles and design systems",
    "Experience with wireframing, prototyping, and user flows",
    "Basic understanding of HTML/CSS for better developer collaboration",
    "Knowledge of usability testing and user research methods",
    ],
    qualification: [
        "Bachelor’s degree in Design, Fine Arts, Computer Science, or related field",
    "Strong portfolio showcasing UI/UX projects",
    "Understanding of responsive and mobile-first design",
    "Relevant internship or project experience preferred",
    ],
  },
  "qa-engineer": {
    title: "QA Engineer",
    jobId: "165501",
    location: "IND – Pune",
    serviceLine: "Design",
    country: "India",
    aboutCompany:
      "We focus on user-centered design to build intuitive digital products.",
    description: "You will design clean and intuitive interfaces.",
    behavioralCompetencies: [
        "Strong empathy for users and their needs",
    "Excellent communication and collaboration skills",
    "Creative mindset with attention to detail",
    "Ability to accept feedback and iterate designs quickly",
    "Strong time-management and multitasking skills",
    ],
    skills: [
        "Proficiency in design tools like Figma, Adobe XD, or Sketch",
    "Strong understanding of UI/UX principles and design systems",
    "Experience with wireframing, prototyping, and user flows",
    "Basic understanding of HTML/CSS for better developer collaboration",
    "Knowledge of usability testing and user research methods",
    ],
    qualification: [
        "Bachelor’s degree in Design, Fine Arts, Computer Science, or related field",
    "Strong portfolio showcasing UI/UX projects",
    "Understanding of responsive and mobile-first design",
    "Relevant internship or project experience preferred",
    ],
  },
};

/* ================= CAPTCHA ================= */

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let text = "";
  for (let i = 0; i < 6; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
};

/* ================= COMPONENT ================= */

const JobDetails = () => {
  const { slug } = useParams();
  const job = jobData[slug];

  const [openForm, setOpenForm] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleFormSubmit = (e) => {
    if (captcha !== captchaInput) {
      e.preventDefault();
      alert("Captcha does not match ❌");
      refreshCaptcha();
    }
  };

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Job not found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        }}
      />

      {/* CONTENT */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold">{job.title}</h1>
            <p className="text-gray-500 mt-2">
              {job.jobId} · {job.location}
            </p>

            <hr className="my-6" />

            <p>{job.aboutCompany}</p>

            <h3 className="text-xl font-semibold mt-8">Job Description</h3>
            <p className="mt-2 whitespace-pre-line">{job.description}</p>

            <h3 className="text-xl font-semibold mt-8">Skills</h3>
            <ul className="list-disc pl-6">
              {job.skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* SIDEBAR */}
          <div className="border p-6 rounded-xl h-fit">
            <button
              onClick={() => setOpenForm(true)}
              className="w-full bg-gray-700 text-white py-3 rounded-lg"
            >
              APPLY
            </button>
          </div>
        </div>
      </section>

      {/* APPLY MODAL */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Apply for this job
            </h2>

            <form
              action="https://formspree.io/f/mykjjjbr"
              method="POST"
              onSubmit={handleFormSubmit}
              className="space-y-3"
            >
              <input
                name="firstName"
                required
                className="w-full border p-2 rounded"
                placeholder="First Name"
              />

              <input
                name="lastName"
                required
                className="w-full border p-2 rounded"
                placeholder="Last Name"
              />

              <input
                name="email"
                type="email"
                required
                className="w-full border p-2 rounded"
                placeholder="Email"
              />

              <input
                name="phone"
                required
                className="w-full border p-2 rounded"
                placeholder="Phone"
              />

              {/* Uploadcare */}
              <div className="border rounded p-2">
                <label className="text-sm font-medium">
                  Upload Resume
                </label>

                <Widget
                  publicKey="0a3edf6835bb621b934f"
                  clearable
                  multiple={false}
                  onChange={(file) => setResumeUrl(file?.cdnUrl)}
                />

                <input
                  type="hidden"
                  name="resume"
                  value={resumeUrl}
                />
              </div>

              {/* CAPTCHA */}
              <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <span className="font-bold tracking-widest">
                  {captcha}
                </span>
                <button type="button" onClick={refreshCaptcha}>
                  🔄
                </button>
              </div>

              <input
                required
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="w-full border p-2 rounded"
                placeholder="Enter Captcha"
              />

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-gray-700 text-white py-2 rounded"
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={() => setOpenForm(false)}
                  className="flex-1 border py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetails;
