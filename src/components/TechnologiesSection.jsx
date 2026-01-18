import React from "react";
import {
  FaReact,
  FaAndroid,
  FaAws,
  FaVuejs,
  FaPython,
  FaApple,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaJs,
} from "react-icons/fa";

const TechnologiesSection = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* TOP CARD */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-900">
            Get expert talent to drive your <br /> company's growth
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Our extensive team possesses expertise across a wide range of
            programming languages.
          </p>

          {/* ICON GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12">
            {[
              <FaReact className="text-sky-400" />,
              <FaAndroid className="text-green-500" />,
              <FaAws className="text-orange-500" />,
              <FaVuejs className="text-green-600" />,
              <FaPython className="text-yellow-500" />,
              <FaApple className="text-black" />,
              <FaJava className="text-red-500" />,
              <FaNodeJs className="text-green-600" />,
              <FaDocker className="text-blue-500" />,
              <FaJs className="text-yellow-400" />,
            ].map((Icon, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md h-24 flex items-center justify-center text-4xl"
              >
                {Icon}
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 mt-6 text-right pr-4">
            And More...
          </p>
        </div>

        {/* BOTTOM CTA CARD */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center shadow-sm">
          <h3 className="text-3xl font-semibold text-gray-900">
            If you'd like to get a 1:1 intro chat, we'd <br />
            be delighted
          </h3>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Discover tailored solutions in a one-on-one intro chat. Let’s
            discuss your needs and explore how we can collaborate for success.
          </p>

          <button className="mt-8 bg-blue-400 hover:bg-lime-500 text-white font-medium px-6 py-3 rounded-md transition">
            Let's work together
          </button>
        </div>

      </div>
    </section>
  );
};

export default TechnologiesSection;
