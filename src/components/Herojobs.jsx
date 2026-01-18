import React from "react";

const HeroJobs = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-[42px] leading-tight font-bold text-gray-900 max-w-xl">
            Find full-time remote software jobs <br />
            at leading companies around the World
          </h1>

          <p className="mt-6 text-gray-500 text-lg max-w-lg">
            Join VidhiniSoft and get full-time remote software jobs with higher
            salaries and professional growth.
          </p>

          <button className="mt-10 bg-blue-400 hover:bg-lime-500 transition px-8 py-4 rounded-md font-semibold text-black">
            Apply now!
          </button>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="relative grid grid-cols-2 gap-10">
          {/* Decorative dots */}
          <div className="absolute -left-6 top-10 grid grid-cols-4 gap-2 opacity-30">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
            ))}
          </div>

          {/* Image 1 */}
          <div className="rounded-t-full overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1666299430525-6726a55955d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbCUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="rounded-t-full overflow-hidden translate-y-10">
            <img
              src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="rounded-t-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="rounded-t-full overflow-hidden translate-y-10">
            <img
              src="https://plus.unsplash.com/premium_photo-1682608388268-d2fe94141e13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>

          {/* Lime background blobs */}
          <div className="absolute right-0 top-16 w-28 h-28 bg-blue-400 rounded-2xl -z-10" />
          <div className="absolute left-6 bottom-10 w-24 h-24 bg-blue-400 rounded-2xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroJobs;
