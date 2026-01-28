import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

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

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captcha !== captchaInput) {
      alert("Captcha does not match ❌");
      refreshCaptcha();
      return;
    }

    alert("Application submitted successfully ✅");
    setOpenForm(false);
  };

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Job not found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        }}
      />

      {/* CONTENT */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {job.title}
            </h1>

            <p className="text-gray-500 mt-2">
              {job.jobId} · {job.location}
            </p>

            <hr className="my-6" />

            <p className="text-gray-700 leading-relaxed">
              {job.aboutCompany}
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              Job Description
            </h3>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {job.description}
            </p>

            {job.behavioralCompetencies?.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mt-8 mb-3">
                  Behavioral Competencies
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {job.behavioralCompetencies.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {job.skills?.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mt-8 mb-3">
                  Skills Needed
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {job.skills.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {job.qualification?.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mt-8 mb-3">
                  Qualification
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {job.qualification.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="border rounded-xl p-6 h-fit shadow-sm">
            <button
              onClick={() => setOpenForm(true)}
              className="w-full bg-gray-700 hover:bg-gray-800 transition text-white py-3 rounded-lg font-semibold"
            >
              APPLY
            </button>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">
                  Service Line / Business Area
                </p>
                <p className="text-gray-600">{job.serviceLine}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Country / Region
                </p>
                <p className="text-gray-600">{job.country}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* APPLY FORM MODAL */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Apply for this job</h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input required className="w-full border p-2 rounded" placeholder="First Name" />
              <input required className="w-full border p-2 rounded" placeholder="Last Name" />
              <input required type="email" className="w-full border p-2 rounded" placeholder="Email" />
              <input required type="tel" className="w-full border p-2 rounded" placeholder="Phone" />

              <input
                required
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full border p-2 rounded"
              />

              <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <span className="font-bold tracking-widest">{captcha}</span>
                <button type="button" onClick={refreshCaptcha}>🔄</button>
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
