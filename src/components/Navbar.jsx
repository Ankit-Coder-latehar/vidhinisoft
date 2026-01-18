import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center font-bold text-black">
               <img src="/v.png" alt="logo" className="h-20 w-20" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Vadhini Soft
            </span>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-700">
            <a href="#" className="hover:text-black">Services</a>
            <a href="/ai" className="hover:text-black">AI</a>
            <a href="#" className="hover:text-black">Our clients</a>
            <a href="#" className="hover:text-black">Our stack</a>
          </nav>

          {/* Right: Language + Buttons */}
          <div className="flex items-center gap-4">
            
            {/* Language */}
            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
              <span>🇺🇸</span>
              <span>EN</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>

            {/* Schedule Call Button */}
            <a href="#contact"><button className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
              Schedule a Call
            </button></a>

            {/* Join Team Button */}
            <a href="/job"><button className="px-5 py-2 rounded-lg bg-blue-400 text-black text-sm font-semibold hover:bg-lime-300 transition">
              Join the team
            </button></a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
