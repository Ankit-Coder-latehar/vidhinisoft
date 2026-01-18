import React from "react";

const locations = [
  {
    country: "United States",
    city: "Miami, FL 33126",
    address1: "703 Waterford way",
    address2: "Suite 123",
    image: "data:image/png;base64,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",
  },
  {
    country: "Puerto Rico",
    city: "San Juan, PR 00907",
    address1: "1250 Ponce de León Avenue",
    address2: "Suite 600",
    image: "/images/pr.jpg",
  },
  {
    country: "Argentina",
    city: "Rosario, 2000",
    address1: "Martín Rodríguez 101",
    address2: "",
    image: "data:image/png;base64,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",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f3]">
      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-10">

        {/* LOCATIONS */}
        <div className="grid md:grid-cols-3 gap-20">
          {locations.map((loc, index) => (
            <div key={index} className="flex gap-6 items-start">
              <img
                src={loc.image}
                alt={loc.country}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {loc.country}
                </h4>
                <p className="text-gray-600 mb-3">
                  {loc.city}
                </p>
                <p className="text-gray-500 leading-relaxed">
                  {loc.address1}
                  <br />
                  {loc.address2}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 my-14" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
          <p>
            © 2024 Glofy LLC. All Rights Reserved
          </p>
          <a
            href="#"
            className="mt-4 md:mt-0 hover:text-gray-800 transition"
          >
            Privacy policy
          </a>
        </div>

      </div>
    </footer>
  );
}
