import React from "react";
import { Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">
      
      {/* Background curved lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[900px] opacity-20"
          viewBox="0 0 900 600"
          fill="none"
        >
          {[...Array(14)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${100 + i * 25} C 300 ${50 + i * 25}, 600 ${
                150 + i * 25
              }, 900 ${120 + i * 25}`}
              stroke="#CBD5E1"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
            Get in Touch <br />
            Connect with us{" "}
            <span className="text-blue-400">Today</span>
          </h2>

          <p className="mt-6 text-gray-500 max-w-md leading-relaxed">
            Are you ready to enhance your team with the best IT professionals?
            Whether you are looking for qualified professionals for your
            projects or have questions about our recruitment services, we're
            here to help.
          </p>

          {/* Email pill */}
          <div className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">
              hello@glofy.co
            </span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Name:
            </label>
            <input
              type="text"
              placeholder="Name*"
              className="w-full bg-gray-100 rounded-lg px-4 py-4 outline-none focus:ring-2 focus:ring-lime-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email:
            </label>
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-gray-100 rounded-lg px-4 py-4 outline-none focus:ring-2 focus:ring-lime-300"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Company name:
            </label>
            <input
              type="text"
              placeholder="Company name*"
              className="w-full bg-gray-100 rounded-lg px-4 py-4 outline-none focus:ring-2 focus:ring-lime-300"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Phone:
            </label>
            <div className="flex">
              <span className="flex items-center px-4 bg-gray-200 rounded-l-lg text-sm">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                placeholder="Phone*"
                className="w-full bg-gray-100 rounded-r-lg px-4 py-4 outline-none focus:ring-2 focus:ring-lime-300"
              />
            </div>
          </div>

          {/* Goal */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              What is your goal in contacting us?:
            </label>
            <select className="w-full bg-gray-100 rounded-lg px-4 py-4 outline-none">
              <option>Select an option</option>
            </select>
          </div>

          {/* Positions */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              How many positions do you need to fill?:
            </label>
            <select className="w-full bg-gray-100 rounded-lg px-4 py-4 outline-none">
              <option>Select an option</option>
            </select>
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Position in the company:
            </label>
            <select className="w-full bg-gray-100 rounded-lg px-4 py-4 outline-none">
              <option>Select an option</option>
            </select>
          </div>

          {/* Hiring */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Are you looking to hire IT talent in the next 3 months?:
            </label>
            <select className="w-full bg-gray-100 rounded-lg px-4 py-4 outline-none">
              <option>Select an option</option>
            </select>
          </div>

          {/* Submit */}
          <div className="sm:col-span-2 mt-6">
            <button
              type="submit"
              className="bg-blue-400 hover:bg-lime-500 transition text-white font-semibold px-10 py-4 rounded-lg"
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
