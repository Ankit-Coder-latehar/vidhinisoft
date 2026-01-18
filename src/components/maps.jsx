import React from "react";

const benefits = [
  {
    title: "Closer time zone",
    desc: "Same timezone = higher productivity = more efficient daily interaction.",
  },
  {
    title: "Educational excellence",
    desc: "Very high levels of education across the region. +95 of Glofy team members are university graduates.",
  },
  {
    title: "Communications & cultural similarities",
    desc: "English is the second spoken language in Latin America. All our engineers can communicate effectively with your local team.",
  },
  {
    title: "Lower attrition levels",
    desc: "Higher retention driven by bringing valuable international experience to join our teams.",
  },
  {
    title: "Broad local talent",
    desc: "Large market for IT talent. Glofy receives more than 30 job applications every day.",
  },
];

const OutsourcingBenefits = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900 leading-snug">
            Main benefits of outsourcing <br />
            in <span className="text-blue-400">Latin America</span>
          </h2>
        </div>

        {/* Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT MAP */}
          <div className="relative flex justify-center">
            {/* Map image */}
            <img
              src="https://glofy.co/new-front/images/resources/map.png"
              alt="Latin America Map"
              className="max-w-sm w-full opacity-90"
            />

            {/* Connection dots */}
            <span className="absolute top-[18%] left-[48%] w-3 h-3 bg-lime-400 rounded-full ring-4 ring-lime-200" />
            <span className="absolute top-[35%] left-[45%] w-3 h-3 bg-lime-400 rounded-full ring-4 ring-lime-200" />
            <span className="absolute top-[55%] left-[50%] w-3 h-3 bg-lime-400 rounded-full ring-4 ring-lime-200" />
            <span className="absolute top-[70%] left-[46%] w-3 h-3 bg-lime-400 rounded-full ring-4 ring-lime-200" />

            {/* Avatars */}
            <img
              src="https://i.pravatar.cc/60?img=32"
              className="absolute top-[42%] left-[35%] w-12 h-12 rounded-full border-4 border-white shadow"
            />
            <img
              src="https://i.pravatar.cc/60?img=12"
              className="absolute top-[60%] left-[55%] w-12 h-12 rounded-full border-4 border-white shadow"
            />
            <img
              src="https://i.pravatar.cc/60?img=48"
              className="absolute top-[75%] left-[45%] w-12 h-12 rounded-full border-4 border-white shadow"
            />
          </div>

          {/* RIGHT TEXT LIST */}
          <div className="space-y-10">
            {benefits.map((item, i) => (
              <div key={i} className="pb-8 border-b border-gray-200 last:border-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OutsourcingBenefits;
