import React from "react";
import { Check } from "lucide-react";

export default function CustomerServiceSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww" // replace with your exact image
              alt="Team"
              className="w-full max-w-[560px] rounded-[28px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-sm tracking-widest font-semibold text-blue-400 mb-4">
              WE WILL ALWAYS BE BY YOUR SIDE
            </p>

            <h2 className="text-[44px] leading-[1.2] font-extrabold text-gray-800 mb-10">
              Our customer service is our superpower
            </h2>

            {/* LIST */}
            <div className="space-y-8">

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Dedicated success manager
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    With a customer-centric approach, we're committed to helping
                    you achieve your goals and exceed your expectations at all times.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Quick and easy incorporation
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    With a streamlined process and expert assistance, you'll be
                    ready to take full advantage of our solution in a matter of days.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Service customized to the customer's needs
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    We strive to offer you a service tailored to your individual needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Warm and human attention
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    We work hard to establish genuine connections with each client,
                    providing a personalized service that goes beyond expectations.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
