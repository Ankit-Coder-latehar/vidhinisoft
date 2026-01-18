import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: `Glofy helped me enhance my work in AI, applying it strategically and purposefully. It's not about using technology because it's trendy, but about creating solutions that generate real value for companies..`,
    name: "Emanuel Ávalos",
    role: "AI Developer",
    location: "for clients in Spain",
    image: "https://images.unsplash.com/photo-1748261595246-5516b94b2dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbCUyMHdvcmtpbmclMjBnaXJsJTIwaW4lMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    text: `Thanks to Glofy, I was able to join a team that develops AI solutions for high-impact projects. Here, every challenge is an opportunity to innovate and take technology one step further..`,
    name: "Franco Telliz",
    role: "Software Developer",
    location: "for US clients",
    image: "https://plus.unsplash.com/premium_photo-1663099789341-26b599454019?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwd29ya2luZyUyMGdpcmwlMjBpbiUyMHNvZnR3YXJlfGVufDB8fDB8fHww",
  },
  {
    text: `I was able to join global teams and work on challenging AI projects thanks to Glofy. Each challenge opens up new opportunities to learn and grow in an area that is constantly evolving..`,
    name: "Lucía González",
    role: "AI Developer",
    location: "for US clients",
    image: "https://plus.unsplash.com/premium_photo-1661659479244-d4e71bb1f830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29ya2luZyUyMGdpcmwlMjBpbiUyMHNvZnR3YXJlfGVufDB8fDB8fHww",
  },
];

const AiTestimonials = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-20">
          Success stories from our VidhiniSoft
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white rounded-xl p-10 shadow-md border border-gray-100 h-full">
                
                {/* Quote */}
                <div className="text-7xl text-gray-100 leading-none mb-6">
                  “
                </div>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed mb-10">
                  {item.text}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-blue-400">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                    <p className="text-gray-400 text-sm">{item.location}</p>
                  </div>
                </div>

                {/* Bottom lime bar */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-400 rounded-b-xl" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AiTestimonials;
