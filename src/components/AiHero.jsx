import React from "react";

const AiHero = () => {
  return (
    <section className="relative w-full bg-[#f8f9fb] overflow-hidden">
      {/* background curve */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[100%] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-400 font-semibold tracking-widest mb-4">
            ARTIFICIAL INTELLIGENCE
          </p>

          <h1 className="text-[48px] leading-[1.15] font-bold text-gray-800 mb-6">
            Boost your innovation <br />
            with cutting-edge AI.
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-10">
            Our AI talents revolutionize the way you work, providing
            innovative solutions to streamline operations, enhance customer
            experience, and drive growth.
          </p>

          <button className="bg-blue-400 hover:bg-lime-500 transition text-white font-semibold px-8 py-4 rounded-md">
            Transform your business today
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* neon card */}
          <div className="absolute right-8 top-8 w-40 h-56 bg-blue-300 rounded-2xl z-0" />

          {/* main image */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1677368599009-8356bfcb3994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="AI"
              className="w-[380px] h-[420px] object-cover"
            />
          </div>

          {/* floating icons */}
          <div className="absolute left-6 top-24 bg-white rounded-full p-4 shadow-lg">
            ⚙️
          </div>

          <div className="absolute right-6 top-12 bg-white rounded-full p-4 shadow-lg">
            📊
          </div>

          <div className="absolute right-10 bottom-12 bg-white rounded-full p-4 shadow-lg">
            🧩
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiHero;
