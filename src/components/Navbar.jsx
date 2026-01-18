import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[72px]">

          {/* LEFT: Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center">
              <img src="/v.png" alt="logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-gray-900">
              Vadhini Soft
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-700">
            <a href="#" className="hover:text-black">Services</a>
            <a href="/ai" className="hover:text-black">AI</a>
            <a href="#" className="hover:text-black">Our clients</a>
            <a href="#" className="hover:text-black">Our stack</a>
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
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

            <a href="#contact">
              <button className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
                Schedule a Call
              </button>
            </a>

            <a href="/job">
              <button className="px-5 py-2 rounded-lg bg-blue-400 text-black text-sm font-semibold hover:bg-lime-300 transition">
                Join the team
              </button>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-6">

          <nav className="flex flex-col gap-4 text-[16px] font-medium text-gray-700">
            <a href="#" onClick={() => setOpen(false)}>Services</a>
            <a href="/ai" onClick={() => setOpen(false)}>AI</a>
            <a href="#" onClick={() => setOpen(false)}>Our clients</a>
            <a href="#" onClick={() => setOpen(false)}>Our stack</a>
          </nav>

          <div className="flex flex-col gap-4">
            <a href="#contact">
              <button className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium">
                Schedule a Call
              </button>
            </a>

            <a href="/job">
              <button className="w-full px-5 py-3 rounded-lg bg-blue-400 text-black text-sm font-semibold">
                Join the team
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
