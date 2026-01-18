import React from "react";

const CareerCTA = () => {
  return (
    <section className="bg-[#1f262c] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Take your career to the next  level
          </h2>

          <p className="text-gray-300 max-w-lg leading-relaxed mb-4">
            Take the next step in your career with us. We offer more than
            opportunities – we provide the support and guidance you need to
            reach your career goals. Find out how we can drive your success
            together.
          </p>

          <p className="text-white font-semibold mb-8">
            Connect with us and transform your vision into reality!
          </p>

          <button className="bg-blue-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-lg transition">
            Apply now!
          </button>
        </div>

        {/* RIGHT IMAGE + SHAPES */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* Green background shapes */}
          <div className="absolute -top-8 -right-8 w-72 h-72 bg-blue-300 rounded-3xl opacity-90"></div>
          <div className="absolute bottom-0 left-0 w-44 h-44 bg-blue-300 rounded-2xl opacity-40"></div>

          {/* Image Card */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://www.glofy.co/new-front/images/resources/CallToAction.png"
              alt="Career growth"
              className="w-[420px] h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerCTA;
