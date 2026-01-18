import React from "react";

const testimonials = [
  {
    text: `For us the Glofy team has been a fundamental support and has added a lot of value by providing the service always in a timely and correct manner. The team has always understood the needs or requirements that we have had, providing the company with professionals with high skills and quality of work in order to cover a number of strategic positions that we have had.`,
    name: "Pamela Salinas",
    role: "Commercial Director",
    company: "at Daltum System LLC",
    avatar: "https://plus.unsplash.com/premium_photo-1661659479244-d4e71bb1f830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29ya2luZyUyMGdpcmwlMjBpbiUyMHNvZnR3YXJlfGVufDB8fDB8fHww",
  },
  {
    text: `In few days, Glofy was able to manage a hiring that we had been looking for months with other agencies. The closeness and empathy they showed from the first minute made us feel that we had an ally in this process, and so it was. That's why, whenever we can, we recommend Glofy because we know for sure that we will never be wrong. These are the customer experiences that inspire us to improve.`,
    name: "Diego García-Huidobro",
    role: "CEO",
    company: "at Billbox",
    avatar: "https://images.unsplash.com/photo-1544717305-f9c88f2897bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2Zlc3Npb25hbCUyMHdvcmtpbmclMjBnaXJsJTIwaW4lMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    text: `We're very comfortable working with Glofy since it supported us in increasing the placement of foreign talent in various positions. It was very pleasant and dynamic to work with the Glofy team throughout the process, they understood our need and also shared good practices to successfully carry out each of the contracts.`,
    name: "Edna González",
    role: "Human Capital Director",
    company: "at Definity First",
    avatar: "",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900">
          Success stories from our clients
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
          Discover how we have transformed challenges into triumphs, providing
          dedication and quality to each company.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl border border-gray-200 shadow-sm px-8 pt-10 pb-8"
            >
              {/* Quote icon */}
              <div className="absolute top-6 left-6 text-gray-200 text-6xl leading-none">
                “
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.text}
              </p>

              {/* Footer */}
              <div className="mt-8 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                  <p className="text-sm text-gray-400">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Green bottom line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 rounded-b-xl" />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-12 flex justify-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-800"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
