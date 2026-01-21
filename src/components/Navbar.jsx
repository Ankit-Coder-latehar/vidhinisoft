import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // ✅ Detect active tab from URL
  const activePath = window.location.pathname;

  const navLinkClass = (path) =>
    `relative cursor-pointer transition text-gray-700 hover:text-black
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
     after:bg-blue-400 after:origin-left after:transition-transform
     ${activePath === path ? "after:scale-x-100 text-black" : "after:scale-x-0 hover:after:scale-x-100"}`;

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[72px]">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center">
              <img
                src="/v.png"
                alt="logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-gray-900">
              Vadhini Soft
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
            <a href="/">
              <span className={navLinkClass("/")}>Home</span>
            </a>

            <a href="/about">
              <span className={navLinkClass("/about")}>About</span>
            </a>

            <a href="/service">
              <span className={navLinkClass("/service")}>Service</span>
            </a>

            <a href="/customer">
              <span className={navLinkClass("/customer")}>Customer</span>
            </a>

            <a href="/product">
              <span className={navLinkClass("/product")}>Products</span>
            </a>

            <a href="/career">
              <span className={navLinkClass("/career")}>Career</span>
            </a>
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

            <a href="/schedule">
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
          <nav className="flex flex-col gap-4 text-[16px] font-medium">
            <a href="/" onClick={() => setOpen(false)}>
              <span className={navLinkClass("/")}>Home</span>
            </a>

            <a href="/about" onClick={() => setOpen(false)}>
              <span className={navLinkClass("/about")}>About</span>
            </a>

            <a href="/service" onClick={() => setOpen(false)}>
              <span className={navLinkClass("/service")}>Services</span>
            </a>

            <a href="/customer" onClick={() => setOpen(false)}>
              <span className={navLinkClass("/customer")}>Customers</span>
            </a>

            <a href="/career" onClick={() => setOpen(false)}>
              <span className={navLinkClass("/career")}>Career</span>
            </a>
          </nav>

          <div className="flex flex-col gap-4">
            <a href="/schedule">
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
